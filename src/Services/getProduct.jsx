const getProduct = (idDetail) => {
    return new Promise((res, rej) => {
        fetch(`https://fakestoreapi.com/products/${idDetail}`)
            .then(res=>res.json())
            .then(json=>res(json))
            .catch(err => rej(err))
    })
}

export default getProduct;