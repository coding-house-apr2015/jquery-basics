'use strict';

$(document).ready(init);

function init(){
  // $('#go').click(go);
  // $('#calc').click(calc);

  $('.article').click(settext);
  $('.noun').click(settext);
  $('.verb').click(settext);
  $('.adjective').click(settext);
  $('#clear').click(clear);
}

function clear(){
  $('#sentence').text('');
}

function settext(){
  var old = $('#sentence').text();
  var text = $(this).text();
  var newtext = old + ' ' + text;
  $('#sentence').text(newtext);
}

// function calc(){
//   var x = $('#x').val() * 1;
//   var op = $('#op').val();
//   var y = $('#y').val() * 1;
//   var answer;
//   switch(op){
//     case '+':
//       answer = x + y;
//       break;
//     case '-':
//       answer = x - y;
//       break;
//     case '*':
//       answer = x * y;
//       break;
//     case '/':
//       answer = x / y;
//   }
//   $('#answer').text(answer);
// }
//
// function go(){
//   var numbers = $('#numbers').val();
//   numbers = numbers.split(',');
//   numbers = numbers.map(function(n){
//     return n * 1;
//   });
//
//   var sum = numbers.reduce(function(old, curr){
//     return old + curr;
//   });
//
//   var product = numbers.reduce(function(old, curr){
//     return old * curr;
//   });
//
//   $('#sum').text(sum);
//   $('#product').text(product);
// }

// function crazy(){
//   setInterval(function(){
//     $('p').toggleClass('fun');
//   }, 20);
// }
