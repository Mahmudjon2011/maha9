const product = [
    { rasmi: "./images/kovrik.png", nomi: "Mars rug", narxi: 100, qoldiq: 50 },
    { rasmi: "./images/stiker.png", nomi: "Keyboard sticker", narxi: 49, qoldiq: 100 },
    { rasmi: "./images/smartwatch.png", nomi: "Smart watch", narxi: 899, qoldiq: 15 },
    { rasmi: "./images/keyboard.png", nomi: "Wireless keyboard", narxi: 500, qoldiq: 4 },
    { rasmi: "./images/mouse.png", nomi: "Mouse", narxi: 299, qoldiq: 17 },
    { rasmi: "./images/airpods.png", nomi: "AirPods", narxi: 699, qoldiq: 12 },
    { rasmi: "./images/powerbank.png", nomi: "Powerbank", narxi: 799, qoldiq: 8 },
    { rasmi: "./images/fleshka.png", nomi: "USB flash drive", narxi: 499, qoldiq: 22 },
    { rasmi: "./images/phone.png", nomi: "Smartphone", narxi: 2999, qoldiq: 5 },
    { rasmi: "./images/playstation.png", nomi: "Playstation 5", narxi: 7999, qoldiq: 1 },
    { rasmi: "./images/yandex.png", nomi: "Yandex Station", narxi: 1999, qoldiq: 3 },
    { rasmi: "./images/planshet.png", nomi: "Planshet Samsung", narxi: 4999, qoldiq: 3 }
    
    
];

const productForm = document.querySelector("#shopForm");
const productInput = document.querySelector("#shopInput");
const productWrapper = document.querySelector("#shop__wrapper");

console.log(productWrapper);


function renederShop(magazin) {
    productWrapper.innerHTML = "";
    productWrapper.innerHTML = magazin.map(obyektlar => 
        `
        <div class="box">
            <img src="${obyektlar.rasmi}">
            <h3 class="productName">${obyektlar.nomi}</h3>
            <p>Narxi: ${obyektlar.narxi} Coin</p>
            <p>Qoldiq: ${obyektlar.qoldiq} ta mavjud</p>
            <button class="btn-primary" onclick="buyProduct(${obyektlar.narxi})">Buy</button>
        </div>
        `
    ).join(""); 
}


renederShop(product);


productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const inpQiymat = productInput.value.toLowerCase();
    
    const filterProduct = product.filter(item => item.nomi.toLowerCase().includes(inpQiymat));
    
    renederShop(filterProduct); 
});
