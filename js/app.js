// CppMastery - Main Interactive Application Router & UI Controller
const App = {
  currentView: "dashboard",
  currentChapterId: "ch-01",
  currentLessonId: "les-01-01",
  currentQuestionId: "q-01-01",
  activeConsoleTab: "output", // 'output' | 'input' | 'tests' | 'errors'
  activeLessonTab: "concept", // 'concept' | 'code' | 'analogy' | 'quiz' | 'practice'

  init() {
    StorageService.init();
    CompilerService.init(StorageService.state.settings);

    this.bindGlobalEvents();
    this.renderSidebar();
    this.renderHeaderStats();
    this.renderDashboard();
    this.renderQuestionsList();
    this.setupStandaloneCompiler();

    // Deep link or default view
    this.switchView("dashboard");
  },

  // Global Navigation & Event Listeners
  bindGlobalEvents() {
    // Header navigation pills
    document.querySelectorAll(".nav-pill-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const view = e.currentTarget.getAttribute("data-view");
        if (view) this.switchView(view);
      });
    });

    // Universal Sidebar toggle (Distraction-free desktop mode & mobile drawer)
    const sidebarToggle = document.getElementById("sidebarToggleBtn");
    const sidebar = document.getElementById("appSidebar");
    if (sidebar && StorageService.isSidebarCollapsed() && window.innerWidth > 768) {
      sidebar.classList.add("collapsed");
    }
    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.toggle("mobile-open");
        } else {
          const isCollapsed = StorageService.toggleSidebarCollapsed();
          sidebar.classList.toggle("collapsed", isCollapsed);
          this.showToast(isCollapsed ? "Distraction-Free Mode Enabled" : "Syllabus Explorer Restored", "info");
        }
      });
    }

    // Explain Code button in Practice IDE
    const explainBtn = document.getElementById("workspaceExplainBtn");
    if (explainBtn) {
      explainBtn.addEventListener("click", () => this.explainCurrentCode());
    }

    // Global Search Modal (Ctrl+K or Cmd+K)
    const searchModal = document.getElementById("searchModal");
    const searchInput = document.getElementById("globalSearchInput");
    const searchBtn = document.getElementById("globalSearchTrigger");

    const openSearch = () => {
      if (searchModal) {
        searchModal.classList.add("open");
        if (searchInput) {
          searchInput.value = "";
          searchInput.focus();
          this.executeGlobalSearch("");
        }
      }
    };

    const closeSearch = () => {
      if (searchModal) searchModal.classList.remove("open");
    };

    if (searchBtn) searchBtn.addEventListener("click", openSearch);

    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      } else if (e.key === "Escape") {
        closeSearch();
        this.closeSettingsModal();
      }
    });

    if (searchModal) {
      searchModal.addEventListener("click", (e) => {
        if (e.target === searchModal) closeSearch();
      });
    }

    const searchCloseBtn = document.getElementById("closeSearchBtn");
    if (searchCloseBtn) searchCloseBtn.addEventListener("click", closeSearch);

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.executeGlobalSearch(e.target.value);
      });
    }

    // Settings Modal
    const settingsBtn = document.getElementById("settingsTriggerBtn");
    if (settingsBtn) {
      settingsBtn.addEventListener("click", () => this.openSettingsModal());
    }
  },

  // Toast Notifications
  showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = `toast-item toast-${type}`;
    let icon = "💡";
    if (type === "success") icon = "✨";
    if (type === "warning") icon = "⚠️";
    if (type === "error") icon = "❌";
    toast.innerHTML = `<span style="font-size: 1.1rem;">${icon}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(40px)";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  },

  // View Switcher
  switchView(viewName) {
    this.currentView = viewName;

    // Update nav pills active state
    document.querySelectorAll(".nav-pill-btn").forEach(btn => {
      if (btn.getAttribute("data-view") === viewName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Hide all view panels
    document.querySelectorAll(".view-panel").forEach(p => p.classList.remove("active"));

    // Close mobile sidebar if open
    const sidebar = document.getElementById("appSidebar");
    if (sidebar) sidebar.classList.remove("mobile-open");

    // Activate selected view
    const targetPanel = document.getElementById(`view-${viewName}`);
    if (targetPanel) {
      targetPanel.classList.add("active");
      window.scrollTo(0, 0);
    }

    if (viewName === "dashboard") {
      this.renderDashboard();
    } else if (viewName === "revision") {
      this.renderRevisionView();
    } else if (viewName === "questions") {
      this.renderQuestionsList();
    }

    this.renderHeaderStats();
  },

  // Render Left Sidebar (All 16 Chapters and Lessons)
  renderSidebar() {
    const container = document.getElementById("sidebarChapterList");
    if (!container) return;

    container.innerHTML = "";

    CHAPTERS_DATA.forEach(chapter => {
      const item = document.createElement("div");
      item.className = `chapter-accordion-item ${chapter.id === this.currentChapterId ? "open" : ""}`;
      item.id = `sidebar-ch-${chapter.id}`;

      // Chapter header button
      const header = document.createElement("button");
      header.className = "chapter-accordion-header";
      header.innerHTML = `
        <div style="display: flex; align-items: center;">
          <span class="chapter-num-badge">Ch ${chapter.number}</span>
          <span style="font-weight: 600;">${chapter.title}</span>
        </div>
        <span class="chevron-icon" style="font-size: 0.75rem;">▼</span>
      `;

      header.addEventListener("click", () => {
        item.classList.toggle("open");
      });

      // Lessons list container
      const lessonsList = document.createElement("div");
      lessonsList.className = "chapter-lessons-list";

      chapter.lessons.forEach(les => {
        const isDone = StorageService.isLessonCompleted(les.id);
        const isActive = les.id === this.currentLessonId && this.currentView === "learn";

        const link = document.createElement("a");
        link.className = `lesson-nav-link ${isActive ? "active" : ""} ${isDone ? "completed" : ""}`;
        link.id = `sidebar-les-${les.id}`;
        link.innerHTML = `
          <span style="display: flex; align-items: center; gap: 8px;">
            <span class="lesson-status-icon">${isDone ? "✓" : "•"}</span>
            <span>${les.title}</span>
          </span>
          <span style="font-size: 0.7rem; color: var(--text-muted);">${les.readTime}</span>
        `;

        link.addEventListener("click", (e) => {
          e.preventDefault();
          this.openLesson(chapter.id, les.id);
        });

        lessonsList.appendChild(link);
      });

      item.appendChild(header);
      item.appendChild(lessonsList);
      container.appendChild(item);
    });

    this.updateSyllabusProgressChip();
  },

  updateSyllabusProgressChip() {
    const chip = document.getElementById("sidebarProgressChip");
    if (!chip) return;
    const stats = StorageService.getStats(CHAPTERS_DATA, QUESTIONS_DATA);
    chip.innerText = `${stats.completedLessonsCount}/${stats.totalLessons} Done`;
  },

  // Update Header Stats (Streak, Solved, XP, Level)
  renderHeaderStats() {
    const stats = StorageService.getStats(CHAPTERS_DATA, QUESTIONS_DATA);
    const streakEl = document.getElementById("headerStreakCounter");
    const solvedEl = document.getElementById("headerSolvedCounter");
    const xpEl = document.getElementById("headerXpCounter");
    const levelEl = document.getElementById("headerLevelBadge");

    if (streakEl) streakEl.innerHTML = `🔥 ${stats.streak.currentStreak}d Streak`;
    if (solvedEl) solvedEl.innerHTML = `🎯 ${stats.solvedQuestionsCount}/${stats.totalQuestions} Solved`;
    if (xpEl) xpEl.innerHTML = `✨ ${stats.xp} XP`;
    if (levelEl) levelEl.innerHTML = `⚡ Lvl ${stats.levelInfo.level} ${stats.levelInfo.title}`;
  },

  // Dashboard Renderer
  renderDashboard() {
    const stats = StorageService.getStats(CHAPTERS_DATA, QUESTIONS_DATA);

    // Update KPI numbers
    const statLessons = document.getElementById("dashStatLessons");
    const statSolved = document.getElementById("dashStatSolved");
    const statAccuracy = document.getElementById("dashStatAccuracy");
    const statStreak = document.getElementById("dashStatStreak");

    if (statLessons) statLessons.innerText = `${stats.completedLessonsCount} / ${stats.totalLessons}`;
    if (statSolved) statSolved.innerText = `${stats.solvedQuestionsCount} / ${stats.totalQuestions}`;
    if (statAccuracy) statAccuracy.innerText = `${stats.accuracy}%`;
    if (statStreak) statStreak.innerText = `${stats.streak.currentStreak} Days`;

    // Continue Learning Action
    const continueBtn = document.getElementById("dashContinueBtn");
    if (continueBtn) {
      // Find first incomplete lesson
      let nextLesson = null;
      let nextChapter = null;
      for (const ch of CHAPTERS_DATA) {
        for (const les of ch.lessons) {
          if (!StorageService.isLessonCompleted(les.id)) {
            nextLesson = les;
            nextChapter = ch;
            break;
          }
        }
        if (nextLesson) break;
      }

      if (nextLesson && nextChapter) {
        continueBtn.innerText = `Continue: ${nextLesson.title}`;
        continueBtn.onclick = () => this.openLesson(nextChapter.id, nextLesson.id);
      } else {
        continueBtn.innerText = "Explore All Topics";
        continueBtn.onclick = () => this.openLesson("ch-01", "les-01-01");
      }
    }

    // Render 16 Chapters Grid
    const grid = document.getElementById("dashChaptersGrid");
    if (!grid) return;

    grid.innerHTML = "";

    stats.chapterProgress.forEach(ch => {
      const card = document.createElement("div");
      card.className = "chapter-card";
      card.innerHTML = `
        <div>
          <div class="chapter-card-top">
            <span class="ch-badge">Chapter ${ch.number}</span>
            <span style="font-size: 0.8rem; font-weight: 700; color: ${ch.color};">${ch.percentage}%</span>
          </div>
          <h3 class="chapter-card-title">${ch.title}</h3>
          <p class="chapter-card-desc">${ch.completedLessons} of ${ch.totalLessons} lessons completed</p>
        </div>
        <div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width: ${ch.percentage}%; background: ${ch.color};"></div>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
            <span style="font-size: 0.75rem; color: var(--text-muted);">${ch.totalLessons} Lessons</span>
            <span style="font-size: 0.8rem; font-weight: 600; color: var(--accent-cyan);">Start &rarr;</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        const fullCh = CHAPTERS_DATA.find(c => c.id === ch.id);
        const firstLesId = fullCh && fullCh.lessons[0] ? fullCh.lessons[0].id : "les-01-01";
        this.openLesson(ch.id, firstLesId);
      });

      grid.appendChild(card);
    });
  },

  // Lesson Reader Controller
  openLesson(chapterId, lessonId) {
    this.currentChapterId = chapterId;
    this.currentLessonId = lessonId;

    StorageService.addRecentLesson(lessonId);

    // Switch view to 'learn'
    this.switchView("learn");

    // Make sure chapter accordion in sidebar is open
    document.querySelectorAll(".chapter-accordion-item").forEach(item => {
      if (item.id === `sidebar-ch-${chapterId}`) item.classList.add("open");
    });

    // Update active class in sidebar
    document.querySelectorAll(".lesson-nav-link").forEach(link => link.classList.remove("active"));
    const activeLink = document.getElementById(`sidebar-les-${lessonId}`);
    if (activeLink) activeLink.classList.add("active");

    const chapter = CHAPTERS_DATA.find(c => c.id === chapterId);
    let lesson = LESSONS_DATA[lessonId];

    if (!lesson && chapter) {
      lesson = this.generateComprehensiveLesson(chapter, lessonId);
      LESSONS_DATA[lessonId] = lesson;
    }

    if (!lesson) {
      this.renderFallbackLesson(chapterId, lessonId);
      return;
    }

    // Render breadcrumbs
    const bc = document.getElementById("lessonBreadcrumbs");
    if (bc) {
      bc.innerHTML = `
        <a href="#" onclick="App.switchView('dashboard'); return false;">Home</a> /
        <span>Chapter ${chapter.number}: ${chapter.title}</span> /
        <span style="color: var(--text-primary); font-weight: 600;">Lesson ${lesson.order}</span>
      `;
    }

    // Title & Metadata
    const titleEl = document.getElementById("lessonReaderTitle");
    if (titleEl) titleEl.innerText = lesson.title;

    // Completed & Bookmark Buttons
    this.updateLessonActionButtons(lessonId);

    // Tab content
    this.renderLessonTabs(lesson);

    // Navigation footer (Prev & Next lesson buttons)
    this.renderLessonNavFooter(chapter, lessonId);
  },

  updateLessonActionButtons(lessonId) {
    const compBtn = document.getElementById("lessonMarkDoneBtn");
    const bkmkBtn = document.getElementById("lessonBookmarkBtn");

    if (compBtn) {
      const isDone = StorageService.isLessonCompleted(lessonId);
      compBtn.innerHTML = isDone ? "✓ Completed (+50 XP)" : "Mark as Completed";
      compBtn.className = isDone ? "btn btn-success" : "btn btn-secondary";
      compBtn.onclick = () => {
        const nowDone = StorageService.toggleLessonCompleted(lessonId);
        if (nowDone) {
          StorageService.addXP(50);
          this.showToast("🎉 Lesson Completed! +50 XP Earned", "success");
        }
        this.updateLessonActionButtons(lessonId);
        this.renderSidebar();
        this.renderHeaderStats();
        const lesson = LESSONS_DATA[lessonId];
        if (lesson) this.renderLessonRightRail(lesson);
      };
    }

    if (bkmkBtn) {
      const isBkmk = StorageService.isLessonBookmarked(lessonId);
      bkmkBtn.innerHTML = isBkmk ? "★ Bookmarked" : "☆ Bookmark";
      bkmkBtn.onclick = () => {
        const nowB = StorageService.toggleLessonBookmark(lessonId);
        this.showToast(nowB ? "Lesson saved to Revision Hub ⭐" : "Bookmark removed", "info");
        this.updateLessonActionButtons(lessonId);
      };
    }
  },

  switchLessonTab(tabName) {
    document.querySelectorAll(".lesson-tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".lesson-tab-content").forEach(c => c.classList.remove("active"));

    const btn = document.querySelector(`.lesson-tab-btn[data-tab='${tabName}']`);
    const panel = document.getElementById(`lessonTab-${tabName}`);
    if (btn) btn.classList.add("active");
    if (panel) panel.classList.add("active");
  },

  renderLessonRightRail(lesson) {
    const isDone = StorageService.isLessonCompleted(lesson.id);
    const statusText = document.getElementById("railLessonStatusText");
    const scoreText = document.getElementById("railQuizScoreText");
    const statusBadge = document.getElementById("railQuizStatusBadge");
    const conceptTagsContainer = document.getElementById("railConceptTags");

    if (statusText) {
      statusText.innerText = isDone ? "Completed ✓" : "In Progress";
      statusText.style.color = isDone ? "var(--accent-emerald)" : "var(--accent-cyan)";
    }

    const savedQuiz = StorageService.getQuizScore(lesson.id);
    if (scoreText) {
      if (savedQuiz) {
        scoreText.innerHTML = `Quiz Score: <strong style="color: var(--accent-emerald);">${savedQuiz.score}/${savedQuiz.total} (${savedQuiz.percentage}%)</strong>`;
        if (statusBadge) statusBadge.innerText = `Quiz: ${savedQuiz.percentage}%`;
      } else {
        scoreText.innerHTML = `Quiz Score: <span style="color: var(--text-muted);">Not attempted yet</span>`;
        if (statusBadge) statusBadge.innerText = "";
      }
    }

    if (conceptTagsContainer) {
      const tags = [
        "#" + lesson.title.split(" ")[0].replace(/[^a-zA-Z0-9]/g, ""),
        "#C++Standard",
        "#CoreLogic",
        "#InterviewReady"
      ];
      conceptTagsContainer.innerHTML = tags.map(t => `<span class="concept-tag">${t}</span>`).join("");
    }
  },

  stepperState: {},

  renderStepper(lessonId) {
    const lesson = LESSONS_DATA[lessonId];
    if (!lesson || !lesson.stepByStepVisualizer) return "";

    const vis = lesson.stepByStepVisualizer;
    const currentStepIdx = this.stepperState[lessonId] || 0;
    const step = vis.steps[currentStepIdx] || vis.steps[0];

    // Variables table rows
    let varRows = "";
    if (step.variables) {
      varRows = Object.entries(step.variables).map(([name, val]) => `
        <tr>
          <td style="color: var(--text-secondary);">${name}</td>
          <td class="var-val">${val}</td>
        </tr>
      `).join("");
    }

    return `
      <div class="stepper-container" id="stepper-box-${lessonId}">
        <div class="stepper-header">
          <span class="stepper-header-title">
            <span>🎬</span> ${vis.title}
          </span>
          <span class="stepper-progress-pill">Step ${currentStepIdx + 1} of ${vis.steps.length}</span>
        </div>
        <div class="stepper-body">
          <!-- Code Pane with Active Line Highlight -->
          <div class="stepper-code-pane">
            ${vis.codeLines.map((line, idx) => `
              <div class="stepper-line ${idx === step.lineIndex ? 'active' : ''}">
                <span style="color: #4b5563; margin-right: 12px; user-select: none;">${idx + 1}</span>${this.escapeHtml(line)}
              </div>
            `).join("")}
          </div>
          <!-- State Pane (Live Variables & Output) -->
          <div class="stepper-state-pane">
            <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Live Memory / Variables:</div>
            <div class="variable-table-wrap">
              <table class="variable-table">
                <thead><tr><th>Variable</th><th>Value in RAM</th></tr></thead>
                <tbody>${varRows}</tbody>
              </table>
            </div>
            ${step.output ? `
              <div style="margin-top: 6px; font-size: 0.775rem;">
                <span style="color: var(--text-muted);">Console Output:</span>
                <span style="color: #a7f3d0; font-family: var(--font-mono); margin-left: 6px;">${this.escapeHtml(step.output)}</span>
              </div>
            ` : ""}
          </div>
        </div>
        <!-- Explanation of Current Step -->
        <div class="stepper-explanation-box">
          <strong>Step ${currentStepIdx + 1}:</strong> ${step.explanation}
        </div>
        <!-- Controls -->
        <div class="stepper-controls-footer">
          <button class="btn btn-secondary" style="font-size: 0.75rem; padding: 4px 12px;" onclick="App.stepperPrev('${lessonId}')" ${currentStepIdx === 0 ? 'disabled' : ''}>
            ◀ Previous Step
          </button>
          <button class="btn btn-secondary" style="font-size: 0.75rem; padding: 4px 10px;" onclick="App.stepperReset('${lessonId}')">
            Reset 🔄
          </button>
          <button class="btn btn-primary" style="font-size: 0.75rem; padding: 4px 14px;" onclick="App.stepperNext('${lessonId}')" ${currentStepIdx === vis.steps.length - 1 ? 'disabled' : ''}>
            Next Step ▶
          </button>
        </div>
      </div>
    `;
  },

  stepperNext(lessonId) {
    const lesson = LESSONS_DATA[lessonId];
    if (!lesson || !lesson.stepByStepVisualizer) return;
    const cur = this.stepperState[lessonId] || 0;
    if (cur < lesson.stepByStepVisualizer.steps.length - 1) {
      this.stepperState[lessonId] = cur + 1;
      this.refreshStepperUI(lessonId);
    }
  },

  stepperPrev(lessonId) {
    const cur = this.stepperState[lessonId] || 0;
    if (cur > 0) {
      this.stepperState[lessonId] = cur - 1;
      this.refreshStepperUI(lessonId);
    }
  },

  stepperReset(lessonId) {
    this.stepperState[lessonId] = 0;
    this.refreshStepperUI(lessonId);
  },

  refreshStepperUI(lessonId) {
    const box = document.getElementById(`stepper-box-${lessonId}`);
    if (box) {
      box.outerHTML = this.renderStepper(lessonId);
    }
  },

  // Predict-the-output exercise checking
  checkPredictOutput(lessonId, pIdx, selectedIdx, correctIdx) {
    const card = document.getElementById(`predict-card-${lessonId}-${pIdx}`);
    const feedback = document.getElementById(`predict-fb-${lessonId}-${pIdx}`);
    if (!card) return;

    const btns = card.querySelectorAll(".predict-opt-btn");
    btns.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIdx) {
        btn.classList.add("correct");
      } else if (idx === selectedIdx) {
        btn.classList.add("incorrect");
      }
    });

    if (feedback) feedback.style.display = "block";
  },

  quizState: {}, // { [lessonId]: { answers: {}, completed: false } }

  renderLessonTabs(lesson) {
    // Setup tab buttons
    document.querySelectorAll(".lesson-tab-btn").forEach(btn => {
      btn.onclick = (e) => {
        document.querySelectorAll(".lesson-tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".lesson-tab-content").forEach(c => c.classList.remove("active"));

        e.currentTarget.classList.add("active");
        const tab = e.currentTarget.getAttribute("data-tab");
        const panel = document.getElementById(`lessonTab-${tab}`);
        if (panel) panel.classList.add("active");
      };
    });

    // Update Right Rail
    this.renderLessonRightRail(lesson);

    // 1. Concept Tab
    const conceptPanel = document.getElementById("lessonTab-concept");
    if (conceptPanel) {
      let whyNeededHtml = "";
      if (lesson.whyNeeded) {
        whyNeededHtml = `
          <div class="callout-box callout-analogy" style="border-left-color: var(--accent-cyan); background: rgba(56, 189, 248, 0.08); margin-bottom: 24px;">
            <h4 style="color: var(--accent-cyan); margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
              <span>💡</span> Yeh Concept Kyun Zaroori Hai?
            </h4>
            <p style="font-size: 0.95rem; color: #f1f5f9; line-height: 1.6;">${lesson.whyNeeded}</p>
          </div>
        `;
      }

      let objectivesHtml = "";
      if (lesson.learningObjectives) {
        objectivesHtml = `
          <div class="callout-box callout-tip">
            <h4 style="color: var(--accent-emerald); margin-bottom: 8px;">🎯 Learning Objectives</h4>
            <ul style="margin: 0 0 0 20px;">
              ${lesson.learningObjectives.map(obj => `<li>${obj}</li>`).join("")}
            </ul>
          </div>
        `;
      }

      let visualModelHtml = "";
      if (lesson.visualMentalModel) {
        visualModelHtml = `
          <div style="margin: 24px 0;">
            <h4 style="font-size: 0.85rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">🧠 Visual Mental Model & Memory Layout</h4>
            <pre class="code-block-body" style="background: #060910; border-radius: 6px; border: 1px solid #1e293b; color: #38bdf8; font-size: 0.8rem; line-height: 1.5;"><code>${this.escapeHtml(lesson.visualMentalModel)}</code></pre>
          </div>
        `;
      }

      // Stepper visualizer
      const stepperHtml = this.renderStepper(lesson.id);

      // Predict the output cards
      let predictHtml = "";
      if (lesson.predictTheOutput && lesson.predictTheOutput.length > 0) {
        predictHtml = `
          <h3 style="margin-top: 28px; color: var(--accent-amber); display: flex; align-items: center; gap: 8px;">
            <span>⚡</span> Interactive Challenge: Predict the Output!
          </h3>
          ${lesson.predictTheOutput.map((p, pIdx) => `
            <div class="predict-card" id="predict-card-${lesson.id}-${pIdx}">
              <div class="predict-header">Challenge ${pIdx + 1}: ${p.question}</div>
              <pre class="predict-code-snippet"><code>${this.escapeHtml(p.code)}</code></pre>
              <div class="predict-options-grid">
                ${p.options.map((opt, optIdx) => `
                  <button class="predict-opt-btn" onclick="App.checkPredictOutput('${lesson.id}', ${pIdx}, ${optIdx}, ${p.correctIndex})">
                    ${this.escapeHtml(opt)}
                  </button>
                `).join("")}
              </div>
              <div class="predict-feedback-box" id="predict-fb-${lesson.id}-${pIdx}">
                <strong>Explanation:</strong> ${p.explanation}
              </div>
            </div>
          `).join("")}
        `;
      }

      // Click to reveal deep dive cards
      let clickRevealHtml = "";
      if (lesson.clickToRevealCards && lesson.clickToRevealCards.length > 0) {
        clickRevealHtml = lesson.clickToRevealCards.map((c, cIdx) => `
          <div class="click-reveal-wrap">
            <button class="click-reveal-btn" onclick="document.getElementById('cr-content-${lesson.id}-${cIdx}').classList.toggle('open')">
              <span>${c.prompt}</span>
              <span>👁️ Tap to Reveal</span>
            </button>
            <div class="click-reveal-content" id="cr-content-${lesson.id}-${cIdx}">
              ${c.revealedContent}
            </div>
          </div>
        `).join("");
      }

      let syntaxHtml = "";
      if (lesson.syntaxRules) {
        syntaxHtml = `
          <h3 style="margin-top: 28px;">Syntax & Rules</h3>
          <div class="code-block-container">
            <div class="code-block-header">
              <span>C++ Syntax</span>
              <button class="btn btn-icon" onclick="navigator.clipboard.writeText(\`${lesson.syntaxRules.replace(/`/g, "\\`")}\`); alert('Copied!');">Copy</button>
            </div>
            <pre class="code-block-body"><code>${this.escapeHtml(lesson.syntaxRules)}</code></pre>
          </div>
        `;
      }

      conceptPanel.innerHTML = `
        <div class="lesson-prose">
          ${whyNeededHtml}
          ${objectivesHtml}
          ${this.formatMarkdown(lesson.explanationHinglish)}
          ${visualModelHtml}
          ${stepperHtml}
          ${predictHtml}
          ${clickRevealHtml}
          ${syntaxHtml}
        </div>
      `;
    }

    // 2. Code Examples Tab
    const codePanel = document.getElementById("lessonTab-code");
    if (codePanel) {
      if (lesson.codeExamples && lesson.codeExamples.length > 0) {
        codePanel.innerHTML = lesson.codeExamples.map(ex => `
          <div class="code-block-container">
            <div class="code-block-header">
              <span>${ex.title}</span>
              <div style="display: flex; gap: 8px;">
                <button class="btn btn-secondary" style="font-size: 0.75rem; padding: 4px 10px;" onclick="App.openInCompiler(\`${this.escapeForJsString(ex.code)}\`)">Open in Compiler 🚀</button>
                <button class="btn btn-icon" onclick="navigator.clipboard.writeText(\`${this.escapeForJsString(ex.code)}\`); alert('Code copied to clipboard!');">Copy</button>
              </div>
            </div>
            <pre class="code-block-body"><code>${this.escapeHtml(ex.code)}</code></pre>
            <div class="code-output-box">
              <span style="color: var(--text-muted); font-size: 0.7rem; text-transform: uppercase;">Expected Output:</span><br>
              ${this.escapeHtml(ex.output)}
            </div>
          </div>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 24px;">${ex.explanation}</p>
        `).join("");
      } else {
        codePanel.innerHTML = "<p style='color: var(--text-muted);'>No code examples for this concept yet.</p>";
      }
    }

    // 3. Analogy & Common Errors Tab
    const analogyPanel = document.getElementById("lessonTab-analogy");
    if (analogyPanel) {
      let analogyHtml = "";
      if (lesson.analogy) {
        analogyHtml = `
          <div class="callout-box callout-analogy">
            <h4 style="color: var(--accent-indigo); margin-bottom: 8px;">💡 Real-Life Analogy</h4>
            <p style="color: #cbd5e1; font-size: 0.95rem;">${lesson.analogy}</p>
          </div>
        `;
      }

      let errorsHtml = "";
      if (lesson.commonErrors && lesson.commonErrors.length > 0) {
        errorsHtml = `
          <h3 style="margin-top: 24px; color: var(--accent-rose);">⚠️ Common Errors & Debugging Tips</h3>
          ${lesson.commonErrors.map(err => `
            <div class="callout-box callout-warning">
              <strong style="color: var(--accent-amber);">${err.error}</strong>
              <p style="margin: 6px 0; font-size: 0.9rem;"><strong>Kyun hota hai:</strong> ${err.cause}</p>
              <p style="margin: 6px 0; font-size: 0.9rem; color: #a7f3d0;"><strong>Kaise theek karein:</strong> ${err.fix}</p>
              ${err.exampleCode ? `<pre class="code-block-body" style="background: #060910; padding: 10px; border-radius: 4px; margin-top: 8px;"><code>${this.escapeHtml(err.exampleCode)}</code></pre>` : ""}
            </div>
          `).join("")}
        `;
      }

      let takeawaysHtml = "";
      if (lesson.keyTakeaways) {
        takeawaysHtml = `
          <div class="callout-box callout-tip" style="margin-top: 24px;">
            <h4 style="color: var(--accent-emerald); margin-bottom: 8px;">📌 Key Takeaways</h4>
            <ul style="margin: 0 0 0 20px;">
              ${lesson.keyTakeaways.map(t => `<li>${t}</li>`).join("")}
            </ul>
          </div>
        `;
      }

      analogyPanel.innerHTML = `
        <div class="lesson-prose">
          ${analogyHtml}
          ${errorsHtml}
          ${takeawaysHtml}
        </div>
      `;
    }

    // 4. Knowledge Check Quiz Tab with Scoring & Retry
    this.renderQuiz(lesson);

    // 5. Practice Tab
    const practicePanel = document.getElementById("lessonTab-practice");
    if (practicePanel) {
      const relQuestions = (lesson.relatedQuestionIds || [])
        .map(qId => QUESTIONS_DATA.find(q => q.id === qId))
        .filter(Boolean);

      if (relQuestions.length > 0) {
        practicePanel.innerHTML = `
          <div style="margin-bottom: 16px;">
            <h3>Related Practice Questions for this Lesson:</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Test what you just learned in the live coding compiler:</p>
          </div>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${relQuestions.map(q => `
              <div class="chapter-card" style="cursor: default;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <span class="difficulty-badge ${q.difficulty.toLowerCase()}">${q.difficulty}</span>
                    <strong style="margin-left: 10px; font-size: 1rem;">${q.title}</strong>
                    <div style="font-size: 0.775rem; color: var(--text-muted); margin-top: 4px;">${q.topic} &bull; ${q.type}</div>
                  </div>
                  <button class="btn btn-primary" onclick="App.openQuestion('${q.id}')">Solve in Editor &rarr;</button>
                </div>
              </div>
            `).join("")}
          </div>
        `;
      } else {
        practicePanel.innerHTML = `
          <p style="color: var(--text-secondary); margin-bottom: 16px;">No specific questions tagged to this lesson. Check out the Question Bank!</p>
          <button class="btn btn-primary" onclick="App.switchView('questions')">Browse All Questions</button>
        `;
      }
    }

    // Reset active tab to 'concept'
    document.querySelectorAll(".lesson-tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".lesson-tab-content").forEach(c => c.classList.remove("active"));
    const firstTabBtn = document.querySelector(".lesson-tab-btn[data-tab='concept']");
    if (firstTabBtn) firstTabBtn.classList.add("active");
    if (conceptPanel) conceptPanel.classList.add("active");
  },

  renderQuiz(lesson) {
    const quizPanel = document.getElementById("lessonTab-quiz");
    if (!quizPanel) return;

    if (!lesson.quiz || lesson.quiz.length === 0) {
      quizPanel.innerHTML = "<p style='color: var(--text-muted);'>No quiz questions for this lesson.</p>";
      return;
    }

    if (!this.quizState[lesson.id]) {
      this.quizState[lesson.id] = { answers: {}, score: 0, completed: false };
    }

    const state = this.quizState[lesson.id];
    const total = lesson.quiz.length;

    let scoreBanner = "";
    if (state.completed) {
      const pct = Math.round((state.score / total) * 100);
      scoreBanner = `
        <div class="quiz-score-banner">
          <div>
            <div style="font-size: 0.85rem; color: var(--accent-emerald); font-weight: 700; text-transform: uppercase;">Quiz Performance</div>
            <div style="font-size: 1.25rem; font-weight: 800; color: #f8fafc;">
              Score: ${state.score} / ${total} (${pct}%)
            </div>
            <div style="font-size: 0.85rem; color: #a7f3d0;">
              ${pct === 100 ? "🌟 Perfect Score! You have mastered this topic!" : "Great effort! Review the explanations below and try again."}
            </div>
          </div>
          <button class="btn btn-secondary" onclick="App.retryQuiz('${lesson.id}')">
            Retry Quiz 🔄
          </button>
        </div>
      `;
    }

    quizPanel.innerHTML = `
      ${scoreBanner}
      ${lesson.quiz.map((q, qIdx) => {
        const isAnswered = state.answers[qIdx] !== undefined;
        const selected = state.answers[qIdx];
        return `
          <div class="quiz-card" id="quiz-${lesson.id}-${qIdx}">
            <div class="quiz-question">Q${qIdx + 1}. ${q.question}</div>
            <div class="quiz-options">
              ${q.options.map((opt, optIdx) => {
                let cls = "quiz-option-btn";
                if (isAnswered) {
                  if (optIdx === q.correctIndex) cls += " correct";
                  else if (optIdx === selected) cls += " incorrect";
                }
                return `
                  <button class="${cls}" ${isAnswered ? 'disabled' : ''} onclick="App.checkQuizAnswer('${lesson.id}', ${qIdx}, ${optIdx}, ${q.correctIndex})">
                    ${String.fromCharCode(65 + optIdx)}. ${opt}
                  </button>
                `;
              }).join("")}
            </div>
            <div class="quiz-explanation-box" id="quiz-exp-${lesson.id}-${qIdx}" style="display: ${isAnswered ? 'block' : 'none'};">
              <strong>Explanation:</strong> ${q.explanation}
            </div>
          </div>
        `;
      }).join("")}
    `;
  },

  checkQuizAnswer(lessonId, qIdx, selectedIdx, correctIdx) {
    if (!this.quizState[lessonId]) {
      this.quizState[lessonId] = { answers: {}, score: 0, completed: false };
    }

    const state = this.quizState[lessonId];
    if (state.answers[qIdx] !== undefined) return; // already answered

    state.answers[qIdx] = selectedIdx;
    if (selectedIdx === correctIdx) {
      state.score += 1;
    }

    const lesson = LESSONS_DATA[lessonId];
    if (lesson && Object.keys(state.answers).length === lesson.quiz.length) {
      state.completed = true;
      StorageService.saveQuizScore(lessonId, state.score, lesson.quiz.length);
      this.renderLessonRightRail(lesson);
      this.renderHeaderStats();
    }

    this.renderQuiz(lesson);
  },

  retryQuiz(lessonId) {
    this.quizState[lessonId] = { answers: {}, score: 0, completed: false };
    const lesson = LESSONS_DATA[lessonId];
    if (lesson) this.renderQuiz(lesson);
  },

  renderLessonNavFooter(chapter, currentLessonId) {
    const footer = document.getElementById("lessonNavFooter");
    if (!footer) return;

    const lessons = chapter.lessons;
    const currentIndex = lessons.findIndex(l => l.id === currentLessonId);

    const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

    let prevBtnHtml = prevLesson
      ? `<button class="btn btn-secondary" onclick="App.openLesson('${chapter.id}', '${prevLesson.id}')">&larr; ${prevLesson.title}</button>`
      : `<div></div>`;

    let nextBtnHtml = nextLesson
      ? `<button class="btn btn-primary" onclick="App.openLesson('${chapter.id}', '${nextLesson.id}')">${nextLesson.title} &rarr;</button>`
      : `<button class="btn btn-success" onclick="App.switchView('dashboard')">Back to Dashboard 🎉</button>`;

    footer.innerHTML = `${prevBtnHtml}${nextBtnHtml}`;
  },

  // Dynamic Comprehensive Lesson Generator
  generateComprehensiveLesson(chapter, lessonId) {
    const meta = (chapter.lessons && chapter.lessons.find(l => l.id === lessonId)) || {
      id: lessonId,
      title: "C++ Advanced Topic",
      readTime: "15 min"
    };
    const order = chapter.lessons ? chapter.lessons.findIndex(l => l.id === lessonId) + 1 : 1;
    const title = meta.title;

    // Detect theme based on keywords in title and chapter
    const isLoopOrNested = /loop|iteration|nested/i.test(title);
    const isConditionOrSwitch = /condition|if|switch|ladder|ternary/i.test(title);
    const isSearchOrSort = /search|sort|binary|bubble|merge|quick/i.test(title);
    const isArrayOrMatrix = /array|matrix|2d|multidimensional/i.test(title);
    const isString = /string|char|anagram|palindrome/i.test(title);
    const isPointerOrMemory = /pointer|memory|address|reference|heap|stack|new|delete/i.test(title);
    const isOOP = /class|object|constructor|destructor|encapsulation|inheritance|polymorphism|virtual/i.test(title);
    const isSTL = /stl|vector|stack|queue|map|set|iterator/i.test(title);
    const isComplexity = /complexity|big-o|omega|theta|asymptotic/i.test(title);
    const isTreeOrGraph = /tree|bst|heap|graph|bfs|dfs|node/i.test(title);
    const isPatternOrAlgo = /pattern|window|sliding|dp|greedy|backtracking/i.test(title);
    const isModernOrProject = /modern|lambda|smart|project|template|exception|file/i.test(title);

    let whyNeeded = `Yeh topic C++ mein real-world software develop karne aur computational efficiency achieve karne ke liye zaroori hai. Isse hum bina memory waste kiye high-performance logic likh sakte hain.`;
    let analogyText = `Yeh concept bilkul real life jaisa hai: Jaise ek organized library mein har kitaab ka ek shelf number hota hai, waise hi C++ mein har data aur execution flow ka ek structure hota hai.`;

    if (isOOP) {
      whyNeeded = `Bade software systems (jaise game engines, banking apps, operating systems) mein hazaron variables aur functions hote hain. Object-Oriented Programming (OOP) unhe securely bundle karti hai taaki code reusable aur bug-free rahe.`;
      analogyText = `OOP jaise car manufacturing hai: Engine aur electronics ek band hood ke andar protected hote hain (private), jabki steering wheel aur pedals driver ke use ke liye public interface hote hain.`;
    } else if (isSTL) {
      whyNeeded = `Har baar scratch se array resize karna ya binary search tree banana time waste karta hai. C++ Standard Template Library (STL) industry-tested, blazing-fast data structures aur algorithms ready-to-use deti hai.`;
      analogyText = `STL jaise ek chef ka modern modular kitchen toolkit hai: Blender, microwave, aur knife set pehle se optimized hain, chef ko bas recipe banana hai!`;
    } else if (isTreeOrGraph) {
      whyNeeded = `Linear data structures (array, linked list) hierarchical relationships (jaise folder structure, social network friends, road maps) ko efficiently represent nahi kar sakte. Trees aur Graphs non-linear data ko O(log N) ya graph traversal se solve karte hain.`;
      analogyText = `Tree jaise parivaar ka family tree hai (Dada -> Papa -> Bachhe), aur Graph jaise Google Maps par flight network hai jahan har city ek node hai aur routes edges hain.`;
    } else if (isPointerOrMemory) {
      whyNeeded = `C++ ka sabse bada super-power hai: Direct Hardware Memory Control! Pointers ke zariye hum computer ki RAM ke exact addresses ko control karte hain bina kisi runtime interpreter lag ke.`;
      analogyText = `Pointer jaise aapke dost ke ghar ka postal address likha hua visiting card hai: Card khud ghar nahi hai, lekin woh batata hai ki ghar kahan par sthit hai!`;
    }

    return {
      id: lessonId,
      chapterId: chapter.id,
      title: title,
      order: order,
      whyNeeded: whyNeeded,
      learningObjectives: [
        `Understand core principles, rules, and syntax of "${title}"`,
        `Explore memory layout and under-the-hood CPU execution mechanics`,
        `Identify common beginner pitfalls, syntax errors, and debugging best practices`
      ],
      prerequisites: [`Chapter ${chapter.number}: ${chapter.title} core foundations`],
      explanationHinglish: `### Concept Deep Dive: ${title}

Namaste learners! Is lesson mein hum **${title}** ko basic se lekar practical implementation tak deeply samjhenge.

---

### 1. Yeh Kya Hai aur Iska Kaam Kya Hai?
Computer architecture mein har decision aur memory operation structured rules follow karta hai:
- **Readable Syntax**: C++ static type safety provide karti hai jisse compilation time par hi 90% bugs pakad mein aa jaate hain.
- **Zero-Cost Abstraction**: Jo feature aap use nahi karte, uska computer par 1 byte ka bhi extra overhead nahi padta!

---

### 2. Under the Hood Mechanics (Parde Ke Peeche)
Jab yeh code compile hokar CPU ke instruction register mein execute hota hai:
1. **Memory Allocation**: Stack frame ya Heap segment mein data store hota hai.
2. **Deterministic Execution**: Har statement predictable sequential order mein chalti hai.
3. **Cache Line Locality**: C++ contiguous memory access ko prioritize karta hai taaki L1/L2 cache misses na hon.

---

### 3. Syntax Rules & Best Practices:
\`\`\`cpp
// Standard Idiomatic C++ Implementation
#include <iostream>

void demonstrateConcept() {
    std::cout << "Executing: ${title}\\n";
}

int main() {
    demonstrateConcept();
    return 0;
}
\`\`\`

> 💡 **Pro Developer Tip**: Hamesha code ko small modular functions mein divide karein aur clear identifiers use karein.`,

      visualMentalModel: `+-------------------------------------------------------------+
| Architectural Model for: ${title.padEnd(35)}|
|                                                             |
|  [Input Data] ---> [Logical Processing Stage] ---> [Result] |
|                             |                               |
|                             v                               |
|            [RAM Memory / Cache Register State]              |
+-------------------------------------------------------------+`,

      stepByStepVisualizer: {
        title: `Step-by-Step Execution: ${title}`,
        codeLines: [
          `// Demonstration of ${title}`,
          `int state = 1;`,
          `state = state * 10;`,
          `std::cout << "State: " << state;`
        ],
        steps: [
          {
            lineIndex: 1,
            explanation: `Step 1: Memory mein 'state' variable allocate hua aur initial value 1 set hui.`,
            variables: { state: "1", status: "Initialized" },
            output: ""
          },
          {
            lineIndex: 2,
            explanation: `Step 2: CPU ne arithmetic transition execute kiya: state = 1 * 10 = 10.`,
            variables: { state: "10", status: "Updated" },
            output: ""
          },
          {
            lineIndex: 3,
            explanation: `Step 3: Console stream par formatted value 'State: 10' output hui.`,
            variables: { state: "10", stdout: "State: 10" },
            output: "State: 10"
          }
        ]
      },

      predictTheOutput: [
        {
          code: `#include <iostream>
int main() {
    int val = 10;
    val += 5;
    std::cout << val;
    return 0;
}`,
          question: `Is baseline program ka output kya aayega?`,
          options: ["15", "10", "5", "Compilation Error"],
          correctIndex: 0,
          explanation: `val ki initial value 10 thi, '+=' operator ne usme 5 joda (10 + 5 = 15), isliye 15 print hoga.`
        }
      ],

      clickToRevealCards: [
        {
          prompt: `💡 Deep Dive: Is concept ki sabse badi architectural strength kya hai?`,
          revealedContent: `C++ mein '${title}' compiler level par optimize hota hai. Modern compilers (GCC, Clang) dead code elimination, loop unrolling, aur register inlining apply karke ise hardware limit tak fast bana dete hain!`
        }
      ],

      codeExamples: [
        {
          title: `Idiomatic C++ Example for ${title}`,
          code: `#include <iostream>

int main() {
    std::cout << "Demonstrating: ${title}\\n";
    std::cout << "Execution Completed Successfully!\\n";
    return 0;
}`,
          output: `Demonstrating: ${title}\nExecution Completed Successfully!`,
          explanation: `Demonstrates clean program structure with proper entry point and exit status code.`
        }
      ],
      analogy: analogyText,
      commonErrors: [
        {
          error: "Syntax or Scoping Oversight",
          cause: "Variable ya function ko uske defined scope { ... } ke bahar access karne ki koshish karna.",
          fix: "Curly brackets { } ka scope check karein aur identifiers ko sahi block mein declare karein."
        }
      ],
      keyTakeaways: [
        `"${title}" C++ curriculum ka essential fundamental component hai.`,
        "Deterministic memory management clean code aur bug-free software ki buniyad hai.",
        "Interactive steppers aur test cases se practice karne par concept lifetime yaad rehta hai."
      ],
      quiz: [
        {
          question: `C++ mein '${title}' ke context mein execution reliability badhane ke liye kya sabse important hai?`,
          options: [
            "Proper scoping, type safety aur deterministic lifecycle follow karna",
            "Bina testing ke code deploy karna",
            "Compilation warnings ko ignore karna",
            "Variable ka type mention na karna"
          ],
          correctIndex: 0,
          explanation: "Type safety aur strict scoping C++ ke core pillars hain jo memory leaks aur runtime crashes ko prevent karte hain."
        },
        {
          question: "C++ program mein function call stack ka primary role kya hota hai?",
          options: [
            "Local variables aur function return addresses ko track karna",
            "Hard drive par files delete karna",
            "Network bandwidth badhana",
            "Screen ka resolution change karna"
          ],
          correctIndex: 0,
          explanation: "Call stack har active function frame ke local variables aur instruction return addresses ko LIFO order mein manage karta hai."
        }
      ],
      relatedQuestionIds: ["q-01-01", "q-01-02", "q-07-01"]
    };
  },

  renderFallbackLesson(chapterId, lessonId) {
    const chapter = CHAPTERS_DATA.find(c => c.id === chapterId);
    if (chapter) {
      const dynamicLesson = this.generateComprehensiveLesson(chapter, lessonId);
      LESSONS_DATA[lessonId] = dynamicLesson;
      this.renderLessonTabs(dynamicLesson);
    }
  },

  // Practice Workspace & Online Compiler Controller
  openQuestion(questionId) {
    this.currentQuestionId = questionId;
    const question = QUESTIONS_DATA.find(q => q.id === questionId);
    if (!question) return;

    this.switchView("practice");

    // Title & Difficulty
    const titleEl = document.getElementById("workspaceProblemTitle");
    const diffBadge = document.getElementById("workspaceProblemDifficulty");
    if (titleEl) titleEl.innerText = question.title;
    if (diffBadge) {
      diffBadge.innerText = question.difficulty;
      diffBadge.className = `difficulty-badge ${question.difficulty.toLowerCase()}`;
    }

    // Bookmark & Solved buttons
    const bkmkBtn = document.getElementById("workspaceBookmarkBtn");
    if (bkmkBtn) {
      const isB = StorageService.isQuestionBookmarked(questionId);
      bkmkBtn.innerText = isB ? "★ Bookmarked" : "☆ Bookmark";
      bkmkBtn.onclick = () => {
        StorageService.toggleQuestionBookmark(questionId);
        this.openQuestion(questionId);
      };
    }

    // Problem Statement & Details
    const statementEl = document.getElementById("workspaceProblemStatement");
    if (statementEl) {
      let samplesHtml = "";
      if (question.sampleTestCases) {
        samplesHtml = question.sampleTestCases.map((stc, idx) => `
          <div class="test-case-box">
            <div class="test-case-label">Example ${idx + 1}:</div>
            <div><strong>Input:</strong> <code>${this.escapeHtml(stc.input || "(No input)")}</code></div>
            <div style="margin-top: 4px;"><strong>Output:</strong> <code>${this.escapeHtml(stc.output)}</code></div>
            ${stc.explanation ? `<div style="color: var(--text-muted); font-size: 0.775rem; margin-top: 6px;"><em>Explanation:</em> ${stc.explanation}</div>` : ""}
          </div>
        `).join("");
      }

      let hintsHtml = "";
      if (question.progressiveHints && question.progressiveHints.length > 0) {
        hintsHtml = `
          <h4 style="margin: 20px 0 10px; color: var(--accent-cyan);">💡 Progressive Hints (Try before revealing)</h4>
          <div class="hint-accordion-wrap">
            ${question.progressiveHints.map((hint, hIdx) => `
              <button class="hint-toggle-btn" onclick="document.getElementById('hint-c-${question.id}-${hIdx}').classList.toggle('revealed')">
                <span>Reveal Hint ${hIdx + 1}</span>
                <span>👁️</span>
              </button>
              <div class="hint-content" id="hint-c-${question.id}-${hIdx}">${hint}</div>
            `).join("")}
          </div>
        `;
      }

      let solutionAccordionHtml = "";
      if (question.solutionCode) {
        solutionAccordionHtml = `
          <div style="margin: 24px 0;">
            <button class="btn btn-secondary" style="width: 100%; justify-content: space-between;" onclick="document.getElementById('sol-wrap-${question.id}').classList.toggle('revealed')">
              <span>📖 View Full Step-by-Step Solution & Dry Run</span>
              <span>▼</span>
            </button>
            <div class="hint-content" id="sol-wrap-${question.id}" style="margin-top: 10px;">
              <h4 style="color: var(--accent-emerald); margin-bottom: 8px;">Step-by-Step Algorithm:</h4>
              <ol style="margin: 0 0 16px 20px;">
                ${(question.algorithmSteps || []).map(s => `<li>${s}</li>`).join("")}
              </ol>
              <div class="code-block-container">
                <div class="code-block-header">
                  <span>Complete Solution (C++)</span>
                  <button class="btn btn-icon" onclick="navigator.clipboard.writeText(\`${this.escapeForJsString(question.solutionCode)}\`); alert('Solution code copied!');">Copy</button>
                </div>
                <pre class="code-block-body"><code>${this.escapeHtml(question.solutionCode)}</code></pre>
              </div>

              ${question.dryRunTable ? `
                <h4 style="color: var(--accent-cyan); margin: 16px 0 8px;">Execution Dry Run Table:</h4>
                <div style="overflow-x: auto;">
                  <table class="dry-run-table">
                    <thead>
                      <tr>${question.dryRunTable.headers.map(h => `<th>${h}</th>`).join("")}</tr>
                    </thead>
                    <tbody>
                      ${question.dryRunTable.rows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}
                    </tbody>
                  </table>
                </div>
              ` : ""}

              <div style="margin-top: 16px; font-size: 0.85rem; color: var(--text-secondary);">
                <div><strong>Time Complexity:</strong> ${question.timeComplexity || "O(N)"}</div>
                <div><strong>Space Complexity:</strong> ${question.spaceComplexity || "O(1)"}</div>
              </div>
            </div>
          </div>
        `;
      }

      statementEl.innerHTML = `
        <div class="lesson-prose">
          <p>${this.formatMarkdown(question.statement)}</p>
          
          <h4 style="margin: 16px 0 6px;">Input Format:</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary);">${question.inputFormat || "Standard input"}</p>
          
          <h4 style="margin: 16px 0 6px;">Output Format:</h4>
          <p style="font-size: 0.9rem; color: var(--text-secondary);">${question.outputFormat || "Standard output"}</p>
          
          <h4 style="margin: 16px 0 6px;">Constraints:</h4>
          <pre class="code-block-body" style="background: #090d16; border-radius: 4px; padding: 10px; margin-bottom: 20px;"><code>${this.escapeHtml(question.constraints)}</code></pre>
          
          <h4 style="margin: 20px 0 10px;">Sample Test Cases:</h4>
          ${samplesHtml}
          ${hintsHtml}
          ${solutionAccordionHtml}
        </div>
      `;
    }

    // Load Code into Editor (Check draft first, then starter code)
    const editor = document.getElementById("workspaceCodeEditor");
    const lineNums = document.getElementById("workspaceLineNumbers");
    const draft = StorageService.getCodeDraft(questionId, question.starterCode);

    if (editor) {
      editor.value = draft;
      this.updateLineNumbers(editor, lineNums);

      // Auto-save on input
      editor.oninput = () => {
        this.updateLineNumbers(editor, lineNums);
        StorageService.saveCodeDraft(questionId, editor.value);
      };

      // Support Tab key indentation
      editor.onkeydown = (e) => {
        if (e.key === "Tab") {
          e.preventDefault();
          const start = editor.selectionStart;
          const end = editor.selectionEnd;
          editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);
          editor.selectionStart = editor.selectionEnd = start + 4;
          this.updateLineNumbers(editor, lineNums);
        } else if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
          e.preventDefault();
          if (e.shiftKey) {
            this.submitWorkspaceCode();
          } else {
            this.runWorkspaceCode();
          }
        }
      };

      editor.onscroll = () => {
        if (lineNums) lineNums.scrollTop = editor.scrollTop;
      };
    }

    // Set Default Sample Stdin
    const stdinBox = document.getElementById("workspaceStdin");
    if (stdinBox && question.sampleTestCases && question.sampleTestCases[0]) {
      stdinBox.value = question.sampleTestCases[0].input || "";
    }

    // Setup action buttons (Run, Submit, Reset, Clear)
    const runBtn = document.getElementById("workspaceRunBtn");
    const submitBtn = document.getElementById("workspaceSubmitBtn");
    const resetBtn = document.getElementById("workspaceResetBtn");

    if (runBtn) runBtn.onclick = () => this.runWorkspaceCode();
    if (submitBtn) submitBtn.onclick = () => this.submitWorkspaceCode();
    if (resetBtn) {
      resetBtn.onclick = () => {
        if (confirm("Reset code to original starter template?")) {
          if (editor) {
            editor.value = question.starterCode;
            this.updateLineNumbers(editor, lineNums);
            StorageService.saveCodeDraft(questionId, question.starterCode);
          }
        }
      };
    }

    // Setup Console Tabs (Output, Stdin, Test Cases, Errors)
    this.setupConsoleTabs();
  },

  updateLineNumbers(textarea, lineNumsContainer) {
    if (!textarea || !lineNumsContainer) return;
    const lineCount = textarea.value.split("\n").length;
    let numbersStr = "";
    for (let i = 1; i <= lineCount; i++) {
      numbersStr += i + "<br>";
    }
    lineNumsContainer.innerHTML = numbersStr;
  },

  setupConsoleTabs() {
    document.querySelectorAll(".console-tab-btn").forEach(btn => {
      btn.onclick = (e) => {
        document.querySelectorAll(".console-tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".console-content").forEach(c => c.style.display = "none");

        e.currentTarget.classList.add("active");
        const tab = e.currentTarget.getAttribute("data-tab");
        const panel = document.getElementById(`consolePanel-${tab}`);
        if (panel) panel.style.display = "block";
      };
    });
  },

  switchConsoleTab(tabName) {
    document.querySelectorAll(".console-tab-btn").forEach(b => {
      if (b.getAttribute("data-tab") === tabName) b.classList.add("active");
      else b.classList.remove("active");
    });
    document.querySelectorAll(".console-content").forEach(c => c.style.display = "none");
    const panel = document.getElementById(`consolePanel-${tabName}`);
    if (panel) panel.style.display = "block";
  },

  // Run Code with Custom Stdin
  async runWorkspaceCode() {
    const editor = document.getElementById("workspaceCodeEditor");
    const stdinBox = document.getElementById("workspaceStdin");
    const stdoutBox = document.getElementById("workspaceStdout");
    const runBtn = document.getElementById("workspaceRunBtn");

    if (!editor || !stdoutBox) return;

    this.switchConsoleTab("output");
    stdoutBox.innerHTML = "<span style='color: var(--accent-cyan);'>Compiling and executing on Linux g++...</span>";

    if (runBtn) {
      runBtn.disabled = true;
      runBtn.innerText = "Running...";
    }

    const code = editor.value;
    const stdin = stdinBox ? stdinBox.value : "";

    try {
      const res = await CompilerService.runCode(code, stdin);

      if (res.success) {
        stdoutBox.innerHTML = `
          <div style="color: var(--accent-emerald); font-size: 0.75rem; margin-bottom: 6px;">
            Execution Status: ${res.status} | Time: ${res.executionTimeMs}ms
          </div>
          <pre style="color: #f8fafc; font-family: var(--font-mono); white-space: pre-wrap;">${this.escapeHtml(res.stdout || "(Program produced no output)")}</pre>
        `;
      } else {
        // Show Compilation or Runtime Error
        this.switchConsoleTab("errors");
        const errorBox = document.getElementById("workspaceErrors");
        if (errorBox) {
          let hinglishCard = "";
          if (res.hinglishError) {
            hinglishCard = `
              <div class="callout-box callout-warning" style="margin-bottom: 14px;">
                <h4 style="color: var(--accent-amber);">${res.hinglishError.title}</h4>
                <p style="margin: 6px 0; font-size: 0.875rem;">${res.hinglishError.explanation}</p>
                <p style="color: #a7f3d0; font-size: 0.875rem;"><strong>💡 Fix:</strong> ${res.hinglishError.fix}</p>
              </div>
            `;
          }

          errorBox.innerHTML = `
            ${hinglishCard}
            <div style="color: var(--accent-rose); font-weight: 600; margin-bottom: 6px;">${res.status}</div>
            <pre style="color: #fecdd3; font-family: var(--font-mono); font-size: 0.8rem; white-space: pre-wrap; background: #060910; padding: 12px; border-radius: 4px;">${this.escapeHtml(res.stderr)}</pre>
          `;
        }
      }
    } catch (err) {
      stdoutBox.innerHTML = `<span style='color: var(--accent-rose);'>Execution failed: ${err.message}</span>`;
    } finally {
      if (runBtn) {
        runBtn.disabled = false;
        runBtn.innerText = "Run Code";
      }
    }
  },

  // Submit Code against Test Cases
  async submitWorkspaceCode() {
    const editor = document.getElementById("workspaceCodeEditor");
    const submitBtn = document.getElementById("workspaceSubmitBtn");
    const question = QUESTIONS_DATA.find(q => q.id === this.currentQuestionId);

    if (!editor || !question) return;

    this.switchConsoleTab("tests");
    const testsPanel = document.getElementById("workspaceTests");
    if (testsPanel) {
      testsPanel.innerHTML = "<span style='color: var(--accent-cyan);'>Running test cases against GCC compiler...</span>";
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = "Submitting...";
    }

    const testCases = [...(question.sampleTestCases || []), ...(question.hiddenTestCases || [])];
    const code = editor.value;

    try {
      const evaluation = await CompilerService.runTestCases(code, testCases);

      if (testsPanel) {
        const bannerClass = evaluation.allPassed ? "passed" : "failed";
        const bannerText = evaluation.allPassed
          ? `🎉 Accepted! All ${evaluation.totalCases} Test Cases Passed`
          : `❌ Submission Failed (${evaluation.passedCases}/${evaluation.totalCases} Cases Passed)`;

        testsPanel.innerHTML = `
          <div class="test-verdict-banner ${bannerClass}">${bannerText}</div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${evaluation.results.map(r => `
              <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); padding: 10px; border-radius: 4px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                  <strong style="color: ${r.passed ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">
                    Test Case ${r.caseNumber}: ${r.status}
                  </strong>
                </div>
                ${!r.passed ? `
                  <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
                    <div>Input: <code>${this.escapeHtml(r.input || "(Empty)")}</code></div>
                    <div>Expected: <code>${this.escapeHtml(r.expected || "")}</code></div>
                    <div>Actual: <code>${this.escapeHtml(r.actual || "")}</code></div>
                  </div>
                ` : ""}
              </div>
            `).join("")}
          </div>
        `;
      }

      if (evaluation.allPassed) {
        StorageService.markQuestionSolved(this.currentQuestionId, code);
      } else {
        StorageService.recordQuestionAttempt(this.currentQuestionId, "Failed", code);
      }

      this.renderHeaderStats();
    } catch (err) {
      if (testsPanel) {
        testsPanel.innerHTML = `<span style='color: var(--accent-rose);'>Evaluation error: ${err.message}</span>`;
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = "Submit Code";
      }
    }
  },

  // Open any code snippet in Compiler Playground
  openInCompiler(codeSnippet) {
    this.switchView("compiler");
    const editor = document.getElementById("standaloneCodeEditor");
    const lineNums = document.getElementById("standaloneLineNumbers");
    if (editor) {
      editor.value = codeSnippet;
      this.updateLineNumbers(editor, lineNums);
    }
  },

  // Standalone Compiler Setup
  setupStandaloneCompiler() {
    const editor = document.getElementById("standaloneCodeEditor");
    const lineNums = document.getElementById("standaloneLineNumbers");
    const runBtn = document.getElementById("standaloneRunBtn");
    const templateSelect = document.getElementById("standaloneTemplateSelect");

    const templates = {
      hello: `#include <iostream>

int main() {
    std::cout << "Namaste C++! Running on GCC." << std::endl;
    return 0;
}`,
      fastio: `#include <iostream>
using namespace std;

int main() {
    // Fast I/O
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        cout << "Received n = " << n << "\\n";
    }
    return 0;
}`,
      vector: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> nums = {50, 20, 10, 40, 30};
    std::sort(nums.begin(), nums.end());

    std::cout << "Sorted Vector: ";
    for (int x : nums) std::cout << x << " ";
    std::cout << "\\n";
    return 0;
}`,
      class: `#include <iostream>
#include <string>

class Student {
private:
    std::string name;
    int roll;

public:
    Student(std::string n, int r) : name(n), roll(r) {}

    void display() const {
        std::cout << "Student: " << name << ", Roll No: " << roll << "\\n";
    }
};

int main() {
    Student s1("Rahul", 101);
    s1.display();
    return 0;
}`
    };

    if (editor) {
      editor.value = templates.hello;
      this.updateLineNumbers(editor, lineNums);

      editor.oninput = () => this.updateLineNumbers(editor, lineNums);
      editor.onkeydown = (e) => {
        if (e.key === "Tab") {
          e.preventDefault();
          const start = editor.selectionStart;
          const end = editor.selectionEnd;
          editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);
          editor.selectionStart = editor.selectionEnd = start + 4;
          this.updateLineNumbers(editor, lineNums);
        } else if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
          e.preventDefault();
          this.runStandaloneCode();
        }
      };
      editor.onscroll = () => {
        if (lineNums) lineNums.scrollTop = editor.scrollTop;
      };
    }

    if (templateSelect) {
      templateSelect.onchange = (e) => {
        const t = templates[e.target.value];
        if (t && editor) {
          editor.value = t;
          this.updateLineNumbers(editor, lineNums);
        }
      };
    }

    if (runBtn) runBtn.onclick = () => this.runStandaloneCode();
  },

  async runStandaloneCode() {
    const editor = document.getElementById("standaloneCodeEditor");
    const stdinBox = document.getElementById("standaloneStdin");
    const stdoutBox = document.getElementById("standaloneStdout");
    const runBtn = document.getElementById("standaloneRunBtn");

    if (!editor || !stdoutBox) return;

    stdoutBox.innerHTML = "<span style='color: var(--accent-cyan);'>Compiling & running...</span>";
    if (runBtn) {
      runBtn.disabled = true;
      runBtn.innerText = "Running...";
    }

    try {
      const res = await CompilerService.runCode(editor.value, stdinBox ? stdinBox.value : "");
      if (res.success) {
        stdoutBox.innerHTML = `
          <div style="color: var(--accent-emerald); font-size: 0.75rem; margin-bottom: 6px;">
            Execution: ${res.status} | Time: ${res.executionTimeMs}ms
          </div>
          <pre style="color: #f8fafc; font-family: var(--font-mono); white-space: pre-wrap;">${this.escapeHtml(res.stdout || "(Empty output)")}</pre>
        `;
      } else {
        stdoutBox.innerHTML = `
          <div style="color: var(--accent-rose); font-weight: 700; margin-bottom: 6px;">${res.status}</div>
          <pre style="color: #fecdd3; font-family: var(--font-mono); font-size: 0.8rem; white-space: pre-wrap;">${this.escapeHtml(res.stderr)}</pre>
        `;
      }
    } catch (err) {
      stdoutBox.innerHTML = `<span style='color: var(--accent-rose);'>Execution Error: ${err.message}</span>`;
    } finally {
      if (runBtn) {
        runBtn.disabled = false;
        runBtn.innerText = "Run Code ⚡";
      }
    }
  },

  // Question Bank List & Filters
  renderQuestionsList() {
    const tbody = document.getElementById("questionsTableBody");
    if (!tbody) return;

    const searchInput = document.getElementById("qSearchInput");
    const diffSelect = document.getElementById("qDiffFilter");
    const typeSelect = document.getElementById("qTypeFilter");
    const topicSelect = document.getElementById("qTopicFilter");
    const statusSelect = document.getElementById("qStatusFilter");

    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const diff = diffSelect ? diffSelect.value : "ALL";
    const type = typeSelect ? typeSelect.value : "ALL";
    const topic = topicSelect ? topicSelect.value : "ALL";
    const status = statusSelect ? statusSelect.value : "ALL";

    const filtered = QUESTIONS_DATA.filter(q => {
      const matchQuery = !query || q.title.toLowerCase().includes(query) || q.topic.toLowerCase().includes(query);
      const matchDiff = diff === "ALL" || q.difficulty.toUpperCase() === diff.toUpperCase();
      const matchType = type === "ALL" || (q.type && q.type.toLowerCase().includes(type.toLowerCase()));
      const matchTopic = topic === "ALL" || (q.topic && q.topic.toLowerCase().includes(topic.toLowerCase()));
      const isSolved = StorageService.isQuestionSolved(q.id);
      const matchStatus = status === "ALL" || (status === "SOLVED" && isSolved) || (status === "UNSOLVED" && !isSolved);
      return matchQuery && matchDiff && matchType && matchTopic && matchStatus;
    });

    tbody.innerHTML = filtered.map((q, idx) => {
      const isSolved = StorageService.isQuestionSolved(q.id);
      const isBkmk = StorageService.isQuestionBookmarked(q.id);

      return `
        <tr>
          <td style="color: var(--text-muted); font-size: 0.8rem;">${idx + 1}</td>
          <td>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="color: ${isSolved ? 'var(--accent-emerald)' : 'var(--text-muted)'}; font-size: 0.9rem;">
                ${isSolved ? "✓" : "○"}
              </span>
              <a href="#" style="color: var(--text-primary); font-weight: 600; text-decoration: none;" onclick="App.openQuestion('${q.id}'); return false;">
                ${q.title}
              </a>
              <span style="font-size: 0.7rem; background: rgba(56, 189, 248, 0.1); color: var(--accent-cyan); padding: 1px 6px; border-radius: 3px;">
                ${q.type || "coding"}
              </span>
            </div>
          </td>
          <td><span class="difficulty-badge ${q.difficulty.toLowerCase()}">${q.difficulty}</span></td>
          <td style="color: var(--text-secondary); font-size: 0.8125rem;">${q.topic}</td>
          <td>
            <button class="btn btn-secondary" style="font-size: 0.75rem; padding: 4px 10px;" onclick="App.openQuestion('${q.id}')">
              Solve &rarr;
            </button>
          </td>
        </tr>
      `;
    }).join("");

    // Setup filter change events
    if (searchInput) searchInput.oninput = () => this.renderQuestionsList();
    if (diffSelect) diffSelect.onchange = () => this.renderQuestionsList();
    if (typeSelect) typeSelect.onchange = () => this.renderQuestionsList();
    if (topicSelect) topicSelect.onchange = () => this.renderQuestionsList();
    if (statusSelect) statusSelect.onchange = () => this.renderQuestionsList();
  },

  // Revision View (Bookmarked Lessons, Bookmarked Questions, Revision Queue)
  renderRevisionView() {
    const lessonsWrap = document.getElementById("revisionBookmarkedLessons");
    const questionsWrap = document.getElementById("revisionBookmarkedQuestions");
    const failedWrap = document.getElementById("revisionFailedAttempts");

    // 1. Bookmarked Lessons
    if (lessonsWrap) {
      const bkmkLessonIds = Object.keys(StorageService.state.bookmarkedLessons);
      if (bkmkLessonIds.length > 0) {
        lessonsWrap.innerHTML = bkmkLessonIds.map(lId => {
          const lesson = LESSONS_DATA[lId];
          const chapter = CHAPTERS_DATA.find(c => c.lessons.some(l => l.id === lId));
          return `
            <div class="chapter-card">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <span class="ch-badge">Ch ${chapter ? chapter.number : ""}</span>
                  <strong style="margin-left: 8px;">${lesson ? lesson.title : lId}</strong>
                </div>
                <button class="btn btn-secondary" onclick="App.openLesson('${chapter ? chapter.id : 'ch-01'}', '${lId}')">Review &rarr;</button>
              </div>
            </div>
          `;
        }).join("");
      } else {
        lessonsWrap.innerHTML = "<p style='color: var(--text-muted);'>No lessons bookmarked yet. Click 'Bookmark' while reading any lesson.</p>";
      }
    }

    // 2. Bookmarked Questions
    if (questionsWrap) {
      const bkmkQuestionIds = Object.keys(StorageService.state.bookmarkedQuestions);
      const bkmkQuestions = bkmkQuestionIds.map(qId => QUESTIONS_DATA.find(q => q.id === qId)).filter(Boolean);
      if (bkmkQuestions.length > 0) {
        questionsWrap.innerHTML = bkmkQuestions.map(q => `
          <div class="chapter-card">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span class="difficulty-badge ${q.difficulty.toLowerCase()}">${q.difficulty}</span>
                <strong style="margin-left: 8px;">${q.title}</strong>
              </div>
              <button class="btn btn-primary" onclick="App.openQuestion('${q.id}')">Practice &rarr;</button>
            </div>
          </div>
        `).join("");
      } else {
        questionsWrap.innerHTML = "<p style='color: var(--text-muted);'>No questions bookmarked yet.</p>";
      }
    }

    // 3. Failed / Revision Queue
    if (failedWrap) {
      const revQueueIds = Object.keys(StorageService.state.revisionQueue);
      const revQuestions = revQueueIds.map(qId => QUESTIONS_DATA.find(q => q.id === qId)).filter(Boolean);
      if (revQuestions.length > 0) {
        failedWrap.innerHTML = revQuestions.map(q => `
          <div class="chapter-card" style="border-left: 4px solid var(--accent-rose);">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span class="difficulty-badge ${q.difficulty.toLowerCase()}">${q.difficulty}</span>
                <strong style="margin-left: 8px;">${q.title}</strong>
                <div style="font-size: 0.775rem; color: var(--accent-rose); margin-top: 4px;">
                  Failed in previous submission (${StorageService.state.revisionQueue[q.id].reason})
                </div>
              </div>
              <button class="btn btn-primary" onclick="App.openQuestion('${q.id}')">Try Again 🔄</button>
            </div>
          </div>
        `).join("");
      } else {
        failedWrap.innerHTML = "<p style='color: var(--accent-emerald);'>All attempted questions solved! Great job!</p>";
      }
    }

    // 4. Topic Quizzes & Scores
    const quizScoresWrap = document.getElementById("revisionQuizScores");
    if (quizScoresWrap) {
      const quizScores = StorageService.state.quizScores || {};
      const lessonIds = Object.keys(quizScores);
      if (lessonIds.length > 0) {
        quizScoresWrap.innerHTML = lessonIds.map(lId => {
          const qData = quizScores[lId];
          const lesson = LESSONS_DATA[lId];
          const chapter = CHAPTERS_DATA.find(c => c.lessons.some(l => l.id === lId));
          return `
            <div class="chapter-card" style="border-left: 4px solid var(--accent-emerald);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <span class="ch-badge">Ch ${chapter ? chapter.number : ""}</span>
                  <strong style="margin-left: 8px;">${lesson ? lesson.title : lId}</strong>
                  <div style="font-size: 0.8rem; margin-top: 4px;">
                    Score: <strong style="color: var(--accent-emerald);">${qData.score} / ${qData.total} (${qData.percentage}%)</strong>
                    <span style="color: var(--text-muted); margin-left: 8px;">Recorded</span>
                  </div>
                </div>
                <button class="btn btn-secondary" onclick="App.openLesson('${chapter ? chapter.id : 'ch-01'}', '${lId}'); App.switchLessonTab('quiz');">
                  Retake Quiz 🔄
                </button>
              </div>
            </div>
          `;
        }).join("");
      } else {
        quizScoresWrap.innerHTML = "<p style='color: var(--text-muted);'>No quizzes completed yet. Complete a lesson quiz to track your mastery scores here!</p>";
      }
    }
  },

  // Global Search Modal Controller
  executeGlobalSearch(query) {
    const resultsContainer = document.getElementById("globalSearchResults");
    if (!resultsContainer) return;

    const q = query.toLowerCase().trim();
    if (!q) {
      resultsContainer.innerHTML = "<div style='color: var(--text-muted); padding: 16px; text-align: center;'>Type a keyword (e.g. pointer, loop, vector, binary search)...</div>";
      return;
    }

    // Search in Chapters
    const matchingChapters = CHAPTERS_DATA.filter(ch => ch.title.toLowerCase().includes(q) || ch.description.toLowerCase().includes(q));

    // Search in Lessons
    const matchingLessons = [];
    CHAPTERS_DATA.forEach(ch => {
      ch.lessons.forEach(les => {
        if (les.title.toLowerCase().includes(q)) {
          matchingLessons.push({ chapter: ch, lesson: les });
        }
      });
    });

    // Search in Questions
    const matchingQuestions = QUESTIONS_DATA.filter(qu => qu.title.toLowerCase().includes(q) || qu.topic.toLowerCase().includes(q));

    let html = "";

    if (matchingLessons.length > 0) {
      html += `<div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin: 12px 0 6px;">Lessons (${matchingLessons.length})</div>`;
      html += matchingLessons.map(item => `
        <div class="search-result-item" onclick="App.openLesson('${item.chapter.id}', '${item.lesson.id}'); document.getElementById('searchModal').classList.remove('open');">
          <span class="ch-badge">Ch ${item.chapter.number}</span>
          <span style="font-weight: 600; color: var(--text-primary); margin-left: 8px;">${item.lesson.title}</span>
        </div>
      `).join("");
    }

    if (matchingQuestions.length > 0) {
      html += `<div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin: 16px 0 6px;">Coding Problems (${matchingQuestions.length})</div>`;
      html += matchingQuestions.map(qu => `
        <div class="search-result-item" onclick="App.openQuestion('${qu.id}'); document.getElementById('searchModal').classList.remove('open');">
          <span class="difficulty-badge ${qu.difficulty.toLowerCase()}">${qu.difficulty}</span>
          <span style="font-weight: 600; color: var(--text-primary); margin-left: 8px;">${qu.title}</span>
          <span style="color: var(--text-muted); font-size: 0.75rem; margin-left: auto;">${qu.topic}</span>
        </div>
      `).join("");
    }

    if (!html) {
      html = "<div style='color: var(--text-muted); padding: 16px; text-align: center;'>No matches found for \"" + this.escapeHtml(query) + "\"</div>";
    }

    resultsContainer.innerHTML = html;
  },

  // Settings Modal Controller
  openSettingsModal() {
    const modal = document.getElementById("settingsModal");
    if (!modal) return;

    modal.classList.add("open");

    const exportBtn = document.getElementById("settingsExportBtn");
    const importBtn = document.getElementById("settingsImportBtn");
    const resetBtn = document.getElementById("settingsResetBtn");
    const testCompilerBtn = document.getElementById("settingsTestCompilerBtn");
    const testResultEl = document.getElementById("settingsCompilerTestResult");

    if (exportBtn) {
      exportBtn.onclick = () => {
        const json = StorageService.exportProgressJSON();
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `cppmastery_backup_${new Date().toISOString().split("T")[0]}.json`;
        a.click();
      };
    }

    if (importBtn) {
      importBtn.onclick = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.onchange = (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              if (StorageService.importProgressJSON(event.target.result)) {
                alert("Progress imported successfully!");
                location.reload();
              } else {
                alert("Invalid progress file.");
              }
            };
            reader.readAsText(file);
          }
        };
        input.click();
      };
    }

    if (resetBtn) {
      resetBtn.onclick = () => {
        if (confirm("Are you sure you want to reset all your learning progress? This action cannot be undone.")) {
          StorageService.resetAllProgress();
          location.reload();
        }
      };
    }

    if (testCompilerBtn) {
      testCompilerBtn.onclick = async () => {
        testResultEl.innerHTML = "<span style='color: var(--accent-cyan);'>Testing live C++ compiler connection...</span>";
        try {
          const testCode = `#include <iostream>\nint main() { std::cout << "COMPILER_OK"; return 0; }`;
          const res = await CompilerService.runCode(testCode);
          if (res.success && res.stdout.includes("COMPILER_OK")) {
            testResultEl.innerHTML = "<span style='color: var(--accent-emerald);'>✅ Compiler Online! Real GCC 10.2.0 execution verified.</span>";
          } else {
            testResultEl.innerHTML = `<span style='color: var(--accent-rose);'>❌ Test failed: ${res.stderr || "Unknown"}</span>`;
          }
        } catch (e) {
          testResultEl.innerHTML = `<span style='color: var(--accent-rose);'>❌ Network Error: ${e.message}</span>`;
        }
      };
    }
  },

  closeSettingsModal() {
    const modal = document.getElementById("settingsModal");
    if (modal) modal.classList.remove("open");
  },

  // Helpers
  escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },

  escapeForJsString(str) {
    if (typeof str !== "string") return "";
    return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
  },

  formatMarkdown(text) {
    if (!text) return "";
    return text
      .replace(/### (.*)/g, '<h3 style="font-size: 1.25rem; font-weight: 700; margin: 24px 0 10px; color: var(--text-primary);">$1</h3>')
      .replace(/## (.*)/g, '<h2 style="font-size: 1.5rem; font-weight: 800; margin: 32px 0 14px; color: var(--text-primary);">$1</h2>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n\n/g, '<p style="margin-bottom: 14px;"></p>');
  }
};

window.addEventListener("DOMContentLoaded", () => {
  App.init();
});
