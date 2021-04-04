if(window.File && window.FileReader){
    console.log('Todas las API son soportadas');
}
else{
    alert('La API de FILE no es soportada en este navegador');
}

function archivo(e){
    var archivo= e.target.files;
    var output;
    output.push(escape(f.name))
}