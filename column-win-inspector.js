import { Game } from "./game.js";
import { Column } from "./column.js";

export class ColumnWinInspector {
    constructor (colObj) {
        this.colObj = colObj
    }

    inspect() {
        let colValue = this.colObj.slots
        for(let i = 0; i < 3; i++) {
            let first = colValue[i]
            let second = colValue[i + 1]
            let third = colValue[i + 2]
            let forth = colValue[i + 3]
            if (first === second && first === third && first === forth && first !== null) {
                return first
            }
        }
    }
}
