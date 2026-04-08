const scrollToSection = (id) => {
  const section = document.getElementById(id);
  console.log(section);

  window.scrollTo({
    top: id === "home" ? 0 : section.offsetTop - 50,
    behavior: "smooth",
  });
};

export default scrollToSection;
