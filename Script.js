  
    // Animate header text
    anime({
      targets: '.head-section',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeOutElastic(1, .6)'
    });

    anime({
      targets: '.head-section2',
      opacity: [0, 1],
      delay: 800,
      duration: 1500,
      translateY: [20, 0],
      easing: 'easeOutQuad'
    });

    anime({
      targets: '#note',
      scale: [0.8, 1],
      opacity: [0, 1],
      delay: 1500,
      duration: 1200,
      easing: 'easeOutBack'
    });

    anime({
      targets: '.card',
      scale: [0.5, 1],
      opacity: [0, 1],
      delay: anime.stagger(400, { start: 2000 }),
      duration: 1200,
      easing: 'easeOutElastic(1, .7)'
    });
  