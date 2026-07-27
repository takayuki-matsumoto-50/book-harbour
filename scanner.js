window.onload = async function () {

    try {

        const scanner = new Html5Qrcode("reader");

        await scanner.start(
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

    } catch(e){

        alert("エラー:\n\n" + e);

    }

};