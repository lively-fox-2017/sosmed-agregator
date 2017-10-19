$(document).ready(function(e) {
    $('#txtEmail').keyup(function() {
        var sEmail = $('#txtEmail').val();
        if ($.trim(sEmail).length == 0) {
            alert('All fields are mandatory');
            e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            // alert('Email is Valid');
            document.getElementById('txtEmail').style.borderColor="green";
        } else {
            document.getElementById('txtEmail').style.borderColor="red";
            e.preventDefault();
        }
    });
});

function validateEmail(sEmail) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
        return true;
    } else {
        return false;
    }
}