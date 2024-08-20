const calculator = document.querySelector(".calc__buttons");
const result = document.querySelector(".calc__result");

calculator,
  addEventListener("click", (e) => {
    if (!e.target.classList.contains("calc__btn")) return;

    const value = e.target.innerText;

    switch (value) {
      case "AC":
        result.innerText = "";
        break;
      case "=":
        result.innerText = eval(result.innerText);
        break;
      case "+/-":
        const currentValue = parseFloat(result.innerText);
        if (!isNaN(currentValue)) {
          // Устанавливаем число в отрицательное или делаем его положительным, если оно уже отрицательное
          result.innerText = (currentValue * -1).toString();
        }
        break;
      case "%":
        result.innerText = result.innerText / 100;
        break;

      default:
        const lastChar = result.innerText.slice(-1);
        const restrictedSymbols = "+-*/.";

        if (
          restrictedSymbols.includes(lastChar) &&
          restrictedSymbols.includes(value)
        ) {
          return; // Если последний символ и текущий ввод — операторы, не добавляем его
        }
        

        result.innerText += value;
    }
  });
