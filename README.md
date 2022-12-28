# TypeScript
Typescript template
----------------

Instalamos Node.js -> https://nodejs.org/es/

Inicializamos node, así crearemos una carpeta node_modules donde se instalaran las dependencias y un package.json con la información del proyecto.

npm init

Utilizamos el siguiente comando para instalar las dependencias necesarias para un proyecto de typescript

npm i --save-dev @types/node nodemon ts-node typescript

Para ejecutar typescript, necesitamos generar un archivo de configuración tsconfig con información de como se va a transformar en un fichero javascript.
Si queremos utilizar una dependencia npm sin lugar a instalarla, utilizamos npx. Luego hacemos referencia a typescript con tsc y utilizamos el --init para generar el fichero.
Aparte, podemos añadir varias configuraciones inciales, como --rootDir src es donde tendremos nuestro fichero index.ts y --outDir build que es donde se va a generar el fichero js compilado. Luego podemos definir con  --esModuleInterop para utilizar interoperabilidad entre modulos dentro del proyecto. Luego --resolveJsonModule que genera un fichero de configuración en formato json. Luego utilizamos --lib es6 para indicar la versión de ECMASCRIPT. Utilizamos el --module commonjs para que funcione en todos los navegadores. Luego usamos --allowjs para permitir la convivencia
de javascript con typescript. Finalmente, ponemos --notImplicitAny para no permitir el any implicito en los tipos de datos. 

npx tsc --init --rootDir src --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowjs --noImplicitAny --outDir build

Creamos una carpeta src y dentro un fichero index.ts.

Podemos añadir en el package.json un comando script para simplificar la ejecución de distintos comandos. Si añadimos el siguiente comando, podremos ejecutar el fichero index.js de la carpeta src:

    "tsNode": "cd src && ts-node index.ts"

Para ejecutarlo usaremos el siguiente comando: 

npm run tsNode

Para configurar nodemon, vamos a crear un fichero nodemon.json donde incluiremos la configuración necesaria para que se ejecute. Si ademas añadimos en package.json el script necesario para ejecutar nodemon, solo necesitaremos el siguiente comando para que se ejecute y que se mantenga escuchando los cambios en el fichero index.ts para no tener que reejecutar el comando de build en cada cambio en el proyecto. 

npm run start

Para la compilación del fichero index.ts, creamos un nuevo script en package.json: 
    "transpilation": "tsc"

Esto nos generará un ficjero index.js en la carpeta build

Vamos a instalar la libreria rimraf que nos ayudará a crear un build un poco mas compactado 

npm i --save-dev rimraf

Añadiremos un nuevo script en package.json con el que compilar el proyecto con rimraf


    "build:prod": "rimraf ./build && tsc",
    "start:prod": "npm run build:prod && node build/index.js"

Con start:prod, compilamos el proyecto de ts a js y luego ejecutamos con node el fichero index.js final
