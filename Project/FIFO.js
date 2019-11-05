export default class FIFO {
    constructor() {
        this._start = null;
        this._size = 0;
    }

    get size(){
        return this._size;
    }

    push(node) {
        if (this._start != null) {
            let aux = this._start;
            while (aux.next != null)
                aux = aux.next;
            aux.next = node;
        } else
            this._start = node;

        this._size++;
    }

    pop() {
        let aux = null;
        if (this._start != null) {
            aux = this._start;
            this._start = this._start.next;
        }

        this._size--;
        return aux;
    }

    peek() {
        return this._start;
    }

    print() {
        let aux = this._start;
        let string = '';
        while (aux != null) {
            string = string + '\n' + aux.toString();
            aux = aux.next;
        }
        return string;
    }
}