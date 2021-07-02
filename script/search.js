
function lectureInput(e) { // Fonction qui renvoie la valeur de l'input apres appuyer sur Enter
    if (e.keyCode == 13) {
        var saisie = document.getElementById('search').value;
        alert("vous avez saisie : "+ saisie);
        var search = saisie.split('');
        var ingredientFind=[];
        var ingredientSearch;
        if (search >0)
        {
            for(var h =0; h<search.length -1 ; h++)
            {
                var searchValue = search[h].toLowerCase();
                for(var i = 0 ;i<tableauIngredient.length; i++)
                {
                    var ingredient = tableauIngredient[i].toLowerCase();
                    if(ingredient.includes(searchValue))
                    {
                        ingredientFind.push(i);
                    }
                    /*if (saisie == tableauIngredient[i])
                    { // verifie si l'entrée correspond au tableau 
                        var save = tableauIngredient[i]; 
                        alert(save);

                    } */ 
                }
                
            }
        }
        console.log(ingredientFind);
        for(var i = 0 ; i<ingredientFind.length-1; i++)
        {
            if(tableauIngredient[ingredientFind[i]].toLowerCase()=== saisie.toLowerCase())
            {
                ingredientSearch = tableauIngredient[ingredientFind[i]];

            }
        }
        console.log(ingredientSearch);
          
            
            for(var i = 0 ;i<tableauAppareil.length; i++)
            {
                if (saisie== tableauAppareil[i]){ // verifie si l'entrée correspond au tableau 
                    var save = tableauAppareil[i]; 
                    alert(tableauAppareil[i]);
                    
                    
                }
                
            }
            for(var i = 0 ;i<tableauUstensil.length; i++)
            {
                if (saisie == tableauUstensil[i]){ // verifie si l'entrée correspond au tableau 
                    var save = tableauUstensil[i]; 
                    alert(tableauUstensil[i]);
                    
                    
                }
                
            }  
        
    }
    
}
//let recupRecette=recipes[i].name;

 