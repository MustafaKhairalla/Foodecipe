selectorEl = $("#selector");
// let totalArray = // some call for default view || [];
var rowClass = document.getElementById("cardsDisplay");





// -------------------------------- AJAX CALL FOR API -------------------------------
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
                        recipeArray.push(response.results[k]);


                    }
                }

            };

            for (l = 0; l < recipeArray.length; l++) {
                var recipeTitle = recipeArray[l].name;
                var sections = recipeArray[l].sections

                var componentsList = sections && sections[0].components;
                var instructionList = recipeArray[l].instructions;
                var newThumb = recipeArray[l].thumbnail_url;
                var newDescription = recipeArray[l].description;
                console.log("Title: " + recipeTitle);
                console.log("Description: " + newDescription);
                console.log("Thumbnail: " + newThumb);

                // ------------------ create elements with array info --------------------------


                var newCard = document.createElement("div");
                newCard.setAttribute("class", "uk-card uk-card-default uk-border-rounded");
                var div2 = document.createElement("div");
                var imgThumb = document.createElement("img");
                imgThumb.setAttribute("class", "uk-transition-scale-up uk-transition-opaque");
                imgThumb.setAttribute("src", newThumb);
                // console.log(imgThumb);
                var div3 = document.createElement("div");
                div3.setAttribute("class", "uk-padding-small");
                var titleSet = document.createElement("h3");
                titleSet.setAttribute("class", "uk-card-title", recipeTitle);
                titleSet = recipeTitle;
                var descriptSet = document.createElement("p");
                descriptSet = newDescription;



                div3.append(titleSet, descriptSet);
                div2.append(imgThumb)
                newCard.append(div2, div3);
                rowClass.append(newCard);


                if (componentsList) {
                    for (var j = 0; j < componentsList.length; j++) {
                        newItemText = componentsList[j].raw_text;
                        console.log(newItemText);
                    };
                }

                if (instructionList) {
                    for (var m = 0; m < instructionList.length; m++) {
                        newInstruction = instructionList[m].display_text;
                        console.log(newInstruction);
                    };
                };
                console.log("--------------new recipe----------------");
            };



            // for (i = 0; i < recipeArray.length; i++) {

                // console.log(recipeTitle);
                // console.log(newDescription);
                // console.log($(".uk-card-title"));

                // var newCard = document.createElement("div");
                // newCard.setAttribute("class", "uk-card uk-card-default uk-border-rounded");
                // var div2 = document.createElement("div");
                // var imgThumb = document.createElement("img");
                // imgThumb.setAttribute("class", "uk-transition-scale-up uk-transition-opaque");
                // imgThumb.setAttribute("src", newImage);
                // // console.log(imgThumb);
                // var div3 = document.createElement("div");
                // div3.setAttribute("class", "uk-padding-small");
                // var titleSet = document.createElement("h3");
                // titleSet.setAttribute("class", "uk-card-title", recipeTitle);
                // titleSet = recipeTitle;
                // var descriptSet = document.createElement("p");
                // descriptSet = newDescription;



                // div3.append(titleSet, descriptSet);
                // div2.append(imgThumb)
                // newCard.append(div2, div3);
                // rowClass.append(newCard);
                // console.log(rowClass);


            // };
            console.log(recipeArray.length)
            console.log(recipeArray);


        });


        //---------------------------QUOTE OF THE DAY---------------------------
        var settingsQuote = {
            "async": true,
            "crossDomain": true,
            "url": "https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=1",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
                "x-rapidapi-key": "07a1619e66msh10bf90c8c184833p1c1590jsn24047b7c532a"
            }
        }

        $.ajax(settingsQuote).done(function (response) {
            console.log(response);
            $("#quote").text('"' + response[0].quote + '" - ' + response[0].author);
        });






    })
    //---------------------------CARD CLICK------------------------------
    $(".uk-card").on("click", function () {
        var cardID = $(this).text();
        console.log("register card click" + cardID);
        callAPI(cardID);
    })

});