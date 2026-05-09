// COUNTDOWN + WELCOME SCREEN

const countdownScreen = document.getElementById("countdownScreen");
const welcomeScreen = document.getElementById("welcomeScreen");
const mainContent = document.getElementById("mainContent");

// SET BIRTHDAY DATE
const birthday = new Date(2026, 4, 8, 0, 0, 0);

function updateCountdown() {

    const now = new Date();

    const diff = birthday - now;

    // WHEN COUNTDOWN ENDS
    if (diff <= 0) {

        countdownScreen.style.display = "none";
        welcomeScreen.style.display = "flex";

        setTimeout(() => {
            welcomeScreen.style.opacity = "0";
            welcomeScreen.style.pointerEvents = "none";
            setTimeout(() => {
                welcomeScreen.style.display = "none";
                mainContent.style.display = "block";
            }, 400);
        }, 1200);

        return;

    }

    // TIME CALCULATIONS
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // DISPLAY VALUES
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

// UPDATE EVERY SECOND
setInterval(updateCountdown, 1000);

updateCountdown();


// AUDIO MANAGEMENT


// GET ALL AUDIO ELEMENTS
const allSongs = document.querySelectorAll("audio");
// SLIDESHOW MUSIC
const slideshowMusic = document.getElementById("slideshowMusic");

// STOP ALL AUDIO
function stopAllAudio() {

    allSongs.forEach(song => {
        song.pause();
        song.currentTime = 0;
    });

}

// PLAY MUSIC TAB SONG
function playSong(id) {
    stopAllAudio();
    const selectedSong = document.getElementById(id);
    selectedSong.play();

}

// PAUSE MUSIC TAB SONG
function pauseSong(id) {
    const selectedSong = document.getElementById(id);
    selectedSong.pause();
}


// SLIDESHOW

const slideshowImages = [

    "assets/img/photo1.jpeg",
    "assets/img/photo2.jpeg",
    "assets/img/photo3.jpeg",
    "assets/img/photo4.jpeg",
    "assets/img/photo5.jpeg",
    "assets/img/photo6.jpeg",
    "assets/img/photo7.jpeg"
];

let currentSlide = 0;
const slideshowImage = document.getElementById("slideshow-image");

function startSlideshow() {

    setInterval(() => {

        // FADE OUT
        slideshowImage.style.opacity = 0;
        setTimeout(() => {

            // NEXT IMAGE
            currentSlide++;

            if (currentSlide >= slideshowImages.length) {

                currentSlide = 0;

            }

            // CHANGE IMAGE
            slideshowImage.src = slideshowImages[currentSlide];

            // FADE IN
            slideshowImage.style.opacity = 1;

        }, 500);

    }, 5000);

}

startSlideshow();


// MAIN WEBSITE INTERACTIONS

document.addEventListener('DOMContentLoaded', function() {

    // TABS
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // TAB SWITCHING
    tabs.forEach(tab => {

        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // STOP ALL AUDIO
            stopAllAudio();

            // REMOVE ACTIVE STATES
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => {

                content.classList.remove('active');

            });

            // ADD ACTIVE STATES
            this.classList.add('active');

            document.getElementById(targetTab).classList.add('active');

            // AUTO PLAY GALLERY MUSIC
            if (targetTab === "gallery") {

                slideshowMusic.play().catch(error => {

                    console.log("Autoplay blocked");

                });

            }

        });

    });


    // LETTER EXPAND
    const loveLetter = document.getElementById('loveLetter');
    loveLetter.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });

});