selectorEl = $("#selector");


$(document).ready(function () {
    selectorEl.on("change", function () {
        //search paramater pull from selector bar 
        var q = $(this).val();
        console.log(q);
        var settings = {

            "async": true,
            "crossDomain": true,
            "url": "https://tasty.p.rapidapi.com/recipes/list?&from=0&size=15&q=" + q,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tasty.p.rapidapi.com",
                "x-rapidapi-key": "cc8f6d051amsh50057cf210b930cp1ef7a5jsnce9dccdb92a1"
            }
        }

        $.ajax(settings).done(function (response) {


            console.log(response);


            for (i = 0; i < response.results.length; i++) {
                //blank array for new recipes
                recipeArray = [];
                responseId = response.results[i].canonical_id;

                //limit the number of recipes to 6, to match number of cards available 
                for (k = 0; k < 6; k++) {
                    //filter out recipe compilations 
                    if (responseId.includes("recipe")) {
                        recipeArray.push(response.results[i]);

                    }
                }





            };
            //pull useful elements out of the array for display on cards
            for (l = 0; l < recipeArray.length; l++) {
                var recipeTile = recipeArray[l].name;
                var sections = recipeArray[l].sections

                var componentsList = sections && sections[0].components;
                var instructionList = recipeArray[l].instructions;
                var thumbNail = recipeArray[l].thumbnail_url;
                var newDescription = recipeArray[l].description;
                console.log("Title: " + recipeTile);
                console.log("Description: " + newDescription);
                console.log("Img: "+thumbNail);

                //parse through the ingredients array to create strings
                if (componentsList) {
                    for (var j = 0; j < componentsList.length; j++) {
                        newItemText = componentsList[j].raw_text;
                        console.log(newItemText);
                    };
                }
                //parse through the instructions array to create strings 
                if(instructionList){
                    for (var m = 0; m < instructionList.length; m++ ){
                        newInstruction = instructionList[m].display_text;
                        console.log(newInstruction);
                    };
                };
                console.log("--------------new recipe----------------")
            };

            console.log(recipeArray);
            
        });
    });




})
