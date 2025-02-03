let tareas = [
  { descripcion: "Hacer desafío", completado: false },
  { descripcion: "Trotar 10k", completado: false },
  { descripcion: "Pasear a Kimi", completado: false },
];

function recargarLista() {
  const listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = "";

  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <input type="checkbox" onchange="cambiarCheck(${index})" ${
      tarea.completado ? "checked" : ""
    }>
            <span class="${tarea.completado ? "completed" : ""}">${
      tarea.descripcion
    }</span>
            <button onclick="eliminarTarea(${index})">&#10006</button>
        `;
    listaTareas.appendChild(li);
  });

  document.getElementById("totalTareas").textContent = tareas.length;
  document.getElementById("tareasCompletadas").textContent = tareas.filter(
    (t) => t.completado
  ).length;
}

function agregarTarea() {
  const input = document.getElementById("nuevaTarea");
  const descripcion = input.value.trim(); //
  if (descripcion === "") {
    alert("Ingresa una tarea");
    return;
  }

  tareas.push({ descripcion, completado: false });
  input.value = "";
  recargarLista();
}

function eliminarTarea(index) {
  tareas.splice(index, 1);
  recargarLista();
}

function cambiarCheck(index) {
  tareas[index].completado = !tareas[index].completado;
  recargarLista();
}

recargarLista();
