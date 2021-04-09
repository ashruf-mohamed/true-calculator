/*global console, alert, document*/

var history1 = document.getElementById("history");
var current = document.getElementById("current");
var isLastBtnNum = false;
var equation = [];
var values = null;
var yourValue = null;
var operator;




function getNumbers(num) {                  //get a numbers
    "use strict";
    var result;
    if (isLastBtnNum) {
        if (values) {
            values = '' + values + num;
            current.value = values;
        }
    } else {
        values = num;
        current.value = num;
    }
    isLastBtnNum = true;
}



function getOperators(opr) {                // get the operator
    "use strict";
    if (yourValue) {
        operator = opr;
        equation.push(yourValue);
        equation.push(operator);
        yourValue = null;
        current.value = '';
        history1.innerHTML = equation.join("");
        isLastBtnNum = false;
    } else if (values) {
        operator = opr;
        equation.push(values);
        equation.push(operator);
        values = null;
        current.value = '';
        history1.innerHTML = equation.join("");
        isLastBtnNum = false;
    } else {
        operator = opr;
        return;
    }
}

function calculate() {                      //evaluate the equation
    'use strict';
    equation.push(values);
    equation.push(" =");
    history1.innerHTML = equation.join("");
    
    function array() {
        if (equation.includes(" * ")) {
            var mul = equation.indexOf(" * "),
                equal1 = Number(equation[mul - 1]) * Number(equation[mul + 1]);
            equation.splice(mul - 1, 3, equal1);
            array();
        } else if (equation.includes(" / ")) {
            var div = equation.indexOf(" / "),
                equal2 = Number(equation[div - 1]) / Number(equation[div + 1]);
            equation.splice(div - 1, 3, equal2);
            array();
        } else if (equation.includes(" + ")) {
            var plus = equation.indexOf(" + "),
                equal3 = Number(equation[plus - 1]) + Number(equation[plus + 1]);
            equation.splice(plus - 1, 3, equal3);
            array();
        } else if (equation.includes(" - ")) {
            var min = equation.indexOf(" - "),
                equal4 = Number(equation[min - 1]) - Number(equation[min + 1]);
            equation.splice(min - 1, 3, equal4);
            array();
        }
    }
    array();
    equation.pop();
    current.value = equation;
    values = current.value;
    equation = [];
    
}





function clear1() {                         //clear button
    'use strict';
    values = null;
    current.value = "";
    history1.innerHTML = "";
    equation = [];
    isLastBtnNum = false;

}




function back() {                           //backspace button
    'use strict';
    if (current.value.length <= 1) {
        values = null;
        current.value = "";
        isLastBtnNum = false;
    } else {
        current.value = current.value.substring(0, current.value.length - 1);
        values = values.substring(0, values.length - 1);
    }
}


function toCurrencies(rate) {                           // function of currencies converter 
    'use strict';
    history1.innerHTML = values;
    yourValue = Number(values) * rate;
    current.value = yourValue;
    isLastBtnNum = false;
    
}
function fromCurrencies(rate) {
    'use strict';
    history1.innerHTML = values;
    yourValue = Number(values) / rate;
    current.value = yourValue;
    isLastBtnNum = false;
}
