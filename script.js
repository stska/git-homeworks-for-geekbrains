//RegExp for phone numbers and emails.
var regNumb = new RegExp(/\+\d\(\d{3}\)\d{3}-\d{4}/);
var regEmail = new RegExp(/[^\d]{1}\w{0,8}\@mail.ru/);


//the first task
function checkState() {

    var getTextAreaId = document.getElementById("textArea").value;
    var div = document.getElementById('getNewText');

    if (checkVal != getTextAreaId) {
        var checkVal = getTextAreaId;
        var newP = createP();
        clearDiv();
        createP();


        var addNewText = document.getElementById("first_div_area");
        var a = document.createTextNode(getTextAreaId.replace(/'/g, "\""));
        addNewText.appendChild(a);

    }
    //deleat the part with text
    function clearDiv() {
        var addNewText = document.getElementById("first_div_area");
        div.removeChild(addNewText);

    }
    
    function createP() {

        var create = document.createElement('p');
        create.id = "first_div_area";

        div.appendChild(create);

    }

    var checkVal = getTextAreaId;

}

//the second task
var inputTwo = document.getElementById('input_2');

inputTwo.addEventListener('click', function (e) {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var textArex_scnd = document.getElementById('textArea_scnd_form').value;


    if (regNumb.test(phoneNumber)) {
        var phNumber = document.getElementById('phoneNumber').style.backgroundColor = "green";

    }
    else {
        var phNumber = document.getElementById('phoneNumber').style.backgroundColor = "red";
    }

    if (regEmail.test(email)) {
        var emailStyle = document.getElementById('email').style.backgroundColor = "green";
    }

    else {
        var emailStyle = document.getElementById('email').style.backgroundColor = "red";
    }
    if (textArex_scnd != "") {
        var a = textArex_scnd;
        textArex_scnd = document.getElementById('textArea_scnd_form').value = "";
    }

});


