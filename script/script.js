selectorEl = $("#selector");


$(document).ready(function () {
    selectorEl.on("change", function () {

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
                recipeArray = [];
                responseId = response.results[i].canonical_id;

                for (k = 0; k < 6; k++) {
                    if (responseId.includes("recipe")) {
                        recipeArray.push(response.results[i]);

                    }
                }





            };

            for (l = 0; l < recipeArray.length; l++) {
                var recipeTile = recipeArray[l].name;
                var sections = recipeArray[l].sections

                var componentsList = sections && sections[0].components;
                var instructionList = recipeArray[l].instructions;

                var newDescription = recipeArray[l].description;
                console.log("Title: " + recipeTile);
                console.log("Description: " + newDescription);

                if (componentsList) {
                    for (var j = 0; j < componentsList.length; j++) {
                        newItemText = componentsList[j].raw_text;
                        console.log(newItemText);
                    };
                }

                if(instructionList){
                    for (var m = 0; m < instructionList.length; m++ ){
                        newInstruction = instructionList[m].display_text;
                        console.log(newInstruction);
                    };
                };
                console.log("--------------new recipe----------------")
            };

            console.log(recipeArray);
            // var recipeTile = response.results[0].name;
            // var displayRecipe = $("#itemDisplay").prepend("<h4>" + recipeTile);

            // console.log(recipeTile);
            // //where ingredients are stored 

            // var ingredientList = $("#ingredientList");
            // var newItem = $("<ls>");
            // //raw string of ingredients
            // var newItemText = componentsList.raw_text;
            // console.log(response.results[0].sections[0].components)

            // for (var i = 0; i < componentsList.length; i++) {
            //     //parse the list of items
            //     newItemText = componentsList[i].raw_text;
            //     console.log(newItemText);
            //     //add new html element 
            //     // ingredientList.append(newItem).append("<li>" + newItemText);
            // };

            // var instructions = response.results[0].instructions[0].display_text;
            // console.log(instructions);
            // var instructionList = $("#instructionList");

            // for (i = 0; instructions.length; i++) {
            //     instuction = response.results[i].instructions[i].display_text;
            //     console.log(instructions);
            //     instructionList.append(newItem).append("<li>" + instructions);
            // };
        });
    });




})
