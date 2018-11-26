var recette;
/*je créer variable and tab*/
var depense;
var fixe = ["loyer et charge", "remboursement de credit", "eau gaz electricité", "telephone internet", "assurance habitation", "assurance véhicules", "mutuelle santé", "frais de garde", "impôts sur le revenu", "impôts locaux"];
/*je renseigne leur valeur en decimal pour les somme*/
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


/* ici je reprend les valeurs que j'additionne pour avoir dep fixes /courantes*/
var depensefix = document.getElementById("fix").innerHTML = fixe[0] + fixe[1] + fixe[2] + fixe[3] + fixe[4] + fixe[5] + fixe[6] + fixe[7] + fixe[8] + fixe[9];

var depensecour = document.getElementById("courant").innerHTML = courantes[0] + courantes[1] + courantes[2];


/* ici je fais une boucle pour pouvoir mettre mon .push sur occas*/
function total() {
    let temporaire = 0;
    for (let i = 0; i < occasionnelles.length; i++) {
        document.getElementById("occa").innerHTML = temporaire += occasionnelles[i];
        document.getElementById("ok").addEventListener("click", function () {
            let m = document.getElementById("depe").value;
            occasionnelles.push(m);

        })


    }/* je return temporaire pour reprendre chaque valeur de i*/
    return temporaire;
}

total();

/* ici le total des depense avec la function total pour reprendre bien tout les input*/
depense = depensefix + depensecour + total();
/*
document.getElementById("ok").addEventListener("click",
    function(){
    plusInput = plusInput.value;
    plusInput = occasionnelles.push();
    document.getElementById("dep").innerHTML = depensefix + depensecour + total();
    });
*/


document.getElementById("dep").innerHTML = "total des dépences:" + depense;

/* les recette avec leur valeur*/
let recet = ["salaires", "aides/allocations", "rentes", "autre"];
recet[0] = 1900;
recet[1] = 0;
recet[2] = 150;
recet[3] = 0;
let y;

function rec() {
    var temporaire = 0;
    for (var l = 0; l < recet.length; l++) {
        document.getElementById("rec").innerHTML = temporaire += recet[l];
        document.getElementById("oki").addEventListener("click", function () {
           y= document.getElementById("re").value ;
            occasionnelles.push(document.getElementById(y));
        })
    }
    ;
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
recette = rec();


document.getElementById("rest").innerHTML = recette - depense;

document.getElementById("oki").addEventListener("click", function () {

    let y = document.getElementById("re").value;

    if (y !== "") {

        document.getElementById("re").innerHTML = (recette = recette + y);

        console.log("re");
        total()

    }
});

total()