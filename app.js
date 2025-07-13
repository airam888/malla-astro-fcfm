fetch('malla_licenciatura_astronomia_completa.json')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("contenedor-cursos");

    // Ordenar por semestre
    data.sort((a, b) => a.semestre - b.semestre);

    data.forEach(curso => {
      const div = document.createElement("div");
      div.className = `curso ${curso.estado}`;

      div.innerHTML = `
        <h3>${curso.codigo}</h3>
        <strong>${curso.nombre}</strong><br>
        <small>Créditos: ${curso.creditos}</small><br>
        <small>Semestre: ${curso.semestre}</small><br>
        <small>Requisitos: ${curso.requisitos.length > 0 ? curso.requisitos.join(', ') : "Ninguno"}</small>
      `;

      contenedor.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error al cargar el archivo JSON:", error);
  });
