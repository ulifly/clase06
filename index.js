
const hacerTarea = (tarea, callback) => {
  console.log(`Haciendo la tarea: ${tarea}`);
  // Simulando un retraso de 2 segundos
  setTimeout(() => {
    console.log(`Tarea de ${tarea} completada`);
    callback();
  }, 2000);
};


const tareaDeportes = () =>{
  console.log("tarea de deportes completada");
}

hacerTarea('matemáticas', tareaDeportes)