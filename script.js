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
    console.log(student.name)

    cell.innerHTML = student.name
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.username
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.gender
    row.appendChild(cell)

    tableBody.appendChild(row)
}


function addStudentData(students) {
    let count = 1
    for (let stu of students) {
        addDataForm(count++, stu)
    }
}

window.addEventListener('load', function() {
    addStudentData(students)
})
