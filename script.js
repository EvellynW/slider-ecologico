const slidesContainer = document.getElementById("slides-container")
const slide = document.querySelector(".slide")
const prevButtom = document.getElementById("slide-arrow-prev")
const nextButtom = document.getElementById("slide-arrow-next")

document.addEventListener("DOMContentLoaded",()=>{
    const slideWidth = slide.clientWidth
    slidesContainer.scrollLeft += slideWidth
})

// prevButtom.addEventListener("click",()=>{
//     const slideWidth = slide.clientWidth
//     slidesContainer.scrollLeft -= slideWidth
// })

document.addEventListener("DOMContentLoaded", () => {
    const slideWidth = slide.clientWidth; //largura de cada slide
    const slidesContainer = document.getElementById('slides-container') // Container dos slides
    let currentIndex = 0 // indice do slide atual

    // funçãopara avançar para o próximo slide
    const nextSlide = () => {
        currentIndex++
        if (currentIndex >= slidesContainer.children.length) {
            currentIndex = 0 // volta para o primeiro slide ao chegar ao ultimo
        }
        const newPosition = currentIndex * slideWidth
        slidesContainer.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        })
    }

    //rotação automática a cada 2 segundos
    setInterval(nextSlide, 4000)
})