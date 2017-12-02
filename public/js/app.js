if (window.attachEvent) {window.attachEvent('onload', load);}
else if (window.addEventListener) {window.addEventListener('load', load, false);}
else {document.addEventListener('load', load, false);}
function load() {
    function addBurger(burgerName) {
        $.ajax({
            method: "post",
            url: '/api/burgers',
            data: {burgerName: burgerName}
        }).done(function() {
            location.reload();
        });
    }

    function devourBurger(burgerId) {
        $.ajax({
            method: "put",
            url: "/api/burgers/" + burgerId
        }).done(function() {
            location.reload();
        });
    }

    var submitButton = document.getElementById("submitButton");
    var burgerName = document.getElementById('burgerName');

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        addBurger(burgerName.value.trim());
    }, false);

    $(document).on("click", ".devourButton", function(e) {
        devourBurger($(e.target).attr("data-id"));
    });
}