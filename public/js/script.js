// saveFile = () => {

// }
// const name = document.getElementById('nam')


saveFile = () => {
  const pname = document.getElementById('nam')
  const rollno = document.getElementById('roll')
  const category = document.getElementById('cat')
  const subject = document.getElementById('sub')
  const filename = document.getElementById('file')
  const file = document.getElementById('upload')
  const success = document.getElementById('success')
  let messages = 0
  if (pname.value === "" || rollno.value === "" || category.value === "" || subject.value === "" || filename.value === "" || file.value === "") {
    messages = 1
  }
  success.style.display = "block";
  alert("File Uploaded")
  
  let data = {
    'Name' : pname.value,
    'Roll No' : rollno.value,
    'Cateory' : category.value,
    'Subject' : subject.value,
    'Filename' : filename.value,
    'File' : file.value
} 
  module.exports = data;
}