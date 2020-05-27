function onThumbnail(event) {
  let selectedImage = event.path[0];
  let selectedImageSource = selectedImage.src;
  let currentSelectedImage = document.querySelector('.img-thumbnail.w-25.m-1.border-primary');
  let carouselPrimaryImage = document.querySelector('#carouselPrimaryImage');

  currentSelectedImage.classList.remove('border-primary');
  selectedImage.classList.add('border-primary');
  carouselPrimaryImage.src = selectedImageSource;
}