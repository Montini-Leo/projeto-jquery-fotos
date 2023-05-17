$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#cancel-btn').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#new-img-adress').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-img-link">
                <a href="${enderecoDaNovaImagem}" target"_blank" title="View full image">
                    View full image
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#new-img-adress').val('');
    })
})