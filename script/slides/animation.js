import { TweenLite, TweenMax } from 'gsap'

export const openLeftSlide = () => {
    TweenLite.to(`.left-slider`, .5, {'left': 0})
    TweenLite.to(`.left-slider`, .5, {'height': '100%'}).delay(.7)
    TweenLite.fromTo(`.left-slide-mid, .left-slide-top, .left-slide-bot`, .5, { opacity:0, 'visibility':'hidden' }, { opacity: 1, 'visibility':'visible' },.5  ).delay(1.5)
}

export const closeLeftSlide = () => {
    TweenLite.fromTo(`.left-slide-mid, .left-slide-top, .left-slide-bot`, .5, { opacity:1, 'visibility':'visible' }, { opacity: 0, 'visibility':'hidden' },.5  )
    TweenLite.to(`.left-slider`, .5, {'height': '60%'}).delay(.7)
    TweenLite.to(`.left-slider`, .5, {'left': '-95%'}).delay(1.5)
}

export const openRightSlide = () => {
    TweenLite.to(`.right-slider`, .5, {'right': 0})
    TweenLite.to(`.right-slider`, .5, {'height': '100%'}).delay(.7)
    TweenLite.fromTo(`.right-slide-mid, .right-slide-top, .right-slide-bot`, .5, { opacity:0, 'visibility':'hidden' }, { opacity: 1, 'visibility':'visible' },.5  ).delay(1.5)
}

export const closeRightSlide = () => {
    TweenLite.fromTo(`.right-slide-mid, .right-slide-top, .right-slide-bot`, .5, { opacity:1, 'visibility':'visible' }, { opacity: 0, 'visibility':'hidden' }, .5  )
    TweenLite.to(`.right-slider`, .5, {'height': '60%'}).delay(.7)
    TweenLite.to(`.right-slider`, .5, {'right': '-95%'}).delay(1.5)
}

export const changeText = () => {
    TweenLite.fromTo(`.h1-target`, .5, { opacity: 1 }, { opacity: 0 },.5)
    TweenLite.fromTo(`.h1-target`, .5, { opacity: 0 }, { opacity: 1 },.5).delay(1)
}