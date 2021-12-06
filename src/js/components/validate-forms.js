$(document).ready(function () {

    $('.validate-form').each(function (index, numero_form) {
        $(this).validate({
            rules: {
                phoneNumber: {
                    required: true,
                    minlength: 17,
                    maxlength: 17
                },
                promocode: {
                    required: true,
                }
            },
        });
    });

});