$(() => {
    let root = location.protocol + '//' + location.host + '/kursova-web-tech/';
    let partialPath = `${root}views/_partial/`;
    $.get(`${partialPath}frame.html`, function (data) {
        $('body').prepend(data);
        $.get(`${partialPath}head.html`, function (data) {
            $('head').prepend(data);
            $('#footer').load(`${partialPath}footer.html`);
            $('aside').load(`${partialPath}sidebar.html`);
            $('nav').load(`${partialPath}top-nav.html`);
        });
    });
});



function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}