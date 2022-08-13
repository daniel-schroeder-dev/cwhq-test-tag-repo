function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isUniqueRows(firstNumber, secondNumber, rows) {
  return rows.every((row) => {
    for (first in row) {
      if (first == firstNumber && row[first] == secondNumber) {
        console.log("isUniqueRows()");
        console.log(firstNumber, secondNumber)
        return false;
      }
    }
    return true;
  });
}

function isUniqueCurrentRow(firstNumber, secondNumber, currentRow) {
  let isUniqueRow = true;
  for (let first in currentRow) {
    if (first == firstNumber && currentRow[first] == secondNumber) {
      console.log("isUniqueCurrentRow()");
      console.log(firstNumber, secondNumber);
      isUniqueRow = false;
      break;
    }
  }
  return isUniqueRow;
}

function isUniqueEquation(firstNumber, secondNumber, rows, currentRow) {
  return (
    isUniqueRows(firstNumber, secondNumber, rows) &&
    isUniqueCurrentRow(firstNumber, secondNumber, currentRow)
  );
}

function buildRow(rows) {
  const row = {};
  while (Object.keys(row).length < 5) {
    console.log("Current Row:", row);
    console.log("Rows:", rows);
    const firstNumber = getRandomInt(1, 10);
    var secondNumber_options = [0, 1, 2];
    const secondNumber = secondNumber_options[Math.floor(Math.random() * secondNumber_options.length)];
    if (isUniqueEquation(firstNumber, secondNumber, rows, row)) {
      row[firstNumber] = secondNumber;
    }
  }
  return row;
}

function buildRows(numRows) {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    const row = buildRow(rows);
    rows.push(row);
  }
  return rows;
}

/**************************************************************/
/*                  MAIN APPLICATION AREA                     */
/**************************************************************/

const rows = buildRows(6);
console.log(rows);

