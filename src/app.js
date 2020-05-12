import 'bootstrap'
import './scss/app.scss'
import './scss/custom.scss'

import $ from 'jquery'
window.$ = $

// Navbar Scroll offset
$(document).ready(function() {
  const navbarMain = $('#navbarMain')
  const navbarTop = $('#navbarTop')
  const navbarOffsetter = $('#navbarOffsetter')

  const navbarMainOffset  = navbarMain.offset().top
  const offsetter = navbarOffsetter.offset().top

  $(window).scroll(function () {
    if ($(window).scrollTop() > navbarMainOffset) {
      navbarMain.addClass('fixed-top scrolled-main')
      navbarOffsetter.css({"margin-top": offsetter + 'px'})
      navbarTop.addClass('scrolled-hidden')
    }
    else {
      navbarMain.removeClass('fixed-top scrolled-main')
      navbarOffsetter.css({"margin-top":0})
      navbarTop.removeClass('scrolled-hidden')
    }
  })
})