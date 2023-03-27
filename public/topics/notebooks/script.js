const testFolder = 'C:\\Users\\lenovo\\OneDrive\\Documents\\GitHub\\Notes\\public\\topics\\notebooks\\dbms\\';
const fs = require('fs');
const data = fs.readdirSync(testFolder)

module.exports = data;