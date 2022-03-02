//Ejercicio1
function temperatura()
{
  let valor1= document.getElementById('gradoscelsius').value;
  
  if(valor1 <= 15 )
  {
    
    resul = "El clima esta Frio!!";
   
  }
  else if(valor1 >= 16 && valor1 <= 25)
    {
      resul = "Clima Templado";
    }
    else if (valor1 >= 26 && valor1 <= 40)
      {
        resul= "Calor !!";
      }
      document.getElementById('clima').value=resul;

}

//Ejercicio_2
function factorial()
{
  var n = document.getElementById('N').value;
  resul = 1;
  for(var i = 1; i <= n; i++)
  {
    resul = resul * i;
  }
  document.getElementById('resultado').value = resul
}
//Ejercicio_3
function fizzbuzz()
{
  var cont = document.getElementById('contador').value;
  var valor = "";
  for(var i=1; i<=N; i++)
  {
    
    if(( i % 3 === 0) && ( i % 5 ===0))
    {
      valor += "FIZZBUZZ";
    }
    else if( i % 3 === 0)
      {
        valor += "FIZZ";
      }
      else if( i % 5 === 0)
        {
         valor += "BUZZ"
        }
         valor +=  i;
  }
  document.getElementById('FizzBuzz').value = valor;
}
//Ejercicio4
function Fecha()
{
  var fecha = new Date();
  var diasemana = fecha.getDay();
  var dia = fecha.getDate();
  var mes = fecha.getMonth();
  var año = fecha.getFullYear();
  var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
  var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

  var Dia_semana = document.getElementById('fecha');
  var Dia = document.getElementById('fecha');
  var Mes = document.getElementById('fecha');
  var Año = document.getElementById('fecha');

  Dia_semana = semana[diasemana];
  Dia = dia;
  Mes = meses[mes];
  Año = año;
  var resul = Dia_semana + ", " + Dia + " de " + Mes + " del " + Año;
  document.getElementById('fecha').value = resul;
}
