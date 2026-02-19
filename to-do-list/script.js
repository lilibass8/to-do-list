(() => {
  const storageKeys = {
    tasks: "ff_tasks",
    theme: "ff_theme",
    lang: "ff_lang",
    timer: "ff_timer_state",
    streak: "ff_streak",
    soundEnabled: "ff_sound_enabled",
  };

  const translations = {
    en: {
      kicker: "Stay organized",
      title: "FocusFlow To‑Do",
      motivationTitle: "Daily motivation",
      statsTotal: "Total tasks",
      statsDone: "Completed",
      statsProgress: "Avg. progress",
      taskForm: "Task details",
      autoSave: "Auto-saved",
      labelTitle: "Title",
      labelCategory: "Category",
      labelPriority: "Priority",
      labelDue: "Due date",
      labelProgress: "Progress",
      labelNotes: "Notes",
      addTask: "Add task",
      updateTask: "Update task",
      reset: "Reset",
      pomodoroTitle: "Pomodoro",
      focusLabel: "Focus",
      start: "Start",
      pause: "Pause",
      focusMins: "Focus (min)",
      breakMins: "Break (min)",
      tasksTitle: "Tasks",
      tasksSubtitle: "Plan, prioritize, progress",
      filterAll: "All categories",
      filterPriority: "Any priority",
      filterStatus: "All",
      filterOpen: "Open",
      filterDone: "Completed",
      empty: "No tasks yet. Add your first one!",
      catStudy: "Study",
      catWork: "Work",
      catPersonal: "Personal",
      catHealth: "Health",
      prioLow: "Low",
      prioMedium: "Medium",
      prioHigh: "High",
      streakTitle: "🔥 Streak",
      streakDays: "days",
      prizeTitle: "Session Complete!",
      prizeClose: "Awesome!",
      currentStreak: "Current streak:",
      prizeMessage1: "Great work! You completed a focus session.",
      prizeMessage2: "Amazing! You're building a strong streak!",
      prizeMessage3: "Incredible! You're on fire! 🔥",
      soundEnabled: "🔔 Sound notifications",
      dayLabel: "Day",
      monthLabel: "Month",
      yearLabel: "Year",
    },
    ar: {
      kicker: "ابق منظماً",
      title: "مهامي",
      motivationTitle: "رسالة اليوم",
      statsTotal: "إجمالي المهام",
      statsDone: "المكتملة",
      statsProgress: "متوسط التقدم",
      taskForm: "تفاصيل المهمة",
      autoSave: "حفظ تلقائي",
      labelTitle: "العنوان",
      labelCategory: "الفئة",
      labelPriority: "الأولوية",
      labelDue: "تاريخ الاستحقاق",
      labelProgress: "نسبة الإنجاز",
      labelNotes: "ملاحظات",
      addTask: "إضافة مهمة",
      updateTask: "تحديث المهمة",
      reset: "إعادة ضبط",
      pomodoroTitle: "مؤقت بومودورو",
      focusLabel: "تركيز",
      start: "ابدأ",
      pause: "إيقاف",
      focusMins: "التركيز (دقائق)",
      breakMins: "استراحة (دقائق)",
      tasksTitle: "المهام",
      tasksSubtitle: "خطط ورتب وتقدم",
      filterAll: "كل الفئات",
      filterPriority: "أي أولوية",
      filterStatus: "الكل",
      filterOpen: "مفتوحة",
      filterDone: "مكتملة",
      empty: "لا توجد مهام بعد. أضف الأولى!",
      catStudy: "دراسة",
      catWork: "عمل",
      catPersonal: "شخصية",
      catHealth: "صحة",
      prioLow: "منخفضة",
      prioMedium: "متوسطة",
      prioHigh: "مرتفعة",
      streakTitle: "🔥 سلسلة",
      streakDays: "أيام",
      prizeTitle: "اكتملت الجلسة!",
      prizeClose: "رائع!",
      currentStreak: "السلسلة الحالية:",
      prizeMessage1: "عمل رائع! أكملت جلسة تركيز.",
      prizeMessage2: "مذهل! أنت تبني سلسلة قوية!",
      prizeMessage3: "لا يصدق! أنت في قمة الأداء! 🔥",
      soundEnabled: "🔔 إشعارات صوتية",
      dayLabel: "يوم",
      monthLabel: "شهر",
      yearLabel: "سنة",
    },
  };

  const elements = {
    form: document.getElementById("task-form"),
    title: document.getElementById("title"),
    category: document.getElementById("category"),
    priority: document.getElementById("priority"),
    due: document.getElementById("due"),
    dueDay: document.getElementById("due-day"),
    dueMonth: document.getElementById("due-month"),
    dueYear: document.getElementById("due-year"),
    progress: document.getElementById("progress"),
    progressValue: document.getElementById("progress-value"),
    notes: document.getElementById("notes"),
    saveBtn: document.getElementById("save-btn"),
    resetBtn: document.getElementById("reset-btn"),
    list: document.getElementById("task-list"),
    empty: document.getElementById("empty-state"),
    search: document.getElementById("search"),
    filterCategory: document.getElementById("filter-category"),
    filterPriority: document.getElementById("filter-priority"),
    filterStatus: document.getElementById("filter-status"),
    statTotal: document.getElementById("stat-total"),
    statDone: document.getElementById("stat-done"),
    statProgress: document.getElementById("stat-progress"),
    motivationText: document.getElementById("motivation-text"),
    langToggle: document.getElementById("lang-toggle"),
    themeToggle: document.getElementById("theme-toggle"),
    timerLabel: document.getElementById("timer-label"),
    timerValue: document.getElementById("timer-value"),
    timerMode: document.getElementById("pomodoro-mode"),
    startTimer: document.getElementById("start-timer"),
    pauseTimer: document.getElementById("pause-timer"),
    resetTimer: document.getElementById("reset-timer"),
    focusMin: document.getElementById("focus-min"),
    breakMin: document.getElementById("break-min"),
    soundEnabled: document.getElementById("sound-enabled"),
    statStreak: document.getElementById("stat-streak"),
    prizeModal: document.getElementById("prize-modal"),
    prizeTitle: document.getElementById("prize-title"),
    prizeMessage: document.getElementById("prize-message"),
    prizeStreakCount: document.getElementById("prize-streak-count"),
    prizeClose: document.getElementById("prize-close"),
  };

  const messages = [
    { en: "Small steps daily lead to big wins.", ar: "الخطوات الصغيرة يومياً تصنع إنجازاً كبيراً." },
    { en: "Progress, not perfection.", ar: "التقدم أهم من الكمال." },
    { en: "You’re closer than you think.", ar: "أنت أقرب مما تتخيل." },
    { en: "One focused hour beats a day of distraction.", ar: "ساعة تركيز تغني عن يوم مشتت." },
    { en: "Done is better than perfect.", ar: "الإنجاز أفضل من المثالية." },
  ];

  let state = {
    tasks: [],
    editingId: null,
    lang: localStorage.getItem(storageKeys.lang) || "en",
    theme: localStorage.getItem(storageKeys.theme) || "light",
    streak: 0,
    lastSessionDate: null,
    soundEnabled: localStorage.getItem(storageKeys.soundEnabled) !== "false", // default true
  };

  // Pomodoro state
  let timer = {
    isRunning: false,
    isFocus: true,
    remaining: 25 * 60,
    interval: null,
  };

  const savedTasks = localStorage.getItem(storageKeys.tasks);
  if (savedTasks) {
    state.tasks = JSON.parse(savedTasks);
  }

  // Load streak data
  const savedStreak = localStorage.getItem(storageKeys.streak);
  if (savedStreak) {
    try {
      const streakData = JSON.parse(savedStreak);
      state.streak = streakData.streak || 0;
      state.lastSessionDate = streakData.lastSessionDate || null;
    } catch (_) {
      /* ignore */
    }
  }

  // --- UI helpers ---
  function saveTasks() {
    localStorage.setItem(storageKeys.tasks, JSON.stringify(state.tasks));
  }

  function setTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    localStorage.setItem(storageKeys.theme, state.theme);
    elements.themeToggle.querySelector(".theme-icon").textContent = theme === "dark" ? "🌙" : "🌞";
  }

  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem(storageKeys.lang, lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    applyTranslations();
    renderTasks();
    setMotivation();
  }

  function applyTranslations() {
    const dict = translations[state.lang];
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (dict[key]) node.textContent = dict[key];
    });
    elements.title.placeholder = state.lang === "ar" ? "مثلاً: قراءة 10 صفحات" : "e.g. Read 10 pages";
    elements.search.placeholder = state.lang === "ar" ? "ابحث عن المهام…" : "Search tasks…";
    elements.saveBtn.textContent = state.editingId ? dict.updateTask : dict.addTask;
    updateStreakDisplay();
  }

  function setMotivation() {
    const idx = new Date().getDate() % messages.length;
    elements.motivationText.textContent = messages[idx][state.lang];
  }

  // --- Task operations ---
  function addTask(task) {
    state.tasks.push(task);
    saveTasks();
    renderTasks();
  }

  function updateTask(id, updates) {
    state.tasks = state.tasks.map((t) => (t.id === id ? { ...t, ...updates } : t));
    saveTasks();
    renderTasks();
  }

  function deleteTask(id) {
    state.tasks = state.tasks.filter((t) => t.id !== id);
    saveTasks();
    renderTasks();
  }

  function reorderTasks(orderIds) {
    const map = new Map(state.tasks.map((t) => [t.id, t]));
    state.tasks = orderIds.map((id) => map.get(id)).filter(Boolean);
    saveTasks();
    renderTasks();
  }

  // --- Rendering ---
  function renderTasks() {
    const query = elements.search.value.trim().toLowerCase();
    const cat = elements.filterCategory.value;
    const prio = elements.filterPriority.value;
    const status = elements.filterStatus.value;

    let filtered = state.tasks.filter((task) => {
      const matchesQuery =
        !query ||
        task.title.toLowerCase().includes(query) ||
        (task.notes && task.notes.toLowerCase().includes(query));
      const matchesCat = !cat || task.category === cat;
      const matchesPrio = !prio || task.priority === prio;
      const matchesStatus =
        !status ||
        (status === "done" && task.completed) ||
        (status === "open" && !task.completed);
      return matchesQuery && matchesCat && matchesPrio && matchesStatus;
    });

    elements.list.innerHTML = "";
    elements.empty.style.display = filtered.length ? "none" : "block";

    filtered.forEach((task) => {
      const li = document.createElement("li");
      li.className = "task-item";
      li.draggable = true;
      li.dataset.id = task.id;

      const main = document.createElement("div");
      main.className = "task-main";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => {
        updateTask(task.id, { completed: checkbox.checked });
      });

      const info = document.createElement("div");
      info.className = "task-info";

      const title = document.createElement("p");
      title.className = "task-title";
      title.textContent = task.title;
      if (task.completed) title.style.textDecoration = "line-through";

      const meta = document.createElement("div");
      meta.className = "task-meta";
      meta.innerHTML = `
        <span class="meta category">${task.category}</span>
        <span class="meta priority-${task.priority}">${task.priority}</span>
        ${task.due ? `<span class="meta">${task.due}</span>` : ""}
      `;

      const progress = document.createElement("div");
      progress.className = "task-progress";
      progress.innerHTML = `
        <div class="progress-bar"><div class="progress-fill" style="width:${task.progress}%"></div></div>
        <span>${task.progress}%</span>
      `;

      if (task.notes) {
        const notes = document.createElement("p");
        notes.className = "task-notes";
        notes.style.color = "var(--muted)";
        notes.style.margin = "6px 0 0";
        notes.textContent = task.notes;
        info.append(title, meta, progress, notes);
      } else {
        info.append(title, meta, progress);
      }

      main.append(checkbox, info);

      const actions = document.createElement("div");
      actions.className = "task-actions";

      const editBtn = document.createElement("button");
      editBtn.className = "ghost";
      editBtn.textContent = state.lang === "ar" ? "تعديل" : "Edit";
      editBtn.addEventListener("click", () => startEdit(task));

      const delBtn = document.createElement("button");
      delBtn.className = "danger";
      delBtn.textContent = state.lang === "ar" ? "حذف" : "Delete";
      delBtn.addEventListener("click", () => deleteTask(task.id));

      actions.append(editBtn, delBtn);

      li.append(main, actions);

      // drag and drop
      li.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", task.id);
        li.classList.add("dragging");
      });
      li.addEventListener("dragend", () => li.classList.remove("dragging"));
      li.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        if (!dragging || dragging === li) return;
        const items = [...elements.list.children];
        const draggingIndex = items.indexOf(dragging);
        const currentIndex = items.indexOf(li);
        if (draggingIndex < currentIndex) {
          elements.list.insertBefore(li, dragging);
        } else {
          elements.list.insertBefore(dragging, li);
        }
      });
      li.addEventListener("drop", () => {
        const ids = [...elements.list.children].map((n) => n.dataset.id);
        reorderTasks(ids);
      });

      elements.list.appendChild(li);
    });

    updateStats();
  }

  function updateStats() {
    const total = state.tasks.length;
    const done = state.tasks.filter((t) => t.completed).length;
    const avg =
      total === 0 ? 0 : Math.round(state.tasks.reduce((sum, t) => sum + Number(t.progress || 0), 0) / total);
    elements.statTotal.textContent = total;
    elements.statDone.textContent = done;
    elements.statProgress.textContent = `${avg}%`;
    updateStreakDisplay();
  }

  function updateStreakDisplay() {
    const dict = translations[state.lang];
    elements.statStreak.innerHTML = `${state.streak} <span data-i18n="streakDays">${dict.streakDays}</span>`;
  }

  function saveStreak() {
    localStorage.setItem(
      storageKeys.streak,
      JSON.stringify({
        streak: state.streak,
        lastSessionDate: state.lastSessionDate,
      })
    );
  }

  function updateStreak() {
    const today = new Date().toDateString();
    const lastDate = state.lastSessionDate ? new Date(state.lastSessionDate).toDateString() : null;

    if (lastDate === today) {
      // Already completed a session today, don't increment
      return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    if (lastDate === yesterdayStr) {
      // Consecutive day - increment streak
      state.streak += 1;
    } else if (lastDate === null) {
      // First session ever
      state.streak = 1;
    } else {
      // Streak broken - reset to 1
      state.streak = 1;
    }

    state.lastSessionDate = today;
    saveStreak();
    updateStreakDisplay();
  }

  function showPrize() {
    updateStreak();
    const dict = translations[state.lang];
    
    let message;
    if (state.streak === 1) {
      message = dict.prizeMessage1;
    } else if (state.streak < 7) {
      message = dict.prizeMessage2;
    } else {
      message = dict.prizeMessage3;
    }

    elements.prizeMessage.textContent = message;
    elements.prizeStreakCount.textContent = state.streak;
    elements.prizeModal.style.display = "flex";
  }

  function hidePrize() {
    elements.prizeModal.style.display = "none";
  }

  // --- Form helpers ---
  function resetForm() {
    elements.form.reset();
    elements.progress.value = 0;
    elements.progressValue.textContent = "0%";
    elements.dueDay.value = "";
    elements.dueMonth.value = "";
    elements.dueYear.value = "";
    elements.due.value = "";
    state.editingId = null;
    elements.saveBtn.textContent = translations[state.lang].addTask;
  }

  function formatDateString(day, month, year) {
    if (!day || !month || !year) return "";
    const d = String(day).padStart(2, "0");
    const m = String(month).padStart(2, "0");
    return `${d}/${m}/${year}`;
  }

  function updateDateField() {
    const day = elements.dueDay.value;
    const month = elements.dueMonth.value;
    const year = elements.dueYear.value;
    elements.due.value = formatDateString(day, month, year);
  }

  function parseDateString(dateStr) {
    if (!dateStr) return { day: "", month: "", year: "" };
    const parts = dateStr.split("/");
    return {
      day: parts[0] || "",
      month: parts[1] || "",
      year: parts[2] || "",
    };
  }

  function startEdit(task) {
    state.editingId = task.id;
    elements.title.value = task.title;
    elements.category.value = task.category;
    elements.priority.value = task.priority;
    const dateValue = task.due || "";
    const parsed = parseDateString(dateValue);
    elements.dueDay.value = parsed.day;
    elements.dueMonth.value = parsed.month;
    elements.dueYear.value = parsed.year;
    elements.due.value = dateValue;
    elements.progress.value = task.progress;
    elements.progressValue.textContent = `${task.progress}%`;
    elements.notes.value = task.notes || "";
    elements.saveBtn.textContent = translations[state.lang].updateTask;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // --- Pomodoro ---
  function loadTimerState() {
    const raw = localStorage.getItem(storageKeys.timer);
    if (!raw) return;
    try {
      const saved = JSON.parse(raw);
      timer = { ...timer, ...saved, interval: null, isRunning: false };
      updateTimerDisplay();
    } catch (_) {
      /* ignore */
    }
  }

  function saveTimerState() {
    const payload = { isFocus: timer.isFocus, remaining: timer.remaining };
    localStorage.setItem(storageKeys.timer, JSON.stringify(payload));
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  }

  function updateTimerDisplay() {
    elements.timerLabel.textContent = timer.isFocus
      ? translations[state.lang].focusLabel
      : state.lang === "ar"
      ? "استراحة"
      : "Break";
    elements.timerValue.textContent = formatTime(timer.remaining);
    elements.timerMode.textContent = formatTime(
      timer.isFocus ? Number(elements.focusMin.value) * 60 : Number(elements.breakMin.value) * 60
    );
  }

  function startTimer() {
    if (timer.isRunning) return;
    timer.isRunning = true;
    timer.interval = setInterval(() => {
      timer.remaining -= 1;
      if (timer.remaining <= 0) {
        switchPhase();
      }
      updateTimerDisplay();
      saveTimerState();
    }, 1000);
  }

  function pauseTimer() {
    timer.isRunning = false;
    clearInterval(timer.interval);
  }

  // --- Sound functions ---
  function playSound(type = "complete") {
    if (!state.soundEnabled) return;

    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      let frequency, duration;
      if (type === "complete") {
        // Success sound - ascending tones
        frequency = 523.25; // C5
        duration = 0.3;
      } else if (type === "break") {
        // Break sound - gentle chime
        frequency = 392; // G4
        duration = 0.4;
      } else {
        // Default notification
        frequency = 440; // A4
        duration = 0.2;
      }

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = type === "complete" ? "sine" : "sine";

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);

      // Play multiple tones for completion sound
      if (type === "complete") {
        setTimeout(() => {
          const osc2 = audioContext.createOscillator();
          const gain2 = audioContext.createGain();
          osc2.connect(gain2);
          gain2.connect(audioContext.destination);
          osc2.frequency.value = 659.25; // E5
          osc2.type = "sine";
          gain2.gain.setValueAtTime(0.3, audioContext.currentTime);
          gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
          osc2.start(audioContext.currentTime);
          osc2.stop(audioContext.currentTime + duration);
        }, 150);

        setTimeout(() => {
          const osc3 = audioContext.createOscillator();
          const gain3 = audioContext.createGain();
          osc3.connect(gain3);
          gain3.connect(audioContext.destination);
          osc3.frequency.value = 783.99; // G5
          osc3.type = "sine";
          gain3.gain.setValueAtTime(0.3, audioContext.currentTime);
          gain3.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
          osc3.start(audioContext.currentTime);
          osc3.stop(audioContext.currentTime + duration);
        }, 300);
      }
    } catch (error) {
      console.log("Sound playback not available:", error);
    }
  }

  function switchPhase() {
    const nextIsFocus = !timer.isFocus;
    
    // If completing a focus session (going from focus to break), show prize and play sound
    if (timer.isFocus && !nextIsFocus) {
      pauseTimer();
      playSound("complete");
      showPrize();
    } else if (!timer.isFocus && nextIsFocus) {
      // Break ended, starting focus
      playSound("break");
    }
    
    timer.isFocus = nextIsFocus;
    timer.remaining = (nextIsFocus ? Number(elements.focusMin.value) : Number(elements.breakMin.value)) * 60;
    
    if (nextIsFocus) {
      const message = state.lang === "ar" ? "حان وقت التركيز!" : "Focus time!";
      // Only show alert if prize modal is not showing
      if (elements.prizeModal.style.display === "none") {
        alert(message);
      }
    }
  }

  function resetTimer() {
    pauseTimer();
    timer.isFocus = true;
    timer.remaining = Number(elements.focusMin.value) * 60;
    updateTimerDisplay();
    saveTimerState();
  }

  // --- Events ---
  elements.progress.addEventListener("input", () => {
    elements.progressValue.textContent = `${elements.progress.value}%`;
  });

  elements.dueDay.addEventListener("input", updateDateField);
  elements.dueMonth.addEventListener("input", updateDateField);
  elements.dueYear.addEventListener("input", updateDateField);

  elements.form.addEventListener("submit", (e) => {
    e.preventDefault();
    const existing = state.editingId ? state.tasks.find((t) => t.id === state.editingId) : null;
    const task = {
      id: state.editingId || crypto.randomUUID(),
      title: elements.title.value.trim(),
      category: elements.category.value,
      priority: elements.priority.value,
      due: elements.due.value,
      progress: Number(elements.progress.value),
      notes: elements.notes.value.trim(),
      completed: existing ? existing.completed : false,
      createdAt: existing ? existing.createdAt : Date.now(),
    };

    if (!task.title) return;

    if (state.editingId) {
      updateTask(state.editingId, task);
    } else {
      addTask(task);
    }
    resetForm();
  });

  elements.resetBtn.addEventListener("click", resetForm);

  elements.search.addEventListener("input", renderTasks);
  [elements.filterCategory, elements.filterPriority, elements.filterStatus].forEach((el) =>
    el.addEventListener("change", renderTasks)
  );

  elements.langToggle.addEventListener("click", () => setLanguage(state.lang === "en" ? "ar" : "en"));
  elements.themeToggle.addEventListener("click", () => setTheme(state.theme === "light" ? "dark" : "light"));

  [elements.focusMin, elements.breakMin].forEach((input) =>
    input.addEventListener("change", () => {
      if (!timer.isRunning) {
        timer.remaining = (timer.isFocus ? Number(elements.focusMin.value) : Number(elements.breakMin.value)) * 60;
        updateTimerDisplay();
        saveTimerState();
      }
    })
  );

  elements.startTimer.addEventListener("click", startTimer);
  elements.pauseTimer.addEventListener("click", pauseTimer);
  elements.resetTimer.addEventListener("click", resetTimer);

  elements.prizeClose.addEventListener("click", hidePrize);
  elements.prizeModal.addEventListener("click", (e) => {
    if (e.target === elements.prizeModal) {
      hidePrize();
    }
  });

  // Sound toggle
  elements.soundEnabled.checked = state.soundEnabled;
  elements.soundEnabled.addEventListener("change", (e) => {
    state.soundEnabled = e.target.checked;
    localStorage.setItem(storageKeys.soundEnabled, state.soundEnabled);
    // Play a test sound when enabled
    if (state.soundEnabled) {
      playSound("complete");
    }
  });

  // --- Init ---
  setTheme(state.theme);
  setLanguage(state.lang);
  setMotivation();
  loadTimerState();
  updateTimerDisplay();
  updateStreakDisplay();
  renderTasks();
})();
