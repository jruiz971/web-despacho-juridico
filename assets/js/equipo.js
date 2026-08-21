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

   ESTRUCTURA
   El despacho tiene un director y el resto del equipo como asociados. Bajo la
   direccion cuelgan las dos divisiones con responsable: Medico Legal Graco
   Mexico y el Centro de Aprendizaje Efectivo, este ultimo a cargo del propio
   director.

   CRITERIO DE PRIVACIDAD
   Este sitio es publico y queda indexado en buscadores. Por eso NO se publica
   ningun dato personal que venga en los curriculums: CURP, RFC, domicilio
   particular, fecha de nacimiento, edad, estado civil, telefono celular ni
   correo personal. Solo se publica informacion profesional. Los contactos
   directos, si algun dia se publican, deben ser cuentas del despacho con
   dominio propio, nunca cuentas personales de Gmail o Hotmail.
   ========================================================================= */

/* Datos del director. Se reutilizan mas abajo para la coordinacion del CAE,
   que tambien esta a su cargo. */
const DIRECTOR = {
  nombre: "Israel Contreras Galindo",
  cargo: "Director general",
  area: "Dirección del despacho",
  foto: "assets/img/equipo/israel-contreras-galindo.jpg",
  cedula: "08758086 (federal) y 12311899, en trámite",
  formacion:
    "Licenciado en Derecho y Ciencias Sociales. Maestría en Educación y maestría en Derecho Procesal Penal. Doctorado en Educación.",
  perfil: [
    "Fundador y director del despacho. Atiende asuntos en materia familiar, corporativa y empresarial, bienes muebles e inmuebles en sus vertientes civil, penal y agraria, asistencia en materia penal, y trámites, gestoría y postulancia.",
    "Abogado litigante y docente. Ha impartido cátedra de Derecho Procesal Penal, Práctica Procesal Civil, Derecho Mercantil y Criminología en la Universidad Interamericana para el Desarrollo y en el ICESM.",
    "Formador de agentes del Ministerio Público y de la Policía Ministerial en los cursos de formación inicial del estado, y participante en la implementación del sistema penal acusatorio y oral en Michoacán desde sus primeras etapas.",
  ],
  correo: "",
  pendiente: false,
};

const EQUIPO = {
  direccion: DIRECTOR,

  // Divisiones con responsable asignado.
  coordinaciones: [
    {
      nombre: "Yara Mayte Merlán Flores",
      cargo: "Encargada de Médico Legal",
      area: "MLGM · Médico Legal Graco México",
      foto: "assets/img/equipo/yara-mayte-merlan-flores.jpg",
      cedula: "",
      formacion:
        "Licenciada en Derecho por la Facultad de Derecho y Ciencias Sociales de la Universidad Michoacana de San Nicolás de Hidalgo. Titulada con cédula profesional.",
      perfil: [
        "Responsable de la división médico legal del despacho, que representa y asesora a médicos, clínicas y hospitales.",
        "Atiende además asuntos en materia civil, familiar, laboral y penal: elaboración de escritos, gestoría ante dependencias, seguimiento de acuerdos y consulta de autos en línea.",
        "Antes de dedicarse de lleno al litigio fue representante sindical durante casi nueve años, mediando conflictos entre empresa y trabajadores, experiencia que aporta al área laboral del despacho.",
      ],
      correo: "",
      pendiente: false,
    },
    {
      // Misma persona que la direccion: el CAE esta a cargo del director.
      nombre: DIRECTOR.nombre,
      cargo: "Coordinación académica",
      area: "CAE · Centro de Aprendizaje Efectivo",
      foto: DIRECTOR.foto,
      cedula: DIRECTOR.cedula,
      formacion: DIRECTOR.formacion,
      perfil: [
        "Coordina el Centro de Aprendizaje Efectivo: diseña los programas de los cursos y diplomados e imparte buena parte de las sesiones.",
        "Doctor en Educación y maestro en Educación, con trayectoria docente en la Universidad Interamericana para el Desarrollo y en el ICESM, y como formador de agentes del Ministerio Público y de la Policía Ministerial.",
      ],
      correo: "",
      pendiente: false,
    },
  ],

  // Resto del equipo.
  asociados: [
    {
      nombre: "Guillermo Valdés González",
      cargo: "Asociado jurídico",
      area: "Administrativo, fiscal y cobro coactivo",
      foto: "assets/img/equipo/guillermo-valdes-gonzalez.jpg",
      cedula: "",
      formacion:
        "Licenciado en Derecho por la Universidad Interamericana para el Desarrollo.",
      perfil: [
        "Especialista en derecho administrativo y fiscal, con dos décadas de experiencia dentro de la administración pública municipal de Morelia.",
        "Ha trabajado en procedimientos administrativos de ejecución, notificación de créditos fiscales, impuesto predial, prescripciones y exenciones de adeudos, y cumplimiento de actos derivados de oficio o de sentencia.",
      ],
      correo: "",
      pendiente: false,
    },
    {
      nombre: "Arely Castañeda Zaranda",
      cargo: "Asociada jurídica",
      area: "Civil, familiar y litigio oral",
      foto: "assets/img/equipo/arely-castaneda-zaranda.jpg",
      cedula: "",
      formacion:
        "Licenciatura en Derecho por la Facultad de Derecho y Ciencias Sociales de la Universidad Michoacana de San Nicolás de Hidalgo. Carta de pasante.",
      perfil: [
        "Redacta escritos iniciales, demandas, promociones y recursos en materia civil y familiar, y da seguimiento a acuerdos y expedientes en juzgados locales y plataformas electrónicas.",
        "Atiende de forma directa a los clientes del despacho y los acompaña en el seguimiento de sus juicios. Cuenta con formación en el nuevo marco procesal de justicia oral.",
      ],
      correo: "",
      pendiente: false,
    },
    {
      nombre: "María del Carmen López Rocha",
      cargo: "Asociada jurídica",
      area: "Gestoría y control de expedientes",
      foto: "assets/img/equipo/maria-del-carmen-lopez-rocha.jpg",
      cedula: "",
      formacion:
        "Estudiante de la Licenciatura en Derecho y Ciencias Sociales en la Universidad Michoacana de San Nicolás de Hidalgo.",
      perfil: [
        "Se encarga de la organización y el control de expedientes, la revisión de listas de acuerdos y la gestión ante juzgados y dependencias públicas.",
        "Tiene experiencia previa en la elaboración de promociones, convenios y cartas finiquito, y en el seguimiento de juicios ejecutivos mercantiles.",
      ],
      correo: "",
      pendiente: false,
    },
    {
      nombre: "José Alberto Antonio Cabrera",
      cargo: "Asociado jurídico",
      area: "Contabilidad y archivo",
      foto: "assets/img/equipo/jose-alberto-antonio-cabrera.jpg",
      cedula: "",
      formacion:
        "Estudiante de la Universidad Michoacana de San Nicolás de Hidalgo.",
      perfil: [
        "Apoya en la contabilidad del despacho, el registro de pólizas y el resguardo y la organización de la documentación.",
        "Cuenta con experiencia previa como auxiliar contable en la Secretaría de Finanzas y Administración del Estado de Michoacán.",
      ],
      correo: "",
      pendiente: false,
    },
    {
      // Se cuenta con la fotografia; falta el curriculum.
      nombre: "Isaías Benítez Jaramillo",
      cargo: "Asociado jurídico",
      area: "Por definir",
      foto: "assets/img/equipo/isaias-benitez-jaramillo.jpg",
      cedula: "",
      formacion: "",
      perfil: [],
      correo: "",
      pendiente: true,
    },
    {
      // Se cuenta con la fotografia; falta el curriculum.
      nombre: "Jesús Uriel Ávila Arreola",
      cargo: "Asociado jurídico",
      area: "Por definir",
      foto: "assets/img/equipo/jesus-uriel-avila-arreola.jpg",
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
                   alt="Retrato de ${escapar(persona.nombre)}" width="96" height="96"
                   loading="lazy">`;
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

      /* Toda la tarjeta abre el perfil, no solo el boton: quien pulsa la
         fotografia o el nombre espera que pase algo. El boton sigue ahi para
         que la accion sea visible y alcanzable con el teclado. */
      tarjeta.classList.add("persona--con-perfil");
      tarjeta.addEventListener("click", (evento) => {
        if (evento.target.closest("button")) return;
        boton.click();
      });
    }

    return tarjeta;
  }

  /** Aplana el organigrama en una lista para poder referenciarlo desde el modal. */
  function listarPersonas(equipo) {
    return [equipo.direccion, ...equipo.coordinaciones, ...equipo.asociados];
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

    const conector = document.createElement("div");
    conector.className = "organigrama-conector";

    const nivelCoordinaciones = document.createElement("div");
    nivelCoordinaciones.className = "organigrama-nivel organigrama-nivel--ramas";
    EQUIPO.coordinaciones.forEach((persona) => {
      // Cada tarjeta va dentro de una celda que dibuja su tramo de conector.
      const rama = document.createElement("div");
      rama.className = "organigrama-rama";
      rama.appendChild(dibujarPersona(persona, indiceDe(persona)));
      nivelCoordinaciones.appendChild(rama);
    });

    contenedor.append(nivelDireccion, conector, nivelCoordinaciones);

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

  /** Llena el modal con los datos de la persona cuya tarjeta se pulso. */
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
