const wrapperItemsKit = document.querySelectorAll(".wrapper__items__kit");

for (let i = 0; i < wrapperItemsKit.length; i++) {
  wrapperItemsKit[i].addEventListener("click", () => {
    wrapperItemsKit[i].querySelector("audio").play();

    wrapperItemsKit.forEach((item) => (item.style = ""));

    wrapperItemsKit[i].style.cssText = `
        transform: translateY(-5px);
        border: 4px yellow solid;
        box-shadow: 0px 10px 20px 2px rgba(0,255,255,0.7);`;

    setTimeout(() => (wrapperItemsKit[i].style = ""), 2000);
  });
}

document.addEventListener("keydown", (e) => {
  let code = e.code.split("");
  document.querySelector(`#${code[code.length - 1]}`).play();

  wrapperItemsKit.forEach((item) => {
    item.style = "";
  });

  document.querySelector(
    `#${code[code.length - 1]}`
  ).parentElement.style.cssText = `
  transform: translateY(-5px);
  border: 4px yellow solid;
  box-shadow: 0px 10px 20px 2px rgba(0,255,255,0.7);
  `;
});
