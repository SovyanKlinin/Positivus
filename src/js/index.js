import './../styles/main.scss';

(function () {

  const index = {

    init() {

      this.processItemOpen();
      this.darkTheme();

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
      const body = document.body;
      const navHeader = Array.from(document.getElementsByClassName("navLink"));
      const headerLogo = document.getElementById("headerLogo");
      const mainContentTextTitle = document.getElementsByClassName("main-content-text_title")[0];
      const text = Array.from(document.getElementsByClassName("text"));
      const caseStudiesContent = document.getElementsByClassName("case-studies-content")[0];
      const teamItem = Array.from(document.getElementsByClassName("team-item"));
      const reviews = document.getElementsByClassName("reviews")[0];
      const itemText = Array.from(document.getElementsByClassName("item-text"));
      const footer = document.getElementsByClassName("footer")[0];
      const labelThemeButton = document.getElementById("labelThemeButton")

      themeButton.addEventListener('change', function () {
        if (this.checked) {
          body.classList.add("dark-bg");
          labelThemeButton.style.borderColor = "white";
          navHeader.forEach((e) => {
            e.classList.add("white-text");
          });
          text.forEach((e) => {
            e.classList.add("white-text");
          });
          teamItem.forEach((e) => {
            e.classList.add("white-bg");
          });
          itemText.forEach((e) => {
            e.classList.add("dark-bg");
          });
          headerLogo.removeAttribute("src");
          headerLogo.setAttribute("src", "images/Logo-white.png");
          mainContentTextTitle.classList.add("white-text");
          caseStudiesContent.classList.add("black-bg");
          reviews.classList.add("black-bg");
          footer.classList.add("black-bg");
        } else {
          body.classList.remove("dark-bg");
          labelThemeButton.style.borderColor = "black";
          navHeader.forEach((e) => {
            e.classList.remove("white-text");
          });
          text.forEach((e) => {
            e.classList.remove("white-text");
          });
          teamItem.forEach((e) => {
            e.classList.remove("white-bg");
          });
          itemText.forEach((e) => {
            e.classList.remove("dark-bg");
          });
          headerLogo.removeAttribute("src");
          headerLogo.setAttribute("src", "images/Logo.png");
          mainContentTextTitle.classList.remove("white-text");
          caseStudiesContent.classList.remove("black-bg");
          reviews.classList.remove("black-bg");
          footer.classList.remove("black-bg");
        }
      })
    }

  }

  index.init();

})();