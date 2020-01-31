selectorEl = $("#selector");


$(document).ready(function () {
    selectorEl.on("change", function(){
        
        var q = $(this).val();
        console.log(q);
        var settings = {
        
            "async": true,
            "crossDomain": true,
            "url": "https://tasty.p.rapidapi.com/recipes/list?&from=0&size=6&q="+q,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tasty.p.rapidapi.com",
                "x-rapidapi-key": "cc8f6d051amsh50057cf210b930cp1ef7a5jsnce9dccdb92a1"
            }
        }
    
        $.ajax(settings).done(function (response) {
            console.log(response);
            
            function findDescription(){
                
            }
            for (i=0; i < response.results.length; i++){
                console.log("for loop hit")
                var recipeTile = response.results[i].name;
                // var componentsList = response.results[i].sections[0].components;
                // var newItemText = componentsList.raw_text;
                var newDescription = response.results[i].description;
                console.log(recipeTile);
                // console.log(componentsList);
                // console.log(newItemText);
                console.log(newDescription);
            };
            // var recipeTile = response.results[0].name;
            // var displayRecipe = $("#itemDisplay").prepend("<h4>" + recipeTile);
    
            // console.log(recipeTile);
            // //where ingredients are stored 
            // var componentsList = response.results[0].sections[0].components;
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
            //     ingredientList.append(newItem).append("<li>" + newItemText);
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
//Quote of the Day
    var settingsQuote = {
        "async": true,
        "crossDomain": true,
        "url": "https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=1",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
            "x-rapidapi-key": ".07a1619e66msh10bf90c8c184833p1c1590jsn24047b7c532a"
        }
    }
    
    $.ajax(settingsQuote).done(function (response) {
        console.log(response);
        $("#quote").text('"' + response[0].quote + '" - ' + response[0].author);
    });




    


})
