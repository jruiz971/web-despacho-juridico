"""Cambia el dominio del sitio en todos los archivos que lo mencionan.

El dominio aparece en las etiquetas canonicas, en las de Open Graph, en el
mapa del sitio, en robots.txt y en las rutas absolutas de la pagina 404. Este
script los actualiza todos de una pasada para que no se quede ninguno atras,
que es justo como se rompen estas migraciones.

Uso:
    python cambiar-dominio.py contrerasyasociados.mx            # solo muestra
    python cambiar-dominio.py contrerasyasociados.mx --aplicar  # escribe

Por omision no escribe nada: enseña que cambiaria. Hay que pasar --aplicar.

Despues de aplicarlo quedan tres pasos manuales:
  1. Configurar el DNS en el registrador (el script imprime que registros).
  2. Settings -> Pages -> Custom domain en GitHub, y esperar el certificado.
  3. Reenviar el mapa del sitio en Google Search Console con el dominio nuevo.
"""

import argparse
import re
import sys
from pathlib import Path

RAIZ = Path(__file__).parent

# De donde venimos. GitHub Pages sirve el sitio en un subdirectorio; un dominio
# propio lo sirve en la raiz, asi que tambien cambia la ruta base.
BASE_ACTUAL = "https://jruiz971.github.io/web-despacho-juridico"
RUTA_ACTUAL = "/web-despacho-juridico/"

# Registros DNS que hay que dar de alta en el registrador para GitHub Pages.
IPS_GITHUB = ["185.199.108.153", "185.199.109.153", "185.199.110.153", "185.199.111.153"]
USUARIO_GITHUB = "jruiz971"


def archivos_a_tocar() -> list[Path]:
    return sorted(
        [*RAIZ.glob("*.html"), RAIZ / "sitemap.xml", RAIZ / "robots.txt"]
    )


def reemplazos(dominio: str) -> list[tuple[str, str]]:
    """Pares (viejo, nuevo). El orden importa: lo mas largo primero."""
    base_nueva = f"https://{dominio}"
    return [
        (BASE_ACTUAL + "/", base_nueva + "/"),
        (BASE_ACTUAL, base_nueva),
        # La 404 usa rutas absolutas porque GitHub la sirve desde cualquier
        # profundidad; con dominio propio la base pasa a ser la raiz.
        (RUTA_ACTUAL, "/"),
    ]


def sustituir(texto: str, pares: list[tuple[str, str]]) -> tuple[str, int]:
    """Aplica los pares en orden y cuenta las sustituciones reales.

    Se cuenta en cada paso sobre el texto ya transformado. Contar todo contra
    el original inflaria el numero, porque una URL completa contiene tambien
    la ruta base y se contaria dos veces.
    """
    total = 0
    for viejo, nuevo in pares:
        total += texto.count(viejo)
        texto = texto.replace(viejo, nuevo)
    return texto, total


def aplicar(dominio: str, escribir: bool) -> int:
    cambios_totales = 0
    pares = reemplazos(dominio)

    for archivo in archivos_a_tocar():
        if not archivo.exists():
            continue

        original = archivo.read_text(encoding="utf-8")
        texto, cuenta = sustituir(original, pares)

        if texto == original:
            continue

        cambios_totales += cuenta
        print(f"  {archivo.name}: {cuenta} referencias")

        if escribir:
            archivo.write_text(texto, encoding="utf-8", newline="")

    # GitHub Pages lee el dominio de este archivo.
    cname = RAIZ / "CNAME"
    print(f"  CNAME: {dominio}")
    if escribir:
        cname.write_text(dominio + "\n", encoding="utf-8", newline="")

    return cambios_totales


# Sufijos de dos niveles. Sin esta lista, "algo.com.mx" se confundiria con un
# subdominio de "com.mx" y se generarian los registros DNS equivocados.
SUFIJOS_COMPUESTOS = {
    "com.mx", "org.mx", "net.mx", "edu.mx", "gob.mx",
    "co.uk", "com.ar", "com.br", "com.co", "com.es",
}


def es_dominio_raiz(dominio: str) -> bool:
    """True si es un dominio de primer nivel y no un subdominio.

    "midominio.com" y "midominio.com.mx" son raiz; "www.midominio.com" no.
    """
    partes = dominio.split(".")
    if len(partes) == 2:
        return True
    return len(partes) == 3 and ".".join(partes[-2:]) in SUFIJOS_COMPUESTOS


def instrucciones_dns(dominio: str) -> None:
    raiz = es_dominio_raiz(dominio)
    print("\n--- Registros DNS en el registrador ---")
    if raiz:
        for ip in IPS_GITHUB:
            print(f"  A      @      {ip}")
        print(f"  CNAME  www    {USUARIO_GITHUB}.github.io.")
    else:
        print(f"  CNAME  {dominio.split('.')[0]}    {USUARIO_GITHUB}.github.io.")
    print("\n--- Despues ---")
    print("  1. GitHub -> Settings -> Pages -> Custom domain -> " + dominio)
    print("  2. Marcar 'Enforce HTTPS' cuando el certificado quede listo (~15 min).")
    print("  3. Reenviar el sitemap en Google Search Console.")
    print("  4. Actualizar el enlace del sitio web en Facebook.")


def main() -> int:
    analizador = argparse.ArgumentParser(description=__doc__)
    analizador.add_argument("dominio", help="por ejemplo: contrerasyasociados.mx")
    analizador.add_argument(
        "--aplicar", action="store_true", help="escribe los cambios en disco"
    )
    args = analizador.parse_args()

    dominio = args.dominio.strip().lower().removeprefix("https://").removeprefix("http://").rstrip("/")
    if not re.fullmatch(r"[a-z0-9-]+(\.[a-z0-9-]+)+", dominio):
        print(f"Dominio no válido: {dominio}", file=sys.stderr)
        return 1

    modo = "APLICANDO" if args.aplicar else "SIMULACIÓN (sin escribir)"
    print(f"{modo} — dominio nuevo: {dominio}\n")

    total = aplicar(dominio, args.aplicar)
    print(f"\nTotal: {total} referencias en {len(archivos_a_tocar())} archivos revisados.")

    if not args.aplicar:
        print("\nNada se escribió. Para aplicarlo:")
        print(f"  python cambiar-dominio.py {dominio} --aplicar")
    else:
        instrucciones_dns(dominio)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
