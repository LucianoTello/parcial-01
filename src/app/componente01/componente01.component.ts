import { Component } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleados';

@Component({
  selector: 'app-componente01',
  templateUrl: './componente01.component.html',
  styleUrls: ['./componente01.component.css']
})
export class Componente01Component {

i:number=0;
tam:number=0;

Empleados:Empleado[]=[
  {
    codigo:1,
    nombre:"Juan Perez",
    canthoras:8,
    preciohora:300,
    totapagar:2400,
  },
  {
    codigo:2,
    nombre:"Luciano Tello",
    canthoras:8,
    preciohora:500,
    totapagar:4000,
  }
];
/*********************************Eliminar un empleado**********************************/
eliminar(){
  
let codigo = (document.getElementById("codi") as HTMLInputElement).value;

  this.Empleados.splice((parseInt(codigo)-1),1);
}
/****************************************fin*******************************************/

/*********************************Eliminar todos los empleados empleado**********************************/
eliminartodos(){
  this.Empleados.splice(0);

}
/*********************************************fin********************************************************/

/********************************Calcula el total a pagar de todos los empleados*************************/
calcular(){
  this.tam =this.Empleados.length;
  for(this.i=0;this.i<this.tam;this.i++){
    this.Empleados[this.i].totapagar=(this.Empleados[this.i].canthoras*this.Empleados[this.i].preciohora);   
  }
}
/*********************************************fin********************************************************/

/***************************************Carga empleados nuevos******************************************/
guardar(){

  if(this.Empleados.length==0){
    //el arreglo esta vacio entonces uso la funcion splice
    this.Empleados.splice(0,0,{
      codigo : 1,//parseInt((document.getElementById("codigo") as HTMLInputElement).value),
      nombre : (document.getElementById("nombre") as HTMLInputElement).value,
      canthoras : parseInt((document.getElementById("canthoras") as HTMLInputElement).value),
      preciohora : parseInt((document.getElementById("preciohora") as HTMLInputElement).value),
      totapagar : (parseInt((document.getElementById("canthoras") as HTMLInputElement).value) * parseInt((document.getElementById("preciohora") as HTMLInputElement).value))
    })

  }else{
    //el arreglo tiene datos entonces uso push
    this.tam =this.Empleados.length;
    let auxcodigo=this.Empleados[this.tam-1].codigo;
    this.Empleados.push({
      codigo : (auxcodigo+1),//parseInt((document.getElementById("codigo") as HTMLInputElement).value),
      nombre : (document.getElementById("nombre") as HTMLInputElement).value,
      canthoras : parseInt((document.getElementById("canthoras") as HTMLInputElement).value),
      preciohora : parseInt((document.getElementById("preciohora") as HTMLInputElement).value),
      totapagar : (parseInt((document.getElementById("canthoras") as HTMLInputElement).value) * parseInt((document.getElementById("preciohora") as HTMLInputElement).value))
    })   
  }
  //ejecuto la funcion limpiar despues de cargar empleado nuevo, para poder cargar varios empleados
  //de forma mas rapida y que el usuario no tnga que ir borrando los campos para volver a cargar
  this.limpiar();
 }
 /*************************************************fin***************************************************/

 /**********************Limpia los campos del html y coloca el foco en el input nombre******************/
 limpiar(){

  let Nombre = (document.getElementById("nombre")as HTMLInputElement);
  Nombre.value = "";
  let canthoras = (document.getElementById("canthoras")as HTMLInputElement);
  canthoras.value = "0";
  let preciohora = (document.getElementById("preciohora")as HTMLInputElement);
  preciohora.value = "0";
  Nombre.focus();
 }
}
/*************************************************fin***************************************************/