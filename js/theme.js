(function () {
  var themeButtons = document.querySelectorAll('.theme-picker button');
  var savedTheme = localStorage.getItem('joove-theme');

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('joove-theme', theme);

    themeButtons.forEach(function (button) {
      var isActive = button.dataset.set === theme;
      button.classList.toggle('is-on', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  setTheme(savedTheme === 'malam' ? 'malam' : 'gading');

  themeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      setTheme(button.dataset.set);
    });
  });
})();