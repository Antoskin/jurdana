import { TweenLite, TweenMax } from 'gsap'


export const changeText = () => {
    TweenLite.fromTo(`.h1-target`, .5, { opacity: 1 }, { opacity: 0 },.5)
    TweenLite.fromTo(`.h1-target`, .5, { opacity: 0 }, { opacity: 1 },.5).delay(1)
}