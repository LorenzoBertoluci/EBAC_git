$(document).ready(function() {
    $('#formularioTarefa').submit(function(event) {
        event.preventDefault();
        var novaTarefa = $('#tarefa').val();
        if (novaTarefa.trim() !== '') {
            $('#listaTarefas').append('<li>' + novaTarefa + '</li>');
            $('#tarefa').val('');
        }
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('completada');
    });
});
