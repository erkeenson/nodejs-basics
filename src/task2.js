const csvFilePath = './csv/nodejs-hw1-ex1.csv'
const csv = require('csvtojson')
const fs = require('fs')
csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        try {
            fs.writeFile('./my-data.txt', JSON.stringify(jsonObj), 'utf8', err => {
                if (err) {
                    console.log('data is not written to file')
                }
                console.log('data has been written')
            })
        } catch (error) {
            console.log(error);
        }
        // console.log(jsonObj);
    })
