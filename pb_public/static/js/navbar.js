const NavBar = {
  mountPointId: 'app-header',
  currentLang: 'en',
  activeTab: null,

  init(activeTab = null) {
    this.activeTab = activeTab;

    // Try to get lang from local storage or URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const storedLang = localStorage.getItem('lab_lang');

    if (urlLang && (urlLang === 'zh' || urlLang === 'en')) {
      this.currentLang = urlLang;
    } else if (storedLang) {
      this.currentLang = storedLang;
    } else {
      // Detect browser language
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang && browserLang.toLowerCase().includes('zh')) {
        this.currentLang = 'zh';
      }
    }

    this.render();

    // Expose globally for simplicity
    window.setLang = (lang) => this.setLang(lang);

    // Initial sync for other components
    window.dispatchEvent(new CustomEvent('lang-change', { detail: { lang: this.currentLang, source: 'init' } }));
  },

  setLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('lab_lang', lang);

    // Re-render nav
    this.render();

    // Dispatch event for page content to update
    window.dispatchEvent(new CustomEvent('lang-change', { detail: { lang, source: 'user' } }));
  },

  setTab(tab) {
    this.activeTab = tab;
    this.render();
  },

  getLang() {
    return this.currentLang;
  },

  render() {
    const container = document.getElementById(this.mountPointId);
    if (!container) {
      console.error(`NavBar mount point #${this.mountPointId} not found`);
      return;
    }

    const isZh = this.currentLang === 'zh';
    const experimentsActive = this.activeTab === 'experiments';
    const logsActive = this.activeTab === 'logs';
    const tasksActive = this.activeTab === 'tasks';

    // Modern styling classes
    const navClasses = "sticky top-0 z-50 glass border-b border-gray-100";
    const containerClasses = "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-8";
    const linkBase = "text-sm font-medium text-gray-500 hover:text-black transition-all hover:scale-105";
    const linkActive = "text-sm font-bold text-black border-b-2 border-black pb-1";

    container.className = navClasses;
    container.innerHTML = `
      <div class="${containerClasses}">
        <a href="/#/" class="shrink-0 flex items-center gap-2 font-display font-black text-xl hover:opacity-80 transition-opacity">
          <span class="text-2xl">⚗️</span>
          <span>Lab</span>
        </a>

        <nav class="hidden md:flex items-center gap-8">
          <a href="/#/experiments" class="${experimentsActive ? linkActive : linkBase}">${isZh ? '实验列表' : 'Experiments'}</a>
          <a href="/elog/#/" class="${logsActive ? linkActive : linkBase}">${isZh ? '日志' : 'Logs'}</a>
          <a href="/elog/#/tasks" class="${tasksActive ? linkActive : linkBase}">${isZh ? '任务进度' : 'Tasks'}</a>
        </nav>

        <div class="flex items-center gap-6">
          <a href="https://github.com/lab-travis-wang/lab" target="_blank" class="text-gray-400 hover:text-black transition-colors" title="GitHub">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
          </a>
          
          <div class="relative group">
            <button class="flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-black transition-colors uppercase tracking-widest">
              ${this.currentLang}
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div class="absolute right-0 mt-2 w-32 glass rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right scale-95 group-hover:scale-100 overflow-hidden">
              <button onclick="setLang('zh')" class="w-full text-left px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors">中文 (ZH)</button>
              <button onclick="setLang('en')" class="w-full text-left px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors">English (EN)</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Mobile Nav -->
      <div class="md:hidden border-t border-gray-50 bg-white/50 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div class="flex items-center gap-6 px-6 h-12">
          <a href="/#/experiments" class="${experimentsActive ? linkActive : linkBase}">${isZh ? '实验' : 'Experiments'}</a>
          <a href="/elog/#/" class="${logsActive ? linkActive : linkBase}">${isZh ? '日志' : 'Logs'}</a>
          <a href="/elog/#/tasks" class="${tasksActive ? linkActive : linkBase}">${isZh ? '任务' : 'Tasks'}</a>
        </div>
      </div>
    `;
  }
};
