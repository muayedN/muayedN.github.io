$(function() {
    $('form').on('submit', onSubmit);

    function onSubmit(event) {
        event.preventDefault();
        console.log(`Email ${$('#email').val()} \n` +
                    `Password ${$('#password').val()} \n` +
                    `Url ${$('#url').val()} \n` +
                    `Check me out? ${$('#check').is(':checked')}`);
    }
});