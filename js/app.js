let data = [];
const url = 'http://localhost:3000/0';


function capturarDatos() {
    let titulo = document.getElementById('tituloTareaId').value;
    let fechaDeInicio = document.getElementById('fechaDeInicio').value;
    let fechaDeFin = document.getElementById('fechaDeFin').value;
    let descripcion = document.getElementById('inputDescripcionDeTarea').value;

    let datos = {
        titulo: titulo,
        fechaDeInicio: fechaDeInicio,
        fechaDeFin: fechaDeFin,
        descripcion: descripcion
    };

    data.push(datos);


}

const tareasPendientes = document.querySelector('.tareasPendientes');


function agregarDatos(data) {


    tareasPendientes.innerHTML = ''; // Limpiar la lista antes de agregar nuevas tareas


    const titulosAgregados = new Set(); // Mantenemos un conjunto de títulos agregados

    data.forEach(dataTask => {
        // Verificar si el título ya está en el conjunto de títulos agregados
        if (titulosAgregados.has(dataTask.titulo)) {
            console.log(`El título "${dataTask.titulo}" ya está en la lista. Se omitirá.`);
            return; // Salta a la siguiente iteración del bucle
        }

        // Si el título no está en el conjunto, lo agregamos al documento HTML y al conjunto

        const listaDePendientes = document.createElement('div');
        listaDePendientes.classList.add('listaDePendientes');
        const botones = document.createElement('div');
        botones.classList.add('botones');

        const taskLista = document.createElement('button');
        taskLista.classList.add('taskLista');
        taskLista.textContent = '\u2714';
        botones.appendChild(taskLista);

        const taskPendiente = document.createElement('h2');
        tareasPendientes.classList.add('taskPendiente');
        taskPendiente.textContent = dataTask.titulo;

        const taskFallida = document.createElement('button');
        taskFallida.classList.add('taskFallida');
        taskFallida.textContent = '\u274C';
        botones.appendChild(taskFallida);

        const eliminarTask = document.createElement('button');
        eliminarTask.classList.add('eliminarTask');
        eliminarTask.textContent = 'ELIMINAR';
        botones.appendChild(eliminarTask);


        listaDePendientes.appendChild(botones);
        listaDePendientes.appendChild(taskPendiente);
        tareasPendientes.appendChild(listaDePendientes);
        titulosAgregados.add(dataTask.titulo); // Agregamos el título al conjunto
    
        let tituloRemovido;

        const containertareaCumplida = document.querySelector('.containertareaCumplida');
        const containertareaFallida = document.querySelector('.containertareaFallida');

        listaDePendientes.addEventListener('click', function(event) {
            if (event.target === taskLista) {
                console.log('Se hizo clic en el botón taskLista');
                let tituloRemovido = taskPendiente.textContent;
                let tareaCumplida = document.createElement('h2');
                tareaCumplida.textContent = tituloRemovido;
                tareaCumplida.style.color = 'white';
                containertareaCumplida.appendChild(tareaCumplida);
                listaDePendientes.remove();
            } else if (event.target === taskFallida) {
                console.log('Se hizo clic en el botón taskFallida');
                let tituloRemovido = taskPendiente.textContent;
                let tareaFallida = document.createElement('h2');
                tareaFallida.textContent = tituloRemovido;
                tareaFallida.style.color = 'white';
                containertareaFallida.appendChild(tareaFallida);
                listaDePendientes.remove();
            } else if (event.target === eliminarTask) {
                this.remove();
            }
        });
    
    });

}



const botonAgregar = document.querySelector('.botonAgregar');


botonAgregar.addEventListener('click', function () {
    capturarDatos();
    agregarDatos(data);
    console.log(data);
});




