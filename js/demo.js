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
        dotColor: "#ffffff",
        lineColor: "#a0c8e0",
        minSpeedX: 0.01, // Adjust the speed values to be slower
        maxSpeedX: 0.05, // You can experiment with different values
        minSpeedY: 0.01, // to achieve the desired slow movement.
        maxSpeedY: 0.05,
        directionX: "center",
        directionY: "center",
        density: 2000,
        particleRadius: 8,
        parallaxMultiplier: 29,
        proximity: 80,
      });
    }

    initializeParticles();

    const particleCon1 = document.querySelectorAll(".movement");
    particleCon1.forEach((each) => {
      each.addEventListener("mousemove", function () {
        particles.options.minSpeedX = 0.3; // Adjust the speed values when the mouse is moved
        particles.options.maxSpeedX = 0.7;
        particles.options.minSpeedY = 0.3;
        particles.options.maxSpeedY = 0.7;
        particles.start();
      });
    });

    const particleCon = document.querySelector(".part");
    const particleCon2 = document.querySelector("#particles");

    particleCon.addEventListener("mousemove", function () {
      particles.pause();
      particleCon2.style.overflow = "hidden";
    });

    particleCon2.addEventListener("mouseleave", function () {
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
