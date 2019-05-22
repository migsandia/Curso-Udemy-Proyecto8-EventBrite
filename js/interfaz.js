class Interfaz {
  constructor() {
    // inicializa la app al instanciar
    this.init();
    // obtener un resultado de eventos
    this.listado = document.getElementById('resultado-eventos');
  }

  // metodo para cuando inicialize la app
  init() {
    // llamar a imprimircategorias de la rEST API
    this.imprimirCategorias();
  }

  imprimirCategorias() {
    const listaCategorias = eventBrite.obtenerCategorias()
      .then(categorias => {
        const cats = categorias.categorias.categories;

        //seleccionar el select de categorias
        const selectCategoria = document.getElementById('listado-categorias');

        cats.forEach(cat => {
          const option = document.createElement('option');
          option.value = cat.id;
          option.appendChild(document.createTextNode(cat.name_localized));
          selectCategoria.appendChild(option);
        });
      })
  }

  // mostrar eventos
  mostrarEventos(eventos) {
    const listaEventos = eventos.eventos.events;
    
    // recorrer los eventos y crear el template
    listaEventos.forEach((evento) => {
      
        this.listado.innerHTML += `
          <div class="col-md-4 mb-4>
            <div class="card">
              
                <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}" />
             
              <div class="card-body">
                <div class="card-text">
                  <h2 class="text center">${evento.name.text}</h2>
                  <p class="lead text-info">Información del evento</p>
                  <p>${evento.description.text.substring(0,100)}...
                  </p>
                  <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                  <span class="badge badge-secondary">Fecha y hora: ${evento.start.local}</span>
                  <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Entradas</a>
                </div>
              </div>
            </div>
          </div>
        `;
    })
  }

  // limpiar resulñtados previos
  limpiarResultados() {
    this.listado.innerHTML = '';
  }
  // metodo para escribir mensaje
  mostrarMensaje(mensaje, clases) {
    const div = document.createElement('div');
    div.classList = clases;
    div.appendChild(document.createTextNode(mensaje));
    //buscar el padre
    const buscadorDiv = document.getElementById('buscador');
    buscadorDiv.appendChild(div);

    setTimeout(() => {
      this.limpiarMensaje();
    }, 3000)
  }

  // desaparece el mensaje en caso de que exista
  limpiarMensaje() {
    const alert = document.querySelector('.alert');
    if(alert) {
      alert.remove();
    }
  }
}