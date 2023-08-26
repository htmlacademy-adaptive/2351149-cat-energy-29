function initCatSlider() {
  const container = document.querySelector('.outcome__compare');
  document.querySelector('.outcome__range')?.addEventListener('input', (e) => {
    container.style.setProperty('--persent', `${e.target.value}%`);
    document.querySelector('output').innerHTML = `${e.target.value}%`;
  });
}

initCatSlider();
