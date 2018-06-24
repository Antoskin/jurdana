import $ from 'jquery'
import main from './index'


export default function() {

    $(`.lang-switch a`).click(function() {
        let curLang = $(this).attr('data-lang');
        main(curLang)
    })

}