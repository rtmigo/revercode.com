function updateGooglePlayLinksNew() {
    // В текущей странице находим все A с параметром href, ведущим на
    // https://play.google.com. Во всех этих ссылках исправляем href, добавляя
    // к нему параметр referrer с адресом текущей страницы.
    //
    // То есть, если
    //   страница https://revercode.com/app1 содержала
    //   ссылку "https://play.google.com/?id=app1"
    //   то ссылка будет заменена на
    //   "https://play.google.com/?id=app1&referrer=https://revercode.com/app1"
    // если адрес текущей страницы содержит query-строку, она конечно тоже
    // будет закодирована и передана внутрь параметра referrer.

    function transformGooglePlayLinks(url2url) {
        for (var elem of document.getElementsByTagName("a")) {
            let href = elem.getAttribute("href");
            if (href!=null && href.startsWith("https://play.google.com")) {
                elem.setAttribute("href", url2url(elem.getAttribute("href")));
            }
        }
    }

    function url2url(oldUrl) {
        let u = new URL(oldUrl);
        u.searchParams.set("referrer", window.location);
        return u;
    };

    window.onload = function () {
         transformGooglePlayLinks(url2url);
    };
}

updateGooglePlayLinksNew();