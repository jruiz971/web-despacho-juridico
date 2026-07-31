/* =========================================================================
   Contreras y Asociados — Comportamiento del sitio
   Sin dependencias mas alla de Bootstrap 5 (colapsos, acordeones, modales).
   Cada bloque se inicializa solo si sus elementos existen en la pagina.
   ========================================================================= */

(function () {
  "use strict";

  /** Numero de WhatsApp en formato internacional, sin signos. */
  const WHATSAPP = "524433056267";

  /** Correo al que se envia el formulario cuando el visitante elige correo. */
  const CORREO_CONTACTO = "contrerasyasociados1@icloud.com";

  const prefiereMenosMovimiento = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* -----------------------------------------------------------------------
     Barra de navegacion: se compacta al hacer scroll
     ----------------------------------------------------------------------- */
  function activarNavbarCompacta() {
    const navbar = document.querySelector(".navbar-despacho");
    if (!navbar) return;

    const alternarClase = () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 40);
    };

    alternarClase();
    window.addEventListener("scroll", alternarClase, { passive: true });
  }

  /* -----------------------------------------------------------------------
     Enlace activo del menu segun la pagina actual
     ----------------------------------------------------------------------- */
  function marcarEnlaceActivo() {
    const paginaActual =
      window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".navbar-despacho .nav-link").forEach((enlace) => {
      const destino = enlace.getAttribute("href");
      if (!destino || destino.startsWith("#")) return;

      if (destino === paginaActual) {
        enlace.classList.add("active");
        enlace.setAttribute("aria-current", "page");

        // Si vive dentro de un desplegable, tambien se marca el padre.
        const desplegable = enlace.closest(".dropdown");
        if (desplegable) {
          desplegable.querySelector(".dropdown-toggle")?.classList.add("active");
        }
      }
    });
  }

  /* -----------------------------------------------------------------------
     Animacion de entrada de las secciones
     ----------------------------------------------------------------------- */
  function activarRevelados() {
    const elementos = document.querySelectorAll(".revelar");
    if (!elementos.length) return;

    if (prefiereMenosMovimiento || !("IntersectionObserver" in window)) {
      elementos.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    elementos.forEach((el) => observador.observe(el));
  }

  /* -----------------------------------------------------------------------
     Contadores de trayectoria
     ----------------------------------------------------------------------- */
  function animarContador(elemento) {
    const objetivo = Number(elemento.dataset.objetivo || 0);
    const duracion = 1600;
    const inicio = performance.now();

    const paso = (ahora) => {
      const avance = Math.min((ahora - inicio) / duracion, 1);
      // Curva de desaceleracion para que el numero frene con suavidad.
      const suavizado = 1 - Math.pow(1 - avance, 3);
      elemento.textContent = Math.round(objetivo * suavizado).toLocaleString(
        "es-MX"
      );
      if (avance < 1) requestAnimationFrame(paso);
    };

    requestAnimationFrame(paso);
  }

  function activarContadores() {
    const contadores = document.querySelectorAll("[data-objetivo]");
    if (!contadores.length) return;

    if (prefiereMenosMovimiento || !("IntersectionObserver" in window)) {
      contadores.forEach((el) => {
        el.textContent = Number(el.dataset.objetivo).toLocaleString("es-MX");
      });
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          animarContador(entrada.target);
          observador.unobserve(entrada.target);
        });
      },
      { threshold: 0.5 }
    );

    contadores.forEach((el) => observador.observe(el));
  }

  /* -----------------------------------------------------------------------
     Areas de practica: filtro por materia y buscador de texto
     ----------------------------------------------------------------------- */
  function activarFiltroDeAreas() {
    const rejilla = document.querySelector("[data-rejilla-areas]");
    if (!rejilla) return;

    const tarjetas = Array.from(rejilla.querySelectorAll("[data-area]"));
    const chips = Array.from(document.querySelectorAll(".chip-filtro"));
    const buscador = document.querySelector("[data-buscador-areas]");
    const avisoVacio = document.querySelector("[data-sin-resultados]");

    let materiaActiva = "todas";
    let terminoBuscado = "";

    /** Quita acentos y pasa a minusculas para comparar sin sorpresas. */
    const normalizar = (texto) =>
      texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    /* El texto visible de la tarjeta mas las palabras clave de data-claves,
       que cubren los sinonimos con los que la gente busca de verdad
       ("ejido" en lugar de "ejidales", "chamba" en lugar de "laboral"). */
    const textoBuscable = new Map(
      tarjetas.map((tarjeta) => [
        tarjeta,
        normalizar(`${tarjeta.textContent} ${tarjeta.dataset.claves || ""}`),
      ])
    );

    const aplicarFiltros = () => {
      let visibles = 0;

      tarjetas.forEach((tarjeta) => {
        const coincideMateria =
          materiaActiva === "todas" || tarjeta.dataset.area === materiaActiva;
        const coincideTexto =
          terminoBuscado === "" ||
          textoBuscable.get(tarjeta).includes(terminoBuscado);

        const mostrar = coincideMateria && coincideTexto;
        tarjeta.classList.toggle("area-oculta", !mostrar);
        if (mostrar) visibles += 1;
      });

      if (avisoVacio) avisoVacio.hidden = visibles > 0;
    };

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((otro) => {
          otro.classList.remove("activo");
          otro.setAttribute("aria-pressed", "false");
        });
        chip.classList.add("activo");
        chip.setAttribute("aria-pressed", "true");
        materiaActiva = chip.dataset.filtro || "todas";
        aplicarFiltros();
      });
    });

    if (buscador) {
      buscador.addEventListener("input", () => {
        terminoBuscado = normalizar(buscador.value.trim());
        aplicarFiltros();
      });
    }
  }

  /* -----------------------------------------------------------------------
     Formulario de contacto
     El sitio es estatico: no hay servidor que reciba el envio, asi que el
     mensaje se arma y se abre en WhatsApp o en el cliente de correo.
     ----------------------------------------------------------------------- */
  function redactarMensaje(datos) {
    const lineas = [
      "Solicitud de contacto desde el sitio web",
      "",
      `Nombre: ${datos.nombre}`,
      `Telefono: ${datos.telefono}`,
      `Correo: ${datos.correo || "no proporcionado"}`,
      `Materia: ${datos.materia}`,
      "",
      "Descripcion del asunto:",
      datos.mensaje,
    ];
    return lineas.join("\n");
  }

  function activarFormularioContacto() {
    const formulario = document.querySelector("[data-formulario-contacto]");
    if (!formulario) return;

    const confirmacion = formulario.querySelector("[data-confirmacion]");
    const trampa = formulario.querySelector("[name='sitio-web']");

    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();
      evento.stopPropagation();

      // Un bot rellena todos los campos, incluido el oculto: se descarta.
      if (trampa && trampa.value !== "") return;

      if (!formulario.checkValidity()) {
        formulario.classList.add("was-validated");
        formulario.querySelector(":invalid")?.focus();
        return;
      }

      formulario.classList.add("was-validated");

      const datos = {
        nombre: formulario.nombre.value.trim(),
        telefono: formulario.telefono.value.trim(),
        correo: formulario.correo.value.trim(),
        materia: formulario.materia.value,
        mensaje: formulario.mensaje.value.trim(),
      };

      const cuerpo = redactarMensaje(datos);
      const via = formulario.via.value;

      if (via === "correo") {
        const asunto = `Consulta juridica - ${datos.materia}`;
        window.location.href = `mailto:${CORREO_CONTACTO}?subject=${encodeURIComponent(
          asunto
        )}&body=${encodeURIComponent(cuerpo)}`;
      } else {
        window.open(
          `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(cuerpo)}`,
          "_blank",
          "noopener"
        );
      }

      if (confirmacion) {
        confirmacion.hidden = false;
        confirmacion.focus();
      }

      formulario.reset();
      formulario.classList.remove("was-validated");
    });
  }

  /* -----------------------------------------------------------------------
     Boton de volver arriba
     ----------------------------------------------------------------------- */
  function activarBotonArriba() {
    const boton = document.querySelector("[data-boton-arriba]");
    if (!boton) return;

    const alternar = () => {
      boton.classList.toggle("visible", window.scrollY > 600);
    };

    alternar();
    window.addEventListener("scroll", alternar, { passive: true });

    boton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: prefiereMenosMovimiento ? "auto" : "smooth",
      });
    });
  }

  /* -----------------------------------------------------------------------
     Ano actual en el pie de pagina
     ----------------------------------------------------------------------- */
  function escribirAnioActual() {
    document.querySelectorAll("[data-anio-actual]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  /* -----------------------------------------------------------------------
     Arranque
     ----------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    activarNavbarCompacta();
    marcarEnlaceActivo();
    activarRevelados();
    activarContadores();
    activarFiltroDeAreas();
    activarFormularioContacto();
    activarBotonArriba();
    escribirAnioActual();
  });
})();
