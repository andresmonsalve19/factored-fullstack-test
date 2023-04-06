# factored-fullstack-test

### Sigue las siguients instrucciones para correr el proyecto:

1. Una vez clonado en el repositorio local debes abrir una terminal y ejecutar el archivo docker-compose.yml:
`docker-compose up`

2. y ejecutar los siguientes códigos para iniciar la base de datos:

`docker exec -it mysql-1 bash`

Una vez dentro de la consola bash ejecutar:
`mysql -u root -ppassword`

Y en la consola de mysql se debe seleccionar la base de datos a trabajar así:
`use employeesdb;`

Finalmente vamos a la carpeta `database` y se abre el archivo `db.sql` se copian las instrucciones y se agregan a la consola de mysql, esto con el fin de poblar las tablas.

2. Ya teniendo la base de datos lista sólo es ir al navegador y poner la url:
`http://localhost:5173`
