//IsMobile Check

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
//-----------------------------------

//scrollOnTop

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
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}
//---------------------

// Scrolling when clicking

const anchors = document.querySelectorAll(".link[data-goto]")

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute("data-goto").substr(1)

    document.getElementsByID(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
}
//https://ru.stackoverflow.com/questions/676303/%D0%9F%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-%D0%BF%D1%80%D0%BE%D0%BA%D1%80%D1%83%D1%82%D0%BA%D0%B0-%D0%BA-%D1%8F%D0%BA%D0%BE%D1%80%D1%8E-%D0%B1%D0%B5%D0%B7-jquery
//https://www.youtube.com/watch?v=zs1r8yafTE8
