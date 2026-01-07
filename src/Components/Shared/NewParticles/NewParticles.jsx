// src/Components/Shared/NewParticles/NewParticles.js

import React, { useEffect } from 'react';

// IMPORTANT: For this to work, you must include the particles.js library 
// via a script tag in your main index.html file, like this:
// <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>

const NewParticles = () => {
  useEffect(() => {
    // Check if the particlesJS function is globally available
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": 40,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#3928D1" // Blue/Purple color from your original snippet
          },
          "shape": {
            "type": "polygon",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 6
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 1,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 300,
            "color": "#FFFFFF",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }
    
    // Cleanup function to destroy particles if the component unmounts
    return () => {
        // You might need a custom function to destroy particlesJS if needed
        // For simple particles.js, relying on component unmount often suffices
    };
  }, []); // Empty dependency array means it runs only once after mount

  return (
    // This div is the container that particles.js needs to render the canvas
    <div 
        id="particles-js" 
        style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '100%', 
            zIndex: 0, // Ensure it sits behind the header text
        }}
    />
  );
}

export default NewParticles;