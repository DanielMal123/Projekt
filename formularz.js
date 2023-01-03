
function suma()
{
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;

  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  alert(a + b + c);
  
} 

function srednia()
{
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;

  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  alert(a/3 + b/3 + c/3);
} 
   





function sumik()
{
  var u = document.getElementById("u").value;
  var i = document.getElementById("i").value;

  u = parseInt(u);
  i = parseInt(i);
  alert(u + i);
} 

function rozek()
{
  var u = document.getElementById("u").value;
  var i = document.getElementById("i").value;

  u = parseInt(u);
  i = parseInt(i);
  alert(u - i);
} 



function ilocz()
{
  var u = document.getElementById("u").value;
  var i = document.getElementById("i").value;

  u = parseInt(u);
  i = parseInt(i);
  alert(u * i);

}



 
function pierwiastek()
 {
  var q = document.getElementById("q").value;
 
 alert(Math.sqrt(q));
 
}


function kwadrat()
{
  var w = document.getElementById("w").value;

  w = parseInt(w);
  alert(w*w);
  }


  function kolo()
{
  var k = document.getElementById("k").value;
var pole = Math.PI * Math.pow(k, 2);
alert("pole: " + pole);
  }

  function obw()
  {
    var k = document.getElementById("k").value;
  var obw = Math.PI * k * 2;
  alert("obwód: " + obw);
 
    }

    function pole()
    {
      var h = document.getElementById("h").value;
      var j = document.getElementById("j").value;
      var l = document.getElementById("l").value;
      h = parseInt(h);
      j = parseInt(j);
      l = parseInt(l);
      alert(h*j*2 + h*l*2 + j*l*2);
      }


    function sum()
    {
      alert(result);
    }

    function ode()
    {
      alert(result);
    }

    function mno()
    {
      alert(result);
    }



    function dp()
    {
      alert(28 * 6.45 + " " +"zł");
    }

    function dos()
    {
      alert(28 * 6.99 + " " +"zł");
    }

    function oen()
    {
      alert(28 * 7.58 + " " +"zł");
    }

    function elpe()
    {
      alert(28 * 2.90 + " " +"zł");
    }






    function depe()
    {
      var q1 = document.getElementById("q1").value;
      q1 = parseInt(q1);
      var q2 = document.getElementById("q2").value;
      q2 = parseInt(q2);
      alert(6.45 * q1 * q2/100 + "  " + "zł");
    }


    function osiem()
    {
      var w1 = document.getElementById("w1").value;
      w1 = parseInt(w1);
      var w2 = document.getElementById("w2").value;
      w2 = parseInt(w2);
      alert(6.99 * w1 * w2/100 + "  " + "zł");
    }


    function onnen()
    {
      var e1 = document.getElementById("e1").value;
      e1 = parseInt(e1);
      var e2 = document.getElementById("e2").value;
      e2 = parseInt(e2);
      alert(7.58 * e1 * e2/100 + "  " + "zł");
    }


    function lypyg()
    {
      var r1 = document.getElementById("r1").value;
      r1 = parseInt(r1);
      var r2 = document.getElementById("r2").value;
      r2 = parseInt(r2);
      alert(2.90 * r1 * r2/100 + "  " + "zł");
    }

    function lokata()
    {
      var lokat = document.getElementById("lokat").value;
      lokat = parseInt(lokat);
      alert((lokat*0.08)-(lokat*0.08*0.19)+lokat + "  " + "zł");
    }