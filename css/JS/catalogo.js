const TEXTO_SIN_GENERO = "Sin clasificar";

/* ---------- Utilidades de datos ---------- */

function buscarPorId(lista, id) {
  return lista.find(function (item) {
    return item.id === id;
  }) || null;
}

function obtenerNombreEditorial(libro) {
  const editorial = buscarPorId(editoriales, libro.editorialId);
  return editorial ? editorial.nombre : "Editorial desconocida";
}

function obtenerNombreGenero(libro) {
  if (!libro.generoId) {
    return TEXTO_SIN_GENERO;
  }
  const genero = buscarPorId(generos, libro.generoId);
  return genero ? genero.nombre : TEXTO_SIN_GENERO;
}

function obtenerNombresAutores(libro) {
  return libro.autoresIds
    .map(function (autorId) {
      return buscarPorId(autores, autorId);
    })
    .filter(function (autor) {
      return autor !== null;
    })
    .map(function (autor) {
      return autor.nombre;
    })
    .join(", ");
}

function formatearPrecio(precio) {
  return "$" + Number(precio).toFixed(2);
}

/* ---------- Filtro ---------- */

function normalizarBusqueda(texto) {
  return texto.trim().toLowerCase();
}

function filtrarLibrosPorTitulo(listaLibros, textoBusqueda) {
  const busqueda = normalizarBusqueda(textoBusqueda);
  if (busqueda === "") {
    return listaLibros;
  }
  return listaLibros.filter(function (libro) {
    return libro.titulo.toLowerCase().includes(busqueda);
  });
}

/* ---------- Renderizado ---------- */

function crearFilaDato(etiqueta, valor) {
  const fila = document.createElement("div");
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = etiqueta;
  dd.textContent = valor;
  fila.append(dt, dd);
  return fila;
}

function crearTarjetaLibro(libro) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";

  const titulo = document.createElement("h3");
  titulo.textContent = libro.titulo;

  const datos = document.createElement("dl");
  datos.className = "datos-libro";
  datos.append(
    crearFilaDato("ISBN:", libro.isbn),
    crearFilaDato("Editorial:", obtenerNombreEditorial(libro)),
    crearFilaDato("Género:", obtenerNombreGenero(libro)),
    crearFilaDato("Autores:", obtenerNombresAutores(libro)),
    crearFilaDato("Precio:", formatearPrecio(libro.precio))
  );

  tarjeta.append(titulo, datos);
  return tarjeta;
}

function mostrarMensajeSinResultados(hayQueMostrarlo) {
  const mensaje = document.getElementById("catalogo-sin-resultados");
  mensaje.hidden = !hayQueMostrarlo;
}

function renderizarCatalogo(listaLibros) {
  const contenedor = document.getElementById("catalogo-lista");
  contenedor.replaceChildren(...listaLibros.map(crearTarjetaLibro));
  mostrarMensajeSinResultados(listaLibros.length === 0);
}

/* ---------- Eventos ---------- */

function actualizarCatalogoDesdeBuscador() {
  const campo = document.getElementById("buscador-titulo");
  renderizarCatalogo(filtrarLibrosPorTitulo(libros, campo.value));
}

function limpiarBusqueda() {
  const campo = document.getElementById("buscador-titulo");
  campo.value = "";
  renderizarCatalogo(libros);
  campo.focus();
}

function iniciarCatalogo() {
  const formulario = document.getElementById("form-busqueda");
  const campo = document.getElementById("buscador-titulo");
  const botonLimpiar = document.getElementById("btn-limpiar-busqueda");

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    actualizarCatalogoDesdeBuscador();
  });
  campo.addEventListener("input", actualizarCatalogoDesdeBuscador);
  botonLimpiar.addEventListener("click", limpiarBusqueda);

  renderizarCatalogo(libros);
}

document.addEventListener("DOMContentLoaded", iniciarCatalogo);