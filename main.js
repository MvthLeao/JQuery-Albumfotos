$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaimg = $('#nova-img').val();
        const novaurl = $('<li style="display: none"></li>');
        $(`<img src= "${novaimg}" />`).appendTo(novaurl);
        $(`
            <div class= "link-img">
                <a href="${novaimg}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>      
            </div>
        `).appendTo(novaurl);
        $(novaurl).appendTo('ul');
        $(novaurl).fadeIn(3000);
        $('#nova-img').val('')
    })
})