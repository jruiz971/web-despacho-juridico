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

Aparecen en la barra superior y en el pie de página de las siete páginas, y
completos en `contacto.html`. Al cambiar un número hay que buscarlo y
reemplazarlo en todos los archivos (`443 483 1005` aparece además como
`524434831005` en los enlaces de WhatsApp, y el contador de la portada de
`index.html` indica cuántas líneas se publican).

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
| Quinta línea telefónica, si se publica | `contacto.html` e `index.html` |
| Confirmar fechas y costos vigentes de los cursos | `cae.html` |
| Revisión del contenido de la división MLGM por la dirección | `medico-legal.html` |
| Revisión y aprobación del aviso de privacidad | `aviso-de-privacidad.html` |

## Fuentes de la información publicada

Los datos de contacto, las áreas de práctica y la información de los cursos se
tomaron de la [página de Facebook del despacho](https://www.facebook.com/ContrerasyAsociadosoficial)
y de las imágenes de sus convocatorias. No debe confundirse con el despacho
homónimo de la Ciudad de México (`crca.com.mx`), que no tiene relación con éste.
