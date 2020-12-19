function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("aside1").style.display = "none";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("aside1").style.display = "";
}

var t;

function up() {
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -170);
        t = setTimeout('up()', 20);
    } else clearTimeout(t);
    return false;
}

function senMessage() {
    var message = document.getElementById("messagetext").value;
    document.getElementById("chatBody").insertAdjacentHTML("beforeend", "  <div id='chatBody' class=\"container1\">\n" +
        "                    <p>" + message + "</p>\n" +
        "                </div>");

    $("#idPostForm").submit(function (e) {
        e.preventDefault();
    });

    $.ajax({
        url: "http://localhost:5000/api",
        type: "POST",
        async: false,
        crossDomain: true,
        "access-Control-Allow-Origin": '*',
        contentType: 'text/plain',
        'Access-Control-Allow-Headers': 'Authorization, Content-Type',
        'Access-Control-Allow-Methods': 'POST',
        crossOrigin: true,
        data: "{\"message\":\"" + message + "\"}",
        success: function (result) {
            document.getElementById("chatBody").insertAdjacentHTML("beforeend", "  <div id='chatBody' class=\"container1 darker\">\n" +
                "                    <p>" + result + "</p>\n" +
                "                </div>");
        },
        error: function (response) {
            alert("error-" + response.status + ": " + response.responseText);
        }
    });
}
