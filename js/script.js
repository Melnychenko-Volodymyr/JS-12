let cont = document.querySelector('.container');
let img = document.querySelector('.picture');

const pos = () => {

  let x = Math.random() * (cont.clientWidth-50);
  let y = Math.random() * (cont.clientHeight-50);   
 img.style.cssText = `top: ${y}px; left: ${x}px`;
}

img.addEventListener('click', pos);
