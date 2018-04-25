$(() => {
    setTimeout(function () {
        $('#topNavNews').addClass('selected');
        let currentlySelectedPage = getParameterByName('page');
        currentlySelectedPage = currentlySelectedPage == null ? 1 : currentlySelectedPage;
        $(`.pagination .page-item:nth-of-type(${currentlySelectedPage})`).addClass('active');
    }, 400)
});