const chainMaker = {
  getLength() {
    return this.chain ? this.chain.length : 0;
  },
  addLink(value) {
    if (!this.chain) {
      this.chain = [];
    }

    this.chain.push(value);

    return this;
  },
  removeLink(position) {
    if (isNaN(position)) {
      this.chain = undefined;
      throw new Error('iPosition');
    }

    let iPosition = parseInt(position);

    this.chain.splice(iPosition - 1, 1);

    return this;
  },
  reverseChain() {
    if (this.chain) {
      this.chain.reverse();
    }

    return this;
  },
  finishChain() {
    let chainToRender = this.chain.map(l => {
      if (l === null) return 'null';
      if (l === undefined) return 'undefined';
      return l;
    });

    let result = `( ${chainToRender.join(' )~~( ')} )`;
    this.chain = undefined;
    return result;
  }
};

module.exports = chainMaker;
