console.log("downloaded")
const synth = new Tone.Synth().toMaster()
const duoSynth = new Tone.DuoSynth().toMaster();


const addNoteListeners = (elementId,note) => {
    document.getElementById(elementId)
    .addEventListener("click", async event => {
        await synth.triggerAttackRelease(note, "8n");
        })
}

window.onload = () => {
    let context = new AudioContext();
    context.resume().then(()=>{
    addNoteListeners("sound-test", "A5")
    })
}