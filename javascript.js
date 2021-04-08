<<<<<<< HEAD

=======
>>>>>>> 331ea955a21d9ede45a60fe406f0a9c40dca579e
//Función para cargar el vídeo y mostrarlo
function handleFileSelect(evt) {
    var files = evt.target.files; 

    for (var i = 0, f; f = files[i]; i++) {
      
        if (!f.type.match('video.*')) {
            alert("Error. No es un archivo de video");
            break;
        }
<<<<<<< HEAD
        
=======

>>>>>>> 331ea955a21d9ede45a60fe406f0a9c40dca579e
        var reader = new FileReader();
        reader.onload = (function (theFile) {
            return function (e) {
                var div = document.createElement('div');
<<<<<<< HEAD
                div.innerHTML = ['<video id="video" oncanplay="finCarga()" src="',
=======
                div.innerHTML = ['<video id="video" src="',
>>>>>>> 331ea955a21d9ede45a60fe406f0a9c40dca579e
                    e.target.result,
                    '" title="', escape(theFile.name),
                    '"></video>'
                ].join('');
                document.getElementById('salida').insertBefore(div, null);
            };
        })(f);
        reader.readAsDataURL(f);
    }
}
document.getElementById('seleccionArchivos').addEventListener('change',
    handleFileSelect, false);
<<<<<<< HEAD
    
=======
>>>>>>> 331ea955a21d9ede45a60fe406f0a9c40dca579e

    //Funciones para controlar el vídeo
    function Reproducir(){
        var video = document.getElementById('video');
        video.play();
    }

    function Parar(){
        video.pause();
    }

    function masVolumen(){
        video.volume+=0.1;
    }

    function menosVolumen(){
        video.volume-=0.1;
    }
<<<<<<< HEAD
       

  /*function cargando(){
        var mensaje = document.getElementById('mensaje').innerHTML = 'Espere. Cargando vídeo...';
    } 

    function fin(){
        mensaje.insertBefore = " ";
    }*/

    function cargando(){
        var mensaje = document.getElementById('mensaje');
        mensaje.innerHTML = "Cargando video...Espere";
    }

    function finCarga(){
        mensaje.style.color ='#00ff37';
        mensaje.innerHTML = "Ya puede reproducir el vídeo";
    }





    
    

=======
>>>>>>> 331ea955a21d9ede45a60fe406f0a9c40dca579e

