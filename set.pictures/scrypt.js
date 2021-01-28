// — на сторінці знаходяться три пустих блоки div.
// — при кліку на блок виводить функція prompt() в яку ми вводи url адресу зображення
// — це зображення стає фоном для цього конкретного блоку

function imageBlock(event) {
  let img = prompt("Write the address of the picture you want to insert.");
  event.target.style.backgroundImage = `url('${img}')`;
}

document.querySelector(".block1").addEventListener("click", imageBlock);
document.querySelector(".block2").addEventListener("click", imageBlock);
document.querySelector(".block3").addEventListener("click", imageBlock);
