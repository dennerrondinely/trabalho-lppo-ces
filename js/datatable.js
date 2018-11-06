$(document).ready( function () {
    $('#relatorio__table--table').DataTable(
        {

            "lengthChange": true,

            "bFilter": true,

            "bInfo": true,

            "dom": 'lBfrtip',

            "buttons": [{
              extend: 'excel',
              messageTop: 'Relatorio Quantitativo por Base de Conhecimento'
            }],
            columnDefs: [
            { type: 'date-eu', targets: 1 },
            ],
            "order": [[0, 'asc']],
            "oLanguage":

            {

             "sProcessing":   "Processando...",

             "sLengthMenu":   "Mostrar _MENU_ registros",

             "sZeroRecords":  "Não foram encontrados resultados",

             "sInfo":         "Mostrando de _START_ até _END_ de _TOTAL_ registros",

             "sInfoEmpty":    "Mostrando de 0 até 0 de 0 registros",

             "sInfoFiltered": "",

             "sInfoPostFix":  "",

             "sSearch":       "Buscar:",

             "sUrl":          "",

             "oPaginate":

             {

               "sFirst":    "Primeiro",

               "sPrevious": "Anterior",

               "sNext":     "Seguinte",

               "sLast":     "Último"

             }

           }
         }
    );
});
