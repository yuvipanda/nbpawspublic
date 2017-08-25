define(['jquery'], function ($) {
    function createDisplayDiv(href) {
        $('#maintoolbar-container').append(
            $('<div>').attr('id', 'nbpawspublic-display')
                      .addClass('pull-right')
            .append(
                $('<a>').attr('href', href).text('Public Link').addClass('btn btn-primary').attr('target', '_blank')
            )
        );
    }

    var load_ipython_extension = function () {
        createDisplayDiv(window.location.href.replace('paws', 'paws-public'));
    };

    return {
        load_ipython_extension: load_ipython_extension,
    };
});
