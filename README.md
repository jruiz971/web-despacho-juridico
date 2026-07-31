# Contreras y Asociados — Sitio web

Sitio institucional del despacho jurídico **Contreras y Asociados**, de Morelia,
Michoacán, y de sus tres divisiones: el despacho jurídico, **MLGM** (Médico Legal
Graco México) y el **CAE** (Centro de Aprendizaje Efectivo).

Es un sitio **estático**: sólo HTML, CSS y JavaScript. No necesita servidor,
base de datos ni proceso de compilación. Se publica gratis en GitHub Pages.

## Estructura

```
.
├── index.html                 Inicio: hero, divisiones, áreas destacadas, método
├── nosotros.html              Historia, valores y organigrama
├── servicios.html             15 áreas de práctica con buscador y filtros
├── medico-legal.html          División MLGM
├── cae.html                   Cursos y diplomados del CAE
├── contacto.html              Teléfonos, correos, mapa y formulario
├── aviso-de-privacidad.html   Aviso de privacidad
└── assets/
    ├── css/styles.css         Toda la hoja de estilos, comentada por secciones
    ├── js/main.js             Navbar, animaciones, filtros, formulario
    ├── js/equipo.js           Datos y dibujado del organigrama
    └── img/                   logo.svg y favicon.svg
```

Bootstrap 5.3 y Bootstrap Icons se cargan por CDN; no hay dependencias
instaladas ni `node_modules`.

## Ver el sitio en local

Abrir `index.html` en el navegador funciona, pero conviene levantar un servidor
para que las rutas se comporten igual que en producción:

```bash
python -m http.server 8000
```

Después, entrar a `http://localhost:8000`.

## Cómo editar el contenido

### Organigrama

Todo vive en [`assets/js/equipo.js`](assets/js/equipo.js). Cada persona es un
objeto con `nombre`, `cargo`, `area`, `foto`, `cedula`, `formacion`, `perfil` y
`correo`. Mientras no se tengan los datos, se deja `pendiente: true` y la
tarjeta se dibuja en gris con la leyenda *Por asignar*.

Para dar de alta a alguien:

1. Guardar su fotografía en `assets/img/equipo/` (recortada en cuadrado, mínimo
   300 × 300 px).
2. Llenar sus campos en `equipo.js` y poner `pendiente: false`.

No hay que tocar el HTML: el organigrama y la ventana de perfil se dibujan solos.

### Áreas de práctica

Están en `servicios.html`, una por cada `<div class="col-md-6 col-lg-4"
data-area="…" data-claves="…">`.

- `data-area` decide en qué filtro aparece: `personal`, `empresarial`,
  `patrimonial`, `penal` o `administrativo`.
- `data-claves` son los sinónimos con los que la gente busca de verdad
  (*ejido*, *finiquito*, *escritura*). El buscador ignora acentos y mayúsculas.

### Cursos del CAE

En `cae.html`, dentro de cada `<article class="tarjeta-curso">`. Los importes y
horarios provienen de las convocatorias publicadas en Facebook; **hay que
confirmarlos antes de cada generación**.

### Teléfonos, correos y dirección

Datos vigentes:

| Línea | Número | Dónde aparece |
|---|---|---|
| Oficina 1 | 443 970 2832 | Barra superior, pie de página, contacto |
| Oficina 2 | 443 902 3981 | Pie de página, contacto |
| WhatsApp 1 | 443 305 6267 | Botón flotante, formulario, pie, contacto |
| WhatsApp 2 | 443 185 4257 | Pie de página, contacto |
| Médico Legal (MLGM) | 237 130 2362 | Barra superior de `medico-legal.html`, pie, contacto |
| CAE | 443 924 2422 | Barra superior de `cae.html`, pie, contacto |
| Correo | contrerasyasociados1@icloud.com | Todas las páginas |
| Facebook | facebook.com/profile.php?id=61590984252569 | Pie de página, contacto |
| X | x.com/Contyasoc1 | Pie de página, contacto |

Al cambiar un número hay que reemplazarlo en todos los archivos. Ojo con los
dos formatos: el visible (`443 305 6267`) y el de enlace
(`tel:+524433056267`, `wa.me/524433056267`). El WhatsApp principal está además
en `assets/js/main.js`, en la constante `WHATSAPP`, y el correo en
`CORREO_CONTACTO`. El contador de la portada de `index.html` indica cuántas
líneas se publican y hay que ajustarlo si cambia el total.

### Colores y tipografías

Todo está en las variables del principio de `assets/css/styles.css`:

```css
--azul-900  --azul-800  --azul-700  --oro-500  --oro-400  --marfil
```

Cambiar ahí el valor lo cambia en todo el sitio.

## Formulario de contacto

Al no haber servidor, el formulario **no envía nada por sí mismo**: valida los
campos, arma el mensaje y abre WhatsApp o el cliente de correo del visitante con
el texto ya redactado, para que sea la persona quien lo mande. Incluye un campo
trampa oculto contra robots.

Si más adelante se quiere recibir los mensajes por correo automáticamente, la
vía más simple es dar de alta el formulario en un servicio como Formspree y
cambiar el `action` del `<form>`.

## Publicación

El sitio está en línea en **<https://jruiz971.github.io/web-despacho-juridico/>**.

Se sirve con GitHub Pages desde la rama `main`, carpeta raíz (*Settings →
Pages*). Cada `git push` a `main` vuelve a desplegar el sitio en un par de
minutos; no hay nada que ejecutar a mano.

Cuando exista un dominio propio (por ejemplo `contrerasyasociados.mx`), se
agrega un archivo `CNAME` con el dominio y se apunta el DNS a GitHub Pages. En
ese momento hay que actualizar las etiquetas `<link rel="canonical">` de cada
página, que hoy apuntan a la URL de GitHub Pages.

## Pendientes antes de salir a producción

| Pendiente | Dónde |
|---|---|
| Sustituir el emblema provisional por el logotipo oficial | `assets/img/logo.svg` y `favicon.svg` |
| Fotografías reales de la oficina y del equipo | `assets/img/` |
| Nombres, cargos y semblanzas del organigrama | `assets/js/equipo.js` |
| Horario real de atención | `contacto.html`, bloque marcado con `TODO` |
| Confirmar fechas y costos vigentes de los cursos | `cae.html` |
| Resolver a qué dominio debe apuntar el sitio (ver abajo) | `CNAME` y etiquetas `canonical` |
| Revisión del contenido de la división MLGM por la dirección | `medico-legal.html` |
| Revisión y aprobación del aviso de privacidad | `aviso-de-privacidad.html` |

## Pendiente por resolver: el dominio contrerasyasociados.com

La página de Facebook del despacho declara como sitio web
`http://contrerasyasociados.com/`. Ese dominio **ya está registrado y en
línea**: responde con un WordPress alojado en LiteSpeed cuyo título es
*«Contreras y Mego – Asociados»*, un nombre distinto al del despacho.

Antes de contratar o apuntar cualquier dominio hay que aclarar con la dirección
si ese sitio es suyo, si pertenece a una firma relacionada, o si la ficha de
Facebook está apuntando a un tercero. De ello depende:

- si este sitio debe publicarse en ese mismo dominio o en otro,
- qué se hace con el contenido que ya vive ahí,
- y a dónde deben apuntar las etiquetas `canonical`, que hoy señalan la
  dirección de GitHub Pages.

## Fuentes de la información publicada

Los datos de contacto vigentes provienen de la
[página de Facebook actual del despacho](https://www.facebook.com/profile.php?id=61590984252569),
más las líneas por división proporcionadas directamente por el cliente.

Las áreas de práctica y la información de los cursos se tomaron de la
[página de Facebook anterior](https://www.facebook.com/ContrerasyAsociadosoficial)
y de las imágenes de sus convocatorias. No debe confundirse con el despacho
homónimo de la Ciudad de México (`crca.com.mx`), que no tiene relación con éste.
