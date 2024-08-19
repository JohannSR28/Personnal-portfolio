function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function changeLanguage(lang) {
  // Masquer toutes les sections de langue
  const sections = document.querySelectorAll(".lang-section");
  sections.forEach((section) => (section.style.display = "none"));

  // Afficher la section pour la langue sélectionnée
  const selectedSections = document.querySelectorAll(`.${lang}`);
  selectedSections.forEach((section) => (section.style.display = "block"));
}

// Définir la langue par défaut
changeLanguage("en");
