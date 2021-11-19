function add(num1, num2){
  let result = num1+num2;
  return result;

}
function sub(num1, num2){
  let result = num1-num2;
  return result;

}

function mul(num1, num2){
  let result = num1*num2;
  return result;

}

function div(num1, num2){
  let result = num1/num2;
  return result;

}

function modulo(num1, num2){
  let result = num1%num2;
  return result;

}

$(document).ready(function() {
  $("#calculator").submit(function(event) {
    event.preventDefault();
    const firstNumber = parseInt($("#number1").val());
    const sencondNumber = parseInt($("#number2").val());
  
    $("#add").click(function() {
      const result = add(firstNumber, sencondNumber);
      $("#total").text(result);
    })

    $("#sub").click(function() {
      const result = sub(firstNumber, sencondNumber);
      $("#total").text(result);
    })

    $("#multiply").click(function() {
      const result = mul(firstNumber, sencondNumber);
      $("#total").text(result);
    })

    $("#divide").click(function() {
      const result = div(firstNumber, sencondNumber);
      $("#total").text(result);
    })

    $("#modulo").click(function() {
      const result = modulo(firstNumber, sencondNumber);
      $("#total").text(result);
    })
  })
})
