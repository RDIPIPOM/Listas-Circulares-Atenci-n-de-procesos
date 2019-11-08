export default class CircularListFIFO {
    constructor() {
        this._start = null;
        this._inTurn = null;
        this._size = 0;
    }

    get size() {
        return this._size;
    }

    get inTurn() {
        return this._inTurn;
    }

    nextNode() {
        if (this._inTurn != null) {
            this._inTurn = this._inTurn.next;
        }
    }

    push(node) {
        if (this._start != null) {
            let aux = this._start;
            while (aux.next != this._start)
                aux = aux.next;
            aux.next = node;
            node.next = this._start;
        } else {
            this._start = node;
            this._start.next = this._start;
            this._inTurn = this._start;
        }

        this._size++;
    }

    deleteInTurn() {
        if (this._inTurn != this._start) {
            let aux = this._start;
            while (aux.next != this._inTurn)
                aux = aux.next
            aux.next = aux.next.next;
            this._inTurn = aux.next.next;
        } else
            this._start = null;

        this._size--;
    }

    print() {
        let string = '';
        if (this._start != null) {
            let aux = this._start;
            string = aux.toString();
            aux = aux.next;
            while (aux != this._start) {
                string = string + '\n' + aux.toString();
                aux = aux.next;
            }
        }
        return string;
    }

    totalTimeRequired(){
        let total = 0;
        if (this._start != null) {
            let aux = this._start;
            total = aux.timeRequired;
            aux = aux.next;
            while (aux != this._start) {
                total += aux.timeRequired;
                aux = aux.next;
            }
        }

        return total;
    }
}