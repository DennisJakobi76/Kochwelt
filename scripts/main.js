const aot_img = document.getElementById('aot-preview-img');
const aot_header = document.getElementById('aot-preview-headline');
const aot_text_paragraph = document.getElementById('aot-preview-text');
const aot_btn_link = document.getElementById('aot-open-recipe-btn');
const nav_link_rec_otd = document.getElementsByClassName(
    'nav-link-recipe-of-the-day'
);
const resp_nav_link_rec_otd = document.getElementsByClassName(
    'responsive-nav-link-recipe-of-the-day'
);

let aotImgScr;
let aotImgAlt;
let aotHeaderText;
let aotParagraphText;
let aotHref;
let containerIndex;

let aot_text_dubaiChocolate =
    'Die berühmte Dubai-Schokolade ist ein luxuriöses Dessert, das die Sinne verzaubert und die exquisite Handwerkskunst der Region widerspiegelt. Bekannt für ihre reichhaltige, cremige Textur und den intensiven Geschmack, wird sie oft mit hochwertigen Zutaten wie feinstem Kakao und verführerischen Gewürzen wie Safran und Kardamom verfeinert. Diese Schokolade wird häufig in kunstvoll gestalteten Pralinen oder als Topping für Desserts serviert und ist eine beliebte Wahl für Geschenke und Souvenirs. In Dubai finden sich zahlreiche Chocolatiers, die innovative Geschmacksrichtungen und einzigartige Designs kreieren, die das kulinarische Erbe der Stadt verkörpern. Ein Stück dieser köstlichen Dubai-Schokolade ist nicht nur ein Genuss, sondern auch ein einmaliges Erlebnis, das die Vielfalt und den Reichtum der arabischen Küche feiert.';

let aot_text_curry =
    'Rote Linsen Curry mit Süßkartoffeln ist einfach fantastisch! Die roten Linsen bringen diese herrliche, sämige Konsistenz, die so wunderbar sättigt und von innen wärmt. Und dann die Süßkartoffeln: leicht süßlich, zart und cremig, sie verleihen dem Gericht eine gemütliche, sanfte Süße, die perfekt mit den herzhaften Linsen harmoniert. Es ist ein Gericht, das nicht nur den Bauch, sondern auch die Seele streichelt – genau das Richtige, wenn man sich nach etwas Gesundem und Wohltuendem sehnt.';

let aot_text_minced_pork =
    'Veganes Mett aus Reiswaffeln ist einfach ein kleines Wunder! Wer hätte gedacht, dass diese knusprigen, leichten Waffeln zu etwas so unglaublich Leckerem werden können? Es ist, als ob sie sich in eine völlig neue Welt verwandeln, wenn sie zu einem herzhaften, würzigen Mett werden. Jedes Bisschen davon ist ein Genuss – leicht, köstlich und voller Geschmack. Man fühlt sich gut, weil es nicht nur so lecker, sondern auch nachhaltig und tierfreundlich ist. Es zeigt, dass man auf nichts verzichten muss, wenn man bewusst lebt. Veganes Mett aus Reiswaffeln ist einfach pure Freude!';

function getRecipeOfTheDay(containerIndex) {
    switch (containerIndex) {
        case 1:
            aotImgScr = './assets/img/mett.jpg';
            aotImgAlt = 'Foto von Mett-Brötchen';
            aotHeaderText = 'Veganes Mett';
            aotParagraphText = aot_text_minced_pork;
            aotHref = './recipe_vegan_minced_pork.html';
            break;
        case 2:
            aotImgScr = './assets/img/dubai_schokolade.jpg';
            aotImgAlt = 'Foto von Dubai-Schokolade';
            aotHeaderText = 'Dubai-Schokolade';
            aotParagraphText = aot_text_dubaiChocolate;
            aotHref = './recipe_dubai_chocolate.html';
            break;
        case 3:
            aotImgScr =
                './assets/img/rote-linsen-curry-mit-suesskartoffeln.png';
            aotImgAlt = 'Foto von Linsen Curry';
            aotHeaderText = 'Rote Linsen Curry mit Süßkartoffeln';
            aotParagraphText = aot_text_curry;
            aotHref = './recipe_red_lentil_curry.html';
            break;
    }

    aot_img.setAttribute('src', aotImgScr);
    aot_img.setAttribute('alt', aotImgAlt);
    aot_header.innerText = aotHeaderText;
    aot_text_paragraph.innerText = aotParagraphText;
    aot_btn_link.setAttribute('href', aotHref);

    for (let i = 0; i < nav_link_rec_otd.length; i++) {
        nav_link_rec_otd[i].setAttribute('href', aotHref);
    }

    for (let j = 0; j < resp_nav_link_rec_otd.length; j++) {
        resp_nav_link_rec_otd[j].setAttribute('href', aotHref);
    }
}
