const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (document.querySelector('#favchap').value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = document.querySelector('#favchap').value
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        }); 
        input.focus();
        input.value = '';
        }
    });