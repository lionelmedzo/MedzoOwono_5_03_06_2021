
function lectureInput(e) { // Fonction qui renvoie la valeur de l'input apres appuyer sur Enter
    if (e.keyCode == 13) {
        var saisie = document.getElementById('search').value;
        alert("vous avez saisie : "+ saisie);
        for(var i = 0 ;i<tableauIngredient.length; i++)
        {
            if (saisie== tableauIngredient[i]){ // verifie si l'entrée correspond au tableau 
                var save = tableauIngredient[i]; 
                alert(tableauIngredient[i]);
                
            }
            
        }
        for(var i = 0 ;i<tableauAppareil.length; i++)
        {
            if (saisie== tableauAppareil[i]){ // verifie si l'entrée correspond au tableau 
                var save = tableauAppareil[i]; 
                alert(tableauAppareil[i]);
                
            }
            
        }
        for(var i = 0 ;i<tableauUstensil.length; i++)
        {
            if (saisie== tableauUstensil[i]){ // verifie si l'entrée correspond au tableau 
                var save = tableauUstensil[i]; 
                alert(tableauUstensil[i]);
                
            }
            
        }
    }  
}


 