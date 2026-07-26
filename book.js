const params = new URLSearchParams(location.search);
const isbn = params.get("isbn");

loadBook(isbn);

async function loadBook(isbn){

    const area = document.getElementById("book");

    area.innerHTML = "<p>📚 本を探しています...</p>";

    try{

        const response = await fetch(
            `https://api.openbd.jp/v1/get?isbn=${isbn}`
        );

        const data = await response.json();

        if(data[0] == null){

            area.innerHTML = `
                <h2>本が見つかりませんでした</h2>
                <p>ISBN : ${isbn}</p>
            `;
            return;
        }

        const summary = data[0].summary;

        const title = summary.title;
        const author = summary.author;
        const publisher = summary.publisher;
        const cover = summary.cover;
        const pubdate = summary.pubdate;

        area.innerHTML = `

        <img class="cover" src="${cover}" alt="表紙">

        <h2>${title}</h2>

        <p><b>著者</b></p>
        <p>${author}</p>

        <p><b>出版社</b></p>
        <p>${publisher}</p>

        <p><b>出版日</b></p>
        <p>${pubdate}</p>

        <hr>

        <button onclick="saveBook()">
            ⚓ この本を港へ停泊させる
        </button>

        `;

    }
    catch(error){

        console.error(error);

        area.innerHTML = `
            <h2>通信エラー</h2>
            <p>${error}</p>
        `;

    }

}

function saveBook(){

    alert("Version0.4で実装予定です😊");

}
