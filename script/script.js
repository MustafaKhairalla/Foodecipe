selectorEl = $("#selector");
let totalArray = // some call for default view || [];

    $(document).ready(function () {
        selectorEl.on("change", function () {

            var q = $(this).val();
            console.log(q);
            var settings = {

                "async": true,
                "crossDomain": true,
                "url": "https://tasty.p.rapidapi.com/recipes/list?&from=0&size=6&q=" + q,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "tasty.p.rapidapi.com",
                    "x-rapidapi-key": "cc8f6d051amsh50057cf210b930cp1ef7a5jsnce9dccdb92a1"
                }
            }

            $.ajax(settings).done(function (response) {
                console.log(response);

                function findDescription() {

                }
                for (i = 0; i < response.results.length; i++) {
                    console.log("for loop hit")
                    var recipeTitle = response.results[i].name;
                    var newDescription = response.results[i].description;
                    var newImage = response.results[i].thumbnail_url;
                    console.log(recipeTitle);
                    console.log(newDescription);
                    console.log($(".uk-card-title"));
                    var mainSection = document.getElementById("main");
                    // add it to a row 
                    var rowClass = document.createElement("div");
                    rowClass.setAttribute("class", "uk-child-width-1-3@m uk-grid-small uk-grid-match");
                    // Create Cards
                    var newCard = document.createElement("div");
                    newCard.setAttribute("class", "uk-card uk-card-default");
                        var div2 = document.createElement("div"); 
                        div2.setAttribute("class","uk-card uk-card-defaultuk-card-media-top uk-cover-container"); 
                            var imgThumb = document.createElement("img");
                            imgThumb.setAttribute("src", newImage);
                            console.log(imgThumb);
                            var titleSet = document.createElement("h3");
                            titleSet.setAttribute("class","uk-card-title", recipeTitle);
                            titleSet = recipeTitle;
                            var descriptSet = document.createElement("p");
                            descriptSet = newDescription;
                        

                        // <ul>
                            // for loop to generate n <li> nodes
                            
                    //rowClass.append(div2,titleSet,descriptSet);
                    newCard.append(div2,imgThumb, titleSet, descriptSet, );
                    rowClass.append(newCard);
                    mainSection.append(rowClass);
                    console.log(mainSection);
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




    })

$(".uk-card").on("click", function () {
    var cardID = $(this).text();
    console.log("register card click" + cardID);
    callAPI(cardID);
})
