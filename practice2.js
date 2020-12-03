// 1
document.getElementById('addBtn').addEventListener('click', function(){
    //入力内容取得
    let task = document.getElementById('task');
    
    // liを作成
    let list = document.createElement('li');
    list.textContent = task.value;

    // リストに作成したliを追加
    let li = document.getElementById('list');
    list.insertBefore(li, list.firstChild);
    
    // 入力欄を空にする
    task.value = '';    
});

document.getElementById('deleteBtn').addEventListener('click', function(){
    let list = document.getElementById('list');
    list.removeChild(list.firstChild);
});