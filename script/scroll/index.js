import $ from 'jquery'
import { changeText } from './animation'
import def_text from './text_list.js'

import mobSwitch from './mobiSwitch'

export default function() {
   


    let say = def_text.slice(0,4)

   $(`.lang-switch a`).click(function() {
       if( $(this).attr('data-lang') == 0 ) {
         
            say = def_text.slice(0,4)
       } else if( $(this).attr('data-lang') == 1 ) {
         
            say = def_text.slice(4,8)
       }
   })

   console.log(say);

    var num = 0,
        timer,
        animaTime
    $(window).bind('mousewheel', function(event) {
        console.log(say);
        this.console.log(`text`,def_text)

        if( animaTime ) clearInterval(animaTime)

        animaTime = setTimeout( function() {
            changeText()
        },100 )

        if( timer ) clearTimeout(timer)

        timer = setTimeout( function() {
           if (event.originalEvent.wheelDelta >= 0) {
                $(`.h1-target`).html(say[num]['text'])
                { num < 1 ? num = 3 : num-- }
               
            }
            else {
                $(`.h1-target`).html(say[num]['text'])
                { num < 3 ? num++ : num = 0  }
            }
        },1200 )
 
    });

    mobSwitch()
}

