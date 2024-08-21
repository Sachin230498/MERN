// Constructor function
// to create an object

// normal function


// make a function that will return nike product object



function nikeProduct(n,p){
 
    let product = {};

    product.name = n;
    product.price = p ;

    return product
    
}


let a = nikeProduct("jordan", 10000)

// console.log(a)


// constructor function
// this new  


function NikeProductCF(n,p){
    // this = {}
    this.name = n;
    this.price = p
}


let b = new NikeProductCF("shoes", 5000)
console.log(b)


// this object
// new  return

let c = new NikeProductCF("run", 12000)
console.log(c)





let d = new Array()
console.log(d)