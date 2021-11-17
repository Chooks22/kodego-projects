
const username = new URLSearchParams(location.search).get('username') ?? 'Guest';
const greeting = document.querySelector('#greeting');
greeting.textContent = `Welcome, ${username}!`;

const medications = document.querySelector('#medications');
function checkMedication(e) {
  /** @type {HTMLInputElement} */
  const input = e.target;
  const checked = Number(input.value);

  medications.value = '';
  medications.disabled = !checked;
  medications.required = checked;
}

document.querySelector('#medication-yes').addEventListener('change', checkMedication);
document.querySelector('#medication-no').addEventListener('change', checkMedication);
