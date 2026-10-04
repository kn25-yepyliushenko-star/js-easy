// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  const digits = "0123456789";
  let letters = "";
  for (let i = 0; i < str.length; i++) {
    if (!digits.includes(str[i])) {
      letters += str[i];
    }
  }
  let result = "";
  for (let i = letters.length - 1; i >= 0; i--) {
    result += letters[i];
  }
  return result;
}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;