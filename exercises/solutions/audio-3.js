// const song = [
//     {hz: 261.63, ms: 1000},
//     {hz: 293.66, ms: 1000},
//     {hz: 329.63, ms: 1000},
// ];
//
// const play = (song) => {
//     let time = 0;
//     for (const note of song) {
//         setTimeout(() => makeSound(note.hz, note.ms), time);
//         time = time + note.ms;
//     }
// };
//
// play(song);




// const song = [
//     {hz: 261.63, ms: 1000},
//     {hz: 293.66, ms: 1000},
//     {hz: 329.63, ms: 1000},
// ];
//
// const draw = (song) => {
//     const canvas = document.getElementById('graph');
//     const context = canvas.getContext('2d');
//     context.beginPath();
//     context.moveTo(0, 300);
//     let line = 0;
//     let time = 0;
//     for (const note of song) {
//         setTimeout(() => {
//             line = line + (note.ms / 100)
//             context.lineTo(line, 300 - note.hz / 2);
//             line = line + (note.ms / 100)
//             context.lineTo(line, 300);
//             context.stroke();
//         }, time);
//         time = time + note.ms;
//     }
// };
//
// const play = (song) => {
//     let time = 0;
//     for (const note of song) {
//         setTimeout(() => makeSound(note.hz, note.ms), time);
//         time = time + note.ms;
//     }
// };
//
// play(song);
// draw(song);




const song = [
    {hz: 261.63, ms: 1000},
    {hz: 293.66, ms: 1000},
    {hz: 329.63, ms: 1000},
];

const draw = (song) => {
    let line = 0;
    let time = 0;
    for (const note of song) {
        setTimeout(() => {
            line = line + (note.ms / 100)
            drawLine(line, 300 - note.hz / 2);
            line = line + (note.ms / 100)
            drawLine(line, 300);
        }, time);
        time = time + note.ms;
    }
};

const play = (song) => {
    let time = 0;
    for (const note of song) {
        setTimeout(() => makeSound(note.hz, note.ms), time);
        time = time + note.ms;
    }
};

play(song);
draw(song);
