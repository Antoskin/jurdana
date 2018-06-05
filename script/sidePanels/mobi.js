import $ from 'jquery'
import { openLeftSlideMobil, closeLeftSlideMobil } from './anim'

export default function() {
    $(`.action-left`).click( function() {
        openLeftSlideMobil()
    })

     $(`.l-s-close`).click( () =>  closeLeftSlideMobil() ) //close
}