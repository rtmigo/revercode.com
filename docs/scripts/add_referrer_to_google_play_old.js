// 2022-11 я это реализовал, но потом упростил. Наверно не используется.

// если страница загружена с параметром `gp_referrer`, например,
//      https://revercode.com/rmbr_artworks/?gp_referrer=abc
// это значит, что во всех ссылках класса "googlePlayLink" на этой странице
// нужно подменить адрес, добавив к нему параметр `referrer`, например
//      https://play.google.com/...?id=com.werhal.rmbrart@referrer=abc
// (@ - это амперсанд, который не вставляется в этот комментарий)
//
// TODO автоматизированный тест такой подмены

function updateGooglePlayLinksOld() {
    function needToSetReferrer() {
        let u = new URL(window.location);
        return u.searchParams.get('gp_referrer');
    }

    function transformGooglePlayLinks(url2url) {
        for (var elem of document.getElementsByClassName("googlePlayLink")) {
            elem.setAttribute("href", url2url(elem.getAttribute("href")));
        }
    }

    //////////////

    let newGooglePlayReferrer = needToSetReferrer();

    if (newGooglePlayReferrer!=null) {
        window.onload = function () {
            function url2url(oldUrl) {
                let u = new URL(oldUrl);
                u.searchParams.set("referrer", newGooglePlayReferrer);
                return u;
            };
            transformGooglePlayLinks(url2url);
        };
    };
}
