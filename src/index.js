import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値の取得
  const inputText = document.getElementById("input-todo").value;
  document.getElementById("input-todo").value = "";

  //liを生成
  const li = document.createElement("li");
  //divを生成
  const div = document.createElement("div");
  div.className = "list-row";
  //pを生成
  const p = document.createElement("p");
  p.className = "list-header";
  p.innerText = inputText;

  //完了ボタン生成
  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    onClickComp(p.innerText);
    //押された完了ボタンの親要素(div)の親要素(li)を削除
    const deleteDiv = compButton.parentNode;
    const deleteLi = deleteDiv.parentNode;
    document.getElementById("imcomplete-list").removeChild(deleteLi);
  });

  //削除ボタン生成
  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    //押された削除ボタンの親要素(div)の親要素(li)を削除
    const deleteDiv = delButton.parentNode;
    const deleteLi = deleteDiv.parentNode;
    document.getElementById("imcomplete-list").removeChild(deleteLi);
  });

  //親子関係を設定
  div.appendChild(p);
  div.appendChild(compButton);
  div.appendChild(delButton);
  li.appendChild(div);

  //リストに追加
  document.getElementById("imcomplete-list").appendChild(li);
};

const onClickComp = (labelText) => {
  //liを生成
  const li = document.createElement("li");
  //divを生成
  const div = document.createElement("div");
  div.className = "list-row";
  //pを生成
  const p = document.createElement("p");
  p.className = "list-header";
  p.innerText = labelText;

  //戻すボタン生成
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    onClickBack(labelText);
    //押された戻すボタンの親要素(div)の親要素(li)を削除
    const deleteDiv = backButton.parentNode;
    const deleteLi = deleteDiv.parentNode;
    document.getElementById("complete-list").removeChild(deleteLi);
  });

  //削除ボタン生成
  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    //押された削除ボタンの親要素(div)の親要素(li)を削除
    const deleteDiv = delButton.parentNode;
    const deleteLi = deleteDiv.parentNode;
    document.getElementById("complete-list").removeChild(deleteLi);
  });

  //親子関係を設定
  div.appendChild(p);
  div.appendChild(backButton);
  div.appendChild(delButton);
  li.appendChild(div);

  //リストに追加
  document.getElementById("complete-list").appendChild(li);
};

const onClickBack = (labalText) => {
  //liを生成
  const li = document.createElement("li");
  //divを生成
  const div = document.createElement("div");
  div.className = "list-row";
  //pを生成
  const p = document.createElement("p");
  p.className = "list-header";
  p.innerText = labalText;

  //完了ボタン生成
  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    onClickComp(p.innerText);
    //押された完了ボタンの親要素(div)の親要素(li)を削除
    const deleteDiv = delButton.parentNode;
    const deleteLi = deleteDiv.parentNode;
    document.getElementById("imcomplete-list").removeChild(deleteLi);
  });

  //削除ボタン生成
  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    //押された削除ボタンの親要素(div)の親要素(li)を削除
    const deleteDiv = delButton.parentNode;
    const deleteLi = deleteDiv.parentNode;
    document.getElementById("imcomplete-list").removeChild(deleteLi);
  });

  //親子関係を設定
  div.appendChild(p);
  div.appendChild(compButton);
  div.appendChild(delButton);
  li.appendChild(div);

  //リストに追加
  document.getElementById("imcomplete-list").appendChild(li);
};

//指定したIDに対してイベントを付与
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
