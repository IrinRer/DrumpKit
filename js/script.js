const wrapperItemsKit = document.querySelectorAll(".wrapper__items__kit");

for (let i = 0; i < wrapperItemsKit.length; i++) {
  wrapperItemsKit[i].addEventListener("click", () => {
    wrapperItemsKit[i].querySelector("audio").play();
    wrapperItemsKit[i].style.cssText = `
        transform: translateY(-5px);
        border: 4px yellow solid;
        box-shadow: 0px 10px 20px 2px rgba(0,255,255,0.7);`;
    for (let j = 0; j < wrapperItemsKit.length; j++) {
      if (i !== j) {
        wrapperItemsKit[j].style = "";
      }
    }

    setTimeout(() =>  wrapperItemsKit[i].style = "", 2000);
  });
}
