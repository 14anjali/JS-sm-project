const form = document.querySelector('form')

form.addEventListener('submit',function(event){
  event.preventDefault()

const height =  parseInt(document.querySelector('#height').value)
const weight =  parseInt(document.querySelector('#weight').value)
const results =  document.querySelector('#results')

if(height === ''|| height <0 || isNaN(height)){
results.innerHTML=`Please Provide a valid height ${height}`
}
else if(weight === ''|| weight <0 || isNaN(weight)){
  results.innerHTML=`Please Provide a valid weight ${weight}`
  }
  
   const bmi= (weight / ((height*height)/10000)).toFixed(2)

   let category;
   if (bmi < 18.5) {
     category = 'Underweight';
   } else if (bmi < 25) {
     category = 'Normal weight';
   } else if (bmi < 30) {
     category = 'Overweight';
   } else {
     category = 'Obese';
   }

   // 5. Render *one* message
   results.innerHTML = `
     <p>Your BMI is <strong>${bmi}</strong>.</p>
     <p>You are <strong>${category}</strong>.</p>`
})  