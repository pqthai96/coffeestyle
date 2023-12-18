// Custom
document.addEventListener("DOMContentLoaded", function () {

  const topMenu = document.getElementById('ct-top-menu');
  const toogleTopMenu = document.getElementById('ct-toggle-top-menu');

  document.addEventListener('click', (e) => {
    if (toogleTopMenu.contains(e.target)) {
      // Click onside
      topMenu.classList.toggle('ct-top-menu-expanded');
      topMenu.classList.toggle('hidden');
    } else {
      // Click outside
      if (topMenu.classList.contains('ct-top-menu-expanded')) {
        topMenu.classList.remove('ct-top-menu-expanded');
        topMenu.classList.add('hidden');
      }
    }
  })
})