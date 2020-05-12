class ScrollDisplay {
  constructor(displayElement) {
    this.displayElement = displayElement;
  }
  updateChars(chars) {
    var charScrollData = document.querySelector('.char-scroll-data');
    charScrollData.textContent = " ";
    for(var ii = 0; ii < chars.length; ii++) {
      var nameEl = document.createElement('div');

      nameEl.textContent = chars[ii].name;
      charScrollData.append(nameEl);
    }
  }
}
