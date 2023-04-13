//Create one object named `photoSlideShow`. This object will represent the functionality of a picture slideshow.

let  photoSlideShow = {

//An array called photoList that contains the names of the photos as strings

photoList : ['family dinner', 'christmas', 'vacay'],

//An integer currentPhotoIndex that represents which photo in the photoList is currently displayed

currentPhotoIndex : 1, 

/*A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and: 4. logs the current photo name. 
4. Otherwise, log "End of slideshow"*/

nextPhoto: function() {
    
    if (this.currentPhotoIndex + 1 < this.photoList.length) {
        this.currentPhotoIndex++;
    } 
    else {
        console.log("End of slideshow")
}
    console.log(this.photoList[this.currentPhotoIndex]);
},

//A prevPhoto() function that does the same thing, but backwards.

prevPhoto: function() {

    if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex--;
    }
    else {
        console.log("End of slideshow") 
    }
    console.log(this.photoList[this.currentPhotoIndex]);
},

//A function getCurrentPhoto() that returns the current photo from the list.

getCurrentPhoto: function () {
return this.photoList[this.currentPhotoIndex];
},
};

console.log(photoSlideShow.getCurrentPhoto());
console.log(photoSlideShow.prevPhoto());
console.log(photoSlideShow.nextPhoto());