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

$(document).ready(function(){
 $(".add").click(function(event){
  event.preventDefault();
  let input1= $("#number1").val();
  let input2= $("#number2").val();

  $("#number1").text();
  $("#number2").text();

  let nomm1= Number(input1);
  let nomm2= Number(input2);

  let answer= add(nomm1,nomm2)

  $("#total").text(answer);
});

$(".sub").click(function(event){
  event.preventDefault();
  let input1= $("#number1").val();
  let input2= $("#number2").val();

  $("#number1").text();
  $("#number2").text();

  let nomm1= Number(input1);
  let nomm2= Number(input2);

  let answer= sub(nomm1,nomm2)

  $("#total").text(answer);
});

$(".div").click(function(event){
  event.preventDefault();
  let input1= $("#number1").val();
  let input2= $("#number2").val();

  $("#number1").text();
  $("#number2").text();

  let nomm1= Number(input1);
  let nomm2= Number(input2);

  let answer= div(nomm1,nomm2)

  $("#total").text(answer);
});

$(".mul").click(function(event){
  event.preventDefault();
  let input1= $("#number1").val();
  let input2= $("#number2").val();

  $("#number1").text();
  $("#number2").text();

  let nomm1= Number(input1);
  let nomm2= Number(input2);

  let answer= mul(nomm1,nomm2)

  $("#total").text(answer);
});

$(".mod").click(function(event){
  event.preventDefault();
  let input1= parseInt($("#number1").val());
  let input2= parseInt($("#number2").val());


  let answer= modulo(input1,input2);

  if(Number1 ==="" || Number2 === "")
  {
    $("#total").text("Input number");
  }

  $(".add").click(function(){
    const answer = add(Number1,Number2);
  })

  $("#total").text(answer);
});

});