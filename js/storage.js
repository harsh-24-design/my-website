// CppMastery Storage & State Management Service
const StorageService = {
  STORAGE_KEY: "cppmastery_user_progress_v1",

  // Default initial state
  defaultState: {
    completedLessons: {},       // { [lessonId]: timestamp }
    solvedQuestions: {},        // { [questionId]: { timestamp, attempts, code } }
    attemptedQuestions: {},     // { [questionId]: { lastAttemptAt, status, code } }
    bookmarkedLessons: {},      // { [lessonId]: timestamp }
    bookmarkedQuestions: {},    // { [questionId]: timestamp }
    revisionQueue: {},          // { [questionId]: { addedAt, reason, failCount } }
    codeDrafts: {},             // { [questionId]: codeString }
    quizScores: {},             // { [lessonId]: { score, total, percentage, timestamp } }
    recentLessons: [],          // [lessonId, ...]
    userXP: 0,                  // Gamified experience points
    uiPreferences: {
      sidebarCollapsed: false,
      rightRailCollapsed: false
    },
    learningStreak: {
      currentStreak: 1,
      longestStreak: 1,
      lastActiveDate: new Date().toISOString().split("T")[0],
      activeDates: [new Date().toISOString().split("T")[0]]
    },
    settings: {
      editorFontSize: 14,
      cppStandard: "c++17",
      compilerBackend: "piston",
      judge0Url: "",
      judge0ApiKey: ""
    }
  },

  state: null,

  init() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        this.state = JSON.parse(saved);
        // Ensure all properties exist
        this.state = { ...this.defaultState, ...this.state };
      } else {
        this.state = JSON.parse(JSON.stringify(this.defaultState));
        this.save();
      }
    } catch (e) {
      console.warn("Could not load from localStorage, falling back to memory:", e);
      this.state = JSON.parse(JSON.stringify(this.defaultState));
    }
    this.updateStreak();
  },

  save() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("Failed to persist state to localStorage:", e);
    }
  },

  // Daily Streak calculation
  updateStreak() {
    const today = new Date().toISOString().split("T")[0];
    const streak = this.state.learningStreak;

    if (!streak.activeDates) streak.activeDates = [];
    if (!streak.activeDates.includes(today)) {
      streak.activeDates.push(today);
    }

    if (streak.lastActiveDate === today) {
      // Already active today
      return;
    }

    const lastDate = new Date(streak.lastActiveDate);
    const currentDate = new Date(today);
    const diffDays = Math.round((currentDate - lastDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      // Consecutive day!
      streak.currentStreak += 1;
      if (streak.currentStreak > streak.longestStreak) {
        streak.longestStreak = streak.currentStreak;
      }
    } else if (diffDays > 1) {
      // Broken streak
      streak.currentStreak = 1;
    }

    streak.lastActiveDate = today;
    this.save();
  },

  // Lessons
  isLessonCompleted(lessonId) {
    return !!this.state.completedLessons[lessonId];
  },

  toggleLessonCompleted(lessonId) {
    if (this.state.completedLessons[lessonId]) {
      delete this.state.completedLessons[lessonId];
    } else {
      this.state.completedLessons[lessonId] = Date.now();
    }
    this.save();
    return this.isLessonCompleted(lessonId);
  },

  isLessonBookmarked(lessonId) {
    return !!this.state.bookmarkedLessons[lessonId];
  },

  toggleLessonBookmark(lessonId) {
    if (this.state.bookmarkedLessons[lessonId]) {
      delete this.state.bookmarkedLessons[lessonId];
    } else {
      this.state.bookmarkedLessons[lessonId] = Date.now();
    }
    this.save();
    return this.isLessonBookmarked(lessonId);
  },

  addRecentLesson(lessonId) {
    if (!this.state.recentLessons) this.state.recentLessons = [];
    this.state.recentLessons = [
      lessonId,
      ...this.state.recentLessons.filter(id => id !== lessonId)
    ].slice(0, 8); // Keep top 8 recent
    this.save();
  },

  // Questions
  isQuestionSolved(questionId) {
    return !!this.state.solvedQuestions[questionId];
  },

  markQuestionSolved(questionId, code = "") {
    this.state.solvedQuestions[questionId] = {
      timestamp: Date.now(),
      code: code
    };
    // Remove from revision queue if solved
    delete this.state.revisionQueue[questionId];
    this.save();
  },

  recordQuestionAttempt(questionId, status, code = "") {
    if (!this.state.attemptedQuestions[questionId]) {
      this.state.attemptedQuestions[questionId] = { count: 0 };
    }
    this.state.attemptedQuestions[questionId].count += 1;
    this.state.attemptedQuestions[questionId].lastAttemptAt = Date.now();
    this.state.attemptedQuestions[questionId].lastStatus = status;

    if (status !== "Accepted" && status !== "Passed") {
      // Add to revision queue
      this.addToRevision(questionId, status);
    }
    this.save();
  },

  isQuestionBookmarked(questionId) {
    return !!this.state.bookmarkedQuestions[questionId];
  },

  toggleQuestionBookmark(questionId) {
    if (this.state.bookmarkedQuestions[questionId]) {
      delete this.state.bookmarkedQuestions[questionId];
    } else {
      this.state.bookmarkedQuestions[questionId] = Date.now();
    }
    this.save();
    return this.isQuestionBookmarked(questionId);
  },

  addToRevision(questionId, reason = "Failed Test Case") {
    if (!this.state.revisionQueue[questionId]) {
      this.state.revisionQueue[questionId] = {
        addedAt: Date.now(),
        reason: reason,
        failCount: 1
      };
    } else {
      this.state.revisionQueue[questionId].failCount += 1;
      this.state.revisionQueue[questionId].reason = reason;
    }
    this.save();
  },

  removeFromRevision(questionId) {
    delete this.state.revisionQueue[questionId];
    this.save();
  },

  // Code Drafts
  saveCodeDraft(questionId, code) {
    if (!this.state.codeDrafts) this.state.codeDrafts = {};
    this.state.codeDrafts[questionId] = code;
    this.save();
  },

  getCodeDraft(questionId, defaultCode = "") {
    if (this.state.codeDrafts && this.state.codeDrafts[questionId]) {
      return this.state.codeDrafts[questionId];
    }
    return defaultCode;
  },

  // Quizzes
  saveQuizScore(lessonId, score, total) {
    if (!this.state.quizScores) this.state.quizScores = {};
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    this.state.quizScores[lessonId] = {
      score,
      total,
      percentage: pct,
      timestamp: Date.now()
    };
    this.save();
    return this.state.quizScores[lessonId];
  },

  getQuizScore(lessonId) {
    if (this.state.quizScores && this.state.quizScores[lessonId]) {
      return this.state.quizScores[lessonId];
    }
    return null;
  },

  // XP & Gamification
  addXP(amount) {
    if (!this.state.userXP) this.state.userXP = 0;
    this.state.userXP += amount;
    this.save();
    return this.state.userXP;
  },

  getXP() {
    return this.state.userXP || 0;
  },

  getLevelInfo() {
    const xp = this.getXP();
    if (xp >= 1500) {
      return { level: 5, title: "Systems Architect", nextXP: 2500, progressPct: 100 };
    } else if (xp >= 800) {
      const progress = Math.round(((xp - 800) / 700) * 100);
      return { level: 4, title: "DSA Specialist", nextXP: 1500, progressPct: progress };
    } else if (xp >= 400) {
      const progress = Math.round(((xp - 400) / 400) * 100);
      return { level: 3, title: "Algorithm Explorer", nextXP: 800, progressPct: progress };
    } else if (xp >= 150) {
      const progress = Math.round(((xp - 150) / 250) * 100);
      return { level: 2, title: "C++ Apprentice", nextXP: 400, progressPct: progress };
    } else {
      const progress = Math.round((xp / 150) * 100);
      return { level: 1, title: "C++ Novice", nextXP: 150, progressPct: progress };
    }
  },

  // UI Preferences (Distraction-free mode)
  toggleSidebarCollapsed() {
    if (!this.state.uiPreferences) this.state.uiPreferences = {};
    this.state.uiPreferences.sidebarCollapsed = !this.state.uiPreferences.sidebarCollapsed;
    this.save();
    return this.state.uiPreferences.sidebarCollapsed;
  },

  isSidebarCollapsed() {
    return !!(this.state.uiPreferences && this.state.uiPreferences.sidebarCollapsed);
  },

  toggleRightRailCollapsed() {
    if (!this.state.uiPreferences) this.state.uiPreferences = {};
    this.state.uiPreferences.rightRailCollapsed = !this.state.uiPreferences.rightRailCollapsed;
    this.save();
    return this.state.uiPreferences.rightRailCollapsed;
  },

  isRightRailCollapsed() {
    return !!(this.state.uiPreferences && this.state.uiPreferences.rightRailCollapsed);
  },

  // Overall Statistics
  getStats(allChapters, allQuestions) {
    const totalLessons = allChapters.reduce((acc, ch) => acc + (ch.lessons ? ch.lessons.length : 0), 0);
    const completedLessonsCount = Object.keys(this.state.completedLessons).length;
    const totalQuestions = allQuestions.length;
    const solvedQuestionsCount = Object.keys(this.state.solvedQuestions).length;
    const attemptedQuestionsCount = Object.keys(this.state.attemptedQuestions).length;
    const revisionCount = Object.keys(this.state.revisionQueue).length;
    const bookmarksCount = Object.keys(this.state.bookmarkedQuestions).length + Object.keys(this.state.bookmarkedLessons).length;

    let accuracy = 0;
    if (attemptedQuestionsCount > 0) {
      accuracy = Math.round((solvedQuestionsCount / attemptedQuestionsCount) * 100);
      if (accuracy > 100) accuracy = 100;
    }

    // Auto calculate baseline XP if userXP is still 0
    let currentXP = this.state.userXP || 0;
    if (currentXP === 0) {
      const lessonXP = completedLessonsCount * 50;
      const solvedXP = solvedQuestionsCount * 100;
      const quizXP = Object.values(this.state.quizScores || {}).reduce((acc, q) => acc + (q.percentage >= 80 ? 40 : 20), 0);
      currentXP = lessonXP + solvedXP + quizXP;
      this.state.userXP = currentXP;
    }

    const levelInfo = this.getLevelInfo();

    // Chapter progress breakdown
    const chapterProgress = allChapters.map(ch => {
      const chLessons = ch.lessons || [];
      const completedInCh = chLessons.filter(l => this.isLessonCompleted(l.id)).length;
      const pct = chLessons.length > 0 ? Math.round((completedInCh / chLessons.length) * 100) : 0;
      return {
        id: ch.id,
        number: ch.number,
        title: ch.title,
        color: ch.color,
        totalLessons: chLessons.length,
        completedLessons: completedInCh,
        percentage: pct
      };
    });

    return {
      totalLessons,
      completedLessonsCount,
      lessonProgressPct: totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0,
      totalQuestions,
      solvedQuestionsCount,
      questionProgressPct: totalQuestions > 0 ? Math.round((solvedQuestionsCount / totalQuestions) * 100) : 0,
      attemptedQuestionsCount,
      accuracy,
      revisionCount,
      bookmarksCount,
      streak: this.state.learningStreak,
      chapterProgress,
      xp: currentXP,
      levelInfo
    };
  },

  // Export & Import
  exportProgressJSON() {
    return JSON.stringify(this.state, null, 2);
  },

  importProgressJSON(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (typeof parsed === "object" && parsed !== null) {
        this.state = { ...this.defaultState, ...parsed };
        this.save();
        return true;
      }
    } catch (e) {
      console.error("Invalid JSON import:", e);
    }
    return false;
  },

  resetAllProgress() {
    this.state = JSON.parse(JSON.stringify(this.defaultState));
    this.save();
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { StorageService };
}
