function scoreExamination() {
    var pointOne = +document.getElementById("pointOne").value;
    var pointTwo = +document.getElementById("pointTwo").value;
    var pointThree = +document.getElementById("pointThree").value;
    var plusPoint = document.getElementById("plusPoint").value;
    var pointArea = document.getElementById("pointArea").value;
    var pointRight = +document.getElementById("pointRight").value;
  
    var scoreArea = calPointArea(pointArea);
    var scorePlus = calPlusPoint(plusPoint);
    var totalScore = calTotalScore(pointOne, pointTwo, pointThree);
  
    var lastScore = scoreArea + scorePlus + totalScore;
  
    show(pointOne, pointTwo, pointThree, lastScore);
  }
  
  function calPointArea(pointArea) {
    switch (pointArea) {
      case "A":
        return 2;
      case "B":
        return 1;
      case "C":
        return 0.5;
      default:
        return 0;
    }
  }
  
  function calPlusPoint(plusPoint) {
    switch (plusPoint) {
      case "1":
        return 2.5;
      case "2":
        return 1.5;
      case "3":
        return 1;
      default:
        return 0;
    }
  }
  
  function calTotalScore(pointOne, pointTwo, pointThree) {
    return pointOne + pointTwo + pointThree;
  }
  
  function show(pointOne, pointTwo, pointThree, lastScore) {
    if (pointOne === 0 || pointTwo === 0 || pointThree === 0) {
      document.getElementById("hienThi").style.display = "block";
      document.getElementById("hienThi").innerHTML = "Bạn đã rớt rồi";
    } else {
      document.getElementById("hienThi").style.display = "block";
      document.getElementById(
        "hienThi"
      ).innerHTML = `Bạn đã đậu rồi và điểm là ${lastScore}`;
    }
  }
  
  function calTotalOfMoney() {
    var theAmountOfKwSpending = +document.getElementById("theAmountOfKwSpending")
      .value;
    var ten = document.getElementById("ten").value;
    document.getElementById("ketQua").style.display = "block";
    var totalPrice;
    if (theAmountOfKwSpending <= 50) {
      totalPrice = theAmountOfKwSpending * 500;
    } else if (theAmountOfKwSpending <= 100) {
      totalPrice = 50 * 500 + (theAmountOfKwSpending - 50) * 650;
    } else if (theAmountOfKwSpending <= 200) {
      totalPrice = 50 * 500 + 50 * 650 + (theAmountOfKwSpending - 100) * 850;
    } else if (theAmountOfKwSpending < 350) {
      totalPrice =
        50 * 500 + 50 * 650 + 100 * 850 + (theAmountOfKwSpending - 200) * 1300;
    } else {
      totalPrice =
        50 * 500 +
        50 * 650 +
        100 * 850 +
        150 * 1100 +
        (theAmountOfKwSpending - 350) * 1300;
    }
    document.getElementById(
      "ketQua"
    ).innerHTML = `Số tiền ${ten} phải trả ${totalPrice}`;
  }