function addDataForm(index, student) {  //student table
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('scope', 'row')

    cell.innerHTML = index
    row.appendChild(cell)

    cell = document.createElement('td')
    cell.innerHTML = `${student.name} ${student.surname}`
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

    cell = document.createElement('td')
    let button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('btn-danger')
    button.setAttribute('type', 'button')
    button.innerText = 'delete'
    button.addEventListener('click', ()=>{
        let cf = confirm(`Delete student name ${student.name} ?`)
        if(cf) {
            deleteStudent(student.id)
        }
    })
    cell.appendChild(button)
    row.appendChild(cell)

    row.addEventListener('click', ()=>{
        showStudentBlock(student)
    })

    tableBody.appendChild(row)
}
function addStudentList(students) { //add student array to student table
    let count = 1
    const tableBody = document.getElementById('tableBody')
    tableBody.innerHTML = '' //ลบข้อมูลเก่าที่showออกก่อน
    for (let stu of students) {
        addDataForm(count++, stu)
    }
}
function showAllStudents() { //show all on table
    fetch('https://dv-student-backend-2019.appspot.com/students')
    .then((response) => {
        return response.json()
    }).then(data => {
        addStudentList(data)
    })
}

function addStudentData(student){ //show 1 student
    let idElem = document.getElementById('id')
    idElem.innerHTML = student.id
    let studentIdElem = document.getElementById('studentId')
    studentIdElem.innerHTML = student.studentId
    let nameElem = document.getElementById('name')
    nameElem.innerHTML = `${student.name} ${student.surname}`
    let gpaElem = document.getElementById('gpa')
    gpaElem.innerHTML = student.gpa
    let profileElem = document.getElementById('image')
    profileElem.setAttribute('src', student.image)
}

document.getElementById('searchButton').addEventListener('click', () => { //search
    let id = document.getElementById('inputText').value
    console.log(id)
    fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`)
    .then(response => {
        return response.json()
    }) 
    .then(student => {
        console.log(student)
        addStudentData(student)
    })
})

function addStudentToDB(student) { //post function
    fetch('https://dv-student-backend-2019.appspot.com/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    }).then(response => {
        return response.json()
    }).then(data => {
        console.log('success', data)
        showAllStudents()
    })
}
function deleteStudent(id) { //delete function
    fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`, {
        method: 'DELETE'
    }).then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw Error(response.statusText)
        }
    }).then(data => {
        alert(`student name ${data.name} is now delete`)
        showAllStudents()
    }).catch(error => {
        alert('your input student id is not in the database')
    })
}

function onAddStudentClick() { //click to post
    let student = {}
    student.name = document.getElementById('nameInput').value
    student.surname = document.getElementById('surnameInput').value
    student.studentId = document.getElementById('studentIdInput').value
    student.gpa = document.getElementById('gpaInput').value
    student.image = document.getElementById('imageLinkInput').value
    addStudentToDB(student)
}
document.getElementById('addButton').addEventListener('click', onAddStudentClick)


const singleStudentResult = document.getElementById('sinigle_student_result')
const listStudentResult = document.getElementById('output')
const addUserDetail = document.getElementById('addUserDetail')

function hideAll() {
    singleStudentResult.style.display = 'none'
    listStudentResult.style.display = 'none'
    addUserDetail.style.display = 'none'
}

document.getElementById('allStudentMenu').addEventListener('click', (event) => {
    hideAll()
    listStudentResult.style.display = 'block'
    showAllStudents()
})
document.getElementById('serachMenu').addEventListener('click', (event) => {
    hideAll()
    singleStudentResult.style.display = 'block'
})
document.getElementById('addStudentMenu').addEventListener('click', (event) => {
    hideAll()
    addUserDetail.style.display = 'block'
})

function showStudentBlock(student) {
    //alert(student.name)
    hideAll()
    singleStudentResult.style.display = 'block'
    addStudentData(student)
}



function onLoad() {
    //showAllStudents()
    hideAll()
}

window.addEventListener('load', onLoad)