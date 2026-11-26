// G-F10 (22/11/2026): after a deploy, GitHub Pages may serve a CDN-cached index.html (max-age=600) that points to
// the previous build's hashed files. If one of them is gone, the page stays blank (entry chunk) or a lazy page fails
// (route chunk). This file has a stable name and loads before the app, so it still runs when the app's own files 404.
// On the first failure to load a /assets/ script or stylesheet — or Vite's `vite:preloadError` for a lazy chunk — it
// reloads ONCE with a cache-busting query (a new URL bypasses the CDN copy). At most once per 60 s per tab; never
// when offline (that is not a stale build). Stores only a timestamp in sessionStorage. Separate file, not inline:
// script-src stays 'self' (see the CSP note in index.html).
(function (w) {
  var KEY = 'migdal365.staleBuildReloadAt';
  var WINDOW_MS = 60000;
  function recover() {
    try {
      if (w.navigator && w.navigator.onLine === false) return false;
      var last = Number(w.sessionStorage.getItem(KEY)) || 0;
      if (Date.now() - last < WINDOW_MS) return false;
      w.sessionStorage.setItem(KEY, String(Date.now()));
      var url = new URL(w.location.href);
      url.searchParams.set('v', Date.now().toString(36));
      w.location.replace(url.toString());
      return true;
    } catch (e) {
      return false;
    }
  }
  function isBuildAsset(el) {
    if (!el || !el.tagName) return false;
    var ref = el.tagName === 'SCRIPT' ? el.src : el.tagName === 'LINK' ? el.href : '';
    return typeof ref === 'string' && ref.indexOf('/assets/') !== -1;
  }
  // Capture phase: resource load errors do not bubble to window.
  w.addEventListener('error', function (e) { if (isBuildAsset(e && e.target)) recover(); }, true);
  w.addEventListener('vite:preloadError', function (e) { if (recover() && e && e.preventDefault) e.preventDefault(); });
})(window);
