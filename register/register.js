let participantCount = 1;

document.querySelector("#addParticipant").addEventListener("click", () => {
  participantCount++;
  const template = participantTemplate(participantCount);

  // Insert before the add button
  const addBtn = document.querySelector("#addParticipant");
  addBtn.insertAdjacentHTML("beforebegin", template);
});

function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <label for="name${count}">Name:</label>
      <input id="name${count}" name="name${count}" type="text" required />

      <label for="fee${count}">Fee ($):</label>
      <input id="fee${count}" name="fee${count}" type="number" min="0" required />
    </section>
  `;
}

document.querySelector("#registrationForm").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  const total = totalFees();
  const name = document.querySelector("#adultName").value;
  const summary = document.querySelector("#summary");

  document.querySelector("form").classList.add("hide");
  summary.classList.remove("hide");
  summary.innerHTML = successTemplate({ name, total, count: participantCount });
}

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  return feeElements.reduce((sum, input) => sum + Number(input.value || 0), 0);
}

function successTemplate(info) {
  return `
    <h2>Thank you, ${info.name}!</h2>
    <p>You have registered ${info.count} participant(s) and owe $${info.total} in fees.</p>
  `;
}
