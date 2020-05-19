const fs = require('fs');
const rootDir = require('../util/path');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);


const getProductsFromFile = callbackFunc =>{

    fs.readFile(p, (err, fileContent) => {
        if (err){
            callbackFunc([]);
        }
        else{
            callbackFunc(JSON.parse(fileContent));
        }
    })
}

module.exports = class Product {
    constructor(title, imageUrl, description, price){
        this.title=title;
        this.imageUrl=imageUrl;
        this.description=description;
        this.price=price;
    }

    // Insert to book list
    save(){
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        })
    }

    // static allow the class to be called without creating a new object ()
    // const Product = require('product.js')
    // let something = Product.fetchAll() //no need to have "= new Product()"
    // static fetchAll(){
    //     const p = path.join(
    //         path.dirname(process.mainModule.filename),
    //         'data',
    //         'products.json'
    //     );
    //     fs.readFile(p, (err, fileContent) => {
    //         if (err){
    //             return [];
    //         }
    //         return JSON.parse(fileContent);
    //     })
    // }

    static fetchAll(callbackFunc){
        getProductsFromFile(callbackFunc);
    }
}