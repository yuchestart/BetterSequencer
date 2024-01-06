function createAudioContext(){
    let AudioContext = window.AudioContext || window.webkitAudioContext; // Because safari
    return new AudioContext();
}

function