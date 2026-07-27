let scanner;

function startScanner() {

    if (scanner) {
        return;
    }

    scanner = new Html5Qrcode("reader");

    scanner.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 250
        },
        function(decodedText){

            scanner.stop().then(() => {
                location.href = "book.html?isbn=" + decodedText;
            });

        },
        function(error){}
    ).catch(err => {

        alert("カメラを起動できませんでした。\n" + err);

        scanner = null;

    });

}