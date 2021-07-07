let slideshow = {
  photoList: ["Day at the beach", "My dog", "A sammich"],
  currentPhotoIndex: 0,
  nextPhoto: function () {
    if (this.currentPhotoIndex + 1 > this.photoList.length - 1) {
      console.log("Reached the end of slideshow.");
    } else {
      this.currentPhotoIndex++;
      console.log(
        "Photo at index " +
          this.currentPhotoIndex +
          " is " +
          this.photoList[this.currentPhotoIndex]
      );
    }
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
  },
  getCurrentPhoto: function () {
    return this.photoList[this.currentPhotoIndex];
  },
  addPhoto: function (newPhoto) {
    this.photoList.push(newPhoto);
  },
};

console.log(slideshow.getCurrentPhoto());
slideshow.nextPhoto();

slideshow.addPhoto("A group picture");
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
