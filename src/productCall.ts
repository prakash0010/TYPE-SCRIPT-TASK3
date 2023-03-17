interface products {
    ProductId: string
    ProductName: string
    Price: string
    Quantity: string

}

function getplayers(): Promise<products[]> {
    return fetch('/product.json')
        .then(res => res.json())
        .then(res => {
            return res as products[]
        })
}

getplayers()
    .then(products => {
        document.write(products.map(p => 'PRODUCT ID : ' + p.ProductId + '- PRODUCT NAME : ' + p.ProductName + '- PRICE : ' + p.Price + '- QUANTITY : ' + p.Quantity + '<br>').toString())
    })
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

