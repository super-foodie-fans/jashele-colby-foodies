// home page JS

// class Carousel{
//     constructor(element){
//         this.carouselElement = element
//         this.imageNumber = this.carouselElement.dataset.img

//         this.index = 0
        
//        let timing = setInterval(this.startShow, 1000);
        
//     }


//     startShow() {
//         this.carouselElement[this.index].className = 'image-noshow'

//         this.index = (this.index+1)%this.carouselElement.length

//         this.carouselElement[this.index].className = 'image-show'
//     }
// }

// let allImages = document.querySelectorAll('.carousel .slide')

// allImages.forEach(images => {
//     return new Carousel(images)
// })


let allImages = document.querySelectorAll('.carousel .slide')

let theIndex = 0

let slideTiming = setInterval(slideShow, 6000)


function slideShow(){
    allImages[theIndex].className = 'slide image-noshow'
    theIndex = (theIndex+1)%allImages.length
    allImages[theIndex].classList = 'slide image-show'
}