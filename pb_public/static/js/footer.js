const Footer = {
  mountPointId: 'app-footer',

  render() {
    const container = document.getElementById(this.mountPointId);
    if (!container) {
      const footers = document.getElementsByTagName('footer');
      if (footers.length > 0) {
        this.renderTo(footers[0]);
      }
      return;
    }
    this.renderTo(container);
  },

  renderTo(element) {
    const year = new Date().getFullYear();
    const currentLang = typeof NavBar !== 'undefined' ? NavBar.getLang() : 'en';
    const isZh = currentLang === 'zh';

    element.className = "mt-auto py-6 border-t border-gray-100 bg-white";
    element.innerHTML = `
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex flex-col items-center md:items-start gap-3">
            <div class="flex items-center gap-2 font-display font-bold text-lg">
              <span class="text-xl">⚗️</span>
              <span>Lab</span>
            </div>
            <p class="text-xs text-gray-500 max-w-xs text-center md:text-left leading-relaxed">
              ${isZh ? '一个由 AI 驱动的原生产品实验室，探索协作边界。' : 'An AI-native product lab exploring collaboration boundaries.'}
            </p>
          </div>
          
          <div class="flex gap-6 text-sm font-medium">
            <a href="/#/" class="text-gray-600 hover:text-black transition-colors">${isZh ? '首页' : 'Home'}</a>
            <a href="/#/experiments" class="text-gray-600 hover:text-black transition-colors">${isZh ? '实验' : 'Experiments'}</a>
            <a href="/elog/#/" class="text-gray-600 hover:text-black transition-colors">${isZh ? '日志' : 'Logs'}</a>
            <a href="https://github.com/lab-travis-wang/lab" target="_blank" class="text-gray-600 hover:text-black transition-colors">GitHub</a>
          </div>
        </div>
        
        <div class="mt-6 pt-4 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 text-center md:text-left">
          <p>&copy; ${year} Travis Wang. ${isZh ? '由 AI 深度参与构建。' : 'Built with deep AI participation.'}</p>
        </div>
      </div>
    `;
  }
};

// Auto-render if possible
window.addEventListener('load', () => Footer.render());
window.addEventListener('lang-change', () => Footer.render());
