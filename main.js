flatpickr("#myDate", {
  dateFormat: "Y-m-d", 
  maxDate: "today"    
});
const DateTime = luxon.DateTime;

let date = document.querySelector('.date-picker').value;

const button = document.querySelector('.cal-btn');

let result = document.querySelector('.result');
button.addEventListener('click' , ()=>{
   const birth = document.getElementById("myDate").value;

  if(!birth){
 result.innerHTML = `Please enter your birthdate!`;
 return;
  } 

  const birthDate = DateTime.fromISO(birth);
   const now = DateTime.now();

   const age = now.diff(birthDate , ["years", "months" , "days"]).toObject();

   result.innerHTML = `You are ${Math.floor(age.years)} years and ${age.months} months and ${Math.floor(age.days)}  days old! `;
  
})