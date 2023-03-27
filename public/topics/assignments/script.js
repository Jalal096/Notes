const aoaFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\assignments\\aoa\\';
const dbmsFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\assignments\\dbms\\';
const osFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\assignments\\os\\';
const mpFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\assignments\\mp\\';
const em4Folder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\assignments\\em4\\';
const pyFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\assignments\\python\\';
const fs = require('fs');
const aoa = fs.readdirSync(aoaFolder)
const dbms = fs.readdirSync(dbmsFolder)
const os = fs.readdirSync(osFolder)
const mp = fs.readdirSync(mpFolder)
const em4 = fs.readdirSync(em4Folder)
const py = fs.readdirSync(pyFolder)

const data = [aoa, dbms, os, mp, em4, py]

module.exports = data;