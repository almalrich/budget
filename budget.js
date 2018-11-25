var recette;
var depense;
var fixe = ["loyer et charge", "remboursement de credit", "eau gaz electricité", "telephone internet", "assurance habitation", "assurance véhicules", "mutuelle santé", "frais de garde", "impôts sur le revenu", "impôts locaux"];
var x;
fixe[0] = 350;
fixe[1] = 50;
fixe[2] = 100;
fixe[3] = 60;
fixe[4] = 50;
fixe[5] = 50;
fixe[6] = 15;
fixe[7] = 15;
fixe[8] = 150;
fixe[9] = 150;


var courantes = ["courses/mois", "essence frais de transport/mois", "activité sportive/mois"];

courantes[0] = 20 * 31;
courantes[1] = 2 * 31;
courantes[2] = 100 / 10;


var occasionnelles = ["sorties mois", "autre depense"];

occasionnelles[0] = 150;
occasionnelles[1] = 200;




var depensefix = document.getElementById("fix").innerHTML = fixe[0] + fixe[1] + fixe[2] + fixe[3] + fixe[4] + fixe[5] + fixe[6] + fixe[7] + fixe[8] + fixe[9];

var depensecour = document.getElementById("courant").innerHTML = courantes[0] + courantes[1] + courantes[2];




function total()
{
    var temporaire = 0;
    for (var i = 0; i < occasionnelles.length; i++)
    {
        document.getElementById("occa").innerHTML= temporaire += occasionnelles[i];
    }
    return temporaire;
}

total();




depense = depensefix + depensecour + total();
/*
document.getElementById("ok").addEventListener("click",
    function(){
    plusInput = plusInput.value;
    plusInput = occasionnelles.push();
    document.getElementById("dep").innerHTML = depensefix + depensecour + total();
    });
*/





document.getElementById("dep").innerHTML = "total des dépences:"+ depense;





var recet = ["salaires" , "aides/allocations" , "rentes" , "autre"];
recet[0] = 1900;
recet[1] = 0;
recet[2] = 150;
recet[3] = 0;

function rec()
{
    var temporaire = 0;
    for (var l = 0; l < recet.length; l++)
    {
        document.getElementById("rec").innerHTML= temporaire += recet[l];
    }
    return temporaire;
}

rec();
/*var t;
document.getElementById("oki").addEventListener("click", function(){
    document.getElementById("re").value=t;
    console.log(t);
    occasionnelles.push(t);

});
*/
recette=rec();



document.getElementById("rest").innerHTML = recette-depense;

document.getElementById("ok").addEventListener("click", function () {

    var y =document.getElementById("depe").value;

    if (y!==""){
        occasionnelles.push("y");
        document.getElementById("occa").innerHTML=total();
        depense=depense+y;
        console.log("depense");


    }
});
total();
