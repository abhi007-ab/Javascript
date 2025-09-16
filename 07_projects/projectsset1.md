# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

# Write your code in .js file on stackblitz (chaiaurcode)    
## chaiaurcode.js

## project 1 (colorchanger)

```javascript
// one.js  -> solution

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```


## project 2  (BMICalculator)

```javascript
// two.js  -> solution

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === '' || height < 0 || isNaN(height)){
  results.innerHTML = `Please give a valid height ${height}`;
}else if(weight === '' || weight < 0 || isNaN(weight)){
  results.innerHTML = `Please give a valid weight ${weight}`
}else {
  const bmi = (weight / ((height*height)/10000)).toFixed(2)
  //show the result
  results.innerHTML = `<span>${bmi}</span>`



let message = '';
if (bmi < 18.6) {
  message = `You are Underweight: ${bmi}`;
} else if (bmi > 18.6 || bmi < 24.9) {
  message = `You have a Normal weight: ${bmi}`;
}else if(bmi > 24.9){
  message = `You have a Overweight: ${bmi}`;
}
results.innerHTML = `<span>${message}</span>`;
}

})

```


## project 3  (DigitalClock)


```javascript
// three.js  -> solution

const clock = document.getElementById('clock')

// const clock = document.querySelector('#clock')


setInterval(function () {
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```


## project 4  (GuessTheNumber)

```javascript
// four.js  -> solution


```