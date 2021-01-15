export class Column {
  constructor(){
    this.slots = Array(6).fill(null)

  }
  
  isFull(){
    return this.slots[0] !== null;
  }

  add(playerNum) {//store player number in bottom most entry available in column
    let slot = 0;
    for (let i = this.slots.length-1; i >= 0; i--) {
      console.log(i);
      console.log(this.slots[i]);
      if (this.slots[i] === null) {
        slot = i;
        break;
      }
    }

    this.slots[slot] = playerNum
    console.log(this.slots);
  }

  getTokenAt(row) {//return null if no token, 1 if black, 2 if red
    return this.slots[row]
  }

}


// SOLELY RESPONSIBLE FOR MANAGING THE DISPLAY OF BOARD
