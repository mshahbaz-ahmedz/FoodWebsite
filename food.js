let loading = document.querySelector(".loading");
let container = document.querySelector(".container");
let card = document.querySelectorAll(".card");

card.forEach(function(card){

    card.addEventListener("click", function(){

        document.querySelector('body').innerHTML=""
        let div = document.createElement("div");
        div.classList.add("foodDetail");
        div.innerHTML=`
        <img src=${card.firstElementChild.src} alt="">
        <div class="detailText">
            <h1>Eat With Hungers Burger</h1>
            <h3>Exciting Offer Upto 50% OFF</h3>
            <p>Delicious Foods Are Available</p>
            <p>Pay on Delivery might be available</p>
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="">Back</a>
        </div>`

        document.querySelector('body').appendChild(div)
    })

})


//lodaing
container.style.display = 'none';
setTimeout(function() {
container.style.display='block';
loading.style.display= 'none';
}, 2000);
