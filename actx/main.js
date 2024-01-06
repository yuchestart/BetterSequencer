let ctx,audio;
function main(){
    document.getElementById("createctx").addEventListener("click",createCTX);
    document.getElementById("play").addEventListener('click',play);
}

function createCTX(){
    ctx = new AudioContext();
    fetch('./test1.mp3')
    .then(data=>data.arrayBuffer())
    .then(arrayBuffer=>ctx.decodeAudioData(arrayBuffer))
    .then(decodedAudio => {
        audio = decodedAudio;
    })
    document.getElementById("created").hidden = false
}

function play(){
    const playsound = createOscillator(440*(2**(1/12))**parseFloat(document.getElementById("freq").value),"sawtooth");
    playsound.start(ctx.currentTime)
    playsound.stop(ctx.currentTime+1)
}

function createOscillator(freq,type="sine"){
    const osc = ctx.createOscillator();
    console.log(osc)
    osc.frequency.value = freq;
    osc.type = type;
    osc.connect(ctx.destination)
    return osc;
}

window.addEventListener("load",main)