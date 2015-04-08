function numberInWords(number) {
  var words = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'};

  var num_words = "";

  while (number > 0) {
    if (number < 10) {
      num_words += words[number];
      number = 0;
    } else if (number < 20) {
      num_words += words[number];
      number = 0;
    } else if (number < 100) {
      var tens = Math.floor(number / 10) * 10;
      num_words += words[tens] + "-";
      number -= tens;
    } else if (number < 1000) {
      var hundreds = Math.floor(number / 100);
      num_words += words[hundreds] + " hundred ";
      number -= hundreds * 100;
    } else if (number < 10000) {
      var thousands = Math.floor(number / 1000);
      num_words += words[thousands] + " thousand, ";
      number -= thousands * 1000;
    } else if (number < 20000) {
      var teen_thousands = Math.floor(number / 1000);
      num_words += words[teen_thousands] + " thousand, ";
      number -= teen_thousands * 1000;
    } else if (number < 100000) {
      var ten_thousands = Math.floor(number / 1000);
      num_words += words[ten_thousands] + " thousand, ";
      number -= ten_thousands * 1000;
    }
  }

  return num_words;
};
