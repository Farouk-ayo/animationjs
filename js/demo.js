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
      dotColor: "#ffffff",
      lineColor: "#a0c8e0",
      minSpeedX: 0.1,
      maxSpeedX: 0.3,
      minSpeedY: 0.1,
      maxSpeedY: 0.3,
      directionX: "center", // 'center', 'left' or 'right'. 'center' = dots bounce off edges
      directionY: "center", // 'center', 'up' or 'down'. 'center' = dots bounce off edges
      density: 2000, // Increase the density of particles.
      particleRadius: 8, // Set the particle radius (adjust as needed).
      parallaxMultiplier: 29, // Increase the parallax effect for a wider circle.
      proximity: 80,
    });

    const yparticlesel = document.querySelectorAll(".movement");
    yparticlesel.forEach((each) => {
      each.addEventListener("mouseover", function () {
        yparticles.start();
      });
    });
    const yparticlese2 = document.querySelector("#particles");
    yparticles.start();

    yparticlese2.addEventListener("mouseover", function () {
      yparticles.pause();
      yparticlese2.style.overflow = "hidden";
    });
    yparticlese2.addEventListener("mouseleave", function () {
      yparticlese2.style.overflow = "visible";
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
