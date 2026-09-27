// Store links. Paste the real addresses here once the app is live; until then the buttons say "Coming soon".
window.WOLFHOLLOW_STORES = {
  ios: '', // e.g. https://apps.apple.com/app/id0000000000
  android: '', // e.g. https://play.google.com/store/apps/details?id=com.abhishekkumar.wolfhollow
};

(function () {
  var stores = window.WOLFHOLLOW_STORES;
  var ua = navigator.userAgent || '';
  var platform = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && 'ontouchend' in document) ? 'ios' : /Android/.test(ua) ? 'android' : null;
  var labels = { ios: 'App Store', android: 'Google Play' };
  var soon = { ios: 'Coming soon to the', android: 'Coming soon to' };
  var get = { ios: 'Download on the', android: 'Get it on' };

  document.querySelectorAll('[data-store]').forEach(function (el) {
    var which = el.getAttribute('data-store');
    var url = stores[which];
    // On a phone, show only that phone's store.
    if (platform && platform !== which) el.hidden = true;
    el.innerHTML = '<small>' + (url ? get[which] : soon[which]) + '</small>' + labels[which];
    if (url) {
      el.href = url;
      el.removeAttribute('aria-disabled');
      if (platform === which) el.classList.add('primary');
    }
  });
})();
