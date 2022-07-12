function addEmp() {
    employee = {
        id: empId.value,
        eName: empName.value,
        desg: empDesg.value,
        salary: empSalary.value,
        add:empAdd.value,
        exp:empExp.value
    }
    if(employee.id in localStorage){
        alert("Details are already Exist")
    }
    else{
        localStorage.setItem(employee.id,JSON.stringify(employee))
        alert("Employee added successfully")
    }
}

function search(){
    key = searchId.value
    if(key in localStorage){
       employee = JSON.parse(localStorage.getItem(key))
       result.innerHTML = `<p>Employee Id: ${employee.id}</p>
       <p> Employee Name: ${employee.eName}</p>
       <p> Employee desg: ${employee.desg}</p>
       <p> Employee salary: ${employee.salary}</p>
       <p> Employee address: ${employee.add}</p>
       <p> Employee experience: ${employee.exp}</p> `
       alert("found")
    }
    else{
        result.innerHTML = ""
        alert("Employee not found")
    }
}