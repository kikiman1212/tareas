// Función para agregar una nueva tarea
function agregarTarea() {
    let input = document.getElementById('tarea-input');
    let tarea = input.value.trim();

    if (tarea !== '') {
        let tareasList = document.getElementById('tareas-list');
        let li = document.createElement('li');
        li.textContent = tarea;
        tareasList.appendChild(li);
        input.value = '';
    }
}
