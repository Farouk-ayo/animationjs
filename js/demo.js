/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Initialize another particleground on an element with the id "yparticles".
    const yparticles = particleground(document.getElementById("particles"), {
      dotColor: "#ffff",
      lineColor: "#ffff",
      minSpeedX: 0.1,
      maxSpeedX: 0.2,
      minSpeedY: 0.1,
      maxSpeedY: 0.2,
      directionX: "center", // 'center', 'left' or 'right'. 'center' = dots bounce off edges
      directionY: "center", // 'center', 'up' or 'down'. 'center' = dots bounce off edges
      density: 2000, // Increase the density of particles.
      particleRadius: 8, // Set the particle radius (adjust as needed).
      parallaxMultiplier: 29, // Increase the parallax effect for a wider circle.
      proximity: 80,
    });

    yparticles.pause();

    const yparticlesel = document.querySelector(".main");
    yparticlesel.addEventListener("mouseover", function () {
      yparticles.start();
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
