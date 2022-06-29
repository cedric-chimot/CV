function valider()
{
    var nom = document.forms["contact"]["nom"];
    var prenom = document.forms["contact"]["prenom"];
    var email = document.forms["contact"]["email"];
    var entreprise = document.forms["contact"]["entreprise"];
    var message = document.forms["contact"]["message"];

    if(nom.value == "") {

    document.getElementById("erreur_nom").innerHTML = "Veuillez entrer un nom valide";
        nom.focus();
        return false;
    }

    else {
        document.getElementById("erreur_nom").innerHTML = "";
    }

    if(prenom.value == "") {

        document.getElementById("erreur_prenom").innerHTML = "Veuillez entrer un prenom valide";
            prenom.focus();
            return false;
        }
    
        else {
            document.getElementById("erreur_nom").innerHTML = "";
        }


}