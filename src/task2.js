import csv from "csvtojson";
import fs from 'node:fs';

const csvFilePath = './csv/nodejs-hw1-ex1.csv'

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        try {
            const write = fs.createWriteStream('./my-data.txt', 'utf8');
            write.write(JSON.stringify(jsonObj));
        } catch (error) {
            console.log(error);
        }
    })