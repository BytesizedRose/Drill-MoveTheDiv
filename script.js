const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const divider = document.querySelector('.divider');
let isDragging = false;

divider.addEventListener('mousedown', () => {
  isDragging = true;
  document.body.style.cursor = 'grabbing';
});
window.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

const containerRect = container.getBoundingClientRect();
const offsetX = e.clientX - containerRect.left;
const minWidth = 100;
const maxWidth = containerRect.width - minWidth;
const newLeftWidth = Math.min(Math.max(offsetX,minWidth),maxWidth);

left.style.width = `${newLeftWidth}px`;
right.style.width = `${containerRect.width - divider.offsetWidth - newLeftWidth}px`;
});