var out=" ";

function oneOkCliked(e){
    e.stopPropagation();
    alert('ok clicked')
    out=out+"ok<br/>";
    document.getElementById('out').innerHTML=`${out}`
}

function oneCancelCliked(e){
    e.stopPropagation();
    alert('cancel clicked')
    out=out+"cancel<br/>";
    document.getElementById('out').innerHTML=`${out}`
}

function oneNoCliked(e){
    e.stopPropagation();
    alert('no clicked')
    out=out+"no<br/>";
    document.getElementById('out').innerHTML=`${out}`
}

document.getElementById('container').onclick = function(e){
    alert('container clicked')
    document.getElementById('out').innerHTML=` `
}

