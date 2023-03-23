saveFile = () => {
  const fs = require('fs');
  const pname = document.getElementById('nam')
  const rollno = document.getElementById('roll')
  const category = document.getElementById('cat')
  const subject = document.getElementById('sub')
  const filename = document.getElementById('file')
  const file = document.getElementById('upload')
  
  alert("File Uploaded")
  let data = {
    'Name': pname.value,
    'Roll No': rollno.value,
    'Cateory': category.value,
    'Subject': subject.value,
    'Filename': filename.value,
    'File': file.value
  }

  const jsonString = JSON.stringify(data)
  fs.writeFile('data.json', jsonString, (err) => {
    if (err) {
      console.log("Error");
    }
    else {
      console.log("Successfully");
    }
  })
}