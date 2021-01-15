export class RowWinInspector {
  constructor(columns) { // [col1, col2, col3, col4] === columns
    this.columns = columns;
  }
  inspect() {
    for (let i = 0; i < 6; i++) {
      let first = this.columns[0].getTokenAt(i);
      let second = this.columns[1].getTokenAt(i);
      let third = this.columns[2].getTokenAt(i);
      let fourth = this.columns[3].getTokenAt(i);
      if (first === second && first === third && first === fourth && first !== null) {
        return first;
      }
    }
  }
}
