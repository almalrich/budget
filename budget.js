var recette;
var depense;

var fixe = ["loyer et charge", "remboursement de credit", "eau gaz electricité", "telephone internet", "assurance habitation", "assurance véhicules", "mutuelle santé", "frais de garde", "impôts sur le revenu", "impôts locaux"];

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

var i;


var depensefix = document.getElementById("fix").innerHTML = fixe[0] + fixe[1] + fixe[2] + fixe[3] + fixe[4] + fixe[5] + fixe[6] + fixe[7] + fixe[8] + fixe[9];

var depensecour = document.getElementById("courant").innerHTML = courantes[0] + courantes[1] + courantes[2];


for (i = 0; i < occasionnelles.length; i++) {
    var depenseocca = document.getElementById("occa").innerHTML = occasionnelles[0] + occasionnelles[1];
}

depense = depensefix + depensecour + depenseocca;

document.getElementById("dep").innerHTML = "total des dépences:"+ depense;

/*
document.getElementById("fix").innerHTML = fixe[i]+" 350euro "+fixe[i+1]+" 50euro "+fixe[i+2]+" 100euro "+fixe[i+3]+" 60euro "+fixe[i+4]+" 50euro "+fixe[i+5]+" 50euro "+fixe[i+6]+" 15euro "+fixe[i+7]+" 15euro "+fixe[i+8]+" 150euro "+fixe[i+9]+" 150euro ";



document.getElementById("depensesfix").innerHTML = 350+50+100+60+50+50+15+15+150+150;


document.getElementById("occas").innerHTML = occasionnelles[i] + " 150euro "+occasionnelles[i+1] + "  200euro " ;

*/




