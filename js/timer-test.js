const holidayDate = new Date('Jan 01, 2022 00:00:00 ');
console.log(holidayDate);

const timerRef = document.querySelector('.timer');
console.log(timerRef);

function pad(value) {
  return String(value).padStart(2, '0');
}

const timerID = setInterval(() => {
  let distance = holidayDate - Date.now();
  const days = pad(Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((distance % (1000 * 60)) / 1000));

  //   timerRef.innerHTML = `days:${days}, hours:${hours}, mins:${mins}, secs:${secs}`;
  timerRef.innerHTML = `${days} : ${hours} : ${mins} : ${secs}`;
  if (distance < 0) {
    clearInterval(timerID);
    timerRef.innerHTML = `00 : 00 : 00 : 00`;
  }
}, 1000);

// import refs from './refs.js';

// const { daysC, hoursC, minsC, secondsC } = refs;

// console.log(daysC);
// console.log(hoursC);
// console.log(minsC);
// console.log(secondsC);

// //
// let intID = null;
// const timer = {
//   start() {
//     // const startTime = Date.now();
//     const startTime = new Date('JAN 01, 2022 00:00:00 ');

//     intID = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = startTime - currentTime;
//       const { days, hours, mins, secs } = getTimeComponents(deltaTime);
//       //   const timeComponents = getTimeComponents(deltaTime);
//       //   console.log(timeComponents);
//       insertValues(days, hours, mins, secs);
//       //   if (distance < 0) {
//       //     clearInterval(timerID);
//       //     timerRef.innerHTML = 'Свято закінчилось';
//       //   }
//       // }, 1000);
//       if (deltaTime < 0) {
//         clearMarkup();
//         clearInterval(intID);
//       }

//       console.log(`${days}: ${hours}: ${mins}: ${secs} `);
//     }, 1000);
//   },
// };

// timer.start();
// // timer.stop();
// // function updateClockface({ days, hours, mins, secs }) {
// //   refs.clockface.textContent = `${days}: ${hours}: ${mins}: ${secs} `;
// // }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function insertValues(d, h, m, s) {
//   //   {
//   //     daysC, hoursC, minsC, secondsC;
//   //   }
//   daysC.textContent = d;
//   hoursC.textContent = h;
//   minsC.textContent = m;
//   secondsC.textContent = s;
// }

// function clearMarkup() {
//   daysC.textContent = '00';
//   hoursC.textContent = '00';
//   minsC.textContent = '00';
//   secondsC.textContent = '00';
// }
// //
// // new CountdownTimer({
// //   selector: '#timer-1',
// //   targetDate: new Date('Jul 17, 2019'),
// // });

// function getTimeComponents(time) {
//   /*
//    * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//    * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//    */
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   /*
//    * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//    * остатка % и делим его на количество миллисекунд в одном часе
//    * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//    */
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   /*
//    * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//    * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//    */
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   /*
//    * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//    * миллисекунд в одной секунде (1000)
//    */
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { days, hours, mins, secs };
// }
