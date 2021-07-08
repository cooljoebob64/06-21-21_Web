let slideshow = {
  playInterval: "",
  play: function () {
    console.log("Starting play!");
    let self = this;
    playInterval = setInterval(function () {
      self.nextPhoto();
    }, 2000);
  },
  pause: () => {
    console.log("Pausing!");
    clearInterval(playInterval);
  },
  photoList: ["Day at the beach", "My dog", "A sammich"],
  currentPhotoIndex: 0,
  nextPhoto: function () {
    if (this.currentPhotoIndex + 1 > this.photoList.length - 1) {
      console.log("Reached the end of slideshow.");
      if (this.playInterval != null) {
        this.pause();
      }
    } else {
      this.currentPhotoIndex++;
      console.log(
        "Photo at index " +
          this.currentPhotoIndex +
          " is " +
          this.photoList[this.currentPhotoIndex]
      );
    }
    photoText.innerText =
      this.currentPhotoIndex + ": " + this.getCurrentPhoto();
  },
  prevPhoto: function () {
    if (this.currentPhotoIndex - 1 < 0) {
      console.log("At the beginning of the slideshow");
    } else {
      this.currentPhotoIndex--;
      console.log(
        "Photo at index " +
          this.currentPhotoIndex +
          " is " +
          this.photoList[this.currentPhotoIndex]
      );
    }
    photoText.innerText =
      this.currentPhotoIndex + ": " + this.getCurrentPhoto();
  },
  getCurrentPhoto: function () {
    return this.photoList[this.currentPhotoIndex];
  },
  addPhoto: function (newPhoto) {
    this.photoList.push(newPhoto);
  },
};

let photoText = document.getElementById("currentPhotoText");
let playButton = document.getElementById("playButton");
playButton.addEventListener("click", slideshow.play.bind(slideshow));
let pauseButton = document.getElementById("pauseButton");
pauseButton.addEventListener("click", slideshow.pause.bind(slideshow));
let nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", slideshow.nextPhoto.bind(slideshow));
let backButton = document.getElementById("backButton");
backButton.addEventListener("click", slideshow.prevPhoto.bind(slideshow));

console.log(slideshow.getCurrentPhoto());
slideshow.nextPhoto();

slideshow.addPhoto("A group picture");
slideshow.nextPhoto();

// slideshow.play();
