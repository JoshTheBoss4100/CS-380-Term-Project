function DisplayAllBooks(){
    document.getElementById("shop_div").innerHTML = "";
    for (book in bookData)
    {
        document.getElementById("shop_div").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
    }
}
function DisplayRomanceBooks(){
    document.getElementById("shop_div").innerHTML = "";
    for (book in bookData){
        if(bookData[book].book.genre == "Romance"){
            document.getElementById("shop_div").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
        }
    }
}

function DisplayHistoricalFiction(){
    document.getElementById("shop_div").innerHTML = "";
    for (book in bookData){
        if(bookData[book].book.genre == "Historical Fiction"){
            document.getElementById("shop_div").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
        }
    }
}

function DisplayFantasy(){
    document.getElementById("shop_div").innerHTML = "";
    for (book in bookData){
        if(bookData[book].book.genre == "Fantasy"){
            document.getElementById("shop_div").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
        }
    }
}

function DisplayMystery(){
    document.getElementById("shop_div").innerHTML = "";
    for (book in bookData){
        if(bookData[book].book.genre == "Mystery"){
            document.getElementById("shop_div").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
        }
    }
}

function filterByGenre(genre) {
    
    if(genre === "All"){
        DisplayAllBooks()
    }
    else if(genre === "Romance"){
        DisplayRomanceBooks()
    }
    else if(genre === "Historical Fiction"){
        DisplayHistoricalFiction()
    }
    else if(genre === "Fantasy"){
        DisplayFantasy()
    }
    else if(genre === "Mystery"){
        DisplayMystery()
    }
    
}