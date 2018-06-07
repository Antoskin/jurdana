import $ from 'jquery'
import { changeTextM } from './animation'
import def_text from './text_list.js'

export default function() {

    var num = 0;

    $(`.fa-chevron-left`).click( function() {
        changeTextM()
        setTimeout( () => {
            $(`.h1-target`).html(def_text[num]['text'])
            { num < 1 ? num = 3 : num-- }
        },1200 )
    } )


    $(`.fa-chevron-right`).click( function() {
        changeTextM()
        setTimeout( () => {
            $(`.h1-target`).html(def_text[num]['text'])
            { num < 3 ? num++ : num = 0  }
        },1200 )
    } )

}