
// seleciona todos os elementos com a classe .c-countdown
const countdowns = document.querySelectorAll('.c-countdown');

// loop para inicializar cada contador
for (let countdown of countdowns) {
    // obtém a data de início do contador
    const startDate = countdown.getAttribute('data-start-date');

    // obtém as partes da data
    const targetDate = new Date(startDate).getTime();
    const now = new Date().getTime();

    // calcula o tempo restante
    const timeRemaining = targetDate - now;
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    // atualiza o HTML com os valores do contador
    const dayElem = countdown.querySelector('.c-countdown__num.--day .c-countdown__num__main');
    const hourElem = countdown.querySelector('.c-countdown__num.--hours .c-countdown__num__main');
    const minuteElem = countdown.querySelector('.c-countdown__num.--minutes .c-countdown__num__main');
    const secondElem = countdown.querySelector('.c-countdown__num.--seconds .c-countdown__num__main');
    const feedbackElem = countdown.querySelector('.c-countdown__feedback');

    dayElem.innerHTML = days;
    hourElem.innerHTML = hours;
    minuteElem.innerHTML = minutes;
    secondElem.innerHTML = seconds;

    // função para atualizar o contador a cada segundo
    function updateCounter() {
        // recalcular o tempo restante
        const timeRemaining = targetDate - new Date().getTime();
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

        // atualiza o HTML com os novos valores
        dayElem.innerHTML = days <= 9 ? '0'+days : days ;
        hourElem.innerHTML = hours <= 9 ? '0'+hours : hours ;
        minuteElem.innerHTML = minutes <= 9 ? '0'+minutes : minutes ;
        secondElem.innerHTML = seconds <= 9 ? '0'+seconds : seconds ;

        // verifica se o contador chegou a zero
        if (timeRemaining < 0) {
            clearInterval(countdownInterval); // para o intervalo de atualização do contador
            feedbackElem.classList.remove('u-dnone');
            dayElem.parentElement.remove();
            hourElem.parentElement.remove();
            minuteElem.parentElement.remove();
            secondElem.parentElement.remove();
        }
    }

    // inicia a atualização do contador a cada segundo
    const countdownInterval = setInterval(updateCounter, 1000);
}
