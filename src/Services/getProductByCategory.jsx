const getProductByCategory = (categ) => {
    return new Promise((res, rej) => {
        fetch(`https://fakestoreapi.com/products/category/${categ}`)
            .then(res=>res.json())
            .then(json=>res(json))
            .catch(err => rej(err))
    })
}

export default getProductByCategory;