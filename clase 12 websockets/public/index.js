const socket = io();

const renderMsgs = data => {
    const msgs = data.map((msg) => {
        return (`<div>
                    <strong class='email'>${msg.email}</strong>
                    <p class='date'>${msg.date}<p>
                    <em class='text'>${msg.text}</em>

                </div>`)
    }).join(" ");
    document.getElementById('msgs').innerHTML = msgs;
}

socket.on('msgs', data => {
    renderMsgs(data)
})

const addMsg = e => {
    const newMsg = {
        email: document.getElementById('email').value,
        text: document.getElementById('text').value,
        date: `[${Date()}]`
    }
    socket.emit('newMsg', newMsg);
    return false;
}

const renderProducts = data => {
    const products = data.map((product) => {
        return (`<ul>    <h2>Productos</h2>

                    <li>${product.title}</li>
                    <li>${product.price}</li>
                    <li>${product.thumbnail}</li>

                </ul>`)
    });
    document.getElementById('products').innerHTML = products;
}

socket.on('products', data => {
    renderProducts(data)
})

const addProduct = e => {
    const newProduct = {
        title: document.getElementById('title').value,
        price: document.getElementById('price').value,
        thumbnail: document.getElementById('thumbnail').value
    }
    socket.emit('newProduct', newProduct);
    return false;
}
