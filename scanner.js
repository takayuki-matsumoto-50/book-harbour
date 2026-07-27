window.onload = function () {

    const scanner = new Html5Qrcode("reader");

    scanner.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 250
        },
        function(decodedText){

            scanner.stop().then(() => {
                location.href =
                    "book.html?isbn=" + decodedText;
            });

        },
        function(error){}
    );

};