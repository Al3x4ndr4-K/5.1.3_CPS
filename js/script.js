let swiper = null

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 767) {
    swiper = new Swiper(".swiper", {
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewhell: true,
      keyboard: true,
    })
  }
})

window.addEventListener("resize", function () {
  if (swiper) {
    swiper.destroy()
    swiper = null
  }
  if (window.innerWidth <= 767) {
    swiper = new Swiper(".swiper", {
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      mousewhell: true,
      keyboard: true,
    })
  }
})

const descriptionContinueButton = document.querySelector(
  ".description-continue-button"
)
const slides = document.querySelectorAll(".brands-services__slide")

descriptionContinueButton.addEventListener("click", () => {
  if (descriptionContinueButton.classList.contains("show-less")) {
    slides.forEach((slide, index) => {
      slide.style.display = "flex"
    })
    slides.forEach((slide, index) => {
      if (index >= 6 && window.innerWidth < 1119) {
        slide.style.display = "none"
      } else if (index >= 8 && window.innerWidth >= 1119) {
        slide.style.display = "none"
      }
    })
    descriptionContinueButton.classList.remove("show-less")
  } else {
    slides.forEach((slide, index) => {
      if (index >= 6 && window.innerWidth < 1119) {
        slide.style.display = "flex"
      } else if (index >= 8 && window.innerWidth >= 1119) {
        slide.style.display = "flex"
      }
    })
    descriptionContinueButton.classList.add("show-less")
  }
})
