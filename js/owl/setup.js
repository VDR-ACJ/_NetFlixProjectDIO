$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function mensagem(parametro){
    alert('ta indo:'+parametro.getAttribute('src'));
    alert('ta indo:'+parametro.getAttribute('id'));
}
//timeout para gif colocando a fita 
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout1

function alertFunc() {
    alert("Hello!");
  }

function gameSeleciona(gameCapa) {

    
    document.getElementById("filme_principal").style.transition = "all 1s";
    document.getElementById("filme_principal").style.backgroundImage = " url('../img/consoles/snes/snes_fita.gif')";
    document.getElementById("titulo").innerHTML="";
    document.getElementById("div_acoes").style.display="none";
    
    //document.getElementById("btn_assistir").setAttribute('alt',gameCapa.getAttribute('id'));

  setTimeout(gameSelecionado, 1500,gameCapa);
  document.getElementById("div_acoes").style.display="block";
    
}



// Get the modal
function modalVideo(idgame){
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(idgame.getAttribute('id'));
    modal.style.display = "block";
    var altbotao= document.getElementById("btn_assistir").getAttribute('alt');
    document.getElementById("iframevideo").src=retornaUrlGameplay(altbotao); 
    document.getElementById("div-listas").style.display = "none";

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    document.getElementById("iframevideo").src=""
    modal.style.display = "none";
    document.getElementById("div-listas").style.display = "block";
    }
}
function resetPagina(){
    location.reload();
}
 function voltaAoTopo(){
   window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  
}
 function gameSelecionado(gameCapa){
   voltaAoTopo();
    var img =gameCapa.getAttribute('src');
    var titulo=gameCapa.getAttribute('alt');
    
    document.getElementById("filme_principal").style.transition = "all 4s";
    document.getElementById("filme_principal").style.backgroundImage = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0)100%), url('"+img+"')";
    document.getElementById("titulo").innerHTML=titulo;
    document.getElementById("btn_assistir").setAttribute('alt',gameCapa.getAttribute('id'));
    
    document.getElementById("btn_thumbs_up").style.color="white";
    document.getElementById("btn_thumbs_down").style.color="white";
}

function retornaUrlGameplay(id){
    var url="";
    
    switch (id) {
        /*Mais assistidos*/
        case 'jg1':
           url="https://www.youtube.com/embed/Vxg5eOPmzHI";
          break;
        case 'jg2':
            url="https://www.youtube.com/embed/AKKn1oxbLlU";
           break;
        case 'jg3':
           url="https://www.youtube.com/embed/DAF3HgD7UKM";
          break;
        case 'jg4':
           url="https://www.youtube.com/embed/d4EUEsEM328";
          break;
          case 'jg5':
           url="https://www.youtube.com/embed/ug3cxU-fE70";
          break;
          case 'jg6':
           url="https://www.youtube.com/embed/eu9QAUrsfaY";
          break;
          case 'jg7':
           url="https://www.youtube.com/embed/QV2oSvHYCaU";
          break;
          case 'jg8':
           url="https://www.youtube.com/embed/U8btNneN8ew";
          break;
        /*Aleatorios*/
          case 'jg9':
           url="https://www.youtube.com/embed/UhZIfpgfS6Y";
          break;
          case 'jg10':
            url="https://www.youtube.com/embed/Up9wQLnSNDE";
           break;
           case 'jg11':
            url="https://www.youtube.com/embed/uMFUlFiCTbE";
           break;
           case 'jg12':
            url="https://www.youtube.com/embed/FQyf04ZbV5M";
           break;
           case 'jg13':
            url="https://www.youtube.com/embed/9-E4u4fIsi0";
           break;
           case 'jg14':
            url="https://www.youtube.com/embed/9fTKGsq5Oa4";
           break;


          case 'snes':
            url="https://www.youtube.com/embed/I4EVSvHKkWY";
        default:
          //console.log(`Sorry, we are out of ${expr}.`);
      }

    return url;
}

//seta a cor do botao clicado no momento
function thumbs_clicado(objbotao){

  id = objbotao.getAttribute('id');
  switch (id) {
    case 'btn_thumbs_up':
      if(document.getElementById(id).style.color === "green")
      {
        document.getElementById(id).style.color="white";
      }else{
        document.getElementById(id).style.color="green";
        document.getElementById("btn_thumbs_down").style.color="white";
      }
  break;
  case 'btn_thumbs_down':
    if(document.getElementById(id).style.color === "red")
    {
      document.getElementById(id).style.color="white";
    }
    else{
      document.getElementById(id).style.color="red";
      document.getElementById("btn_thumbs_up").style.color="white";
    }
  break;
  default:
    document.getElementById(id).style.color="white";
  }
}