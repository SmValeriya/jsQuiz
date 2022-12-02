function setTheme(themeName = '') {
  localStorage.setItem('theme', themeName);
  document.body.className = themeName;
}

export function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    setTheme();
  } else {
    setTheme('dark');
  }
}

export function initializeTheme() {
  if ('theme' in localStorage) {
    setTheme(localStorage.getItem('theme'));
    return;
  }

  const isDarkMode = () =>
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDarkMode) {
    setTheme('dark');
    return;
  }

  setTheme();
}
