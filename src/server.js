import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const server = express()
//set the view engine to ejs
server.set('view engine', 'ejs')

server.get('/', (req, res) => {
    const dogs = [
        {
            id: 0,
            name: "pitbull", 
            url: "https://cdn.tuoitre.vn/2022/7/25/0fe714492508cc569519-600x400-1144-1658716870938560447531.jpg",
            price: 8000,
        },
        {
            id: 1,
            name: "fock", 
            url: "https://cdn3.dhht.vn/wp-content/uploads/2023/02/cho-phoc-fox-gia-bao-nhieu-an-gi-dac-tinh-cach-nuoi-noi-mua-bia.jpg",
            price: 8000,
        }
    ];
    res.render('pages/home', { dogs })
})
server.get('/about', (req, res) => {
    res.render('pages/about')
})
server.get('/form', (req, res) => {
    res.render('pages/dogForm')
})
server.listen(process.env.SERVER_HOST_PORT, () => {
    console.log('Server is running on port 3000')
})