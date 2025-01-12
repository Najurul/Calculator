function addToDisplay(value) {
    document.getElementById("display").value += value;
}


function calculation(){
    let currentInput = document.getElementById("display").value;
    let result ='';
    if (currentInput == ''|| 0){
        document.getElementById("display").value='0';
    }
    else{
        try {
            result = eval(currentInput).toString();
            document.getElementById("display").value=result;
        } catch (error) {
            currentInput = 'Error';
            document.getElementById("display").value=currentInput;
        }
    }
}

function clearDisplay() {
    let currentInput = document.getElementById("display").value;
    if (currentInput == 'Error'){
        document.getElementById("display").value = '';
    }
    else{
        document.getElementById("display").value = currentInput.slice(0, -1);
    }
}