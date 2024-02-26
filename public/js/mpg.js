document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.image-container img');
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');
    var closeButton = document.getElementsByClassName('close')[0];
  
    images.forEach(function(image) {
      image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImage.src = image.src;
      });
    });
  
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });

  let images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg', 'img/img6.jpg'];
  let currentImageIndex = 0;
  
  function changeImage() {
    let mainContentImage = document.getElementById('main-content-image');
    mainContentImage.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  setInterval(changeImage, 5000); // Change image every 5 seconds