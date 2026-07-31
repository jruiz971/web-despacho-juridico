/* =========================================================================
   Contreras y Asociados — Organigrama
   ---------------------------------------------------------------------------
   COMO EDITAR ESTE ARCHIVO
   Cada persona es un objeto dentro de EQUIPO. Para dar de alta a alguien basta
   con llenar sus campos; no hay que tocar el HTML.

     nombre      Nombre completo tal como debe aparecer en la web.
     cargo       Puesto dentro del organigrama.
     area        Materia o division de la que es responsable.
     foto        Ruta de la fotografia, por ejemplo "assets/img/equipo/ana.jpg".
                 Si se deja vacia se muestran las iniciales sobre fondo azul.
     cedula      Numero de cedula profesional. Vacio si no aplica.
     formacion   Titulo academico y universidad.
     perfil      Uno o dos parrafos de semblanza (arreglo de textos).
     correo      Correo de contacto directo. Vacio si no se publica.
     pendiente   true mientras no se tengan los datos: la tarjeta se dibuja en
                 gris punteado con la leyenda "Por asignar". Poner en false o
                 borrar la linea cuando se complete la informacion.

   NOTA: el licenciado Rodrigo aparece en las publicaciones del despacho pero no
   se cuenta con su nombre completo ni su cargo formal; colocarlo en el nivel
   que corresponda en cuanto se confirme.
   ========================================================================= */

const EQUIPO = {
  direccion: {
    nombre: "Por asignar",
    cargo: "Director general",
    area: "Dirección del despacho",
    foto: "",
    cedula: "",
    formacion: "",
    perfil: [
      "Responsable de la dirección del despacho y de las tres divisiones del grupo.",
    ],
    correo: "",
    pendiente: true,
  },

  subdireccion: {
    nombre: "Por asignar",
    cargo: "Subdirector",
    area: "Operación y litigio",
    foto: "",
    cedula: "",
    formacion: "",
    perfil: [
      "Supervisa la carga de trabajo de las coordinaciones y el seguimiento de los expedientes en trámite.",
    ],
    correo: "",
    pendiente: true,
  },

  coordinaciones: [
    {
      nombre: "Por asignar",
      cargo: "Coordinación jurídica",
      area: "Civil, familiar, mercantil y agrario",
      foto: "",
      cedula: "",
      formacion: "",
      perfil: [
        "Coordina los asuntos de litigio ordinario y la relación con juzgados y tribunales.",
      ],
      correo: "",
      pendiente: true,
    },
    {
      nombre: "Por asignar",
      cargo: "Coordinación laboral y penal",
      area: "Laboral, penal y amparo",
      foto: "",
      cedula: "",
      formacion: "",
      perfil: [
        "A cargo de la defensa laboral, la materia penal y los juicios de amparo.",
      ],
      correo: "",
      pendiente: true,
    },
    {
      nombre: "Por asignar",
      cargo: "Coordinación médico legal",
      area: "MLGM · Médico Legal Graco México",
      foto: "",
      cedula: "",
      formacion: "",
      perfil: [
        "Responsable del acompañamiento legal a médicos, clínicas y hospitales.",
      ],
      correo: "",
      pendiente: true,
    },
    {
      nombre: "Por asignar",
      cargo: "Coordinación académica",
      area: "CAE · Centro de Aprendizaje Efectivo",
      foto: "",
      cedula: "",
      formacion: "",
      perfil: [
        "Diseña los programas de los cursos y diplomados, y coordina a los instructores.",
      ],
      correo: "",
      pendiente: true,
    },
  ],

  // Abogados asociados, pasantes y personal administrativo.
  asociados: [
    {
      nombre: "Por asignar",
      cargo: "Abogado asociado",
      area: "Litigio",
      foto: "",
      cedula: "",
      formacion: "",
      perfil: [],
      correo: "",
      pendiente: true,
    },
    {
      nombre: "Por asignar",
      cargo: "Abogado asociado",
      area: "Litigio",
      foto: "",
      cedula: "",
      formacion: "",
      perfil: [],
      correo: "",
      pendiente: true,
    },
    {
      nombre: "Por asignar",
      cargo: "Gestoría y trámites",
      area: "Administración",
      foto: "",
      cedula: "",
      formacion: "",
      perfil: [],
      correo: "",
      pendiente: true,
    },
  ],
};

/* -------------------------------------------------------------------------
   Dibujado del organigrama
   ------------------------------------------------------------------------- */
(function () {
  "use strict";

  /** Devuelve las iniciales para usarlas cuando no hay fotografia. */
  function iniciales(nombre) {
    const palabras = nombre.split(/\s+/).filter(Boolean);
    if (!palabras.length || nombre === "Por asignar") return "?";
    return palabras
      .slice(0, 2)
      .map((palabra) => palabra.charAt(0).toUpperCase())
      .join("");
  }

  /** Escapa texto antes de inyectarlo como HTML. */
  function escapar(texto) {
    const nodo = document.createElement("div");
    nodo.textContent = texto;
    return nodo.innerHTML;
  }

  function dibujarFoto(persona) {
    if (persona.foto) {
      return `<img class="persona-foto" src="${escapar(persona.foto)}"
                   alt="Retrato de ${escapar(persona.nombre)}" width="96" height="96">`;
    }
    return `<div class="persona-foto" aria-hidden="true">${escapar(
      iniciales(persona.nombre)
    )}</div>`;
  }

  function dibujarPersona(persona, indice) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "persona" + (persona.pendiente ? " persona-pendiente" : "");

    const tienePerfil = !persona.pendiente && persona.perfil && persona.perfil.length;

    tarjeta.innerHTML = `
      ${dibujarFoto(persona)}
      <p class="persona-nombre">${escapar(persona.nombre)}</p>
      <p class="persona-cargo">${escapar(persona.cargo)}</p>
      <p class="persona-area">${escapar(persona.area)}</p>
    `;

    if (tienePerfil) {
      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = "btn btn-contorno-azul btn-sm mt-3";
      boton.textContent = "Ver perfil";
      boton.setAttribute("data-bs-toggle", "modal");
      boton.setAttribute("data-bs-target", "#modalPerfil");
      boton.dataset.persona = String(indice);
      tarjeta.appendChild(boton);
    }

    return tarjeta;
  }

  /** Aplana el organigrama en una lista para poder referenciarlo desde el modal. */
  function listarPersonas(equipo) {
    return [
      equipo.direccion,
      equipo.subdireccion,
      ...equipo.coordinaciones,
      ...equipo.asociados,
    ];
  }

  function dibujarOrganigrama() {
    const contenedor = document.querySelector("[data-organigrama]");
    if (!contenedor) return;

    const personas = listarPersonas(EQUIPO);
    const indiceDe = (persona) => personas.indexOf(persona);

    const nivelDireccion = document.createElement("div");
    nivelDireccion.className = "organigrama-nivel";
    nivelDireccion.appendChild(
      dibujarPersona(EQUIPO.direccion, indiceDe(EQUIPO.direccion))
    );

    const conector1 = document.createElement("div");
    conector1.className = "organigrama-conector";

    const nivelSubdireccion = document.createElement("div");
    nivelSubdireccion.className = "organigrama-nivel";
    nivelSubdireccion.appendChild(
      dibujarPersona(EQUIPO.subdireccion, indiceDe(EQUIPO.subdireccion))
    );

    const conector2 = document.createElement("div");
    conector2.className = "organigrama-conector";

    const nivelCoordinaciones = document.createElement("div");
    nivelCoordinaciones.className = "organigrama-nivel organigrama-nivel--ramas";
    EQUIPO.coordinaciones.forEach((persona) => {
      // Cada tarjeta va dentro de una celda que dibuja su tramo de conector.
      const rama = document.createElement("div");
      rama.className = "organigrama-rama";
      rama.appendChild(dibujarPersona(persona, indiceDe(persona)));
      nivelCoordinaciones.appendChild(rama);
    });

    contenedor.append(
      nivelDireccion,
      conector1,
      nivelSubdireccion,
      conector2,
      nivelCoordinaciones
    );

    // Los asociados se muestran como rejilla aparte, no como rama del arbol.
    const rejillaAsociados = document.querySelector("[data-asociados]");
    if (rejillaAsociados) {
      EQUIPO.asociados.forEach((persona) => {
        const columna = document.createElement("div");
        columna.className = "col-sm-6 col-lg-4 d-flex justify-content-center";
        columna.appendChild(dibujarPersona(persona, indiceDe(persona)));
        rejillaAsociados.appendChild(columna);
      });
    }

    prepararModal(personas);
  }

  /** Llena el modal con los datos de la persona cuyo boton se pulso. */
  function prepararModal(personas) {
    const modal = document.getElementById("modalPerfil");
    if (!modal) return;

    modal.addEventListener("show.bs.modal", (evento) => {
      const boton = evento.relatedTarget;
      if (!boton) return;

      const persona = personas[Number(boton.dataset.persona)];
      if (!persona) return;

      modal.querySelector("[data-modal-nombre]").textContent = persona.nombre;
      modal.querySelector("[data-modal-cargo]").textContent = persona.cargo;
      modal.querySelector("[data-modal-area]").textContent = persona.area;
      modal.querySelector("[data-modal-foto]").innerHTML = dibujarFoto(persona);

      const formacion = modal.querySelector("[data-modal-formacion]");
      formacion.textContent = persona.formacion || "";
      formacion.hidden = !persona.formacion;

      const cedula = modal.querySelector("[data-modal-cedula]");
      cedula.textContent = persona.cedula ? `Cédula profesional ${persona.cedula}` : "";
      cedula.hidden = !persona.cedula;

      const perfil = modal.querySelector("[data-modal-perfil]");
      perfil.innerHTML = "";
      (persona.perfil || []).forEach((parrafo) => {
        const p = document.createElement("p");
        p.textContent = parrafo;
        perfil.appendChild(p);
      });

      const correo = modal.querySelector("[data-modal-correo]");
      if (persona.correo) {
        correo.href = `mailto:${persona.correo}`;
        correo.textContent = persona.correo;
        correo.hidden = false;
      } else {
        correo.hidden = true;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", dibujarOrganigrama);
})();
