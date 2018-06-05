import $ from 'jquery'
import scrollDown from './slides/scrollDown'
import sidePanels from './sidePanels'

$('document').ready( function() {

    sidePanels()
    scrollDown()

    $(window).resize( () => inspectWidth())
    inspectWidth()

})



// if mobile size, put contacts to middle div
const inspectWidth = () => {
    if($(window).innerWidth() < 700) {
        let contacts = $(`.bottom-middle`)
        $(`.middle-centr`).append(contacts) }
}


