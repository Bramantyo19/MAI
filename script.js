// Mengubah class navbar saat scroll
window.onscroll = function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };
  
  // Mengatur profil tombol login/profile button
  document.addEventListener("DOMContentLoaded", function () {
    var isLoggedIn = false; // Ganti dengan kondisi login sebenarnya
    var loginButton = document.getElementById("loginButton");
    var profileButton = document.getElementById("profileButton");
  
    if (isLoggedIn) {
      loginButton.style.display = "none";
      profileButton.style.display = "block";
    } else {
      loginButton.style.display = "block";
      profileButton.style.display = "none";
    }
  });
  
  // Carousel dengan pause ketika mouse hover
  var carouselMangrove = document.querySelector('#corouselMangrove');
  var carousel = new bootstrap.Carousel(carouselMangrove, {
    interval: 3000,
    pause: 'hover'
  });
  
  // Smooth scroll untuk link ke anchor tertentu
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Event listener untuk tombol produk
  document.querySelectorAll('.btns').forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Fitur ini belum tersedia.');
    });
  });
  
  // Menambah interaksi ketika user hover card di bagian produk
  document.querySelectorAll('.cardacv').forEach(card => {
    card.addEventListener('mouseenter', function () {
      card.classList.add('shadow-lg');
    });
    card.addEventListener('mouseleave', function () {
      card.classList.remove('shadow-lg');
    });
  });
  
  // Mengubah ukuran text pada carousel sesuai dengan ukuran layar
  function adjustCarouselText() {
    var windowWidth = window.innerWidth;
    var carouselText = document.querySelectorAll('.carousel-caption h1');
    
    carouselText.forEach(function (text) {
      if (windowWidth < 768) {
        text.style.fontSize = "24px";
      } else {
        text.style.fontSize = "48px";
      }
    });
  }
  
  // Panggil fungsi untuk menyesuaikan teks carousel saat load dan resize
  window.onload = adjustCarouselText;
  window.onresize = adjustCarouselText;
  