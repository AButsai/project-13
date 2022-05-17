function Auto(str) {
  var search = new Array(
    'й',
    'ц',
    'у',
    'к',
    'е',
    'н',
    'г',
    'ш',
    'щ',
    'з',
    'х',
    'ї',

    'ф',
    'и',
    'в',
    'а',
    'п',
    'р',
    'о',
    'л',
    'д',
    'ж',
    'є',

    'я',
    'ч',
    'с',
    'м',
    'і',
    'т',
    'ь',
    'б',
    'ю',
  );
  var replace = new Array(
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    '\\[',
    '\\]',

    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    ';',
    "'",

    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    ',',
    '\\.',
  );
  for (var i = 0; i < replace.length; i++) {
    var reg = new RegExp(replace[i], 'mig');

    str = str.replace(reg, function (a) {
      return a == a.toLowerCase() ? search[i] : search[i].toUpperCase();
    });
  }
  return Auto(str);
}
