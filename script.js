console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/01 piya bole .mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let current = document.getElementsByClassName('songItem');
let icon =document.getElementsByClassName('far');
let name=document.getElementsByClassName('songName');

let songs = [
    {songName: "piya bole ", filePath: "songs/01 piya bole .mp3", coverPath: "covers/1.jpg"},
    {songName: "Steal My Girl", filePath:"songs/01. Steal My Girl .mp3", coverPath: "covers/2.jpg"},
    {songName: "Tonight Tonight", filePath: "songs/02 Tonight Tonight.mp3", coverPath: "covers/3.jpg"},
    {songName: "Tera Hone Laga Hoon", filePath: "songs/04 - Tera Hone Laga Hoon - www.downloadming.com.mp3", coverPath: "covers/4.jpg"},
    {songName: "Firework", filePath: "songs/04 Firework [www.SongsLover.com].mp3", coverPath: "covers/5.jpg"},
    {songName: "If I Knew Then", filePath: "songs/05 - If I Knew Then.mp3", coverPath: "covers/6.jpg"},
    {songName: "Just One Last Time", filePath: "songs/08. Just One Last Time (Feat Taped Rai) (www.SongsLover.pk).mp3", coverPath: "covers/7.jpg"},
    {songName: "Up", filePath: "songs/09 - Up.mp3", coverPath: "covers/8.jpg"},
    {songName: "as long as you love me", filePath: "songs/as long as you love me.mp3", coverPath: "covers/9.jpg"},
    {songName: "Baby_Bash_Cyclone", filePath: "songs/Baby_Bash_Cyclone.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
      element.getElementsByClassName("songName")[0].style.fontSize='20px';

})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('click', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
/*function playall(){
     for(var i=0;i<current.length;i+=1){
        current[i].classList.remove('fa-pause-circle');
      current[i].classList.add('fa-play-circle');
        
    }
} */
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
       /* playall();
        current[songIndex].classList.add('fa-pause-circle');*/
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
           normal();
            current[songIndex].style.backgroundColor = 'gray';
         masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    let nx=9;
    if(songIndex>=9){
        songIndex = 0
        nx=9;
    }
    else{
        nx=songIndex;
        songIndex += 1;
    }
gif.style.opacity='1';
      icon[nx].classList.remove('fa-pause-circle')
     icon[nx].classList.add('fa-play-circle')
     icon[songIndex].classList.remove('fa-play-circle')
     icon[songIndex].classList.add('fa-pause-circle')
     /*playall();
     current[songIndex].classList.remove('fa-play-circle');*/
    /*current[songIndex].classList.add('fa-pause-circle');*/
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    normal();
       current[songIndex].style.backgroundColor = 'gray';
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
function normal(){
    for(var i=0;i<current.length;i+=1){
        current[i].style.backgroundColor='white';
    }
}

document.getElementById('previous').addEventListener('click', ()=>{
    let prev=2;
    if(songIndex<=0){
        songIndex = 9;
        prev=0;
    }
    else{
        prev=songIndex;
        songIndex -= 1;
    }
    gif.style.opacity='1';
     icon[prev].classList.remove('fa-pause-circle')
     icon[prev].classList.add('fa-play-circle')
     icon[songIndex].classList.remove('fa-play-circle')
     icon[songIndex].classList.add('fa-pause-circle')
    /* playall();
        current[songIndex].classList.add('fa-pause-circle');*/
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
       normal();
       current[songIndex].style.backgroundColor = 'gray';
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})