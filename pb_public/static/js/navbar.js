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
  },

  setLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('lab_lang', lang);

    // Re-render nav
    this.render();

    // Dispatch event for page content to update
    window.dispatchEvent(new CustomEvent('lang-change', { detail: { lang } }));
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
    const homeActive = this.activeTab === 'home';
    const experimentsActive = this.activeTab === 'experiments';
    const logsActive = this.activeTab === 'logs';
    const tasksActive = this.activeTab === 'tasks';

    // Base classes
    const linkBase = "hover:text-black transition-colors";
    const linkActive = "text-black font-bold";

    container.innerHTML = `
      <div class="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <a href="/#/" class="shrink-0 flex items-center gap-2 font-bold text-base sm:text-lg hover:opacity-80 transition-opacity">
          <span class="text-xl">⚗️</span> <span>${isZh ? '实验室' : 'Lab'}</span>
        </a>

        <nav class="flex items-center gap-4 overflow-x-auto text-sm font-medium text-gray-600 px-2" style="scrollbar-width: none; -ms-overflow-style: none;">
          <a href="/#/experiments" class="whitespace-nowrap ${experimentsActive ? linkActive : linkBase}">${isZh ? '实验列表' : 'Experiments'}</a>
          <a href="/elog/#/" class="whitespace-nowrap ${logsActive ? linkActive : linkBase}">${isZh ? '日志' : 'Logs'}</a>
          <a href="/elog/#/tasks" class="whitespace-nowrap ${tasksActive ? linkActive : linkBase}">${isZh ? '进度' : 'Tasks'}</a>
        </nav>

        <div class="shrink-0 flex items-center gap-3 pl-2 border-l border-gray-200 ml-auto">
           <a href="https://github.com/lab-travis-wang/lab" target="_blank" class="text-gray-400 hover:text-black transition-colors" title="GitHub">
             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
           </a>
           
           <div class="relative">
             <select onchange="setLang(this.value)" class="appearance-none bg-transparent pl-2 pr-6 py-1 text-sm font-medium text-gray-600 focus:outline-none cursor-pointer hover:text-black">
               <option value="en" ${!isZh ? 'selected' : ''}>中文</option>
               <option value="zh" ${isZh ? 'selected' : ''}>EN</option>
             </select>
             <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-600">
               <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
             </div>
           </div>
        </div>
      </div>
      `;
  }
};
