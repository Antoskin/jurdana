import $ from 'jquery'
import scrollDown from './scroll'
import sidePanels from './sidePanels'

$('document').ready( function() {

    scrollDown()
    sidePanels()

    $(window).resize( () => inspectWidth())
    inspectWidth()

    //changeCopiright()
})

// if mobile size, put contacts to middle div
const inspectWidth = () => {
    let contacts = $(`.bottom-middle`)
    if($(window).innerWidth() < 700) {
        $(`.middle-centr`).append(contacts) 
        $(`.copir-t`).text(`Jurdana, © 2018`) }
    else 
        $(`.bottom-left`).after(contacts)}


        
