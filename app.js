let btn = document.querySelector(".btn");
let input = document.querySelector("input");

btn.addEventListener("click", () => {
  JsBarcode(".code", input.value, {
    format: "code128",
    displayValue: true,
    fontSize: 24,
    lineColor: "#000",
  });


  input.value = "";
});
