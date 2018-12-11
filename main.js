

document.querySelector(".btn").onclick=showYourself;
document.querySelector(".btn").onclick=showBirthday;


function showYourself() {
    let result= document.querySelector(".result");
result.style.display="block";
console.log("shown");
}

function hideAndSeek() {
    document.querySelector(".result").style.display="none";
}
//window.onload =hideAndSeek();
function showBirthday() {
    var birthday = document.forms["age__form"]["birthday"].value;
    console.log(birthday);

   
}
let date = new Date();
 let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();
   if (dd < 10) {
     dd = '0' + dd;
   } 
   if (mm < 10) {
     mm = '0' + mm;
   } 
   let todaysDate = dd + '/' + mm + '/' + yyyy;
   console.log(todaysDate);

/*  I need to 1. format both dates the same. 
2. Figure out how to bridge months, years etc.
