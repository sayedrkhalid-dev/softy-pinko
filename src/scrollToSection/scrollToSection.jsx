const scrollToSection = (id) => {
  const section = document.getElementById(id);

  window.scrollTo({
    top: id === "home" ? 0 : section.offsetTop - 50,
    behavior: "smooth",
  });
};

export default scrollToSection;
