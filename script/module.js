let tableauIngredient=[];
console.log("Liste d'ingredients : ");
tableauIngredient=listeIngredient();

function listeIngredient(){
    for (var i = 0; i < recipes.length ; i++)
    {
        let recupIngredient = recipes[i].ingredients;
        for (var j = 0 ; j < recupIngredient.length; j++)
        {
            let ingredient = recupIngredient[j].ingredient;
            let ingredientSansDoublon = [...new Set (ingredient)];
            console.log(ingredientSansDoublon);  
        }     
    }  
}


    
    

