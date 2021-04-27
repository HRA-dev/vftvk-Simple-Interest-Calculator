function init() {
    
    /* declare variables*/
    amount = document.getElementById('amount');
    rate = document.getElementById('rate_slider');
    rate_display = document.getElementById('rate_display');
    nb_years=document.getElementById('nbyears');
    result=document.getElementById('result');
    
    // display current rate
    update_rate(rate.value);

    // reset output
    result.innerHTML = ""

    // focus on first input field
    amount.focus();
}


function update_rate(val) {
    rate_display.innerHTML = parseFloat(val).toFixed(2) + "%" ; 
}

function isAmountOK(val){
    return (isNaN(val) || (parseInt(val) <= 0) || val === undefined || val == null || val.length <= 0) ? false : true;
}

// enable button only if amount is a positive number
function validate() { 
    if (isNaN(amount.value) || isEmpty(amount.value) || (parseInt(amount.value) <= 0)) { 
        alert("Positive amount expected"); 

    }
}


function compute() {

    if (isAmountOK(amount.value) == true) { 
        var today= new Date();
        var cur_year = today.getFullYear();
        nbyears = parseInt(nb_years.value)
        interest = amount.value * rate.value * nbyears /100;
        result.innerHTML =  "If you deposit " + amount.value + ",<br/>" +
                            "at an interest rate of " + rate_display.innerHTML + ".<br/>" +
                            "You will receive an amount of " + interest + ",<br/>" +
                            "in the year " + (cur_year + nbyears);
    }
    else  { 
        result.innerHTML = "";
        alert("Positive amount expected"); 
    }
}