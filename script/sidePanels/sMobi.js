import $ from 'jquery'
import { openLeftSlideMobil, closeLeftSlideMobil, openRightSlideMobil, closeRightSlideMobil } from './anim'

export default function() {
    //LEFT
    $(`.action-left`).click( () => openLeftSlideMobil() ) // open
    $(`.l-s-close`).click( () => closeLeftSlideMobil() ) //close
    //RIGHT
    $(`.action-right`).click( () => openRightSlideMobil() ) // open
    $(`.r-s-close`).click( () => closeRightSlideMobil() ) //close
}