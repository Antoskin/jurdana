import desc from './sDesc'
import mobi from './sMobi'
import $ from 'jquery'

export default function() {
    whenLoaded()
    //whenResize()    
}

function whenLoaded() { // when loaded page
    let actualWidth = $(window).innerWidth()
    if(actualWidth >= 700) desc()
    else mobi()
}

function whenResize() {
    $(window).resize( function() {
        let resSize = $(this).innerWidth()
        if( resSize >= 700 ) desc()
        else mobi()
    })
}


