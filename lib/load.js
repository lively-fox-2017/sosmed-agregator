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

//    /* attach a submit handler to the form */
//    $("#reg-form").submit(function(event) {

//     /* stop form from submitting normally */
//     event.preventDefault();

//     /* get the action attribute from the <form action=""> element */
//     var $form = $( this ),
//         url = $form.attr( 'action' );

//     /* Send the data using post with element id name and name2*/
//     var posting = $.post( url, { name: $('#name').val(), name2: $('#name2').val() } );

//     /* Alerts the results */
//     posting.done(function( data ) {
//     alert('success');
//     });
// });

// magic.js
$(document).ready(function() {
    
        // process the form
        $('#reg-form').submit(function(event) {
    
            // get the form data
            // there are many ways to get this data using jQuery (you can use the class or id also)
            var formData = {
                'status'              : $('textarea[name=status]').val()
            };
    
            // process the form
            $.ajax({
                type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url         : 'http://localhost:3000/', // the url where we want to POST
                data        : formData, // our data object
                dataType    : 'json', // what type of data do we expect back from the server
                            encode          : true
            })
                // using the done promise callback
                .done(function(data) {
    
                    // log data to the console so we can see
                    console.log(data); 
    
                    // here we will handle errors and validation messages
                });
    
            // stop the form from submitting the normal way and refreshing the page
            event.preventDefault();
        });
    
    });