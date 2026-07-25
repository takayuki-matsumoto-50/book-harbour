function startScanner() {

    const scanner = new Html5Qrcode("reader");

    scanner.start(

        { facingMode: "environment" },

        {
            fps: 10,
            qrbox: 250
        },

        function(decodedText){

            scanner.stop();

            window.location.href =
            "book.html?isbn="+decodedText;

        },

        function(){}

    );

}
