$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('nav').style.display = 'none'
    document.getElementById('hamburger').style.display = 'flex'
    console.log('smol')
  } else {
    document.getElementById('nav').style.display = 'flex'
    document.getElementById('hamburger').style.display = 'none'
    console.log('big')
  }
}

var x = window.matchMedia("(max-width: 410px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes