console.log("Script loaded successfully.");

// initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs   = [
    {songName: "Mast Punjabi", filePath: "songs/1.mp3", coverPath: "cover2.jpg"},
    {songName: "Song Two", filePath: "songs/2.mp3", coverPath: "cover2.jpg"},
    {songName: "Song Three", filePath: "songs/3.mp3", coverPath: "cover3.jpg"},
    {songName: "Song Four", filePath: "songs/4.mp3", coverPath: "cover4.jpg"},
    {songName: "Song Five", filePath: "songs/5.mp3", coverPath: "cover2.jpg"},
    {songName: "Song Six", filePath: "songs/6.mp3", coverPath: "projecta.jpg"}, 
];

//audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');    
        gif.style.opacity = 0;
        
    }
});

//listen to events  

audioElement.addEventListener('timeupdate', ()=>{

    //update seekbar        

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

});

myProgressBar.addEventListener('change', ()=>{

    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})