class Die {
  constructor(element) {
    this.one = new Image();
    this.one.src = 'die1.svg';
    this.two = new Image();
    this.two.src = 'die2.svg';
    this.three = new Image();
    this.three.src = 'die3.svg';
    this.four = new Image();
    this.four.src = 'die4.svg';
    this.five = new Image();
    this.five.src = 'die5.svg';
    this.six = new Image();
    this.six.src = 'die6.svg';
    this.element = element
  }

  roll1() {
    this.element.innerHTML = this.one.outerHTML;
  }

  roll2() {
    this.element.innerHTML = this.two.outerHTML;
  }

  roll3() {
    this.element.innerHTML = this.three.outerHTML;
  }

  roll4() {
    this.element.innerHTML = this.four.outerHTML;
  }

  roll5() {
    this.element.innerHTML = this.five.outerHTML;
  }

  roll6() {
    this.element.innerHTML = this.six.outerHTML;
  }
}

const die = new Die(document.getElementById('dice'));

const button = document.getElementById('roll');
