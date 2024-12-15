/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-72px";
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener("scroll", function () {
  const footer = document.getElementById("footer");
  const button = document.getElementById("back-to-top");

  // Ambil posisi footer
  const footerTop = footer.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight;

  // Jika footer terlihat di viewport, tampilkan tombol
  if (footerTop <= viewportHeight) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
  document.getElementById("openButton").style.right = "360px";
  document.getElementById("back-to-top").style.right = "270px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
  document.getElementById("openButton").style.right = "100px";
  document.getElementById("back-to-top").style.right = "20px";
  document.body.style.backgroundColor = "white";
}

