function openTaps(any){
     document.getElementById(any).style.display = "block";
     document.getElementById('layout_all').setAttribute('class', 'layout_all');
     console.log(10000);
}

function closeTaps(any){
     document.getElementById(any).style.display = "none";
     document.getElementById('layout_all').setAttribute('class', '');
     console.log(10001);
}
function menuOnes(any){
     var x = document.getElementsByClassName("content_form");
     for(var i=0; i<x.length; i++){
          x[i].style.display ="none";
     }
     document.getElementById(any).style.display="block";
}
