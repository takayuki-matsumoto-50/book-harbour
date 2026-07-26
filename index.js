const books = JSON.parse(
    localStorage.getItem("books")
) || [];

document.getElementById("bookCount").innerText =
books.length;
