if (window.File && window.FileReader && window.FileList) {
    console.log('Todas las API son soportadas');
} else {
    alert('La API de FILE no es soportada en este navegador');
}

function handleFileSelect(evt) {
    var files = evt.target.files; 
    for (var i = 0, f; f = files[i]; i++) {
      
        if (!f.type.match('video.*')) {
            continue;
        }
        var reader = new FileReader();
        reader.onload = (function (theFile) {
            return function (e) {
                var span = document.createElement('span');
                span.innerHTML = ['<video class="thumb" src="',
                    e.target.result,
                    '" title="', escape(theFile.name),
                    '"></video>'
                ].join('');
                document.getElementById('list').insertBefore(span, null);
            };
        })(f);
        reader.readAsDataURL(f);
    }
}
document.getElementById('files').addEventListener('change',
    handleFileSelect, false);