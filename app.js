function randomInBetween(min, max) { // min: 1, max: 10
    return Math.floor(Math.random() * (max - min + 1) + min) // 10.99999999999 => floor: => 10
}

console.log(randomInBetween(1, 10));

function productDescription(strings, productName, productPrice) {
    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'pretty cheap regarding its price'
    if(productPrice > 20) {
        priceCategory = 'fairly price'
    }
    return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`
    // return {name: productName, price: productPrice}
}

const prodName = 'JS'
const prodPrice = 29.99

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`
console.log(productOutput);