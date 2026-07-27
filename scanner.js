window.onload = async function () {

    const cameras = await Html5Qrcode.getCameras();

    if (cameras && cameras.length > 0) {

        let cameraId = cameras[cameras.length - 1].id;

        const scanner = new Html5Qrcode("reader");

        scanner.start(
            cameraId,
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

    } else {

        alert("カメラが見つかりません。");

    }

};