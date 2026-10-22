const editoriales = [
  { id: "ed1", nombre: "Sudamericana" },
  { id: "ed2", nombre: "Eudeba" }
];

const generos = [
  { id: "gen1", nombre: "Novela" },
  { id: "gen2", nombre: "Ensayo" }
];

const autores = [
  { id: "au1", nombre: "Julio Cortázar" },
  { id: "au2", nombre: "Ana Pérez" },
  { id: "au3", nombre: "Luis Gómez" }
];

const libros = [
  {
    id: "lib1",
    titulo: "Rayuela",
    isbn: "978-950-039-123-4",
    precio: 1500,
    editorialId: "ed1",
    generoId: "gen1",
    autoresIds: ["au1"]
  },
  {
    id: "lib2",
    titulo: "Manual de librería",
    isbn: "978-950-000-001-2",
    precio: 2000,
    editorialId: "ed2",
    generoId: null,
    autoresIds: ["au2", "au3"]
  },
  {
    id: "lib3",
    titulo: "Bestiario",
    isbn: "978-950-039-200-2",
    precio: 1200,
    editorialId: "ed1",
    generoId: "gen1",
    autoresIds: ["au1"]
  },
  {
    id: "lib4",
    titulo: "Ensayos sobre la lectura",
    isbn: "978-950-000-310-5",
    precio: 1800.5,
    editorialId: "ed2",
    generoId: "gen2",
    autoresIds: ["au2"]
  },
  {
    id: "lib5",
    titulo: "Historia de la edición",
    isbn: "978-950-000-420-1",
    precio: 2300,
    editorialId: "ed2",
    generoId: "gen2",
    autoresIds: ["au2", "au3"]
  },
  {
    id: "lib6",
    titulo: "Cuadernos de viaje",
    isbn: "978-950-039-555-3",
    precio: 990.9,
    editorialId: "ed1",
    generoId: null,
    autoresIds: ["au3", "au1"]
  }
];

const clientes = [
  { id: "cl1", nombre: "Facundo Cabrera", email: "facu@correo.com" },
  { id: "cl2", nombre: "Nahuel Olmos", email: "nahu@correo.com" },
  { id: "cl3", nombre: "Agustin Pereyra", email: "agus@correo.com" }
];