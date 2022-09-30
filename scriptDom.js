const modal = document.getElementsByClassName("modal")
const buttonToTop = document.getElementById("scroll-top")

const bigPicture = (event) => {
    modal[0].classList.toggle('closed')
    buttonToTop.style.opacity = 0;
    
    console.log(event.target)

    if(event.target) {
        console.log('oi')
    }
}


const closeModal = () => {
    modal[0].classList.toggle('closed')
    buttonToTop.style.opacity = 1;
}