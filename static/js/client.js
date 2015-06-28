(function () {
    var stream = document.getElementById('stream'),
        client = io();

    client.on('line', function (line) {
        stream.appendChild(document.createTextNode(line + '\n'));
    });
}());
