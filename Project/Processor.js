import CircularListFIFO from './CircularListFIFO.js';

export default class Processor {
    constructor() {
        this._CircularListFIFO = new CircularListFIFO();
        this._counterTimeFree = 0;
        this._countProcessHoping = 0;
        this._countMaxProcessHoping = 0;
        this._countProcessesDone = 0;
        this._totalCyclesRequired = 0;
    }

    get counterTimeFree() {
        return this._counterTimeFree;
    }

    get countProcessHoping() {
        return this._countProcessHoping;
    }

    get totalCyclesRequired() {
        this._totalCyclesRequired = this._CircularListFIFO.totalTimeRequired();
        return this._totalCyclesRequired;
    }

    get countMaxProcessHoping() {
        return this._countMaxProcessHoping;
    }

    get countProcessesDone() {
        return this._countProcessesDone;
    }

    add(process) {
        this._CircularListFIFO.push(process);
    }

    nextStep() {
        //Do process
        if (this._CircularListFIFO.inTurn != null) {
            this._CircularListFIFO.inTurn.timeRequired--;
            if (this._CircularListFIFO.inTurn.timeRequired === 0) {
                this._CircularListFIFO.deleteInTurn();
                this._countProcessesDone++;
            }
            else
                this._CircularListFIFO.nextNode();
        } else
            this._counterTimeFree++;

        //Maximum number of processes hoping
        if (this._countMaxProcessHoping < this._CircularListFIFO.size)
            this._countMaxProcessHoping = this._CircularListFIFO.size;
        //update number of processes hoping
        this._countProcessHoping = this._CircularListFIFO.size;
    }

    report() {
        return this._CircularListFIFO.print();
    }
}