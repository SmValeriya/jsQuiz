import { initializeTheme, toggleTheme } from './common/theme.js';

document.addEventListener('DOMContentLoaded', function () {
  initializeTheme();
  document.addEventListener('click', function (e) {
    if (e.target.closest('.mode')) {
      toggleTheme();
    }
  });
});
