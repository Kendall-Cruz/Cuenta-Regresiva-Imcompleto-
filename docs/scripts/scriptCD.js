
let x = null;

function InitializeCountdown() {
    
    clearInterval(x);
    var distance = 0;
    var now = 0;

    const name = new String(document.getElementById('txtName').value)
    const targetDate = new Date(document.getElementById('dtpDate').value).getTime();
    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
    
    if (isNaN(targetDate)) {
        alert('Please select a valid date.');
        return;
    }
   
    x = setInterval(function() {
        now = new Date().getTime(); 
        distance = targetDate - now; 

        
        if (distance <= 0) {
            clearInterval(x);
            document.getElementById('days').innerText = '';
            document.getElementById('hours').innerText = '';
            document.getElementById('minutes').innerText = '';
            document.getElementById('segundos').innerText = '';
            alert(`¡Happy Birthday ${name}!`);
        } else {
            
            let days = Math.floor(distance / day);
            let hours = Math.floor((distance % day) / hour);
            let minutes = Math.floor((distance % hour) / minute);
            let seconds = Math.floor((distance % minute) / second);

            let contenedor= document.querySelector('.timer');

            contenedor.innerHTML= `
                <span id="days">${days} <strong>D </strong></span><span id="hours">${hours} <strong>H  </strong></span><span id="minutes">${minutes} <strong>M  </strong></span><span id="segundos">${seconds} <strong>S  </strong></span>
            `

        }
    }, 1000); 
}
