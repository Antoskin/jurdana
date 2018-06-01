import $ from 'jquery'

export default function() {

    const def_text = [
        { 'text' : 'Plus usus doctrina guam citra usum doctrina valet'},
        { 'text' : 'Plus doctrina guam citra usum doctrina valet'},
        { 'text' : 'Plus usum doctrina valet'},
        { 'text' : 'Plus usus doctrina guam '}
    ]

    var num = 0
    $(window).bind('mousewheel', function(event) {
    //    setTimeout( () => {
    //        console.log(`shit`)
    //    },1000 )
        if (event.originalEvent.wheelDelta >= 0) {
            $(`.h1-target`).text(def_text[num]['text'])
            { num < 1 ? num = 3 : num-- }
            console.log(num)
        }
        else {
            $(`.h1-target`).text(def_text[num]['text'])
            { num < 3 ? num++ : num = 0  }
        }
    });


   

}