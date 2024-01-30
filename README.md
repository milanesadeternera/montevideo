# Montevideo
Mapa Montevideo 1893-2023

Este proyecto une el mapa de Montevideo de 1893 realizado bajo la presidencia de Julio Herrera y Obes, con una representacion actual de la ciudad. Logrando visualizar el origen y transformación a través de las décadas.

## Procesamiento de las imagenes.
Los mapas originales son parte de la colección digital de la [Biblioteca Nacional de Uruguay](http://bibliotecadigital.bibna.gub.uy:8080/jspui/).
Las imágenes fueron editadas y procesadas vía línea de comando linux.

```bash
convert -negate -normalize -auto-level -colorspace LinearGray I02490.jpg I0490_edit.jpg
convert I02490_edit.jpg -crop 25% I02490_%d.jpg
```

La alineación con el mapa actual se realizó manualmente utilizando la herramienta Map-georeferencer.

## Librerías
Este proyecto utiliza [OpenLayers](https://openlayers.org/), [Map-georeferencer](http://viglino.github.io/Map-georeferencer/) y [Bootstrap](https://getbootstrap.com/).

## Contacto
Cualquier consulta, sugerencia o mensaje. Házmelo saber!

[Linkedin](https://www.linkedin.com/in/facundo-colombo-67a78a198)
