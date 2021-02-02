function submitForm(event) {
  // event.preventDefault()
  document.querySelector(".create").style.display = "none";
  document.querySelector(".profil_block").style.display = "block";
  let profilInfo = document.forms[0];
  let name = profilInfo.firstName.value;
  document.querySelector(".names").innerHTML = name;
  let secondName = profilInfo.secondName.value;
  document.querySelector(".secondName").innerHTML = name + " " + secondName;
  let emailAdress = profilInfo.emailAdress.value;
  document.querySelector(".emailAdress").innerHTML = emailAdress;
  let Chose = profilInfo.Chose.value;
  document.querySelector(".infoUsers").innerHTML = "Position:" + Chose;
  let articles = profilInfo.article.value;
  if (articles === "Male") {
    let image = document.getElementById("image");
    image.src = "img/male.png";
  } else {
    let image = document.getElementById("image");
    image.src = "img/female.png";
  }
}

