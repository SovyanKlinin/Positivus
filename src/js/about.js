import './../styles/about.scss';

(function () {

  const about = {

    init() {

      this.darkTheme();
      this.menuOpen();
      this.exitMenu();

    },

    darkTheme() {
      const themeButton = document.getElementById("themeButton");
      const headerLogo = document.getElementById("headerLogo");

      themeButton.addEventListener('change', function () {
        if (this.checked) {
          document.documentElement.setAttribute('theme', 'dark');
          headerLogo.setAttribute("src", "images/Logo-white.png");
        } else {
          document.documentElement.removeAttribute('theme', 'dark');
          headerLogo.setAttribute("src", "images/Logo.png");
        }
      })
    },

    menuOpen() {
      const menuExit = document.getElementById("menu");
      const menu = document.querySelector(".menu");
      menuExit.addEventListener("click", function () {
        console.log("asdasd")
        menu.style.display = "flex";
      });
    },

    exitMenu() {
      const menuExit = document.getElementById("menuExit");
      const menu = document.querySelector(".menu");
      menuExit.addEventListener("click", function () {
        console.log("asdasd")
        menu.style.display = "none";
      });
    },

  }

  about.init();

})();