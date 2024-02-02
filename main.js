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
    extra = calculateRating();
    //document.getElementById("inputhere").innerHTML = d + "%! " + extra;
    console.log(d + "%! " + extra);
  } else {
    //document.getElementById("inputhere").innerHTML = "Dude, fill in both names.";
    console.log("Dude, fill in both names.");
  }
}

function calculateRating() {
  if (d == 100) {
    return "You are a perfect match!";
  } else if (d >= 80 && d < 100) {
    return "You are amazing for each other!";
  } else if (d >= 60 && d < 80) {
    return "You are pretty good for each other!";
  } else if (d >= 40 && d < 60) {
    return "You could do worse.";
  } else {
    return "Miss Match!";
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