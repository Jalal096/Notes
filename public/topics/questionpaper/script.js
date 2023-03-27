const aoaFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\questionpaper\\aoa\\';
const dbmsFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\questionpaper\\dbms\\';
const osFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\questionpaper\\os\\';
const mpFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\questionpaper\\mp\\';
const em4Folder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\questionpaper\\em4\\';
const fs = require('fs');
const aoa = fs.readdirSync(aoaFolder)
const dbms = fs.readdirSync(dbmsFolder)
const os = fs.readdirSync(osFolder)
const mp = fs.readdirSync(mpFolder)
const em4 = fs.readdirSync(em4Folder)

const data = [aoa, dbms, os, mp, em4]

module.exports = data;