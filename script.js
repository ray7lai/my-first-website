const button = document.querySelector(".contact-form button");
const nameInput = document.querySelector("#name");
const messageInput = document.querySelector("#message");
const result = document.querySelector("#form-result");

function handleSubmit() {
  const userName = nameInput.value.trim().toLowerCase();
  const message = messageInput.value.trim();

 if (userName === "" || message === "") {
    result.textContent = "請先填寫名字和訊息！";
  } else {
    if (userName === "ray") {
        result.textContent = "嗨，ray！歡迎回來！";
    } else {
        result.textContent = "嗨，" + userName + "！歡迎來到我的網站！";
    }
    nameInput.value = "";
    messageInput.value = "";
  }
}
button.addEventListener("click", handleSubmit);
