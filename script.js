/*let student = {} 
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
    
]*/

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


/*function addStudentData(students) {
    let count = 1
    for (let stu of students) {
        addDataForm(count++, stu)
    }
}*/

function addStudentData(student){
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

document.getElementById('searchButton').addEventListener('click', () => {
    let id = document.getElementById('inputText').value
    console.log(id)
    fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`)
    .then(response => {
        return response.json()
    }) 
    .then(student => {
        console.log(student)
        addStudentData(student)
        //addDataForm(`${id}`, student)
    })
})

function onAddStudentClick() {
    let student = {}
    student.name = document.getElementById('nameInput').value
    student.surname = document.getElementById('surnameInput').value
    student.studentId = document.getElementById('studentIdInput').value
    student.gpa = document.getElementById('gpaInput').value
    student.image = document.getElementById('imageLinkInput').value
    addStudentToDB(student)
}
document.getElementById('addButton').addEventListener('click', onAddStudentClick)

function addStudentToDB(student) {
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
    })
}

function deleteStudent(id) {
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
    }).catch(error => {
        alert('your input student id is not in the database')
    })
}


function onLoad() {
    let student = {
        name: 'Nicha', 
        surname: 'Satthamnuwong',
        studentId: "642110316",
        gpa: 4.99,
        image: 'https://poptonic.com/wp-content/uploads/2021/10/how-to-train-your-dragon-toothless-feat-1536x878.png'
    }
    addStudentToDB(student)
}

//window.addEventListener('load', onLoad)