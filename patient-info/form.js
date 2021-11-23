import { createElement } from './react-mock.js';

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

function serialize(form) {
  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData) {
    if (key in data) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
      continue;
    }

    data[key] = value;
  }

  return data;
}

/**
 * @template T
 * @param {string} key
 * @param {T} initial
 * @returns {[{ value: T }, (value: T) => void]}
 */
function useLocalStorage(key, initial) {
  const data = { value: JSON.parse(localStorage.getItem(key)) ?? initial };
  const set = value => {
    data.value = value;
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [data, set];
}

function listEntries(entries) {
  const entryList = document.querySelector('#form-entries');
  const e = entries.map(
    (entry, i) => createElement('tr', {}, [
      createElement('th', {}, i),
      createElement('td', {}, `${entry['last-name']}, ${entry['first-name']}`),
      createElement('td', {}, entry.address),
      createElement('td', {}, entry.contact),
    ]),
  );
  entryList.replaceChildren(...e);
}

const createOnSubmit = () => {
  const [entries, setEntries] = useLocalStorage('entries', []);
  listEntries(entries.value);

  return e => {
    e.preventDefault();
    const entry = serialize(e.currentTarget);
    setEntries([...entries.value, entry]);
    listEntries(entries.value);
    console.log(entries.value);
  };
};

document
  .querySelector('#form')
  .addEventListener('submit', createOnSubmit());
