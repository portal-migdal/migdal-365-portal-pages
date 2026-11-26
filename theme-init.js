// Light/Dark Mode: רץ לפני כל CSS/JS אחר כדי לקבוע את data-theme על <html>
// לפני הצביעה הראשונה (מונע Flash of Wrong Theme). מקור אמת יחיד לבחירה:
// migdal365-theme ב-localStorage; בהיעדר בחירה שמורה — העדפת מערכת ההפעלה
// (prefers-color-scheme). מסונכרן עם ThemeProvider
// (src/shared/theme/ThemeProvider.tsx) שמחזיק באותו מפתח/לוגיקה בדיוק.
//
// קובץ נפרד (לא inline ב-index.html) כדי ש-script-src ב-CSP ישאר 'self'
// בלבד, בלי 'unsafe-inline'/hash שביר לשינויי שורה (ראו index.html).
(function () {
  try {
    var stored = localStorage.getItem('migdal365-theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
