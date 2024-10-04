function table (){

/*     Etape 1

    document.getElementById("demo1").innerHTML="5x0=0"
    document.getElementById("demo2").innerHTML="5x1=5"
    document.getElementById("demo3").innerHTML="5x2=10"
    document.getElementById("demo4").innerHTML="5x3=15"
    document.getElementById("demo5").innerHTML="5x4=20"
    document.getElementById("demo1").innerHTML="5x5=25"
    document.getElementById("demo1").innerHTML="5x6=30"
    document.getElementById("demo1").innerHTML="5x7=35"
    document.getElementById("demo1").innerHTML="5x8=40"
    document.getElementById("demo1").innerHTML="5x9=45"
    document.getElementById("demo1").innerHTML="5x10=50"

    console.log("le coucou s'est affiché") */
    var inputValue = document.getElementById("choix_table").value;
    console.log(inputValue)

    var inputValue2 = document.getElementById("choix_depart").value;
    var inputValue3 = document.getElementById("choix_arrivee").value;
    var inputValue4 = document.getElementById("choix_pas").value;
/*Etape 3*/
document.write(`<p>Voici la table de ${inputValue}.</p>`)
for (var variable=inputValue2; variable<=inputValue3; variable++)
{
    document.write(`<p>${inputValue} * ${variable} =  ${inputValue*variable}</p>`)
}





}