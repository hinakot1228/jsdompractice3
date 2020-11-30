document.getElementById('aggBtn').addEventListener('click', function() {
    let task = document.getElementById('task');

    let li = document.createElement('li');
    li.textContent = task.value;

    let list = document.getElementById('list');
    list.insertBefore(li, list.firstChild);

    task.value = '';
});

document.getElementById('deleteBtn').addEventListener('click', function() {
    let list = document.getElementById('list');
    list.removeChild(list.firstChild);
});