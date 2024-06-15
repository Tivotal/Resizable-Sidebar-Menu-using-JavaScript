/* Created by Tivotal */

let sidebar = document.querySelector(".sidebar");
let resizer = document.querySelector(".resizer");

let initialX, initialWidth;

let mousedownListener = (e) => {
  initialX = e.clientX;
  initialWidth = window.getComputedStyle(sidebar).width;
  initialWidth = parseInt(initialWidth, 10);

  document.addEventListener("mousemove", mousemoveListener);
  document.addEventListener("mouseup", mouseupListener);
};

let mousemoveListener = (e) => {
  let newX = e.clientX;
  let difX = newX - initialX;

  let newWidth = difX + initialWidth;

  sidebar.style.width = `${newWidth}px`;
};

let mouseupListener = (e) => {
  document.removeEventListener("mousemove", mousemoveListener);
  document.removeEventListener("mouseup", mouseupListener);
};

resizer.addEventListener("mousedown", mousedownListener);
