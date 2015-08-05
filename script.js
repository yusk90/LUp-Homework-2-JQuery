$(function () {

    //form validation
    $('#form').on('submit', function (e) {
        e.preventDefault();
        Utils.validateForm($(this));
    });

    $('#buttons-wrapper').on('click', function (e) {
        var $targetText = $(e.target).text();
        e.preventDefault();

        if ($targetText) {
            if ($targetText === 'serializeAndShow') {
                Utils[$targetText]('#form', '#form-wrapper');
            } else {
                Utils[$targetText]('#data-container');
            }
        }
    });

});
