import CircularListFIFO from './CircularListFIFO.js';

export default class Processor {
    constructor() {
        this._CircularListFIFO = new CircularListFIFO();
        this._counterTimeFree = 0;
        this._countProcessHoping = 0;
        this._countMaxProcessHoping = 0;
        this._countProcessesDone = 0;
    }

    get counterTimeFree(){
        return this._counterTimeFree;
    }

    get countProcessHoping(){
        return this._countProcessHoping;
    }

    get countMaxProcessHoping(){
        return this._countMaxProcessHoping;
    }

    get countProcessesDone(){
        return this._countProcessesDone;
    }

    add(process) {
        this._CircularListFIFO.push(process);
    }

    nextStep() {
        //Do process
        if (this._CircularListFIFO.peek() != null) {
            this._CircularListFIFO.peek().timeRequired--;
            if (this._CircularListFIFO.peek().timeRequired === 0){
                this._CircularListFIFO.pop();
                this._countProcessesDone++;
            }
        } else
            this._counterTimeFree++;
        //Update process hoping
        this._countProcessHoping = this._CircularListFIFO.size;

        //Are there more process hoping than last time?
        if(this._CircularListFIFO.size > this._countMaxProcessHoping){
            this._countMaxProcessHoping = this._CircularListFIFO.size;
        }
    }

    report() {
        return this._CircularListFIFO.print();
    }
}