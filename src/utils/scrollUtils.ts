
export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    // Offset for the navbar height
    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};
