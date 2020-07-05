let loopBeat;
let bassSynth

function setup() {
    loopBeat = new Tone.Loop(song, '4n');
    Tone.Transport.start();
    loopBeat.start(0)
}
function song(time) {
    console.log(time)
}