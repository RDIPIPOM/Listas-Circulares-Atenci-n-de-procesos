import Dice from './Dice.js';
import Process from './Process.js';
import Processor from './Processor.js';

document.querySelector('#btnStart').addEventListener('click', () => {
    let processor1 = new Processor();
    let dice100 = new Dice(100);
    let dice11 = new Dice(11);

    for (let i = 1; i <= 300; i++) {
        if(dice100.roll() <= 39)
            processor1.add(new Process(i, dice11.roll() + 3));
        processor1.nextStep();
        console.log('Cycle ' + i + '\n' + processor1.report());
    }

    console.log('//////Results//////');
    console.log('Number of cycles free: ' + processor1.counterTimeFree);
    console.log('Number maximum of processes hoping: ' + processor1.countMaxProcessHoping);
    console.log('Number of processes hoping: ' + processor1.countProcessHoping);
    console.log('Number of processes done: ' + processor1.countProcessesDone);
});