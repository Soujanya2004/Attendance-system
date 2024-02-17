let students = [];

function addStudent() {
    const studentName = document.getElementById('studentName').value;
    if (studentName.trim() === '') {
        alert('Please enter a valid student name.');
        return;
    }

    const student = {
        name: studentName,
        attendance: []
    };

    students.push(student);
    updateAttendanceTable();
    document.getElementById('studentName').value = '';
}

function markAttendance(index, isPresent) {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const student = students[index];
    const attendanceRecord = {
        date: date.toLocaleDateString(),
        time,
        isPresent
        
    };
    
    student.attendance.push(attendanceRecord);
    updateAttendanceTable();
}
 

function updateAttendanceTable() {
    const tableBody = document.getElementById('attendanceBody');
    tableBody.innerHTML = '';
    

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="txt">${student.name}</td>
            <td class="txt"></td>
            <td class="txt"></td>
            <td ><button  id="btnp" class="btn"  onclick="markAttendance(${index}, true)">Present</button></td>
            <td><button class="btna" onclick="markAttendance(${index}, false)">Absent</button></td>
            <td class="txt"></td>
            
        `;
        tableBody.appendChild(row);

        const lastRecord = student.attendance[student.attendance.length - 1];
        
        
        if (lastRecord) {
            row.children[1].innerText = lastRecord.date;
            row.children[2].innerText = lastRecord.time;
            
            row.children[5].innerText = lastRecord.isPresent;
            
        }
        
    });
}