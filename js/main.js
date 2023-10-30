$(document).ready(function() {
	$('#carousel').slick({
		autoplay : true,
	});

	$('.menu-hamburguer').click(function(){
		$('nav').slideToggle();
	});

    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    $('#formularioCadastro').submit(function(event) {
        event.preventDefault();
        var nomeCompleto = $('#nomeCompleto').val();
        var email = $('#email').val();
        var telefone = $('#telefone').val();
        var cpf = $('#cpf').val();
        var endereco = $('#endereco').val();
        var cep = $('#cep').val();
        $('#formularioCadastro')[0].reset();
    });

	$('.lista-veiculos button').click(function(){
		const destino = $('#cadastro');
		const nomeVeiculo = $(this).parent().find('h1').text();
		$('#veiculo-interesse').val(nomeVeiculo);
		$('html').animate({
			scrollTop: destino.offset().top
		}, 1000)
	})
});
