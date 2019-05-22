
class EventBrite {
  constructor() {
    this.token_auth = '';
    this.ordenar = 'date';
  }

  // mostrar resultados de la busqueda
  async obtenerEventos(evento, categoria) {
    const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`);

    const eventos = await respuestaEvento.json();

    return {eventos}
  }
  async obtenerCategorias() {
    // consultar las categorias a la rest API de eventbrite
    const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

    // esperar la respuesta de las categorias y convertirlo a JSON

    const categorias = await respuestaCategorias.json();

    // devolvemos el resultado
    return { categorias }
  }
}