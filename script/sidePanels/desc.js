import { openLeftSlide, openRightSlide, closeLeftSlide, closeRightSlide } from './anim'
import $ from 'jquery'
export default function() {
    if( $(window).innerWidth() >= 700 ) {
           $(`.btn-left`).click( () => openLeftSlide() ) //open left

            $(`.l-s-close`).click( () =>  closeLeftSlide() ) //close
            
            $(`.btn-right`).click( () => {
                openRightSlide()
                $(`.send-btn-lef`).css({'opacity':0})
            } )
            
            $(`.r-s-close`).click( () =>  {
                closeRightSlide()
                setTimeout( () => {
                    $(`.send-btn-lef`).css({'opacity':1})}, 666 )
            } )

            $(`.send-btn-lef`).click( function() {
                $(this).css({'opacity':'0'})
                setTimeout( () => {
                    openRightSlide()}, 666 )
                
            })
    }
 
}