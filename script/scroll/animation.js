import { TweenLite, TweenMax } from 'gsap'


export const changeText = () => {

    TweenMax.fromTo(`.h1-target `, .8, { opacity: 1, x: 0 }, { opacity: 0, x: 50 },.1)

    setTimeout( () => {
        TweenMax.fromTo(`.h1-target `, .8, { opacity: 0, x:50 }, { opacity: 1, x:0 },.1)
    }, 1200 )
    
}

export const changeTextM = () => {
    TweenMax.fromTo(`.h1-target `, .8, { opacity: 1 }, { opacity: 0 },.1)
    
        setTimeout( () => {
            TweenMax.fromTo(`.h1-target `, .8, { opacity: 0 }, { opacity: 1 },.1)
        }, 1200 )
}