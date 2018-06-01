import $ from 'jquery'
import { openLeftSlide, openRightSlide, closeLeftSlide, closeRightSlide } from './slides/animation'


$('document').ready( function() {
    $(`.btn-left`).click( () => openLeftSlide() ) //open left
    $(`.l-s-close`).click( () =>  closeLeftSlide() ) //close
    $(`.btn-right`).click( () => {
        openRightSlide()
        $(`.send-btn-lef`).css({'opacity':0})
    } )
    $(`.r-s-close`).click( () =>  {
        closeRightSlide()
        setTimeout( () => {
            $(`.send-btn-lef`).css({'opacity':1})
        }, 666 )
    } ) //close

    $(`.send-btn-lef`).click( function() {
        $(this).css({'opacity':'0'})

        setTimeout( () => {
            openRightSlide()
        }, 666 )
        
    })
})