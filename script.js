const button = document.querySelector(".contact-form button");
const nameInput = document.querySelector("#name");
const messageInput = document.querySelector("#message");
const result = document.querySelector("#form-result");

button.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || message === "") {
    result.textContent = "請先填寫名字和訊息！";
  } else {
    result.textContent = "謝謝你，" + name + "！我已收到你的訊息。";

    nameInput.value = "";
    messageInput.value = "";
  }
});