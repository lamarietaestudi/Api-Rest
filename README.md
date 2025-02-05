# Game Players API

## Description
Este proyecto es una API para gestionar una colección de juegos y otra de jugadores.
Incluye endpoints para crear, leer, modificar y borrar ambas colecciones (CRUD). 

## EndPoints

### Colección Games

Método: GET
URL: /games
Descripción: carga todos los juegos de la BBDD.

Método: GET
URL: /games/:category
Descripción: carga todos los juegos de la BBDD con la categoría indicada.

Método: POST
URL: /games
Descripción: añade un juego a la BBDD.

Método: PUT
URL: /games/:id_game
Descripción: actualiza los datos de un juego mediante su Id.

Método: DELETE
URL: /games/:id_game
Descripción: borra un juego de la BBDD mediante su Id.

----------

### Colección Players

Método: GET
URL: /players
Descripción: carga todos los jugadores de la BBDD.

Método: GET
URL: /players/:id_game
Descripción: carga un solo jugador mediante su Id.

Método: GET
URL: /players/underage/:age_limit
Descripción: carga todos los jugadores cuya edad sea igual o menor a la indicada.

Método: POST
URL: /players
Descripción: añade un jugador a la BBDD.

Método: PUT
URL: /players/:id_game
Descripción: actualiza los datos de un jugador mediante su Id.

Método: DELETE
URL: /players/:id_game
Descripción: borra un jugador de la BBDD mediante su Id.

----------

## Aviso Legal

### Propiedad Intelectual
Toda la información y las imágenes utilizadas en este proyecto tienen derechos de autor y pertenecen a sus respectivos propietarios. Este proyecto es únicamente con fines prácticos y educativos, y no se utilizará con fines lucrativos.

### Uso No Comercial
El contenido de este repositorio, incluyendo textos, imágenes y código, se utiliza solo con fines educativos y de demostración. No se pretende infringir los derechos de autor de ningún propietario.

### Proyecto Práctico
Este proyecto es una práctica personal y no representa un producto comercial. Está destinado a la demostración de habilidades técnicas y el aprendizaje. Todo el contenido se ha utilizado respetando los derechos de autor y sin ninguna intención de beneficio económico.
