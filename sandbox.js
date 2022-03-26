
let userChosenRate = 0;
let ratings = document.querySelectorAll('.rate');

let rateNum = document.getElementsByClassName('num-rate');
ratings.forEach(rate => {
    rate.addEventListener('click', selectRating)
})

function selectRating(event) {


    ratings.forEach(rate => {
        if(event.target.innerHTML == rate.innerHTML) {
            rate.style.backgroundColor = 'hsl(25, 97%, 53%)';
            rate.style.color = 'hsl(0, 0%, 100%)';
            userChosenRate =  rate.innerHTML;
            console.log(rate.innerHTML)
            document.querySelector('.show-rate').textContent = `You selected ${userChosenRate} out of 5`;
            console.log(`You selected ${userChosenRate} out of 5`)
           
        } else {
            rate.style.backgroundColor = 'hsl(214, 15%, 22%)';
            rate.style.color = 'hsl(216, 12%, 54%)';
        }
    })
}



let submitRateBtn = document.querySelector('.submit-rate');
document.querySelector('#thanks-card').style.display = 'none';
submitRateBtn.addEventListener('click', showThanksCard)

function showThanksCard(event) {
  event.preventDefault();
    if(userChosenRate !== 0) {
   document.querySelector('#rating-card').style.display = 'none';
   document.querySelector('#thanks-card').style.display = 'inline-block';
    }
}

