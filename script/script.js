selectorEl = $("#selector");
// let totalArray = // some call for default view || [];
var rowClass = document.getElementById("uk-child-width-1-3@m uk-grid-small uk-grid-match");

    // $(document).ready(function () {
    //     selectorEl.on("change", function () {

    //         var q = $(this).val();
    //         console.log(q);
    //         var settings = {

    //             "async": true,
    //             "crossDomain": true,
    //             "url": "https://tasty.p.rapidapi.com/recipes/list?&from=0&size=6&q=" + q,
    //             "method": "GET",
    //             "headers": {
    //                 "x-rapidapi-host": "tasty.p.rapidapi.com",
    //                 "x-rapidapi-key": "def62fed46msh69d1e6da6d5c453p19050djsn68ff3373da2b"
    //                   }
// var rowClass = document.getElementById("cardsDisplay"),
// rowClass.setAttribute("class", "uk-child-width-1-3@m uk-grid-small uk-grid-match");
// var recipeDisplayEl = document.getElementById("recipeDisplay");
// recipeDisplayEl.setAttribute("class", "uk-child-width-1-3@m uk-grid-small uk-grid-match ");
// var contactFormInputs = [];




// -------------------------------- AJAX CALL FOR API -------------------------------
$(document).ready(function () {
    
    selectorEl.on("change", function () {
<<<<<<< HEAD
       window.scroll(0, 500)
        // recipeDisplayEl.setAttribute("class", "hide");
=======
        
>>>>>>> master
        // rowClass.removeAttribute("class", "hide");
        var q = $(this).val();
        console.log(q);
        var settings = {

            "async": true,
            "crossDomain": true,
            "url": "https://tasty.p.rapidapi.com/recipes/list?&from=0&size=15&q=" + q,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tasty.p.rapidapi.com",
                "x-rapidapi-key": "def62fed46msh69d1e6da6d5c453p19050djsn68ff3373da2b"
<<<<<<< HEAD
=======
                // "x-rapidapi-key": "cc8f6d051amsh50057cf210b930cp1ef7a5jsnce9dccdb92a1" // old API we ran out the number of pulls on
>>>>>>> master
            }
        }

        $.ajax(settings).done(function (response) {
            $("#cardsDisplay").empty();
            window.scrollTo(0, 500);
            console.log(response);
            recipeArray = [];
            // ------------------ parse the result and remove recipe compilations --------------------------
            for (i = 0; i < response.results.length; i++) {
                
                responseId = response.results[i].canonical_id;
                if (responseId.includes("recipe")) {

                    
                       recipeArray.push(response.results[i]);


                    
                }

            };

            console.log({recipeArray});
            // ------------------ pull info from recipe list --------------------------
            for (l = 0; l < 6; l++) {
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
                newCard.setAttribute("value", recipeTitle);

                var div2 = document.createElement("div");
                var imgThumb = document.createElement("img");
                imgThumb.setAttribute("class", "uk-transition-scale-up uk-transition-opaque");
                imgThumb.setAttribute("src", newThumb);
                var div3 = document.createElement("div");
                div3.setAttribute("class", "uk-padding-small");
                var titleSet = document.createElement("h3");
                titleSet.setAttribute("class", "uk-card-title", recipeTitle);
                titleSet = recipeTitle;
                var descriptSet = document.createElement("p");
                descriptSet = newDescription;



                div3.append(titleSet, descriptSet);
<<<<<<< HEAD
                div2.append(imgThumb)
                newCard.append(div2, div3);
                console.log(newCard);
=======
                // div2.append(imgThumb)
                newCard.append(imgThumb, div3);
>>>>>>> master
                rowClass.append(newCard);

                // ------------------ lists ingredients --------------------------
                var componentsArray =[];
                if (componentsList) {
                    for (var j = 0; j < componentsList.length; j++) {
                        newItemText = componentsList[j].raw_text;
                        //console.log(newItemText);
                        componentsArray.push(newItemText);
                    };
                }
                for (i = 0; i < response.results.length; i++) {
                    console.log("for loop hit")
                    var recipeTitle = response.results[i].name;
                    var newDescription = response.results[i].description;
                    var newImage = response.results[i].thumbnail_url;
                    console.log(recipeTitle);
                    console.log(newDescription);
                    console.log($(".uk-card-title"));
                    // var mainSection = document.getElementById("main");
                    //var rowClass = document.querySelector("uk-child-width-1-3@m uk-grid-small uk-grid-match");
                    // add it to a row 
                    // var rowClass = document.createElement("div");
                    // rowClass.setAttribute("class", "uk-child-width-1-3@m uk-grid-small uk-grid-match");
                    // Create Cards
                    var newCard = document.createElement("div");
                    newCard.setAttribute("class", "uk-card uk-card-default uk-card-body uk-border-rounded card pad");
                        var div2 = document.createElement("div"); 
                        div2.setAttribute("class","uk-card-media-top uk-inline-clip uk-transition-toggle"); 
                            var imgThumb = document.createElement("img");
                            imgThumb.setAttribute("class", "uk-transition-scale-up uk-transition-opaque img");
                            imgThumb.setAttribute("src", newImage);
                            console.log(imgThumb);
                            var div3 = document.createElement("div");
                            div3.setAttribute("class", "uk-padding-small");
                                var titleSet = document.createElement("h3");
                                titleSet.setAttribute("class","uk-card-title", recipeTitle);
                                titleSet = recipeTitle;
                                var descriptSet = document.createElement("p");
                                descriptSet.setAttribute("class" , "Psize")
                                descriptSet = newDescription;
                    
<<<<<<< HEAD
                    for (var m = 0; m < instructionList.length; m++) {
                        newInstruction = instructionList[m].display_text;
                        //console.log(newInstruction);
                        instructionArray.push(newInstruction);
                    };
=======
                        // <ul>
                            // for loop to generate n <li> nodes
                            
                    //rowClass.append(div2,titleSet,descriptSet);

                    rowClass.append(newCard);
                    newCard.append(div2, div3);
                    div3.append(titleSet, descriptSet);
                    div2.append(imgThumb)
                    //div2.append(imgThumb, div3);
                    //newCard.append(div2, div3);
                    //rowClass.append(newCard);
                    // mainSection.append(rowClass);
                    console.log(rowClass);
>>>>>>> master
                };
                newCard.setAttribute("data-instructions", instructionArray);
                newCard.setAttribute("data-components",componentsArray);

                console.log("--------------new recipe----------------");

                rowClass.removeAttribute("class", "hide");
                recipeDisplayEl.setAttribute("class", "hide");
            };



            console.log(recipeArray.length)
            console.log(recipeArray);
                //---------------------------CARD CLICK------------------------------

            $(".uk-card").on("click", function () {
                $("#recipeDisplay").empty();
                var cardVal = $(this).val();
<<<<<<< HEAD
                //var thisTitle = cardVal;
                //console.log(thisTitle);
=======
                console.log(cardVal);
                var thisTitle = cardVal;
                console.log(thisTitle);
>>>>>>> master
               

                //var newTitle = $(this).add("<h3>" + thisTitle +"</h3>")
               // $(this).append(newTitle);
                //console.log(newTitle);
                var ingredientRender = $(this).attr("data-components").split(",");
                console.log(ingredientRender);

                var ingredientH = $(this).add("<h3>" + "Ingredients" + "</h3>");
                $(this).append(ingredientH);
                var newUl = $(this).add("<ul>");
                $(this).append(newUl);
                for (i = 0; i < ingredientRender.length; i++ ){
                    var newIngredient = $(this).add("<li>" +ingredientRender[i] + "</li>") ;
                    $(this).append(newIngredient)
                }

                var instructionsRedner = $(this).attr("data-instructions").split(",");
                $(this).append(newUl);
                for (i = 0; i < instructionsRedner.length; i++){
                    var newInstruction = $(this).add("<li>" +instructionsRedner[i] + "</li>")
                    $(this).append(newInstruction);
                }

                
                recipeDisplayEl.append(this);

                rowClass.setAttribute("class", "hide");
                recipeDisplayEl.removeAttribute("class", "hide");
<<<<<<< HEAD
                selectorEl.on("change",function(){
=======
                selectorEl.on("change", function () {
>>>>>>> master
                    return;
                });

            })


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

   //--------------------------FORM LISTENER---------------------------
//    $("#contactName").on(event); 
//    var contactName = $("#contactName").val(); 
//    var contactEmail = $("#contactEmail").val(); 
//    var contactPhone = $("#contactPhone").val(); 
//    var contactComment = $("#contactComment").val(); 
//    console.log(contactName);
//    $(".uk-button uk-button-default").on("click", function(){
//        preventDefault();
//        console.log(contactName, contactEmail, contactPhone, contactComment);
//    })
