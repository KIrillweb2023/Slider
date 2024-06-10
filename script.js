class Slider {
    constructor(){
        this.id = 0
        this.slides = document.querySelectorAll(".slide")
        this.dotted = document.querySelectorAll(".navigation-quad")
        this.dottesContainer = document.querySelector(".navigation")
    }

    removeClassSlide = () => {
        this.slides.forEach((slide) => {
            slide.classList.remove('slide-active')
            slide.style.animation = "";
        })
    
        this.dotted.forEach((dott) => {
            dott.classList.remove('navigation-quad-active')
        })
    }

    addClassSlide = (i) => {
        this.slides[i].classList.add('slide-active')
        this.slides[i].style.animation = "slide-animation 0.5s";
        this.dotted[i].classList.add('navigation-quad-active')
    }

    dottedClick = () => {
        this.dotted.forEach((dott, i) => {
            dott.addEventListener('click', (e) => {
                let index = i
        
                this.removeClassSlide()
                this.addClassSlide(index)
            })
        })
    }

    eventSlider = () => {
        this.removeClassSlide()
        this.addClassSlide(this.id)
        this.dottedClick()
        this.eventSliderScroll()
        this.autoSliderScroll()

        window.addEventListener("keydown", (e) => {
            if(e.code === "ArrowDown" || e.code === "Space"){
            
                this.id <= 2 ? this.id += 1 : this.id = 0

                this.removeClassSlide()
                this.addClassSlide(this.id)
            
            }
            if(e.code === "ArrowUp"){
                this.id < 1 ? this.id = 3 : this.id -= 1

                this.removeClassSlide()
                this.addClassSlide(this.id)
            }
        })
    }

    eventSliderScroll = () => {
        window.addEventListener('wheel', (e) => {
            const delta = Math.sign(e.deltaY);
           
            if(delta > 0) this.id <= 2 ? this.id += 1 : this.id = 0; 
            if(delta < 0) this.id < 1 ? this.id = 3 : this.id -= 1;

            this.removeClassSlide()
            this.addClassSlide(this.id)
        })
    }

    autoSliderScroll = () => {
        setInterval(() => {
            this.id <= 2 ? this.id += 1 : this.id = 0; 

            this.removeClassSlide()
            this.addClassSlide(this.id)
        }, 5000)
    }
}

const StartApp = new Slider()
StartApp.eventSlider()


