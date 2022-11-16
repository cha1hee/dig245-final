const answerKey = [1,1,2,2,1,2,2,1,2,2];
let userAns = new Array();

$('.scam').click(function() {
  userAns.push(1);
})
$('.real').click(function() {
  userAns.push(2);
})

document.getElementById('start').addEventListener('click', function() {
  let popup = document.getElementById("q1");
  let prev = document.getElementById("start");
    popup.style.visibility = "visible";
    prev.style.visibility = "hidden";
  })

$('#scam1, #real1').click(function() {
  let popup = document.getElementById("q2");
  let prev = document.getElementById("q1");
    popup.style.visibility = "visible";
    prev.style.visibility = "hidden";
  })

$('#scam2, #real2').click(function() {
  let popup = document.getElementById("q3");
  let prev = document.getElementById("q2");
    popup.style.visibility = "visible";
    prev.style.visibility = "hidden";
})

$('#scam3, #real3').click(function() {
  let popup = document.getElementById("q4");
  let prev = document.getElementById("q3");
    popup.style.visibility = "visible";
    prev.style.visibility = "hidden";
})

$('#scam4, #real4').click(function() {
  let popup = document.getElementById("q5");
  let prev = document.getElementById("q4");
    popup.style.visibility = "visible";
    prev.style.visibility = "hidden";
})

$('#scam5, #real5').click(function() {
  let popup = document.getElementById("q6");
  let prev = document.getElementById("q5");
    popup.style.visibility = "visible";
    prev.style.visibility = "hidden";
})

$('#scam6, #real6').click(function() {
  let popup = document.getElementById("q7");
  let prev = document.getElementById("q6");
    popup.style.visibility = "visible";
    prev.style.visibility = "hidden";
})

$('#scam7, #real7').click(function() {
  let popup = document.getElementById("q8");
  let prev = document.getElementById("q7");
    popup.style.visibility = "visible";
    prev.style.visibility = "hidden";
})

$('#scam8, #real8').click(function() {
  let popup = document.getElementById("q9");
  let prev = document.getElementById("q8");
    popup.style.visibility = "visible";
    prev.style.visibility = "hidden";
})

$('#scam9, #real9').click(function() {
  let popup = document.getElementById("q10");
  let prev = document.getElementById("q9");
    popup.style.visibility = "visible";
    prev.style.visibility = "hidden";
})

$('#scam10, #real10').click(function() {
  let prev = document.getElementById("q10");
    prev.style.visibility = "hidden";

  let openedSpam = 0;
  for(let i = 0; i < answerKey.length; i ++){
    if(answerKey[i] == 1 && userAns[i] == 2){
      openedSpam ++;
    }
  }
  console.log(openedSpam);
})
