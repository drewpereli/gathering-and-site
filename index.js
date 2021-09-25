import './src/styles/app.css';

document.querySelectorAll('.main-nav-item').forEach((el) => {
  let sectionName = el.dataset.section;

  el.addEventListener('click', () => {
    let section = document.getElementById(`section-${sectionName}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  });
});
