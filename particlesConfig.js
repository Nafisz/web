/* src/particlesConfig.js */
export default {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'square',
    },
    opacity: {
      value: 0.6,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 130,
      color: '#FFFFFF',
      opacity: 0.4,
      width: 6,
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'bounce',
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
    },
  },
  retina_detect: true,
};