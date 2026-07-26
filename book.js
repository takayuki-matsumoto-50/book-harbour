const params = new URLSearchParams(location.search);

const isbn = params.get("isbn");

loadBook(isbn);

async function loadBook(isbn){

    const area = document.getElementById("book");

    area.innerHTML = "<p>📚 本を探しています...</p>";

    try{

        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
        );

        const data = await response.json();

        if(data.totalItems === 0){

            area.innerHTML = `
                <h3>見つかりませんでした</h3>

                <p>ISBN</p>

                <p>${isbn}</p>
            `;

            return;
        }

        const book = data.items[0].volumeInfo;

        const title =
            book.title ?? "タイトル不明";

        const authors =
            book.authors ?
            book.authors.join("、") :
            "不明";

        const publisher =
            book.publisher ?? "不明";

        const publishedDate =
            book.publishedDate ?? "";

        const description =
            book.description ?? "";

        const image =
            book.imageLinks ?
            book.imageLinks.thumbnail :
            "";

        area.innerHTML = `

        <img class="cover" src="${image}">

        <h2>${title}</h2>

        <p><b>著者</b></p>

        <p>${authors}</p>

        <p><b>出版社</b></p>

        <p>${publisher}</p>

        <p><b>出版日</b></p>

        <p>${publishedDate}</p>

        <hr>

        <p>${description}</p>

        <button onclick="saveBook()">
            ⚓ この本を港へ停泊させる
        </button>

        `;

    }
    catch{

        area.innerHTML = `
            <h3>通信エラー</h3>

            <p>Google Books APIへ接続できませんでした。</p>
        `;
    }

}

function saveBook(){

    alert("次回実装します😊");

}
