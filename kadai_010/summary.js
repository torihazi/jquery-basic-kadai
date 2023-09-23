$('#change-color').on('click', () => {
    $('#target').css('color', 'red');
});

$('#change-text').on('click', () => {
    $('#target').text('Hello!');
});

$('#fade-out').on('click', () => {
    $('#target').fadeOut(1000, () => {
        $('#target').css('display', 'none');
    });
});

$('#fade-in').on('click', () => {
    $('#target').fadeIn(1000, () => {
        $('#target').css('display', 'block');
    });
});

