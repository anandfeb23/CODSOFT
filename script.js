document.addEventListener("DOMContentLoaded", function () {
  function addToDisplay(value) {
    document.forms.display.value += value;
  }

  document.getElementById("one").addEventListener("click", function () {
    addToDisplay("1");
  });
  document.getElementById("two").addEventListener("click", function () {
    addToDisplay("2");
  });
  document.getElementById("three").addEventListener("click", function () {
    addToDisplay("3");
  });
  document.getElementById("four").addEventListener("click", function () {
    addToDisplay("4");
  });
  document.getElementById("five").addEventListener("click", function () {
    addToDisplay("5");
  });
  document.getElementById("six").addEventListener("click", function () {
    addToDisplay("6");
  });
  document.getElementById("seven").addEventListener("click", function () {
    addToDisplay("7");
  });
  document.getElementById("eight").addEventListener("click", function () {
    addToDisplay("8");
  });
  document.getElementById("nine").addEventListener("click", function () {
    addToDisplay("9");
  });
  document.getElementById("zero").addEventListener("click", function () {
    addToDisplay("0");
  });
  document.getElementById("add").addEventListener("click", function () {
    addToDisplay("+");
  });
  document.getElementById("subs").addEventListener("click", function () {
    addToDisplay("-");
  });
  document.getElementById("multi").addEventListener("click", function () {
    addToDisplay("*");
  });
  document.getElementById("divide").addEventListener("click", function () {
    addToDisplay("/");
  });
  document.getElementById("dot").addEventListener("click", function () {
    addToDisplay(".");
  });
  document.getElementById("equal").addEventListener("click", function () {
    var displayValue = document.forms.display.value;
    if (displayValue === "") {
      alert("Enter numbers to calculate!");
    } else {
      try {
        var result = math.evaluate(displayValue);
        document.forms.display.value = result;
      } catch (error) {
        alert("Invalid expression!");
      }
    }
  });
  document.getElementById("clear").addEventListener("click", function () {
    document.forms.display.value = "";
  });
});
