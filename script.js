let student = {} 
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender = 'ชาย'

let student2 = {
    name : 'คุณป้า',
    username : 'b@a.com',
    gender : 'หญิง' 
}

let students = [
    student,
    student2,
    {
        name : 'คุณน้า',
        username : 'b@c.com',
        gender : 'หญิง'  
    }
    
]

function addDataForm(index, student) {
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('scope', 'row')
    cell.innerHTML = index
    row.appendChild(cell)

    cell = document.createElement('td')
    cell.innerHTML = `${student.name} ${student.surnamr}`
    row.appendChild(cell)

    cell = document.createElement('td')
    //cell.innerHTML = student.username
    let someDiv = document.createElement('div')
    cell.append(someDiv)
    let img = document.createElement('img')
    someDiv.append(img)
    img.setAttribute('src', student.image)
    img.style.height = '200px'
    img.classList.add('img-thumbnail')
    row.appendChild(someDiv)

    cell = document.createElement('td')
    cell.innerHTML = student.description
    row.appendChild(cell)

    tableBody.appendChild(row)
}


function addStudentData(students) {
    let count = 1
    for (let stu of students) {
        addDataForm(count++, stu)
    }
}

window.addEventListener('load', onLoad)

function onLoad() {
    fetch('https://dv-student-backend-2019.appspot.com/students').then(response => {
        return response.json()
    }) 
    .then(data => {
        let student = data
        console.log(data)
        addStudentData(student)
    })

}
