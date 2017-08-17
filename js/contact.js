// Interaction logic for the contact form.
function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    /* do what you want with the form */
    
    
    var data = {};
    data.name = document.getElementById("name").value;
    data.email = document.getElementById("email").value;
    data.message = document.getElementById("message").value;
    
    var handler_url = "/partials/contact_form_submit.php";
    
    var json_data = JSON.stringify(data);
    var b64_data = b64EncodeUnicode(json_data);
    
    $.ajax({
      type: "POST",
      url: handler_url,
      data: b64_data,
      success: onSuccess
    });
    
    // You must return false to prevent the default form behavior
    return false;
}

function onSuccess(data, status, request){
    alert("Thank You, I'll be in touch soon.");
}

function b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

document.addEventListener('DOMContentLoaded', function(){
    var form = document.getElementById('contact_form');
    if (form.attachEvent) {
        form.attachEvent("submit", processForm);
    } else {
        form.addEventListener("submit", processForm);
    }
});
