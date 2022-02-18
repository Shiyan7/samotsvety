$(document).ready(function () {

    $('.validate-form').each(function () {
        $(this).validate({
            rules: {
                phoneNumber: {
                    required: true,
                    minlength: 17,
                    maxlength: 17
                },
                promocode: {
                    required: true,
                },
                value: {
                    required: true,
                },
                text: {
                    required: true,
                },
                name: {
                    required: true,
                },
                password: {
                    required: true,
                },
                email: {
                    required: true,
                }
            },
        });
    });

});