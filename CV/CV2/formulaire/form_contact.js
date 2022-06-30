function valider()
{
    var nom = document.forms["contact"]["nom"];
    var prenom = document.forms["contact"]["prenom"];
    var email = document.forms["contact"]["email"];
    var entreprise = document.forms["contact"]["entreprise"];
    var message = document.forms["contact"]["message"];

    if (nom.value == "")                                  
    { 
        alert("Mettez votre nom."); 
        nom.focus(); 
        return false; 
    }    
    if (prenom.value == "")                               
    { 
        alert("Mettez votre adresse."); 
        prenom.focus(); 
        return false; 
    }        
    if (email.value == "")                                   
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (entreprise.value == "")                           
    { 
        alert("Mettez votre numéro de téléphone."); 
        entreprise.focus(); 
        return false; 
    }    
    if (message.value == "")                  
    { 
        alert("Écrivez un commentaire."); 
        message.focus(); 
        return false; 
    } 
    return true; 
}