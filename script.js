const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {

  navigator.clipboard.writeText("vivekdahariya2488@gmail.com");

  copyBtn.innerText = "Copied!";

  setTimeout(() => {
    copyBtn.innerText = "Copy Email";
  }, 2000);

});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

});