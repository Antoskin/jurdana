import $ from 'jquery'
import scrollDown from './scroll'
import sidePanels from './sidePanels'
import lang from './allLang'

$('document').ready( function() {

    scrollDown()
    sidePanels()
    lang()

    $(window).resize( () => inspectWidth())
    inspectWidth()

   
})

// if mobile size, put contacts to middle div
const inspectWidth = () => {
    let contacts = $(`.bottom-middle`)
    if($(window).innerWidth() < 700) {
        $(`.middle-centr`).append(contacts) 
        $(`.copir-t`).text(`Jurdana, © 2018`) }
    else 
        $(`.bottom-left`).after(contacts)}


        
