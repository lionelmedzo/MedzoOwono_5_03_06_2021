let tableauIngredient=[];
let recupIngredient=[];
listeIngredient(tableauIngredient);
console.log("Liste d'ingredients : ");
console.log(tableauIngredient);





function listeIngredient(X){
    for (var i = 0; i < recipes.length ; i++)
    {
       recupIngredient = recipes[i].ingredients;
       
        for (var j = 0 ; j < recupIngredient.length; j++)
        {
            let ingredient = recupIngredient[j].ingredient.toLowerCase();
            //console.log(ingredient); // chaine de caractere, exemple  "l" "a" "i" "t"
            if (X.includes(ingredient)== false) // condition si la valeur n'est pas dans le tableau 
            {
                X.push(ingredient);             // ajout valeur dans le tableau
            }    
        }         
    }   

}
let tableauAppareil=[];
listeAppareil(tableauAppareil);
console.log("Liste d'appareil : ");
console.log(tableauAppareil);

function listeAppareil(X){
    for (var i = 0; i < recipes.length ; i++)
    {
        let recupAppareil= recipes[i].appliance.toLowerCase();
	    for  (var j = 0; j < recupAppareil.length ; j++)
	    {
            
            if (X.includes(recupAppareil)==false)
            {
            X.push(recupAppareil);
            }
        }
        
    }
}



let tableauUstensil=[];
listeUstensil(tableauUstensil);
console.log("Liste d'ustensils : ");
console.log(tableauUstensil);

function listeUstensil(X){
    for (var i = 0; i < recipes.length ; i++)
    {
        let recupUstensil= recipes[i].ustensils;
        for  (var j = 0; j < recupUstensil.length ; j++)
        {
            let ustensil =  recupUstensil[j].toLowerCase();
            if (X.includes(ustensil)==false)
            {
                X.push(ustensil);
            }
        }
        
    }
}

let tableauDescription=[];

descriptionRecette(tableauDescription);
console.log("description : ");
console.log(tableauDescription);

function descriptionRecette(X){
    for (var i = 0; i < recipes.length ; i++)
    {
        let recupDescription=recipes[i].description;
        for  (var j = 0; j < recupDescription.length ; j++)
	    {
            if(X.includes(recupDescription)==false){
                X.push(recupDescription);
            }
        }
        
    }
}
/*function  decoupage(){
    for(var i= 0 ; i < recupDescription; i++){
        let decoupDescription = recupDescription[i].split();
        if 
    }
}*/



//document.getElementById('search').value = tableauUstensil;
const dropIngredient = document.getElementById("menu");
const dropAppareil = document.getElementById("menu2");
const dropustensil = document.getElementById("menu3");


dropIngredient.innerHTML=tableauIngredient;
dropAppareil.innerHTML=tableauAppareil;
dropustensil.innerHTML=tableauUstensil;





    
    

