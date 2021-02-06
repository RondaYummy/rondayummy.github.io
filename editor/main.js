const getS = (selector) => document.querySelector(selector);
getS(".btn-edit").addEventListener("click", () => {
  getS(".edit-block").classList.add("show");
  getS(".style-block").classList.remove("show");
  getS(".edit-area").value = getS(".top-block").innerHTML;
});
getS(".btn-save").addEventListener("click", () => {
  getS(".edit-block").classList.remove("show");
  getS(".top-block").innerHTML = getS(".edit-area").value;
});
getS(".btn-style").addEventListener("click", () => {
  getS(".style-block").classList.add("show");
  getS(".edit-block").classList.remove("show");
});
getS(".form-size").addEventListener("click", () => {
  getS(".top-block").style.fontSize = event.target.value;
});
let fF = document.getElementById("fontFamily");
fF.onchange = function (e) {
  getS(".top-block").style.fontFamily = this.value;
};

let colors = [
  "brown",
  "green",
  "blue",
  "yellow",
  "pink",
  "gray",
  "black",
  "white",
  "deeppink",
];
getS(".btn-bg-color").addEventListener("click", () => {
  getS(".colors").classList.remove("hide");
  for (let i = 0; i < getS(".colors").children.length; i++) {
    getS(".colors").children[i].style.backgroundColor = colors[i];
    getS(".colors").children[i].onclick = function () {
      getS(".top-block").style.backgroundColor = this.style.backgroundColor;
    };
  }
});

getS(".btn-text-color").addEventListener("click", () => {
  getS(".colors").classList.remove("hide");
  for (let i = 0; i < getS(".colors").children.length; i++) {
    getS(".colors").children[i].style.backgroundColor = colors[i];
    getS(".colors").children[i].onclick = function () {
      getS(".top-block").style.color = this.style.backgroundColor;
    };
  }
});
getS(".boldTexts").addEventListener("click", () => {
  if (event.target.checked) {
    getS(".top-block").classList.add("bold");
  } else {
    getS(".top-block").classList.remove("bold");
  }
});

getS(".CursiveTexts").addEventListener("click", () => {
  if (event.target.checked) {
    getS(".top-block").classList.add("cursive");
  } else {
    getS(".top-block").classList.remove("bold");
  }
});

getS(".btn-add").onclick = function () {
  getS(".first").classList.remove("show");
  getS(".second").classList.add("show");
};

const list = document.forms["form-list"];

getS(".btn-create-list").onclick = function () {
  const countLi = list.count.value;
  const typeLi = list.type.value;
  getS(".edit-area").value += `<ul style="list-style-type: ${typeLi}">`;
  for (let i = 0; i < countLi; i++) {
    getS(".edit-area").value += `<li>item ${i + 1}</li>`;
  }
  getS(".edit-area").value += "</ul>";

  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
};
// Відкриття створення таблиці чи списку
// if(getS(".create-list").style.display == event.target.value){
//   getS(".create-table").style.display = 'none';
// }else if(getS(".create-table").style.display = event.target.value){
//   getS(".create-list").style.display = 'none';
// }
// Відкриття створення таблиці чи списку
getS(".chosee").addEventListener("click", () => {
  getS(".create-table").style.display = 'none';
  getS(".create-list").style.display = event.target.value;
});

// Створення таблиці - початок
getS(".tables").addEventListener("click", () => {
  getS(".create-list").style.display = 'none';
    getS(".create-table").style.display = event.target.value;
});

getS("#createButton").addEventListener("click", () => {
  const countTr = getS("#countTr").value;
  const countTd = getS("#countTd").value;
  const WidthTd = getS("#WidthTd").value;
  const HeidthTd = getS("#HeidthTd").value;
  const TypeBorder = getS("#TypeBorder").value;
  const ColorBorder = getS("#ColorBorder").value;
  const WidthBorder = getS("#WidthBorder").value;

  getS(".edit-area").value += `<table>`;

  for (let i = 0; i <= countTr; i++) {
    getS(".edit-area").value += `<tr>`;
    for (let w = 0; w <= countTd; w++) {
      getS(".edit-area").value += `<td style="width:${WidthTd}px; heidth:${HeidthTd}px; border: ${WidthBorder}px ${TypeBorder} ${ColorBorder}">${w + 1}</td>`;
    }
    getS(".edit-area").value += `</tr>`;

    
  }
  getS(".edit-area").value += "</table>";
  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
  
});
