import refs from './refs.js';

const { daysC, hoursC, minsC, secondsC } = refs;

console.log(daysC);
console.log(hoursC);
console.log(minsC);
console.log(secondsC);

let intID = null;
const timer = {
  start() {
    const targetDate = new Date('JAN 01, 2022 00:00:00 ');

    intID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      insertValues(days, hours, mins, secs);

      if (deltaTime < 0) {
        clearMarkup();
        clearInterval(intID);
      }

      console.log(`${days}: ${hours}: ${mins}: ${secs} `);
    }, 1000);
  },
};

timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function insertValues(d, h, m, s) {
  daysC.textContent = d;
  hoursC.textContent = h;
  minsC.textContent = m;
  secondsC.textContent = s;
}

function clearMarkup() {
  daysC.textContent = '00';
  hoursC.textContent = '00';
  minsC.textContent = '00';
  secondsC.textContent = '00';
}
//
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );

  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
