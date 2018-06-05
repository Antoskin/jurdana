import $ from 'jquery'
import { changeText } from './animation'
import def_text from './text_list.js'

export default function() {


    var num = 0,
        timer
    $(window).bind('mousewheel', function(event) {

        if( timer ) clearTimeout(timer)

        timer = setTimeout( function() {
           if (event.originalEvent.wheelDelta >= 0) {
                changeText()
                setTimeout( () => {
                        $(`.h1-target`).text(def_text[num]['text'])
                        { num < 1 ? num = 3 : num-- }
                },500 )
            }
            else {
                changeText()
                setTimeout( () => {
                    $(`.h1-target`).text(def_text[num]['text'])
                    { num < 3 ? num++ : num = 0  }
                },500 )
                
            }
        },1000 )
 
    });


   

}