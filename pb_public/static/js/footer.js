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

    !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init ts ns yi rs os Qr es capture Hi calculateEventProperties hs register register_once register_for_session unregister unregister_for_session fs getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty vs us createPersonProfile cs Yr ps opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing ls debug O ds getPageViewId captureTraceFeedback captureTraceMetric Vr".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_I7D8TCr2kxuEZj2Jho7HNYdTOZCZpFcNr0UwNwlwdfh', {
        api_host: 'https://us.i.posthog.com',
        defaults: '2025-11-30',
        person_profiles:"always"// 'identified_only', // or 'always' to create profiles for anonymous users as well
    })
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
