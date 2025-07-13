fetch('malla_astronomia.json')
  .then(res => res.json())
  .then(cursos => {
    const contenedor = document.getElementById("contenedor-cursos");
    cursos.forEach(curso => {
      const div = document.createElement("div");
      div.className = `curso ${curso.estado}`;
      div.innerHTML = `<strong>${curso.codigo}</strong><br>${curso.nombre}<br>Créditos: ${curso.creditos}`;
      contenedor.appendChild(div);
    });
  });
