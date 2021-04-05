function validatecardnumber()
{
    var fcardnumber = document.getElementById("cardNumber").nodeValue;
    var input = /[0-9]{13,19}/;

    if(input.test(fcardnumber))
    {
        document.getElementById("cardNumberPrompt").style.color="green";
        document.getElementById("cardNumberPrompt").innerHTML="valid";
        return true;
    }
    else
    {
        document.getElementById("cardNumberPrompt").style.color="red";
        document.getElementById("cardNumberPrompt").innerHTML="invalid";
        return false;
    }
}