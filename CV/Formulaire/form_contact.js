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

    if(email.value == "") {

        document.getElementById("erreur_mail").innerHTML = "Veuillez entrer une adresse mail valide";
        email.focus();
        return false;

    }

    else {
        document.getElementById("erreur_mail").innerHTML = "";
    }

    if(email.value.indexOf("@", 0) < 0) {
        document.getElementById("erreur_mail").innerHTML = "Veuillez entrer une adresse mail valide";
        email.focus();
        return false;
    }

    if(email.value.indexOf(".", 0) < 0) {
        document.getElementById("erreur_mail").innerHTML = "Veuillez entrer une adresse mail valide";
        email.focus();
        return false;
    }

    if(entreprise.value == "") {

        document.getElementById("erreur_entr").innerHTML = "Veuillez entrer un nom d'entreprise valide";
        entreprise.focus();
        return false;
        }
    
    else {
        document.getElementById("erreur_entr").innerHTML = "";
    }
       
    if(message.value == "") {
        document.getElementById("erreur_message").innerHTML = "Veuillez entrer un un message";
        message.focus();
        return false;
    }
    
    else {
        document.getElementById("erreur_message").innerHTML = "";
    }
}
