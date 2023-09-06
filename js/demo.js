/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener(
  "DOMContentLoaded",
  function () {
    let particles; // Define the variable to hold the particle system

    function initializeParticles() {
      particles = particleground(document.getElementById("particles"), {
        dotColor: "#ff0000",
        lineColor: "#ff0000",
        minSpeedX: 0.2, // Adjust the speed values to be slower
        maxSpeedX: 0.3, // You can experiment with different values
        minSpeedY: 0.2, // to achieve the desired slow movement.
        maxSpeedY: 0.3,
        directionX: "center",
        directionY: "center",
        density: 2000,
        particleRadius: 8,
        parallaxMultiplier: 29,
        proximity: 80,
      });
    }

    initializeParticles();

    //   const particleCon1 = document.querySelectorAll(".movement");
    //   particleCon1.forEach((each) => {
    //     each.addEventListener("mousemove", function () {
    //       particles.options.minSpeedX = 0.3; // Adjust the speed values when the mouse is moved
    //       particles.options.maxSpeedX = 0.7;
    //       particles.options.minSpeedY = 0.3;
    //       particles.options.maxSpeedY = 0.7;
    //       particles.start();
    //     });
    //   });

    //   const particleCon = document.querySelector(".part");
    //   const particleCon2 = document.querySelector("#particles");

    //   particleCon.addEventListener("mousemove", function () {
    //     particles.pause();
    //     particleCon2.style.overflow = "hidden";
    //   });

    //   particleCon2.addEventListener("mouseleave", function () {
    //     particleCon2.style.overflow = "visible";
    //     particles.start();
    //   });
    // },
    // Mousemove event listeners for desktop
    const particleCon1 = document.querySelectorAll(".movement");
    particleCon1.forEach((each) => {
      each.addEventListener("mousemove", function () {
        adjustParticleSpeed();
        particles.start();
      });
    });

    // Touchmove event listeners for mobile
    particleCon1.forEach((each) => {
      each.addEventListener("touchmove", function (event) {
        // Get the touch position
        const touch = event.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;

        // Adjust particle speed
        adjustParticleSpeed();
        particles.start();
      });
    });

    // Function to adjust particle speed
    function adjustParticleSpeed() {
      particles.options.minSpeedX = 1.6;
      particles.options.maxSpeedX = 1.7;
      particles.options.minSpeedY = 1.6;
      particles.options.maxSpeedY = 1.7;
    }

    // Mousemove event listener for pausing animation on desktop
    const particleCon = document.querySelector(".part");
    const particleCon2 = document.querySelector("#particles");

    particleCon.addEventListener("mousemove", function () {
      particles.pause();
      particleCon2.style.overflow = "hidden";
    });

    // Touchmove event listener for pausing animation on mobile
    particleCon.addEventListener("touchstart", function () {
      particles.pause();
      particleCon2.style.overflow = "hidden";
    });

    // Mouseleave event listener for resuming animation on desktop
    particleCon2.addEventListener("mouseleave", function () {
      particleCon2.style.overflow = "visible";
      particles.start();
    });

    // Touchend event listener for resuming animation on mobile
    particleCon2.addEventListener("touchend", function () {
      particleCon2.style.overflow = "visible";
      particles.start();
    });
  },
  false
);

/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
