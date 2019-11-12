import React from 'react';

Object.prototype.getKey = function(value) {
  for(var key in this){
    if(this[key] == value){
      return key;
    }
  }
  return "";
};

Object.prototype.hasValue = function(value) {
  for(var key in this){
    if(this[key] == value){
      return true;
    }
  }
  return false;
};

const CH_1 = 'ж'.charCodeAt(0);
const CH_2 = 'В'.charCodeAt(0);
const CH_3 = 'Ж'.charCodeAt(0);
const CH_4 = 'в'.charCodeAt(0);

function flip_coin() {
  var y = Math.random();
  if (y<0.5) {
    y =Math.floor(y)
  } else {
    y = Math.ceil(y)
  }
  return y;
};

export default class Translator extends React.Component {
  // thanks bitrate16
  deconvert = (s) => {
    var res = "";

    // 1. 00 -> CH_1
  	// 2. 11 -> CH_2
  	// 3. 01 -> CH_3
  	// 4. 10 -> CH_4

    for (var i = 0; i < s.length;) {
      while ( i < s.length && s.charCodeAt(i) != CH_1 && s.charCodeAt(i) != CH_2 && s.charCodeAt(i) != CH_3 && s.charCodeAt(i) != CH_4)
        ++i;
      if (i >= s.length)
        break;
      var ch0 = s.charCodeAt(i);
      ++i;

      while (i < s.length && s.charCodeAt(i) != CH_1 && s.charCodeAt(i) != CH_2 && s.charCodeAt(i) != CH_3 && s.charCodeAt(i) != CH_4)
        ++i;
      if (i >= s.length)
        break;
      var ch1 = s.charCodeAt(i);
      ++i;

      while (i < s.length && s.charCodeAt(i) != CH_1 && s.charCodeAt(i) != CH_2 && s.charCodeAt(i) != CH_3 && s.charCodeAt(i) != CH_4)
        ++i;
      if (i >= s.length)
        break;
      var ch2 = s.charCodeAt(i);
      ++i;

      var resc = 0;
      if (ch0 == CH_1) resc |= 0b000000;
      else if (ch0 == CH_2) resc |= 0b000011;
      else if (ch0 == CH_3) resc |= 0b000001;
      else if (ch0 == CH_4) resc |= 0b000010;

      if (ch1 == CH_1) resc |= 0b000000;
      else if (ch1 == CH_2) resc |= 0b001100;
      else if (ch1 == CH_3) resc |= 0b000100;
      else if (ch1 == CH_4) resc |= 0b001000;

      if (ch2 == CH_1) resc |= 0b000000;
      else if (ch2 == CH_2) resc |= 0b110000;
      else if (ch2 == CH_3) resc |= 0b010000;
      else if (ch2 == CH_4) resc |= 0b100000;

      var tmp = 0;
      if (resc == 34) tmp = ' '.charCodeAt(0);
      else if (resc == 35) tmp = '.'.charCodeAt(0);
      else if (resc == 36) tmp = ','.charCodeAt(0);
      else if (resc == 37) tmp = '?'.charCodeAt(0);
      else if (resc == 38) tmp = '!'.charCodeAt(0);
      else if (resc == 39) tmp = '+'.charCodeAt(0);
      else if (resc == 40) tmp = '='.charCodeAt(0);
      else if (resc == 41) tmp = '-'.charCodeAt(0);
      else if (resc == 42) tmp = '_'.charCodeAt(0);
      else if (resc == 43) tmp = ')'.charCodeAt(0);
      else if (resc == 44) tmp = '('.charCodeAt(0);
      else if (resc == 45) tmp = '['.charCodeAt(0);
      else if (resc == 46) tmp = ']'.charCodeAt(0);
      else if (resc == 47) tmp = '{'.charCodeAt(0);
      else if (resc == 48) tmp = '}'.charCodeAt(0);
      else if (resc == 49) tmp = '<'.charCodeAt(0);
      else if (resc == 50) tmp = '>'.charCodeAt(0);
      else if (resc == 51) tmp = '0'.charCodeAt(0);
      else if (resc == 52) tmp = '1'.charCodeAt(0);
      else if (resc == 53) tmp = '2'.charCodeAt(0);
      else if (resc == 54) tmp = '3'.charCodeAt(0);
      else if (resc == 55) tmp = '4'.charCodeAt(0);
      else if (resc == 56) tmp = '5'.charCodeAt(0);
      else if (resc == 57) tmp = '6'.charCodeAt(0);
      else if (resc == 58) tmp = '7'.charCodeAt(0);
      else if (resc == 59) tmp = '8'.charCodeAt(0);
      else if (resc == 60) tmp = '9'.charCodeAt(0);
      else if (resc == 61) tmp = '~'.charCodeAt(0);
      else if (resc < 33)  tmp = resc + 'а'.charCodeAt(0);

      res += String.fromCharCode(tmp);
    }

    return res;
  };


  convert = (s) => {
    var res = "";

    // 1. 00 -> CH_1
  	// 2. 11 -> CH_2
  	// 3. 01 -> CH_3
  	// 4. 10 -> CH_4

    var word_length = 0;
    var char_count = 0;
    var bitnum = 0;

    for (var i = 0; i < s.length; ++i) {
      var charnum;
      if (s.charCodeAt(i) == ' '.charCodeAt(0)) charnum = 34;
      else if (s.charCodeAt(i) == '.'.charCodeAt(0)) charnum = 35;
      else if (s.charCodeAt(i) == ','.charCodeAt(0)) charnum = 36;
      else if (s.charCodeAt(i) == '?'.charCodeAt(0)) charnum = 37;
      else if (s.charCodeAt(i) == '!'.charCodeAt(0)) charnum = 38;
      else if (s.charCodeAt(i) == '+'.charCodeAt(0)) charnum = 39;
      else if (s.charCodeAt(i) == '='.charCodeAt(0)) charnum = 40;
      else if (s.charCodeAt(i) == '-'.charCodeAt(0)) charnum = 41;
      else if (s.charCodeAt(i) == '_'.charCodeAt(0)) charnum = 42;
      else if (s.charCodeAt(i) == ')'.charCodeAt(0)) charnum = 43;
      else if (s.charCodeAt(i) == '('.charCodeAt(0)) charnum = 44;
      else if (s.charCodeAt(i) == '['.charCodeAt(0)) charnum = 45;
      else if (s.charCodeAt(i) == ']'.charCodeAt(0)) charnum = 46;
      else if (s.charCodeAt(i) == '{'.charCodeAt(0)) charnum = 47;
      else if (s.charCodeAt(i) == '}'.charCodeAt(0)) charnum = 48;
      else if (s.charCodeAt(i) == '<'.charCodeAt(0)) charnum = 49;
      else if (s.charCodeAt(i) == '>'.charCodeAt(0)) charnum = 50;
      else if (s.charCodeAt(i) == '0'.charCodeAt(0)) charnum = 51;
      else if (s.charCodeAt(i) == '1'.charCodeAt(0)) charnum = 52;
      else if (s.charCodeAt(i) == '2'.charCodeAt(0)) charnum = 53;
      else if (s.charCodeAt(i) == '3'.charCodeAt(0)) charnum = 54;
      else if (s.charCodeAt(i) == '4'.charCodeAt(0)) charnum = 55;
      else if (s.charCodeAt(i) == '5'.charCodeAt(0)) charnum = 56;
      else if (s.charCodeAt(i) == '6'.charCodeAt(0)) charnum = 57;
      else if (s.charCodeAt(i) == '7'.charCodeAt(0)) charnum = 58;
      else if (s.charCodeAt(i) == '8'.charCodeAt(0)) charnum = 59;
      else if (s.charCodeAt(i) == '9'.charCodeAt(0)) charnum = 60;
      else if (s.charCodeAt(i) == '~'.charCodeAt(0)) charnum = 61;
      else if ('а'.charCodeAt(0) <= s.charCodeAt(i) && s.charCodeAt(i) <= 'я'.charCodeAt(0))
        charnum = s.charCodeAt(i) - 'а'.charCodeAt(0);
      else if ('А'.charCodeAt(0) <= s.charCodeAt(i) && s.charCodeAt(i) <= 'Я'.charCodeAt(0))
        charnum = s.charCodeAt(i) - 'А'.charCodeAt(0);
      else
        continue;

      for (var j = 0; j < 6; j += 2) {
        var bit0 = (charnum >> (j + 1)) & 1;
        var bit1 = (charnum >> (j + 0)) & 1;
        if (bit0)
          if (bit1)
            res += String.fromCharCode(CH_2);
          else
            res += String.fromCharCode(CH_4);
        else
          if (bit1)
            res += String.fromCharCode(CH_3);
          else
            res += String.fromCharCode(CH_1);
        ++char_count;
        ++word_length;

        if ((word_length > 2) && (char_count < (s.length * 3 - 2)) && flip_coin() && flip_coin()) {
          res += ' ';
          word_length = 0;
        }
      }
    }

    return res;
  };
}
