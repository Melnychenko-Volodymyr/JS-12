let img = document.querySelector('.picture');

const pos = () => {
  let x = 50 + Math.random() * 1100;
  let y = 50 + Math.random() * 700;   
 img.style.cssText = `top: ${y}px; left: ${x}px`;
}

img.addEventListener('click', pos);
