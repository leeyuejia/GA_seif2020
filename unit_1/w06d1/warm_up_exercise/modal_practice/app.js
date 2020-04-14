// console.log($);
// console.log('modal practice app.js is linked to this index.html');





$(() => {
  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  //Close button function
  const closeModal = () => {
    $modal.css('display', 'none');
  }
  //Open button function
  const openModal = () => {
    $modal.css('display', 'block');
  }
  $openBtn.on('click', openModal);
  $closeBtn.on('click', closeModal);
  setTimeout(openModal, 5000);
  //write your code here
});
