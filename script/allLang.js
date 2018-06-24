import $ from 'jquery'

export default function() {

    $(`.lang-switch a`).click(function() {
        let th = $(this).attr(`data-lang`)
        { th == 0  ? allEng() : allUa() }
    })

}


const uaMenu = [
    'Real estate & construction1',
    'Corporate & Antitrust',
    'Intellectual property',
    'White collar crime',
    'Taxation',
    'Dispute resolution',
    'Private clients'
]


const allUa = () => {
    $(`.btn-left .btn-text`).text(`ПРОПОЗИЦII`)
    $(`.btn-right .btn-text`).text(`КОНТАКТИ`)
    $(`.copir-t`).text(`Всi права захищеннi © Jurdana, 2018`)
    $(`.location span`).text(`ad`)
    $(`.send-btn-lef`).text(`Написати`)

    $(`.left-slide-mid p`).text(`ЛЕГАЛЬНЫЙ СЕРВIС`)
    $(`.left-slide-mid h3`).text(`Hашi пропозицii`)

    $(`.right-slide-mid p`).text(`Зворотнiй зв'язок`)
    $(`.right-slide-mid h3`).text(`Написати`)

    $(`.sendMsg`).val(`Надiслати`)

    $(`nav a`).remove()
    
    uaMenu.map( i => {
        $(`nav`).append(`<a href="#">${i}</a>`)
    } )
}


const enMenu = [
    'Real estate & construction',
    'Corporate & Antitrust',
    'Intellectual property',
    'White collar crime',
    'Taxation',
    'Dispute resolution',
    'Private clients'
]

const allEng = () => {
    $(`.btn-left .btn-text`).text(`OUR SERVICES`)
    $(`.btn-right .btn-text`).text(`CONTACT US`)
    $(`.copir-t`).text(`All rights reserved © Jurdana, 2018`)
    $(`.location span`).text(`22 Sribnokilska, Str.Kyiv 02095, Ukraine`)
    $(`.send-btn-lef`).text(`Contact Us`)

    $(`.left-slide-mid p`).text(`LEGAL SERVICES`)
    $(`.left-slide-mid h3`).text(`Our services`)

    $(`.right-slide-mid p`).text(`FEEDBACK FORM`)
    $(`.right-slide-mid h3`).text(`Contact us`)

    $(`.sendMsg`).val(`Send`)

    $(`nav a`).remove()
    
    enMenu.map( i => {
        $(`nav`).append(`<a href="#">${i}</a>`)
    } )
}