let AwesomeQR = require('./awesome-qr-node');
var fs = require('fs');

new AwesomeQR().create({
    text: 'https://github.com/Rainbow6-RUSSIA',
    size: 500,

    backgroundImage: './assets/r6rus.png',

    margin: 15,
    typeNumber: 4,
    colorDark: "rgba(0, 0, 0, 0.8)",
    colorLight: "rgba(255, 255, 255, 1)",
    backgroundDimming: 'rgba(0,0,0,0)',
    logoCornerRadius: 8,
    whiteMargin: true,
    dotScale: 0.35,
    autoColor: false,
    borderDark : "rgba(0, 0, 0, .1)",
    borderLight : "rgba(255, 255, 255, .1)",
    drawPosition : false,
    callback: (data) => {
        // binary PNG data
        fs.writeFile("test.png", data, "binary", function (err) {
            console.log(err);
        });

    }
});