import FIFO from './FIFO.js';

export default class Processor {
    constructor() {
        this._FIFO = new FIFO();
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
        this._FIFO.push(process);
    }

    nextStep() {
        //Do process
        if (this._FIFO.peek() != null) {
            this._FIFO.peek().timeRequired--;
            if (this._FIFO.peek().timeRequired === 0){
                this._FIFO.pop();
                this._countProcessesDone++;
            }
        } else
            this._counterTimeFree++;
        //Update process hoping
        this._countProcessHoping = this._FIFO.size;

        //Are there more process hoping than last time?
        if(this._FIFO.size > this._countMaxProcessHoping){
            this._countMaxProcessHoping = this._FIFO.size;
        }
    }

    report() {
        return this._FIFO.print();
    }
}