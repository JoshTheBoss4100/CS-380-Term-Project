function DisplayAllBooksBestseller(){
    document.getElementById("shop_div").innerHTML = "";
    for (book in bookData)
    {
        if(bookData[book].bestseller == true){
            document.getElementById("shop_div").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
        }
    }
}
function DisplayRomanceBooks(){
    document.getElementById("shop_div").innerHTML = "";
    for (book in bookData){
        if(bookData[book].book.genre == "Romance" && bookData[book].bestseller == true){
            document.getElementById("shop_div").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
        }
    }
}

function DisplayHistoricalFiction(){
    document.getElementById("shop_div").innerHTML = "";
    for (book in bookData){
        if(bookData[book].book.genre == "Historical Fiction" && bookData[book].bestseller == true){
            document.getElementById("shop_div").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
        }
    }
}

function DisplayFantasy(){
    document.getElementById("shop_div").innerHTML = "";
    for (book in bookData){
        if(bookData[book].book.genre == "Fantasy" && bookData[book].bestseller == true){
            document.getElementById("shop_div").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
        }
    }
}

function DisplayMystery(){
    document.getElementById("shop_div").innerHTML = "";
    for (book in bookData){
        if(bookData[book].book.genre == "Mystery" && bookData[book].bestseller == true){
            document.getElementById("shop_div").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
        }
    }
}

function filterByGenre(genre) {
    
    if(genre === "All"){
        DisplayAllBooksBestseller()
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