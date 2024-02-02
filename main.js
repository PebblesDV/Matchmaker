function calculateMatch() {
  let nameA = document.getElementById("nameA").value;
  let nameB = document.getElementById("nameB").value;
  if (nameA && nameB) {
    a = nameA.length;
    b = nameB.length;
    c = a - b;
    if (c > 0) {
      d = ((18 - c) / 18) * 100;
      if (c > 3) {
        d = d - d / 12;
      }
      d = d.toFixed(1);
    } else if (c < 0) {
      d = ((18 - -1 * c) / 18) * 100;
      if (c < -3) {
        d = d - d / 12;
      }
      d = d.toFixed(1);
    } else {
      d = 100;
    }
  } else {
    d = null;
  }

  if (d) {
    e = 0;
    myInterval = setInterval(function(){
      if (e >= d) {
        e = Math.round(e);
        document.getElementById("percentageText").innerHTML = e + "%!";
        clearInterval(myInterval);
      } else {
        e = Math.round(e);
        document.getElementById("percentageText").innerHTML = e + "%!";
        e++
    }
    }, 100)
    
  }
}


function fillHeart() {
  var heart = document.getElementById('heart');
  heart.classList.toggle('filled');
}

function pushButton() {
  calculateMatch();
  fillHeart();
}