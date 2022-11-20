function updateGooglePlayLinksNew() {
    // меняем ссылки на Google Play. Во всех ссылках страница, которые ведут
    // на https://play.google.com, добавляем параметр referrer, который содержит
    // ссылку на собственно исходную страницу

    function transformGooglePlayLinks(url2url) {
        for (var elem of document.getElementsByTagName("a")) {
            let href = elem.getAttribute("href");
            if (href!=null && href.startsWith("https://play.google.com")) {
                elem.setAttribute( "href", url2url(elem.getAttribute("href")) );
            }
        }
    }

    function url2url(oldUrl) {
        let u = new URL(oldUrl);
        u.searchParams.set("referrer", window.location);
        return u;
    };

    //////////////
    window.onload = function () {
         transformGooglePlayLinks(url2url);
    };
}

updateGooglePlayLinksNew();