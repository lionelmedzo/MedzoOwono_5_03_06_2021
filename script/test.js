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

            for(var j=0;j<tableauDescription.length; j++ )
            {
                var decoupe = tableauDescription[j].split(' ');
                
                console.log("tes1"+decoupe);
                for(var k=0; k<decoupe.length; k++)
                {
                    decoupe.join();
                    if (userData.toLowerCase() == decoupe[k])
                    {
                        decoupe.join();
                        console.log(decoupe);

                    }
                }
            }
            
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
