
document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    const zoomFactor = 1 + scrollPosition / 5000; // Adjust the zoom factor as needed
    const backgroundSize = `${zoomFactor * 100}%`;
    document.body.style.backgroundSize = backgroundSize;
    document.querySelector("body").style.backgroundSize = backgroundSize;
  });