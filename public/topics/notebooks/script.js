const aoaFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\notebooks\\aoa\\';
const dbmsFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\notebooks\\dbms\\';
const osFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\notebooks\\os\\';
const mpFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\notebooks\\mp\\';
const em4Folder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\notebooks\\em4\\';
const pyFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\notebooks\\python\\';
const fs = require('fs');
const aoa = fs.readdirSync(aoaFolder)
const dbms = fs.readdirSync(dbmsFolder)
const os = fs.readdirSync(osFolder)
const mp = fs.readdirSync(mpFolder)
const em4 = fs.readdirSync(em4Folder)
const py = fs.readdirSync(pyFolder)

const data = [aoa, dbms, os, mp, em4, py]

module.exports = data;