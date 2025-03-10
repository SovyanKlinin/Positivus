import './../styles/main.scss';

(function () {

  const index = {

    init() {

      this.processItemOpen();
      this.darkTheme();
      this.exitMenu();
      this.menuOpen();

    },

    processItemOpen() {
      const itemVisibleButton = Array.from(document.getElementsByClassName("item-visible_button"));
      const itemVisibleButtonUse = Array.from(document.getElementsByClassName("itemVisibleButtonUse"));
      const processItemsItem = Array.from(document.getElementsByClassName("process-items_item"));
      const itemVisible = document.getElementsByClassName("item-visible");
      const itemInvisible = document.getElementsByClassName("item-invisible");

      itemVisibleButton.forEach((item) => {
        item.addEventListener("click", function () {
          const itemId = item.id;
          console.log(itemId);

          if (itemVisibleButtonUse[itemId].attributes.href.value == "images/svg.svg#plus") {
            processItemsItem[itemId].style.backgroundColor = "#B9FF66";
            itemVisible[itemId].style.paddingBottom = "30px";
            itemInvisible[itemId].style.display = "block";
            itemVisibleButtonUse[itemId].removeAttribute("href");
            itemVisibleButtonUse[itemId].setAttribute("href", "images/svg.svg#minus");
          } else {
            processItemsItem[itemId].style.backgroundColor = "#F3F3F3";
            itemVisibleButtonUse[itemId].removeAttribute("href");
            itemVisible[itemId].style.paddingBottom = "0";
            itemInvisible[itemId].style.display = "none";
            itemVisibleButtonUse[itemId].setAttribute("href", "images/svg.svg#plus");
          }
        });
      })
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
      menuExit.addEventListener("click", function() {
        console.log("asdasd")
        menu.style.display = "flex";
      });
    },

    exitMenu() {
      const menuExit = document.getElementById("menuExit");
      const menu = document.querySelector(".menu");
      menuExit.addEventListener("click", function() {
        console.log("asdasd")
        menu.style.display = "none";
      });
    }

  }

  index.init();

})();