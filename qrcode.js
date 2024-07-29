const QrCode = require('qrcode')

let data = 
[
    {
        name:"Mango",
        Price: 500,
    },
    {
        name:"Orange",
        Price:"100",
    }
]

let in_string = JSON.stringify(data)

QrCode.toString(in_string,{type:"terminal"},function (err, QrCode){console.log(QrCode)})