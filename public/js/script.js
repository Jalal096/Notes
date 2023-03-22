// saveFile = () => {
//     const name = document.getElementById('nam'),
//           rollno = document.getElementById('roll'),
//           category = document.getElementById('cat'),
//           subject = document.getElementById('sub'),
//           filename = document.getElementById('file'),
//           file = document.getElementById('upload');

//     let data = {
//         'Name' : name.value,
//         'Roll No' : rollno.value,
//         'Cateory' : category.value,
//         'Subject' : subject.value,
//         'Filename' : filename.value,
//         'File' : file.value
//     }
//     URL.createObjectURL(file);
//     // file.save(file.value)

//     console.log(data);
// }

saveFile = () => {
    let fileElement = document.getElementById('upload')

    // check if user had selected a file
    if (fileElement.files.length === 0) {
      alert('please choose a file')
      return
    }

    let file = fileElement.files[0]

    let formData = new FormData();
    formData.set('file', file);

    axios.post(`http://localhost:5500/uploads`, formData, {
      onUploadProgress: progressEvent => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(`upload process: ${percentCompleted}%`);
      }
    })
      .then(res => {
        console.log(res.data)
        console.log(res.data.url)
      })
  }