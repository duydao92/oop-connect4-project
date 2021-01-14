// SOLELY RESPONSIBLE FOR MANAGING THE DISPLAY OF BOARD


export class Columns {
  constructor(){
    this.slots = Array(6).fill(null)

  }

  add(playerNum) {//store player number in bottom most entry available in column
    let slot;
    for (let i = slots.length; i >= 0; i--) {
      if (slots[i] === null) {
        slot === i;
      }
    }

    slots[slot - 1] = playerNum
  }

  getTokenAt(row) {//return null if no token, 1 if black, 2 if red
    return this.slots[row]
  }

}
