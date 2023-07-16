const scrollLeftBtn = document.getElementById('scrollLeftBtn');
const scrollRightBtn = document.getElementById('scrollRightBtn');
const container = document.querySelector('.flex');

scrollLeftBtn.addEventListener('click', () => {
  container.scrollBy({
    left: -100,
    behavior: 'smooth'
  });
});

scrollRightBtn.addEventListener('click', () => {
  container.scrollBy({
    left: 100,
    behavior: 'smooth'
  });
});
