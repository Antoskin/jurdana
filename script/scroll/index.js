import $ from 'jquery'
import { changeText } from './animation'
import def_text from './text_list.js'

import mobSwitch from './mobiSwitch'

export default function() {
    

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
                $(`.h1-target`).html(def_text[num]['text'])
                { num < 1 ? num = 3 : num-- }
               
            }
            else {
                $(`.h1-target`).html(def_text[num]['text'])
                { num < 3 ? num++ : num = 0  }
            }
        },1200 )
 
    });


    mobSwitch()
}

