const song = [
    { note: 'E4', beat: 1 },
    { note: 'D4', beat: 1 },
    { note: 'C4', beat: 1 },
    { note: 'D4', beat: 1 },
    { note: 'E4', beat: 1 },
    { note: 'E4', beat: 1 },
    { note: 'E4', beat: 2 },
    { note: 'D4', beat: 1 },
    { note: 'D4', beat: 1 },
    { note: 'D4', beat: 2 },
    { note: 'E4', beat: 1 },
    { note: 'E4', beat: 1 },
    { note: 'E4', beat: 2 },
    { note: 'E4', beat: 1 },
    { note: 'D4', beat: 1 },
    { note: 'C4', beat: 1 },
    { note: 'D4', beat: 1 },
    { note: 'E4', beat: 1 },
    { note: 'E4', beat: 1 },
    { note: 'E4', beat: 1 },
    { note: 'C4', beat: 1 },
    { note: 'D4', beat: 1 },
    { note: 'D4', beat: 1 },
    { note: 'E4', beat: 1 },
    { note: 'D4', beat: 1 },
    { note: 'C4', beat: 4 },
];

function play(song) {
    const ms = 250;
    let time = 0;
    for (const piece of song) {
        setTimeout(() => {
            audio[piece.note](piece.beat * ms);
        }, time * ms);
        time = time + piece.beat;
    }
}
