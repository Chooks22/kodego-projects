HTMLElement.prototype.on = HTMLElement.prototype.addEventListener;
const $ = document.querySelector.bind(document);
$.all = document.querySelectorAll.bind(document);

const prettify = formula => formula
  .split(' ')
  .map(val => isNaN(val)
    ? val
    : Number(val).toLocaleString())
  .join(' ');

const curr = $('#curr');
let value = curr.value = '';

const formula = {
  get value() {
    return value;
  },
  set value(val) {
    value = val;
    curr.value = prettify(val) + (/\d\.$/.test(val) ? '.' : '');
  },
  solve() {
    try {
      return eval(value);
    } catch {
      return 'Error';
    }
  }
}

const isNum = num => !isNaN(num);
const endsWithOp = () => /[%/*+-]$/.test(formula.value);

const appendVal = char => () => {
  const hasOp = endsWithOp();
  if (
    (isNum(char) && hasOp && !/ [%/*+-] -$/.test(formula.value)) ||
    (isNaN(char) && !hasOp)
  ) formula.value += ` ${char}`;
  else if (isNum(char))
    formula.value += char;
}

const appendDot = () => {
  // get last part separated by space.
  // if last part was an operator, then it will never include a point.
  // if last part is a number, then it can include a point.
  const lastSpace = formula.value.lastIndexOf(' ');
  if (!formula.value.slice(lastSpace + 1).includes('.'))
    formula.value += endsWithOp() ? ' .' : '.';
}

const appendNeg = () => {
  // minus sign can be used as an operator, as well as
  // added for negative numbers at the start or after an operator
  if (formula.value !== '-' && !/ [%/*+-] -$/.test(formula.value))
    formula.value = (formula.value + ' -').trim();
}

const append = char => {
  switch (char) {
    case '.': return appendDot;
    case '-': return appendNeg;
    default: return appendVal(char);
  }
}

$('#calculator').on('submit', e => {
  e.preventDefault();
  formula.value = formula.solve().toString();
});

$('#clr').on('click', () => formula.value = '');
$('#mod').on('click', append('%'));
$('#div').on('click', append('/'));
$('#mul').on('click', append('*'));
$('#add').on('click', append('+'));
$('#sub').on('click', append('-'));
$('#dot').on('click', append('.'))

for (const btn of $.all('.num')) {
  btn.on('click', append(btn.value));
}
