function siglo (A) { /*En este caso el parámetro A es el año que introduce el usuario*/
    var year
    if (A>=1700 && A<=1799){
        year= 5;
    }
    if(A>=1800 && A<=1899){
        year=  3;
    }
    if(A>=1900 && A<=1999){
        year= 1;
    }
    if(A>=2000 && A<=2099){
        year= 0;
    }
    if(A>=2100 && A<=2199){
        year= -2;
    }
    if(A>=2200 && A<=2299){
        year= -4;
    }
    return year; /* la variable "year" sería el equivalente al valor A de la explicacíón*/
}

function Any (A){/* el parámetro A sigue siendo el año introducido*/
    var B;
    var x;
    var y;
    y= parseInt(A.toString().substr(-2));
    x= Math.floor(y/4);
    B=x+y;
    return B;
}

function Bisiesto (A, mes) {
    var multiplode4 = (A%4==0);
    var multiplode100= (A%100==0);
    var multiplode400= (A%400==0);
    var enero;
    var febrero;
    var C;

    if (mes==1){ //En los meses sólo se admitirá el formato número con a la hora de introducirlos.
        enero=true;
    }
    if(mes==2){
        febrero=true;
    }
    if (multiplode4 && !multiplode100 || multiplode400 ){
        if (enero || febrero){
             C= -1;
        } 
    }else {
        C=0;
    } 
    return C;
}


function numeromes (mes) {//el parámetro mes es el mes que ha introducido  el usuario
var D;
var Arraymes =[1,2,3,4,5,6,7,8,9,10,11,12];
var posicionmes= [6,2,2,5,0,3,5,1,4,6,2,4];

for (i=0; i<Arraymes.length; i++){  
    if (mes== Arraymes[i]){
        D= posicionmes[i];
    }
}
return D;
}

function numerodia(dia){
    var E = parseInt(dia);
    return E;
}

function resultadofinal (resultado) { // con esta funcion calculamos en número que se le asignará al día de la semana
    //x, es la R del html
    var diasemana = ["Lunes", "Martes","Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    var numasignacion= [1,2,3,4,5,6,0]
    var R;
    
    for (i=0; i<numasignacion.length; i++) {
        if (resultado==numasignacion[i]) {
            R= diasemana[i];
        }
    }
    return R;
}

