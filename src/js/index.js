import './../styles/main.scss';
import logoWhite from '../assets/images/Logo-white.png';
import logoDefault from '../assets/images/Logo.png';
import logoWhiteAdaptive from '../assets/images/Logo-white-adaptive.png';
import logoDefaultAdaptive from '../assets/images/Logo-adaptive.png';

(function () {

  const index = {

    init() {

      this.processItemOpen();
      this.darkTheme();
      this.exitMenu();
      this.menuOpen();
      this.scrollReviews();

    },

    scrollReviews() {
      const rightArrow = document.querySelector("#arrowRight");
      const leftArrow = document.querySelector("#arrowLeft");
      const reviewsItems = document.querySelector(".reviews-items");
      const reviewsItemsItem = document.querySelectorAll(".reviews-items_item");
      const itemWidth = reviewsItemsItem[0].offsetWidth;
      const rewiewButton = Array.from(document.querySelectorAll(".rewiewButton"));
      
      reviewsItems.scrollBy({
        top: 0,
        left: itemWidth + 50,
        behavior: 'smooth'
      });

      rightArrow.addEventListener("click", function () {
        reviewsItems.scrollBy({
          top: 0,
          left: itemWidth + 50,
          behavior: 'smooth'
        });
        for (let i = 0; i < rewiewButton.length; i++) {
          if (rewiewButton[i].classList.contains('active') && i < 4) {
            rewiewButton[i].classList.remove('active');
            rewiewButton[i + 1].classList.add('active');
            return;
          }
        } 
      });

      leftArrow.addEventListener("click", function () {
        reviewsItems.scrollBy({
          top: 0,
          left: -(itemWidth + 50),
          behavior: 'smooth'
        });
        for (let i = 0; i < rewiewButton.length; i++) {
          if (rewiewButton[i].classList.contains('active') && i > 0) {
            rewiewButton[i].classList.remove('active');
            rewiewButton[i - 1].classList.add('active');
            return;
          }
        } 
      });

      for (let i = 0; i < rewiewButton.length; i++) {
        rewiewButton[i].addEventListener("click", function () {
          for (let j = 0; j < rewiewButton.length; j++) {
            rewiewButton[j].style.transform = "scale(1)";
            rewiewButton[j].classList.remove('active');
          }
          rewiewButton[i].style.transform = "scale(1.3)";
          rewiewButton[i].classList.add('active');
          reviewsItemsItem[i].scrollIntoView(
            { behavior: "smooth", block: "nearest", inline: "center" }
          );
        });
      };
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
      const headerLogoAdaptive = document.getElementById("headerLogoAdaptive");

      themeButton.addEventListener('change', function () {
        if (this.checked) {
          document.documentElement.setAttribute('theme', 'dark');
          headerLogo.src = logoWhite;
          headerLogoAdaptive.src = logoWhiteAdaptive;
        } else {
          document.documentElement.removeAttribute('theme', 'dark');
          headerLogo.src = logoDefault;
          headerLogoAdaptive.src = logoDefaultAdaptive;
        }
      });
    },

    menuOpen() {
      const menuExit = document.getElementById("menu");
      const menu = document.querySelector(".menu");
      menuExit.addEventListener("click", function () {
        menu.style.display = "flex";
      });
    },

    exitMenu() {
      const menuExit = document.getElementById("menuExit");
      const menu = document.querySelector(".menu");
      menuExit.addEventListener("click", function () {
        menu.style.display = "none";
      });
    },

  }

  index.init();

})();