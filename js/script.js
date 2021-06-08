//--------------------------------------------------IsMobile Check

var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i)
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i)
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    )
  },
}

if (isMobile.any()) {
  document.body.classList.add("_touch")
} else {
  document.body.classList.add("_dekstop")
}

//--------------------------------------------------scrollOnTop

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block"
  } else {
    document.getElementById("myBtn").style.display = "none"
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.getElementById("top").scrollIntoView({
    behavior: "smooth",
    block: "start",
  }) // For Chrome, Firefox, IE and Opera
}
// ---------------------------------------------------------Burger menu

const IconMenu = document.querySelector(".menu__icon")
const menuBody = document.querySelector(".header__nav")
if (IconMenu) {
  IconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock")
    IconMenu.classList.toggle("_active")
    menuBody.classList.toggle("_active")
  })
}

//------------------------------------------------SCROLLING

const menuLinks = document.querySelectorAll(".header__link[data-goto]")
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    const menuLink = e.target
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto)
      const gotoBlockTop = gotoBlock.getBoundingClientRect().top + pageYOffset
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector(".header").offsetHeight

      if (IconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock")
        IconMenu.classList.remove("_active")
        menuBody.classList.remove("_active")
      }

      if (isMobile.any()) {
        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        })
        e.preventDefault()
      } else {
        window.scrollTo({
          behavior: "smooth",
          top: gotoBlockTop,
        })
      }
    }
  }
}

// --------------------------------SWIPER------------------------------
new Swiper(".tech__swiper", {
  //arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //navigation
  //bullets,progressbar
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})

//----------------------------------NEWTAB OPENER-------------------
function openInNewTab(url) {
  var win = window.open(url, "_blank")
  win.focus()
}
