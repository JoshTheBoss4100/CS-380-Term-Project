if (localStorage.getItem('bookData')) {
    bookData = JSON.parse(localStorage.getItem('bookData'));
}


function DisplayBestSellers(){
    let count = 0;
    for (book in bookData)
    {
        if (bookData[book].bestseller == true && count <= 4)
        {
            document.getElementById("bestseller_main").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
            count = count + 1;
        }
        
    }
    
}

function DisplayFavorites(){
    let count = 0;
    for (book in bookData)
    {
        if (bookData[book].favorite == true && count <= 4)
        {
            document.getElementById("favorites_main").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
            count = count + 1;
        }
    
    }
}

function DisplayArrivals(){
    let count = 0;
    for (book in bookData)
    {
        if (bookData[book].newArrival == true && count <= 4)
        {
            document.getElementById("arrivals_main").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
            count = count + 1;
        }
    
    }
}



window.addEventListener("load", function(){
    let images = document.querySelectorAll("img");
    for (let i = 0; i < bookData.length; i++)
    {
        for(let j = 0; j < images.length; j++)
            if (bookData[i].book.title == images[j].alt)
            images[j].addEventListener("click", function(){
                window.location.href = `Book.html?id=${i}`
            });
    }
});
function grabBookId(){
    let urlParams = new URLSearchParams(window.location.search);
    let index = urlParams.get('id');
    return index;
}

function BookInfo(){
    let index = grabBookId();
    let bookHTML = `
     <figure>
    <img src="${bookData[index].book.choice.softcover.image}" alt="${bookData[index].book.title}">
    </figure>`;
    document.getElementById("book").innerHTML += bookHTML;
    document.getElementById("synopsis").innerHTML += `<p>${bookData[index].book.description}</p>`;
    /*document.getElementById("soft_price").innerHTML += bookData[index].book.choice.softcover.price;
    document.getElementById("hard_price").innerHTML += bookData[index].book.choice.hardcover.price;*/
    document.getElementById("author").innerHTML += bookData[index].book.author;
    document.getElementById("title").innerHTML += bookData[index].book.title;
    document.getElementById("genre").innerHTML += bookData[index].book.genre;
    document.getElementById("add_to_cart").innerHTML = "";
    if(bookData[index].inCart==true)
        document.getElementById("add_to_cart").innerHTML += "Remove from Cart";
    else
        document.getElementById("add_to_cart").innerHTML += "Add to Cart";

}  

function addToCart(){
    document.getElementById("add_to_cart").addEventListener("click", function(){
    let index = grabBookId();
    bookData[index].inCart = !bookData[index].inCart;
    document.getElementById("add_to_cart").innerHTML = "";
    if(bookData[index].inCart==true)
        document.getElementById("add_to_cart").innerHTML += "Remove from Cart";
    else
        document.getElementById("add_to_cart").innerHTML += "Add to Cart";
    
    localStorage.setItem('bookData', JSON.stringify(bookData));

   


});
}

window.addEventListener("load", function(){
    if (document.getElementById("soft") && document.getElementById("hard")){
    document.getElementById("soft").addEventListener("change", updatePrice);
    document.getElementById("hard").addEventListener("change", updatePrice);
    }
})

window.addEventListener("load", function(){
    for(let i in bookData)
    if (document.getElementById(`soft${i}`) && document.getElementById(`hard${i}`)){
    document.getElementById(`soft${i}`).addEventListener("change", () => updateCartPrice(i));
    document.getElementById(`hard${i}`).addEventListener("change", () => updateCartPrice(i));
    }
})

function updateCartPrice(i){
    if (document.getElementById(`soft${i}`).checked)
        document.getElementById(`price${i}`).textContent = "Price: $" + bookData[i].book.choice.softcover.price;
    else if (document.getElementById(`hard${i}`).checked)
        document.getElementById(`price${i}`).textContent = "Price: $" + bookData[i].book.choice.hardcover.price;
    calculateTotal();

}
function displayCart(){
    let empty = true;
    for (let index in bookData){
        if(bookData[index].inCart==true){
            empty = false;
            document.getElementById("full_cart").innerHTML += `
                <section id="book#${index}"">
                    <img src="${bookData[index].book.choice.softcover.image}" alt="${bookData[index].book.title}">
                    <input type="radio" name="cover${index}" value="softcover" id="soft${index}" checked>
                    <label for="soft${index}">Softcover</label>
                    <input type="radio" name="cover${index}" value="hardcover" id="hard${index}">
                    <label for="hard${index}">Hardcover</label>
                    <h3 class="price" id="price${index}">Price: ${bookData[index].book.choice.softcover.price}</h3>
                </section>
            `;}
    }
    if (empty)
        document.getElementById("full_cart").innerHTML = "<p>Cart is empty, please add some books to purchase them</p>";
    calculateTotal();

}
function updatePrice(){
    let index = grabBookId();
    if (document.getElementById("soft").checked)
        document.getElementById("price").textContent = "Price: $" + bookData[index].book.choice.softcover.price;
    else if (document.getElementById("hard").checked)
        document.getElementById("price").textContent = "Price: $" + bookData[index].book.choice.hardcover.price;
}

function calculateTotal() {
    let total = 0;
    for (let i in bookData) {
        if (bookData[i].inCart === true) {
            const soft = document.getElementById(`soft${i}`);
            const hard = document.getElementById(`hard${i}`);
            if (soft?.checked) {
                total += parseFloat(bookData[i].book.choice.softcover.price);
            } else if (hard?.checked) {
                total += parseFloat(bookData[i].book.choice.hardcover.price);
            }
        }
    }
    console.log(typeof(total))
    document.getElementById("cart_total").textContent = "Total: $" + total.toFixed(2);
}
function clearCart(){
document.getElementById("purchase").addEventListener("click", function () {
    let Empty = true;
    for (let i in bookData) {
        if (bookData[i].inCart) {
            Empty = false;
            bookData[i].inCart = false;
        }
    }
if (!Empty)
    document.getElementById("full_cart").innerHTML = "<p>Thank you for your purchase!</p>";
else
    document.getElementById("full_cart").innerHTML = "<p>Cart is empty, please add some books to purchase them</p>";

    localStorage.setItem("bookData", JSON.stringify(bookData));
    calculateTotal();
});}


