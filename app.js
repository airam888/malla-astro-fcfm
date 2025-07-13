fetch('malla_licenciatura_astronomia_completa.json')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById("contenedor-semestres");

    // Agrupar cursos por semestre
    const semestres = {};
    data.forEach(curso => {
      if (!semestres[curso.semestre]) {
        semestres[curso.semestre] = [];
      }
      semestres[curso.semestre].push(curso);
    });

    // Mostrar por semestre
    Object.keys(semestres).sort((a, b) => a - b).forEach(n => {
      const semestreDiv = document.createElement("div");
      semestreDiv.className = "semestre";

      const titulo = document.createElement("h2");
      titulo.textContent = `Semestre ${n}`;
      semestreDiv.appendChild(titulo);

      const cursos = semestres[n];
      cursos.forEach(curso => {
        const div = document.createElement("div");
        div.className = `curso ${curso.estado}`;
        div.innerHTML = `
          <strong>${curso.codigo}</strong><br>
          ${curso.nombre}<br>
          <small>Créditos: ${curso.creditos}</small><br>
          <small>Requisitos: ${curso.requisitos.length > 0 ? curso.requisitos.join(', ') : "Ninguno"}</small>
        `;

        // Cambiar estado al hacer clic
        div.addEventListener("click", () => {
          div.classList.toggle("aprobado");
          div.classList.toggle("pendiente");
        });

        semestreDiv.appendChild(div);
      });

      contenedor.appendChild(semestreDiv);
    });
  })
  .catch(error => {
    console.error("Error al cargar el JSON:", error);
  });
