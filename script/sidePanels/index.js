import desc from './desc'
import mobi from './mobi'
import $ from 'jquery'

export default function() {
    

    //$(window).resize( function() {
        let actualWidth = $(window).innerWidth()

        if(actualWidth >= 700) {
            desc()
        } else {
            mobi()
            //console.log(`sss`)
        }

    //})  
    
}


