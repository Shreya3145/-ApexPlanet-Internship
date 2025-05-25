document.getElementById('add-btn').addEventListener('click', function () {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();

  if (task === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = task;

  const removeBtn = document.createElement('span');
  removeBtn.textContent = '✖';
  removeBtn.addEventListener('click', function () {
    li.remove();
  });

  li.appendChild(removeBtn);
  document.getElementById('todo-list').appendChild(li);
  input.value = '';
});
