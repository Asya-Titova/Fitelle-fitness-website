document.querySelectorAll(".faq-item").forEach((item) => {
  const question = item.querySelector(".question");
  const answer = item.querySelector(".answer");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    if (isOpen) {
      // Закрываем только этот элемент
      item.classList.remove("active");
      answer.style.maxHeight = "0px";
    } else {
      // Открываем только этот элемент
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
