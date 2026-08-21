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
     formacion   Resumen academico de una linea. Vacio si va en secciones.
     perfil      Semblanza de entrada (arreglo de parrafos), siempre visible.
     secciones   Bloques desplegables del perfil. Cada uno es
                 { titulo: "...", items: ["...", "..."] }. Se omite el campo
                 cuando no hay material suficiente: mas vale un perfil corto
                 que uno relleno de generalidades.
     correo      Correo de contacto directo. Vacio si no se publica.
     pendiente   true mientras no se tengan los datos: la tarjeta se dibuja en
                 gris punteado y no abre perfil.

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

/* Secciones del director que se reutilizan en su ficha del CAE. */
const FORMACION_DIRECTOR = {
  titulo: "Formación académica",
  items: [
    "Doctorado en Educación.",
    "Maestría en Derecho Procesal Penal.",
    "Maestría en Educación, 2019.",
    "Licenciatura en Derecho y Ciencias Sociales.",
    "Cursos de inglés y de francés, de 125 horas cada uno, en el Departamento de Idiomas de la Universidad Michoacana de San Nicolás de Hidalgo.",
  ],
};

const DOCENCIA_DIRECTOR = {
  titulo: "Docencia universitaria",
  items: [
    "Universidad Interamericana para el Desarrollo: Práctica Procesal Penal, Práctica Procesal Civil, Código Penal, Derecho Mercantil y Derechos de Autor.",
    "ICESM: Derecho Procesal Penal e Introducción al Estudio del Derecho en la licenciatura en Derecho.",
    "ICESM: Crimen Organizado en la licenciatura en Criminología.",
    "ICESM: Doctrinas Económicas y Normas y Legislación Sanitaria.",
  ],
};

const FORMACION_SERVIDORES = {
  titulo: "Formación de servidores públicos",
  items: [
    "Tronco común en el curso de formación inicial para Agentes de la Policía Ministerial Acreditable, 140 horas, 2013.",
    "Estudio Monográfico del Delito en la formación inicial de la Policía Ministerial del fuero común, 55 horas, 2013.",
    "Teoría del Delito en la formación inicial de Agentes del Ministerio Público del fuero común, 40 horas, 2013.",
    "Curso sobre la labor del perito en el sistema judicial, 2023.",
    "Curso del nuevo sistema de justicia penal, 2023.",
  ],
};

const SISTEMA_ACUSATORIO = {
  titulo: "Sistema penal acusatorio",
  items: [
    "Formador de Formadores en Justicia Oral Penal en México, con simulación de juicios orales, 40 horas. Agencia Española de Cooperación Internacional para el Desarrollo y Comisión Nacional de Tribunales Superiores de Justicia, 2011.",
    "Curso regional sobre el nuevo sistema penal acusatorio y oral, 2012.",
    "Introducción al Nuevo Sistema de Justicia Penal, Procuraduría General de Justicia del Estado de Michoacán, 2013.",
    "Curso de Escribientes del Consejo del Poder Judicial del Estado de Michoacán, 180 horas, 2009.",
  ],
};

const DIRECTOR = {
  nombre: "Israel Contreras Galindo",
  cargo: "Director general",
  area: "Dirección del despacho",
  foto: "assets/img/equipo/israel-contreras-galindo.jpg",
  cedula: "08758086 (federal) y 12311899, en trámite",
  formacion: "",
  perfil: [
    "Fundador y director del despacho. Abogado litigante y docente, con más de veinte años de ejercicio en Michoacán.",
    "Participó en la implementación del sistema penal acusatorio y oral en el estado desde sus primeras etapas, y ha formado a agentes del Ministerio Público y de la Policía Ministerial en los cursos de formación inicial.",
  ],
  secciones: [
    {
      titulo: "Áreas de práctica",
      items: [
        "Derecho familiar.",
        "Corporativo y empresarial.",
        "Bienes muebles e inmuebles, en sus vertientes civil, penal y agraria.",
        "Asistencia y representación en materia penal.",
        "Trámites, gestoría y postulancia.",
      ],
    },
    FORMACION_DIRECTOR,
    DOCENCIA_DIRECTOR,
    FORMACION_SERVIDORES,
    SISTEMA_ACUSATORIO,
    {
      titulo: "Reconocimientos",
      items: [
        "Mención honorífica de la CEIG por el trabajo «La urgencia de emitir la ley reglamentaria del artículo 6 de la Constitución», 2011.",
        "Mención honorífica del IEAIP por el ensayo «Niveles de seguridad de los datos personales», 2011.",
        "Reconocimiento en el Segundo Concurso de Ensayo sobre el papel del Canal del Congreso.",
        "Participación en el Sexto Premio Regional de Ensayo sobre Transparencia, Acceso a la Información y Protección de Datos Personales, COMAIP, 2012.",
      ],
    },
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
      formacion: "",
      perfil: [
        "Responsable de la división médico legal del despacho, que representa y asesora a médicos, clínicas y hospitales.",
        "Atiende además asuntos en materia civil, familiar, laboral y penal, desde la asesoría inicial hasta el seguimiento del juicio.",
      ],
      secciones: [
        {
          titulo: "Áreas de práctica",
          items: [
            "Médico legal.",
            "Derecho civil.",
            "Derecho familiar.",
            "Derecho laboral.",
            "Derecho penal.",
          ],
        },
        {
          titulo: "Formación académica",
          items: [
            "Licenciatura en Derecho por la Facultad de Derecho y Ciencias Sociales de la Universidad Michoacana de San Nicolás de Hidalgo, 2007-2012.",
            "Titulada, con cédula profesional.",
          ],
        },
        {
          titulo: "Trayectoria",
          items: [
            "Abogada litigante en despacho jurídico, desde abril de 2025.",
            "Representante sindical del Sindicato de Trabajadores de la Industria de la Radiodifusión, Televisión y Telecomunicaciones, 2014-2023, mediando conflictos laborales entre empleador y trabajadores.",
            "Auditora de campo en la empresa Nielsen, 2012-2013.",
          ],
        },
        {
          titulo: "En qué trabaja",
          items: [
            "Asesoría jurídica adaptada a cada asunto en particular.",
            "Elaboración de escritos y promociones.",
            "Gestoría ante dependencias.",
            "Consulta de autos en línea y seguimiento de acuerdos.",
            "Cumplimiento en término de acuerdos y contratos legales.",
          ],
        },
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
      formacion: "",
      perfil: [
        "Coordina el Centro de Aprendizaje Efectivo: diseña los programas de los cursos y diplomados e imparte buena parte de las sesiones.",
        "Doctor y maestro en Educación, combina la docencia universitaria con el litigio diario, que es lo que da a los cursos su carácter práctico.",
      ],
      secciones: [FORMACION_DIRECTOR, DOCENCIA_DIRECTOR, FORMACION_SERVIDORES],
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
      formacion: "",
      perfil: [
        "Especialista en derecho administrativo y fiscal, con dos décadas de experiencia dentro de la administración pública municipal de Morelia.",
        "Conoce el procedimiento administrativo desde el lado de la autoridad, lo que le permite anticipar cómo se defiende un asunto frente a ella.",
      ],
      secciones: [
        {
          titulo: "Áreas de práctica",
          items: [
            "Derecho administrativo.",
            "Derecho fiscal.",
            "Procedimientos administrativos de ejecución.",
            "Cobro coactivo.",
          ],
        },
        {
          titulo: "Formación académica",
          items: [
            "Licenciatura en Derecho por la Universidad Interamericana para el Desarrollo, 2018.",
            "Inglés de nivel intermedio.",
          ],
        },
        {
          titulo: "Trayectoria",
          items: [
            "Notificador ejecutor de cobro coactivo en el Ayuntamiento de Morelia, desde 2025.",
            "Auxiliar del Departamento de Impuestos Inmobiliarios del Ayuntamiento de Morelia, 2016-2024.",
            "Interventor del área de espectáculos públicos del Ayuntamiento de Morelia, 2004-2023.",
          ],
        },
        {
          titulo: "En qué trabaja",
          items: [
            "Notificación de créditos fiscales y actos administrativos.",
            "Acuerdos de nulidad y resoluciones en materia de impuesto predial.",
            "Tramitación de prescripciones y exenciones de adeudos.",
            "Cumplimiento de actos derivados de oficio o de sentencia.",
            "Atención y orientación a contribuyentes.",
          ],
        },
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
      formacion: "",
      perfil: [
        "Lleva la redacción de instrumentos jurídicos y el seguimiento de expedientes en materia civil y familiar, con formación en el nuevo marco procesal de justicia oral.",
        "Es quien atiende de forma directa a buena parte de los clientes del despacho y los acompaña durante el juicio.",
      ],
      secciones: [
        {
          titulo: "Áreas de práctica",
          items: [
            "Derecho civil.",
            "Derecho familiar.",
            "Litigio oral.",
            "Derecho procesal.",
          ],
        },
        {
          titulo: "Formación académica",
          items: [
            "Licenciatura en Derecho por la Facultad de Derecho y Ciencias Sociales de la Universidad Michoacana de San Nicolás de Hidalgo.",
            "Carta de pasante.",
          ],
        },
        {
          titulo: "Actualización",
          items: [
            "Curso «Modelos de justicia oral: hacia una recepción armónica del Código Nacional de Procedimientos Civiles y Familiares», mayo de 2026, impartido por la Escuela Nacional de Formación Judicial extensión Morelia, la Escuela Estatal de Formación Judicial, la Universidad La Salle Morelia y el Colectivo Michoacano de Derecho.",
          ],
        },
        {
          titulo: "En qué trabaja",
          items: [
            "Escritos iniciales, demandas, promociones y recursos en materia civil y familiar.",
            "Consulta y seguimiento de acuerdos y expedientes en juzgados locales y plataformas electrónicas.",
            "Trámites judiciales y administrativos ante diversas instancias e instituciones públicas.",
            "Atención directa y asesoría preliminar a clientes.",
          ],
        },
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
      formacion: "",
      perfil: [
        "Mantiene en orden los expedientes del despacho y da seguimiento a plazos, listas de acuerdos y trámites ante juzgados y dependencias.",
        "Estudia la licenciatura en Derecho y llegó al despacho con dos años de experiencia previa como asistente jurídica.",
      ],
      secciones: [
        {
          titulo: "Formación académica",
          items: [
            "Estudiante de la Licenciatura en Derecho y Ciencias Sociales en la Universidad Michoacana de San Nicolás de Hidalgo, desde 2025.",
          ],
        },
        {
          titulo: "Trayectoria",
          items: [
            "Asistente jurídica en Despacho Rodríguez y Abogados, 2023-2025.",
          ],
        },
        {
          titulo: "En qué trabaja",
          items: [
            "Organización y control de expedientes.",
            "Revisión de listas de acuerdos.",
            "Elaboración de demandas y promociones.",
            "Gestión ante juzgados y dependencias públicas.",
            "Elaboración de convenios y cartas finiquito.",
            "Seguimiento de juicios ejecutivos mercantiles, pagos y plazos.",
          ],
        },
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
      formacion: "",
      perfil: [
        "Se encarga de la contabilidad del despacho y del resguardo documental, con experiencia previa en la administración pública estatal.",
      ],
      secciones: [
        {
          titulo: "Formación académica",
          items: [
            "Estudiante de la Universidad Michoacana de San Nicolás de Hidalgo, desde 2024.",
          ],
        },
        {
          titulo: "Trayectoria",
          items: [
            "Auxiliar en contabilidad en la Secretaría de Finanzas y Administración del Estado de Michoacán, 2024-2026.",
          ],
        },
        {
          titulo: "En qué trabaja",
          items: [
            "Elaboración y registro de pólizas contables.",
            "Organización y resguardo de información en archivo.",
            "Control y verificación documental.",
            "Gestión y entrega de documentación.",
          ],
        },
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

  /** Construye las secciones desplegables del perfil. */
  function dibujarSecciones(modal, persona) {
    const contenedor = modal.querySelector("[data-modal-secciones]");
    contenedor.innerHTML = "";

    const secciones = persona.secciones || [];
    secciones.forEach((seccion, posicion) => {
      const id = `seccionPerfil${posicion}`;
      const item = document.createElement("div");
      item.className = "accordion-item";
      item.innerHTML = `
        <h3 class="accordion-header">
          <button class="accordion-button collapsed" type="button"
                  data-bs-toggle="collapse" data-bs-target="#${id}"
                  aria-expanded="false" aria-controls="${id}">
            ${escapar(seccion.titulo)}
          </button>
        </h3>
        <div id="${id}" class="accordion-collapse collapse"
             data-bs-parent="#perfilSecciones">
          <div class="accordion-body">
            <ul class="lista-marcada mb-0">
              ${seccion.items.map((texto) => `<li>${escapar(texto)}</li>`).join("")}
            </ul>
          </div>
        </div>
      `;
      contenedor.appendChild(item);
    });
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

      dibujarSecciones(modal, persona);

      const correo = modal.querySelector("[data-modal-correo]");
      if (persona.correo) {
        correo.href = `mailto:${persona.correo}`;
        correo.textContent = persona.correo;
        correo.hidden = false;
      } else {
        correo.hidden = true;
      }

      // Cada perfil arranca desde arriba, aunque el anterior quedara scrolleado.
      modal.querySelector(".modal-body").scrollTop = 0;
    });
  }

  document.addEventListener("DOMContentLoaded", dibujarOrganigrama);
})();
