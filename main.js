var $button = document.querySelector(".btn");
$button.addEventListener('click', showBirthday);

function showResult(days) {
    var parent = document.querySelector(".result");
    var result = document.querySelector(".result span");
    result.innerHTML = days;
    parent.style.display = "block";
    console.log("shown");
}

function showBirthday() {
    var birthday = new Date(document.forms["age__form"]["birthday"].value);
    console.log(new Date() - birthday);
    var seconds = 1000;
    var mins = 60;
    var hours = 60;
    var days = 24;
    var now = new Date();
    
    showResult(Math.floor((now - birthday) / seconds / mins / hours / days));
}
