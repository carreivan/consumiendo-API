const cargarPeliculas = async() => {
    try{
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e4e9c4a6ac0f0b68ea883f0e30e2572b&language=es-MX');

        console.log(respuesta);

        if(respuesta.status === 200){
            const datos = await respuesta.json();

            let peliculas = '';
            datos.results.forEach(pelicula => {
                peliculas += `
                
                <div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <h3 class="titulo">${pelicula.title}</h3>
                </div>
                `;
                
            });
            document.getElementById('contenedor').innerHTML = peliculas;


        } else if(respuesta.status === 401){
            console.log('pusiste la llave mal');
        } else if(respuesta.status === 404){
            console.log('la pelicula que buscas no existe');
        }else{
            console.log('hubo un error desconocido');
        }

    } catch(error){
        console.log(error);
    }


}
cargarPeliculas();