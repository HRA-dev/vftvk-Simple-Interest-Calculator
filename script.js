function init() {
    document.getElementById("amount").focus();
    updateTextInput(rate.value);
    document.getElementById("btn_calc").disabled = true; 
}

function updateTextInput(val) {
    document.getElementById('textInput').value=val+"%"; 
}


// enable button only if amount is a positive number
function validate() { 
    alert("ffff");
    alert(isNaN(amount.value));
    if (isNaN(amount.value) || (parseInt(amount.value) <= 0)) { 
        alert("Positive amount expected"); 
    }
}


function compute() {

    /* declare variables*/
    amount = document.getElementById('amount').value;
    rate= document.getElementById('rate').value;
    nb_years=document.getElementById('nbyears').value;
    result=document.getElementById('result');

    /* calcul du nombre d'année*/
    var today= new Date();
    var cur_year = today.getFullYear();

    /* output */
    result.innerHTML="If you deposit"+"&nbsp;"+(amount)+","+"<br/>"+ "at an interest rate of"+"&nbsp;"+(rate)+"."+"<br/>"+
"You will receive an amount of"+"&nbsp;"+(amount*rate*nb_years/100)+","+"<br/>"+
"in the year"+"&nbsp;"+(cur_year);

}



function test () {

var principal = document.getElementById("principal").value;
if (principal<=0){
  document.getElementById("result").innerHTML = "Please enter a valid amount.";
  return;
}
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = (parseInt(principal) * parseFloat(rate) * parseInt(years))/100;
var currentDate = new Date();
var year = currentDate.getFullYear();
var maturityYear = parseInt(years) + parseInt(year);
var maturityValue = parseInt(interest) + parseInt(principal);
var output = "If you deposit " + principal +"<br>at an interest rate of " + rate +"%.<br>You will receive an amount of " + maturityValue + "<br> at year " + maturityYear + ".<br>";
document.getElementById("result").innerHTML = output;


}


function test2() {
    p = document.getElementById("principal").value;
 
    if(parseInt(p)>0 )          /*this condition will again validate 
                                principal input field after clicking on calculate interest button. */
    {
    r=document.getElementById("rate").value;   
    y=document.getElementById("years").value; 
    i=parseInt(p)*parseInt(r)*parseInt(y)/100;
    total = parseInt(p)+i;
    var d = new Date();
    var n = d.getFullYear();
    years=n+parseInt(y);
    str="<br/> If you deposit <span style='background-color:yellow;'>"+p+"</span>";
    str=str+"<br/> at an interset rate of <span style='background-color:yellow;'>"+r+"%.</span>";
    str=str+"<br/> you will receive amount of <span style='background-color:yellow;'>"+total+",</span>";
    str=str+"<br/> in the year <span style='background-color:yellow;'>"+years+"</span>";

    document.getElementById("result").innerHTML=str; 
    }
    else                  /*if this conditon gets failed, this case
                           will move focus to principal amount input field and alert a message though else condition */
    {
      alert("Enter a positive number");
     document.getElementById("principal").focus();
    }
}