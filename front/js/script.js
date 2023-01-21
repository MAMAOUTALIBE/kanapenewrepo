// On declare la constant qui va container html pour integrer les differents produits de l'API
const itemsContainer = document.querySelector(".items");

// on aappelle la fonction fetch() pour recuperer les donner de l'API
fetch("http://localhost:3000/api/products")
// on transforme les donnees de l'api au format JSON 

.then(data => data.json())

// pour chaque donnees de l'api , on met cette donner dans la balise html que lon créé
.then(jsonListProduct => {
    for(let jsonProduct of jsonListProduct){
        const a = document.createElement("a")
        a.href = `./product.html?id=${jsonProduct._id}`;


        const article = document.createElement("article");
        a.appendChild(article);


        const img = document.createElement("img");
        img.src = jsonProduct.imageUrl;
        img.alt = jsonProduct.altTxt;
        article.appendChild(img);


        const h3 = document.createElement("h3");
        // on affect une class css qui existe deja 
        h3.className = "productName";
        h3.textContent = jsonListProduct.name;
        article.appendChild(h3);


        const p = document.createElement("p");
        p.className = "produtDescription";
        article.appendChild(p);

        itemsContainer.appendChild(a);

    }
});