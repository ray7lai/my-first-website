const button = document.querySelector(".contact-form button");
const nameInput = document.querySelector("#name");
const messageInput = document.querySelector("#message");
const result = document.querySelector("#form-result");

button.addEventListener("click", () => {
  const userName = nameInput.value.trim().toUpperCase();
  const message = messageInput.value.trim();

 if (userName === "" || message === "") {
    result.textContent = "請先填寫名字和訊息！";
  } else {
   result.textContent = "嗨，" + userName + "！歡迎來到我的網站！"; 

    nameInput.value = "";
    messageInput.value = "";
  }
});