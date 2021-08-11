createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let i = 0; i < dezDaysList.length; i += 1){
  let liDays = document.createElement('li');
  liDays.className = 'day';
  
  if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
    liDays.className += ' holiday';
  }  
  
  if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
    liDays.className += ' friday';
  }

  liDays.innerText = dezDaysList[i];
  document.querySelector("#days").appendChild(liDays);
}





createButton('Feriados');
document.querySelector('.btn-holiday').addEventListener("click",revealHoliday);



function revealHoliday(){
  let dayHoliday = document.getElementsByClassName("holiday");

  for (let i = 0; i < dayHoliday.length; i += 1) {

    if (dayHoliday[i].style.backgroundColor == '' || dayHoliday[i].style.backgroundColor == "rgb(238, 238, 238)") {
    dayHoliday[i].style.backgroundColor = 'darkblue';
    } else {dayHoliday[i].style.backgroundColor = "rgb(238, 238, 238)";}

  }
}


function createButton(sParameter){
  button = document.createElement('button');
  button.className = "btn-holiday";
  button.innerText = sParameter;
  document.querySelector(".buttons-container").appendChild(button);
}

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};