// timer
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = '0' + t.days + 'd :';
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2) + 'h :';
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2) + 'm :';
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2) + 's';
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  var deadline = new Date(Date.parse(new Date()) + 3 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock('countdown', deadline);
//   /timer


let btnOffer = document.querySelectorAll('.flicker'),
    body = document.getElementsByTagName('body');

function addFlicker() {
    [...btnOffer].forEach((blinks) => (blinks.classList.add('not-active-click')));
}
function removeFlicker() {
    [...btnOffer].forEach((blinks) => (blinks.classList.remove('not-active-click')));
}

function btnOfferNotClick(e) {
    if (!e.target.matches('.btnOffer, .btnOffer *')) {
        addFlicker();
        setTimeout(() => (removeFlicker()) , 300);
    }
}

document.addEventListener('click', btnOfferNotClick);









// pay-card

