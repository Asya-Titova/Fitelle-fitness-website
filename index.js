document.addEventListener("DOMContentLoaded", () => {
  // modal

  const overlayEl = document.querySelector(".overlay-form");
  const orderCallBtn = document.querySelector(".order-call-btn");
  const getStartedBtns = document.querySelectorAll(".pay-button");
  const closeModalBtn = document.querySelector(".exit-icon");
  const joinUsBtn = document.querySelector(".cta-btn.join-us-btn");

  orderCallBtn.addEventListener("click", () => {
    overlayEl.classList.add("is-open");
  });

  getStartedBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      overlayEl.classList.add("is-open");
    });
  });

  closeModalBtn.addEventListener("click", () => {
    overlayEl.classList.remove("is-open");
  });

  joinUsBtn.addEventListener("click", () => {
    overlayEl.classList.add("is-open");
  });

  // end of modal

  // form

  const inputName = document.querySelector(".input-name");
  const inputPhone = document.querySelector(".input-phone-field");
  const submitBtn = document.querySelector(".submit-btn");

  inputName.addEventListener("input", (e) => {
    inputName.value = e.target.value;
  });

  inputPhone.addEventListener("input", (e) => {
    inputPhone.textContent = e.target.value;
  });

  submitBtn.addEventListener("click", () => {
    if (!inputName.value || !inputPhone.value) {
      alert("please enter the data");
      return;
    }

    alert(`We will call you, ${inputName.value}`);
  });
});

// end of form

// year

const yearEl = document.querySelector(".year");
const date = new Date();

yearEl.innerText = date.getFullYear();
