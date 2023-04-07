const made_div = document.querySelector("#button_click");

made_div.addEventListener("click", () => {
  var line2 = document.createElement("div");
  fetch("http://localhost:3000/getres")
    .then((rep) => rep.json())
    .catch((Err) => console.log(Err))
    .then((rep) => {
      line2.innerHTML = rep.data;
      if (rep.font !== "none") document.body.style.fontFamily = rep.font;
    });
  document.body.appendChild(line2);
  made_div.style.display = "none";
});
