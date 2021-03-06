// instanciar ambas clases
const eventBrite = new EventBrite();
const ui = new Interfaz();


// listener al buscador

document.getElementById('buscarBtn').addEventListener('click', (e) => {
  e.preventDefault();
  
  // leer el texto del input buscador
  const textoBuscador = document.getElementById('evento').value;

  // leer el select
  const categorias = document.getElementById('listado-categorias');

  const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

  // revisar que haya algo escrito en el buscador
  if(textoBuscador !== ''){
    // cuando si hay una busqueda
    eventBrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
      .then(eventos => {
        if(eventos.eventos.events.length > 0) {
          ui.limpiarResultados();
          ui.mostrarEventos(eventos);
        } else {
          ui.mostrarMensaje('No hay resultados','alert alert-danger mt-4')
        }
        
      })
  } else {
    // mostrar mensaje para que imprima algo
    ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
  }
})