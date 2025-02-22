    let form = document.getElementById("form");

    form.addEventListener('submit' , (e)=>{

    e.preventDefault();

    let task = document.getElementById('task').value;
    let priority = document.getElementById('priority').value;

    let data = {

    task,
    priority

    }

    let tbody = document.querySelector('tbody')

    let row =  document.createElement('tr')

    let col1 = document.createElement('td')
    col1.innerText =  data.task

    let col2 = document.createElement('td')
    col2.innerText = data.priority

    let col3 = document.createElement('td')
    col3.innerText = "Delete"

    row.append(col1 , col2 , col3);
   
    tbody.append(row);


    col3.addEventListener('click' , ()=>{
        row.remove();
    })

    document.getElementById('task').value = ""
    document.getElementById('priority').value = ""

    })

    