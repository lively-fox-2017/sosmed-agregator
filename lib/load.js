$(document).ready(function(){
    $("#div1").load("http://localhost:3000/", function(res, status, xhr) {
        var parse = JSON.parse(res)
        var list = document.getElementById('ul2');
        document.createElement('table')
        parse.forEach(p => {
            var item = document.createElement('tr');
            var td = document.createElement('td')
            td.appendChild(document.createTextNode(p.name))
            item.appendChild(td);
            var td = document.createElement('td')
            td.appendChild(document.createTextNode(p.url))
            item.appendChild(td);
            var td = document.createElement('td')
            td.appendChild(document.createTextNode(p.query))
            item.appendChild(td);
            list.appendChild(item);            
        })
        console.log(list)
    });
});

   /* attach a submit handler to the form */
   $("#reg-form").submit(function(event) {

    /* stop form from submitting normally */
    event.preventDefault();

    /* get the action attribute from the <form action=""> element */
    var $form = $( this ),
        url = $form.attr( 'action' );

    /* Send the data using post with element id name and name2*/
    var posting = $.post( url, { name: $('#name').val(), name2: $('#name2').val() } );

    /* Alerts the results */
    posting.done(function( data ) {
    alert('success');
    });
});