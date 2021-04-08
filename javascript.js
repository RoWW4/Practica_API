//Función para cargar el vídeo y mostrarlo
function handleFileSelect(evt) {
    var files = evt.target.files; 

    for (var i = 0, f; f = files[i]; i++) {
      
        if (!f.type.match('video.*')) {
            alert("Error. No es un archivo de video");
            break;
        }
        
        var reader = new FileReader();
        reader.onload = (function () {
            return function (e) {
                var div = document.createElement('div');
                div.innerHTML = ['<video id="video" width="700" height="400" oncanplay="finCarga()" src="',
                    e.target.result,
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

    //Funciones para mostrar mensaje mientras carga el vídeo
    function cargando(){
        var mensaje = document.getElementById('mensaje');
        mensaje.innerHTML = "Cargando video... Por favor, espere.";
    }

    function finCarga(){
        mensaje.style.color ='#00ff37';
        mensaje.innerHTML = "Ya puede reproducir el vídeo";
    }



