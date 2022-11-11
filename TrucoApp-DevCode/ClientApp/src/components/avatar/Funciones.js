import imagenes from './AvatarImagenes';

export const mostrarAvatarSeleccionadoMasConfiguracion = (avatarNoSeleccionado)=>{
  
    let ocultarAvatarNoSeleccionado= document.querySelector(`${avatarNoSeleccionado}`);
    ocultarAvatarNoSeleccionado.remove();
    document.querySelector('.guardarAvatar').style.display="block";
    document.querySelector('.componente-cambio-aspecto').style.display="block";
 
 }
 
 export const getPeloActualAvatar = () =>{
   let img = document.querySelector('#pelo-actual');
   let imagenActual = img.classList[1];
   let posicionUltimoGuion = imagenActual.lastIndexOf("-");   
  return imagenActual.substring( 0 , posicionUltimoGuion+1);
 }

 export const modificarClaseImgPelo=(nuevaClase)=>{
   let img = document.querySelector('#pelo-actual');
   let imagenActual = img.classList[1];

   img.classList.remove(imagenActual);
   img.classList.add(nuevaClase);
 }
 
 export const setPelo = (peloColorNuevo, cejaColorNuevo) => {

  let divCaraF = document.querySelector('#cejas-ojos-nariz-boca-f');
  let divCaraM = document.querySelector('#cejas-ojos-nariz-boca-m');

  let peloActual = document.querySelector('#pelo-actual');
  let cejaColorActual = document.querySelector('.ceja-izq').classList[1];
  document.querySelector('.ceja-izq').classList.remove(cejaColorActual);
  document.querySelector('.ceja-der').classList.remove(cejaColorActual);
  document.querySelector('.ceja-izq').classList.add(cejaColorNuevo);
  document.querySelector('.ceja-der').classList.add(cejaColorNuevo);
   let nombreImg=getPeloActualAvatar();
   let nuevoValor=nombreImg+peloColorNuevo;
   modificarClaseImgPelo(nuevoValor);
   peloActual.src=imagenes[`${nuevoValor}`];

    if(divCaraF){
          let claseActual = divCaraF.classList[0];
          divCaraF.classList.remove(claseActual);
          let posicionCaracterV = nuevoValor.indexOf("v");
          let version =nuevoValor.substring(posicionCaracterV, posicionCaracterV+2);
          let versionPelo = version.split("v").join(''); 
  
          divCaraF.classList.add(`cejas-ojos-nariz-boca-f-${versionPelo}`);
          document.querySelector('.oreja-der').style.display="none";
          document.querySelector('.oreja-izq').style.display="none";
    }

    if(divCaraM){

          let claseActual = divCaraM.classList[0];
          divCaraM.classList.remove(claseActual);
          divCaraM.classList.add('cejas-ojos-nariz-boca');

    }

 };
 
 export const setPiel = (colorNuevo) => {
   let colorActual = document.querySelector('.cabeza').classList[1];
 
   document.querySelector('.cabeza').classList.remove(colorActual);
   document.querySelector('.oreja-der').classList.remove(colorActual);
   document.querySelector('.oreja-izq').classList.remove(colorActual);
   document.querySelector('.cuello').classList.remove(colorActual);
   document.querySelector('.brazo-der').classList.remove(colorActual);
   document.querySelector('.brazo-izq').classList.remove(colorActual);
 
   document.querySelector('.cabeza').classList.add(colorNuevo);
   document.querySelector('.oreja-der').classList.add(colorNuevo);
   document.querySelector('.oreja-izq').classList.add(colorNuevo);
   document.querySelector('.cuello').classList.add(colorNuevo);
   document.querySelector('.brazo-der').classList.add(colorNuevo);
   document.querySelector('.brazo-izq').classList.add(colorNuevo);
 };
 
 export const setOjos = (colorNuevo) => {
   let colorActual = document.querySelector('.iris-der').classList[1];
 
   document.querySelector('.iris-izq').classList.remove(colorActual);
   document.querySelector('.iris-der').classList.remove(colorActual);
   document.querySelector('.iris-izq').classList.add(colorNuevo);
   document.querySelector('.iris-der').classList.add(colorNuevo);
 };

 export const setRopa = (ropaNueva) =>{
  document.querySelector('#ropaActual').src=imagenes[`${ropaNueva}`];
}

export const setPeinado = (peinadoNuevo) =>{

  let divCaraF = document.querySelector('#cejas-ojos-nariz-boca-f');
  let divCaraM = document.querySelector('#cejas-ojos-nariz-boca-m');

  if(peinadoNuevo=='sin-pelo'){

        let peinadoActual= document.querySelector('#pelo-actual');
        peinadoActual.src="";

        if(divCaraF){
          let claseActual = divCaraF.classList[0];
          divCaraF.classList.remove(claseActual);
          divCaraF.classList.add(`cejas-ojos-nariz-boca-${peinadoNuevo}-f`);
        }

        if(divCaraM){
          let claseActual = divCaraM.classList[0];
          divCaraM.classList.remove(claseActual);
          divCaraM.classList.add(`cejas-ojos-nariz-boca-${peinadoNuevo}-m`);
        }
        document.querySelector('.oreja-der').style.display="block";
        document.querySelector('.oreja-izq').style.display="block";
  }else{
        let peinadoActual= document.querySelector('#pelo-actual');
        peinadoActual.src=imagenes[`${peinadoNuevo}`];
        modificarClaseImgPelo(peinadoNuevo);
        let posicionCaracterV = peinadoNuevo.indexOf("v");
        let version =peinadoNuevo.substring(posicionCaracterV, posicionCaracterV+2);
        let versionPelo = version.split("v").join(''); 

        if(divCaraF){
          let claseActual = divCaraF.classList[0];
          divCaraF.classList.remove(claseActual);
          divCaraF.classList.add(`cejas-ojos-nariz-boca-f-${versionPelo}`);
          document.querySelector('.oreja-der').style.display="none";
          document.querySelector('.oreja-izq').style.display="none";
        }

        if(divCaraM){
          let claseActual = divCaraM.classList[0];
          divCaraM.classList.remove(claseActual);
          divCaraM.classList.add('cejas-ojos-nariz-boca');
          document.querySelector('.oreja-der').style.display="block";
          document.querySelector('.oreja-izq').style.display="block";
        }
  }
  
}

  
