const params =
new URLSearchParams(location.search);

const isbn=params.get("isbn");

document.getElementById("book").innerHTML=`

<p><b>ISBN</b></p>

<p>${isbn}</p>

<hr>

<h3>仮データ</h3>

<p>タイトル取得予定</p>

<p>著者取得予定</p>

<p>出版社取得予定</p>

`;
