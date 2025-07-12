let scrollAmount = 0;
const scrollStep = 320;

function scrollProducts(direction) {
  const container = document.querySelector('.horizontal-scroll');
  const maxScroll = container.scrollWidth - document.querySelector('.horizontal-scroll-container').offsetWidth;

  scrollAmount += direction * scrollStep;

  if (scrollAmount < 0) scrollAmount = 0;
  if (scrollAmount > maxScroll) scrollAmount = maxScroll;

  container.style.transform = `translateX(-${scrollAmount}px)`;
}
