const fs = require('fs');

const escribirArchivo = () => {
    const route = ('./data/fyh.txt');
    let data = Date().toString() 

    try {
        fs.writeFileSync(route, data, 'utf-8')
    }
    catch (err) {
        console.log(err)
    }
}

escribirArchivo()

