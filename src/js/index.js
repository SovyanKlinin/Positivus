import './../styles/main.scss';

(function () {

  const index = {

    reviewText: [
      'We have been working with Positivus for the past' +
      'year and have seen a significant increase in website' +
      'traffic and leads as a result of their efforts.' +
      'The team is professional, responsive, and truly' +
      'cares about the success of our business.We highly',

      'We have been working with Positivus for the past' +
      'year and have seen a significant increase in website' +
      'traffic and leads as a result of their efforts.' +
      'The team is professional, responsive, and truly' +
      'cares about the success of our business.We highly' +
      'recommend Positivus to any company looking to',

      'We have been working with Positivus for the past' +
      'year and have seen a significant increase in website' +
      'traffic and leads as a result of their efforts.',

      'We have been working with Positivus for the past' +
      'year and have seen a significant increase in website' +
      'traffic and leads as a result of their efforts.' +
      'The team is professional, responsive, and truly',

      'We have been working with Positivus for the past' +
      'year and have seen a significant increase in website' +
      'traffic and leads as a result of their efforts.' +
      'The team is professional, responsive, and truly' +
      'cares about the success of our business.We highly' +
      'recommend Positivus to any company looking to' +
      'grow their online presence.',
    ],

    reviewName: [
      'John Smith',
      'Jane Doe',
      'Michael Brown',
      'Emily Johnson',
      'Brian Williams',
    ],

    reviewPosition: [
      'Marketing Director at XYZ Corp',
      'CEO and Founder',
      'Director of Operations',
      'Senior SEO Specialist',
      'PPC Manager',
    ],

    init() {

      this.processItemOpen();
      this.darkTheme();
      this.exitMenu();
      this.menuOpen();
      this.reviews(this.reviewText, this.reviewName, this.reviewPosition);


    },

    reviews(text, name, position) {

      const reviewsItems = document.querySelector('.reviews-items');
      const arrowRight = document.querySelector('#arrowRight');
      const arrowLeft = document.querySelector('#arrowLeft');
      const reviewsButton = document.querySelectorAll(".rewiewButton");

      function appendItem(i) {
        const reviewsItemsItem = document.createElement('div');
        reviewsItemsItem.id = i;
        const itemText = document.createElement('p');
        const itemInfo = document.createElement('div');
        const itemInfoName = document.createElement('h4');
        const itemInfoPosition = document.createElement('p');
        itemInfo.className = "item-info";
        reviewsItemsItem.className = "reviews-items_item";
        itemText.className = "item-text";
        itemText.innerText = text[i];
        itemInfoName.innerText = name[i];
        itemInfoPosition.innerText = position[i];
        reviewsItems.append(reviewsItemsItem);
        reviewsItemsItem.appendChild(itemText);
        reviewsItemsItem.appendChild(itemInfo);
        itemInfo.appendChild(itemInfoName);
        itemInfo.appendChild(itemInfoPosition);
      }

      function prependItem(i) {
        const reviewsItemsItem = document.createElement('div');
        reviewsItemsItem.id = i;
        const itemText = document.createElement('p');
        const itemInfo = document.createElement('div');
        const itemInfoName = document.createElement('h4');
        const itemInfoPosition = document.createElement('p');
        itemInfo.className = "item-info";
        reviewsItemsItem.className = "reviews-items_item";
        itemText.className = "item-text";
        itemText.innerText = text[i];
        itemInfoName.innerText = name[i];
        itemInfoPosition.innerText = position[i];
        reviewsItems.prepend(reviewsItemsItem);
        reviewsItemsItem.appendChild(itemText);
        reviewsItemsItem.appendChild(itemInfo);
        itemInfo.appendChild(itemInfoName);
        itemInfo.appendChild(itemInfoPosition);
      }

      appendItem(4);
      appendItem(0);
      appendItem(1);

      reviewsButton[0].style.transform = "scale(1.3)";

      arrowLeft.addEventListener('click', function () {

        const firstItem = document.querySelector(".reviews-items_item");
        const lastItem = reviewsItems.lastElementChild;
        reviewsButton.forEach((item) => {
          item.style.transform = "scale(1.0)";
        });

        if (firstItem.id > 0) {
          prependItem(firstItem.id - 1);
          reviewsButton[firstItem.id].style.transform = "scale(1.3)";
          lastItem.remove();
        } else {
          prependItem(4);
          reviewsButton[0].style.transform = "scale(1.3)";
          lastItem.remove();
        }
      });

      arrowRight.addEventListener('click', function () {

        const firstItem = document.querySelector(".reviews-items_item");
        const lastItem = document.getElementsByClassName("reviews-items_item")[2];
        reviewsButton.forEach((item) => {
          item.style.transform = "scale(1.0)";
        });

        if (lastItem.id < 4) {
          appendItem(Number(lastItem.id) + 1);
          reviewsButton[lastItem.id].style.transform = "scale(1.3)";
          firstItem.remove();
        } else {
          appendItem(0);
          reviewsButton[4].style.transform = "scale(1.3)";
          firstItem.remove();
        }
        
      });

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