import { TweenLite, TweenMax } from 'gsap'

export const openLeftSlide = () => {
    TweenLite.to(`.left-slider`, .5, {'left': 0})
    TweenLite.fromTo(`.l-s-close img`, .5, {'margin': 0}, { 'margin': '20px 0' }).delay(2)
    TweenLite.fromTo(`.l-s-close span`, 5, {'opacity': 0}, { 'opacity': 1 }).delay(2.5)
    TweenLite.to(`.left-slider`, .5, {'height': '100%'}).delay(.7)
    TweenLite.fromTo(`.left-slide-mid, .left-slide-top, .left-slide-bot`, .5, { opacity:0, 'visibility':'hidden' }, { opacity: 1, 'visibility':'visible' },.5  ).delay(1.5)
}

export const closeLeftSlide = () => {
    TweenLite.fromTo(`.left-slide-mid, .left-slide-top, .left-slide-bot`, .5, { opacity:1, 'visibility':'visible' }, { opacity: 0, 'visibility':'hidden' },.5  )
    TweenLite.to(`.left-slider`, .5, {'height': '60%'}).delay(.7)
    TweenLite.to(`.left-slider`, .5, {'left': '-95%'}).delay(1.5)
    TweenLite.to(`.l-s-close span`, .5, { 'opacity': 0 })
}

export const openRightSlide = () => {
    TweenLite.to(`.right-slider`, .5, {'right': 0})
    TweenLite.fromTo(`.r-s-close img`, .5, {'margin': 0}, { 'margin': '20px 0' }).delay(2)
    TweenLite.fromTo(`.r-s-close span`, 5, {'opacity': 0}, { 'opacity': 1 }).delay(2.5)
    TweenLite.to(`.right-slider`, .5, {'height': '100%'}).delay(.7)
    TweenLite.fromTo(`.right-slide-mid, .right-slide-top, .right-slide-bot`, .5, { opacity:0, 'visibility':'hidden' }, { opacity: 1, 'visibility':'visible' },.5  ).delay(1.5)
}

export const closeRightSlide = () => {
    TweenLite.fromTo(`.right-slide-mid, .right-slide-top, .right-slide-bot`, .5, { opacity:1, 'visibility':'visible' }, { opacity: 0, 'visibility':'hidden' }, .5  )
    TweenLite.to(`.right-slider`, .5, {'height': '60%'}).delay(.7)
    TweenLite.to(`.right-slider`, .5, {'right': '-95%'}).delay(1.5)
    TweenLite.to(`.r-s-close span`, .5, { 'opacity': 0 })
}

//mobi

export const openLeftSlideMobil = () => {
    TweenLite.to(`.left-slider`, .5, {
        'position': 'fixed',
        'top': 0,
        'bottom': 0,
        'height': '100%',
        'zIndex': 101
    })
    TweenLite.to(`.action-left`, .5, { 'opacity': 0, 'display': 'none' })
    TweenLite.fromTo(`.left-slide-mid, .left-slide-top, .left-slide-bot`, .5, 
        { 
            opacity: 0, 
            'visibility':'hidden' }, 
        { 
            opacity: 1, 
            'visibility':'visible' }, .5  ).delay(1.5)
}

export const closeLeftSlideMobil = () => {
    TweenLite.fromTo(`.left-slide-mid, .left-slide-top, .left-slide-bot`, .5, 
        { 
            opacity: 1, 
            'visibility':'visible' 
        }, { 
            opacity:0, 
            'visibility':'hidden' 
        },.5  )

    TweenLite.to(`.left-slider`, .5, {
            'position': 'absolute',
            'top': '-53%',
            'bottom': 'inherit',
            'height': '60%',
            'zIndex': 100,
            'left': 0
    }).delay(1.5)
    TweenLite.to(`.action-left`, .5, { 'opacity': 1, 'display': 'block' }).delay(1.5)
}

//mobi right side
export const openRightSlideMobil = () => {
    TweenLite.to(`.right-slider`, .5, {
        'position': 'fixed',
        'top': 0,
        'zIndex': 101,
        'height': '100%',
    })
    TweenLite.to(`.action-right`, .5, { 'opacity': 0, 'display': 'none' })
    TweenLite.fromTo(`.right-slide-mid, .right-slide-top, .right-slide-bot`, .5, 
        { 
            opacity: 0, 
            'visibility':'hidden' }, 
        { 
            opacity: 1, 
            'visibility':'visible' }, .5  ).delay(1.5)
}

export const closeRightSlideMobil = () => {
    TweenLite.fromTo(`.right-slide-mid, .right-slide-top, .right-slide-bot`, .5, 
        { 
            opacity: 1, 
            'visibility':'visible' 
        }, { 
            opacity:0, 
            'visibility':'hidden' 
        },.5  )

    TweenLite.to(`.right-slider`, .5, {
            'position': 'absolute',
            'top': '-53%',
            'bottom': 'inherit',
            'height': '60%',
            'zIndex': 100,
            'left': 0
    }).delay(1.5)
    TweenLite.to(`.action-right`, .5, { 'opacity': 1, 'display': 'block' }).delay(1.5)
}