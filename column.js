export class Column {
  constructor() {
    this.slots = Array(6).fill(null)

  }

  isFull() {
    return this.slots[0] !== null;
  }

  add(playerNum) { //store player number in bottom most entry available in column
    let slot = 0;
    for (let i = this.slots.length - 1; i >= 0; i--) {
      if (this.slots[i] === null) {
        slot = i;
        break;
      }
    }

    this.slots[slot] = playerNum
  }

  getTokenAt(row) { //return null if no token, 1 if black, 2 if red
    return this.slots[row]
  }

  restore(valueArr) {
    this.slots = valueArr
  }
}


// SOLELY RESPONSIBLE FOR MANAGING THE DISPLAY OF BOARD
