
// Fonction qui place les element dans la carte
function displayAllItems(items)
{
  var itemsContainer = document.getElementById("itemsContainer");
  for(let recipe of items)
  {
    itemsContainer.innerHTML += `
    <div id="${recipe.id}" class="p-2 bd-highlight">
      <img class="gray" src="./img/image_grise.jpg" alt="image grise">
      <div class ="recettes-descritpion">
          <div class ="description-ingredient">
              <h6>${recipe.name}</h6>
              <ul id="ingredient-list">
                 ${recipe.ingredients.map(i => { return (`<li>${i.ingredient}: ${i.quantity}</li>`);})}
              </ul>
          </div>
      
          <div class="description-action">
              <h6 class="time"><i class="far fa-clock"></i> ${recipe.time}min</h6>
              <span>${recipe.description}
              </span>
          </div>
      </div>`
  }
}
//----------------------------------------------------------------------------------------
const search = document.querySelector(".navbar");
const input = search.querySelector("input");



// L'utilisateur appuie sur n'importe quel touche
input.onkeyup=(e)=>{
    let userData = e.target.value; // reception de la valeur de l'utilisateur
    console.log(e.target.value);
    var inserName;
    for(var i =0; i<tableauIngredient.length; i++)
    {
        if(userData.toLowerCase() == tableauIngredient[i])
        {
            console.log( "ingredient :"+tableauIngredient[i]);

            /*for(var j=0;j<tableauDescription.length; j++ )
            {
                var decoupe=[];  

                decoupe = tableauDescription[j].split(" ");
                
               
                
                
            }*/ 
            /*if (userData.toLowerCase() != decoupe[0].toLowerCase()){
                console.log("nop");
            }
            else{
                console.log("yep");
            }
            console.log(decoupe[0]);*/
            
            
        
            
            






        }    
        if(userData.toLowerCase() == tableauAppareil[i])
        {
            console.log("Appareil :"+tableauAppareil[i]);
            
        }
        if(userData.toLowerCase() == tableauUstensil[i])
        {
            console.log("Ustensils :"+ tableauUstensil[i]);
            
            
        }
        
    }
   












    /*let emptyArray =[];
    let emptyArray2 =[];

    
    if(userData){
        //concaténation des trois tableaux
        //filtrer la valeur du tableau et le caractère utilisateur  et renvoyer
        //1er et mot saisi par l'utilisateur
        emptyArray=tableauIngredient.concat(tableauUstensil).concat(tableauAppareil).filter((data)=>{
            
            //return data.toLowerCase().startsWith(userData.toLowerCase());
            console.log(data)
            if(data.indexOf(" ")==-1)
            {
                return dataTest.includes(userData.toLowercase());
            }
            else
            {
                var dataArray = dataTest.split(" ");
                for(var i =0; i<dataArray.length -1 ; i++)
                {
                    var dataWord = dataArray[i];
                    if(dataWord.includes(userData.toLowercase()))
                    {
                        return true;
                    }
                }
                return false;
            }
        
            
        });
        
        //emptyArray= emptyArray.map((data)=>{
        //   return data= data;
        //});
        
        console.log(emptyArray)
        //console.log(emptyArray2); 
        
            
        
    }
}*/
}

/*function nameRecette(inserName){ 
    for (var i = 0; i < recipes.length ; i++)
    {
        var recupName=recipes[i].name.toLowerCase();
        inserName.push(recupName);

    }
    console.log(inserName);
}*/
