import $ from 'jquery'
import { changeText } from './animation'
import def_text from './text_list.js'

import mobSwitch from './mobiSwitch'

export default function() {
    switchActiveLang()

    let say = def_text.slice(0,5)

   $(`.lang-switch a`).click(function() {
       if( $(this).attr('data-lang') == 0 ) {
        $(`.h1-target`).html(def_text[3]['text'])
            say = def_text.slice(0,5)
       } else if( $(this).attr('data-lang') == 1 ) {
            $(`.h1-target`).html(def_text[6]['text'])
            say = def_text.slice(5,9)
       }
   })

    var num = 0,
        timer,
        animaTime
    $(window).bind('mousewheel', function(event) {
        if( animaTime ) clearInterval(animaTime)

        animaTime = setTimeout( function() {
            changeText()
        },100 )

        if( timer ) clearTimeout(timer)

        timer = setTimeout( function() {
           if (event.originalEvent.wheelDelta >= 0) {
                $(`.h1-target`).html(say[num]['text'])
                { num < 1 ? num = 4 : num-- }
               
            }
            else {
                $(`.h1-target`).html(say[num]['text'])
                { num < 4 ? num++ : num = 0  }
            }
        },1200 )
 
    });

    mobSwitch()
}



const switchActiveLang = () => {
    $(`.lang-switch a`).click( function() {
        $(`.lang-switch a`).removeClass(`activ`)
        $(this).addClass(`activ`)

    } )
}