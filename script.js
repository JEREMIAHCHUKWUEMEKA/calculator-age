const year_output =document.querySelector(".year-output");
const month_output =document.querySelector(".month-output");
const day_output =document.querySelector(".day-output");
const submit_btn =document.querySelector(".submit-btn");

let isvalid = false;
const input_year =document.getElementById("year");
const input_month =document.getElementById("month");
const input_day =document.getElementById("day");

const error_year =document.querySelector(".error-year");
const error_month =document.querySelector(".error-month");
const error_day =document.querySelector(".error-day");

//const input_required_error = "This field is required";
//const input_error_day ="Must be a valid day";
//const input_error_month ="Must be a valid month";
//const input_error_year ="Must be a valid year";

submit_btn.addEventListener("click", calculateDate);2

input_day.addEventListener('input', function(e) {
    if (+input_day.value > 31){
        error_day.textContent = "Must be a valid date";
        isvalid = false;
        return;
        
    } else {
        isvalid = true;
        error_day.textContent ="";
    }

     if (+input_day.value === 0){
        isvalid = false;
        error_day.textContent = "This field is required";
        isvalid = false;
        return;
        
    } else {
        isvalid = true;
        error_day.textContent ="";
    }
});

input_month.addEventListener('input', function(e) {
    if (+input_month.value > 12){
        error_month.textContent = "Must be a valid month";
        isvalid = false;
        return;
        
    } else {
        isvalid = true;
        error_month.textContent ="";
    }

     if (+input_month.value === 0){
        isvalid = false;
        error_month.textContent = "This field is required";
        isvalid = false;
        return;
        
    } else {
        isvalid = true;
        error_month.textContent ="";
    }
});

input_year.addEventListener('input', function(e) {
    if (+input_year.value > 2023){
        error_year.textContent = "Must be a valid year";
        isvalid = false;
        return;
        
    } else {
        isvalid = true;
        error_year.textContent ="";
    }

     if (+input_year.value === 0){
        isvalid = false;
        error_year.textContent = "This field is required";
        isvalid = false;
        return;
        
    } else {
        isvalid = true;
        error_year.textContent ="";
    }
});

function calculateDate(){
    if(isvalid) {
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        console.log(birthday);
        let birthdayobj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayobj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonths =ageDate.getUTCMonth();
        let ageDays = ageDate.getUTCDay();
        day_output.innerHTML =ageDays;
        month_output.innerHTML = ageMonths;
        year_output.innerHTML = ageYears;

    } else{
        alert('error');
    }
}