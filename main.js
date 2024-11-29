const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

document.addEventListener('DOMContentLoaded', () => {
  // header container
  ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".header_content .btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  // why container
  ScrollReveal().reveal(".why_container .why_content", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".why_container p", {
    ...scrollRevealOption,
    delay: 700,
  });

  ScrollReveal().reveal(".why_container li", {
    ...scrollRevealOption,
    delay: 1500,
    interval: 250,
  });

  ScrollReveal().reveal(".why_container img", {
    ...scrollRevealOption,
    origin: "left",
  });

  //hero-cards
  
  ScrollReveal().reveal(".about_cards", {
    ...scrollRevealOption,
    interval: 500,
  });

  //programs
  ScrollReveal().reveal(".program_card", {
    ...scrollRevealOption,
    interval: 500,
  });

});


