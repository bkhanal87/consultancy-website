const firstNameInputField = document.getElementById("firstNameField");

firstNameInputField.addEventListener("focus", () => {
  firstNameInputField.previousElementSibling.style.top = "0";
  firstNameInputField.previousElementSibling.style.fontSize = "12px";
  firstNameInputField.previousElementSibling.style.color = "#333";
});

firstNameInputField.addEventListener("input", () => {
  if (firstNameInputField.value.trim() !== "") {
    firstNameInputField.previousElementSibling.style.top = "0";
    firstNameInputField.previousElementSibling.style.fontSize = "12px";
    firstNameInputField.previousElementSibling.style.color = "#333";
  } else {
    firstNameInputField.previousElementSibling.style.top = "50%";
    firstNameInputField.previousElementSibling.style.fontSize = "16px";
    firstNameInputField.previousElementSibling.style.color = "#999";
  }
});


const lastNameInputField = document.getElementById("lastNameField");

lastNameInputField.addEventListener("focus", () => {
  firstNameInputField.previousElementSibling.style.top = "0";
  firstNameInputField.previousElementSibling.style.fontSize = "12px";
  firstNameInputField.previousElementSibling.style.color = "#333";
});

lastNameInputField.addEventListener("input", () => {
  if (lastNameInputField.value.trim() !== "") {
    lastNameInputField.previousElementSibling.style.top = "0";
    lastNameInputField.previousElementSibling.style.fontSize = "12px";
    lastNameInputField.previousElementSibling.style.color = "#333";
  } else {
    lastNameInputField.previousElementSibling.style.top = "50%";
    lastNameInputField.previousElementSibling.style.fontSize = "16px";
    lastNameInputField.previousElementSibling.style.color = "#999";
  }
});


const phoneNumberInputField = document.getElementById("phoneNumberField");

phoneNumberInputField.addEventListener("focus", () => {
  phoneNumberInputField.previousElementSibling.style.top = "0";
  phoneNumberInputField.previousElementSibling.style.fontSize = "12px";
  phoneNumberInputField.previousElementSibling.style.color = "#333";
});

phoneNumberInputField.addEventListener("input", () => {
  if (phoneNumberInputField.value.trim() !== "") {
    phoneNumberInputField.previousElementSibling.style.top = "0";
    phoneNumberInputField.previousElementSibling.style.fontSize = "12px";
    phoneNumberInputField.previousElementSibling.style.color = "#333";
  } else {
    phoneNumberInputField.previousElementSibling.style.top = "50%";
    phoneNumberInputField.previousElementSibling.style.fontSize = "16px";
    phoneNumberInputField.previousElementSibling.style.color = "#999";
  }
});


document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var formData = new FormData(this);
  
  fetch("/bookings", {
      method: "POST",
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById("message").textContent = data.message;
  })
  .catch(error => {
      console.error("Error:", error);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".btn");
  
  buttons.forEach(button => {
    button.addEventListener("click", function() {
      alert("You clicked the Learn More button!");
    });
  });
});

