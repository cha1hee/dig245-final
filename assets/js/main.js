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
