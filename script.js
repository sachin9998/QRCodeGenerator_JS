const text = document.getElementById("text");
const result = document.getElementById("result");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const value = text.value;

  result.innerHTML = "";

  var image = document.createElement("img");
  image.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;

  result.appendChild(image);

  text.value = null;
});
