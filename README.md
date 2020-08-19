# Para instalar y usar la app
1. Se debe ejecutar el comando "npm install" en el directorio principal
2. Ir al directorio "client" y ejecutar el comando "npm install"

Para iniciar la app se debe hacer desde el directorio principal, que ejecuta a
su vez ambas apps con "concurrently", simplemente ejecutar el comando "npm run dev"

# EndPoints
api get /scrapIt
Obtiene la web directamente desde la url y la guarda en un txt

api get /scrapFromText
Lee desde el txt guardado