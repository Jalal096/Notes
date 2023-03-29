const path = require('path')

const aoaFolder = path.join(__dirname, 'aoa');
const dbmsFolder = path.join(__dirname, 'dbms');
const osFolder = path.join(__dirname, 'os');
const mpFolder = path.join(__dirname, 'mp');
const em4Folder = path.join(__dirname, 'em4');
const fs = require('fs');
const aoa = fs.readdirSync(aoaFolder)
const dbms = fs.readdirSync(dbmsFolder)
const os = fs.readdirSync(osFolder)
const mp = fs.readdirSync(mpFolder)
const em4 = fs.readdirSync(em4Folder)

const data = [aoa, dbms, os, mp, em4]

module.exports = data;