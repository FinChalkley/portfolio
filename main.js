window.addEventListener("DOMContentLoaded", () => {
  VANTA.CLOUDS({
    el: "#vantajs",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    skyColor: 0x1488cc,
    cloudColor: 0x6dd5fa
  });

  var form = document.getElementById('contactForm');
      if (form) form.reset();
      
});