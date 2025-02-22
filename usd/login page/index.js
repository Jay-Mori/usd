let form = document.getElementById("signup");
form.addEventListener('submit',(event)=>
{

    event.preventDefault()
    
    let name = document.getElementById('name').value
    let emailadress = document.getElementById('email').value
    let country = document.getElementById('country').value 
    let number = document.getElementById('phone').value
    let pass = document.getElementById('password').value

  let  studentform = {

        name : name,
        emailadress : email,
        country : country,
        number : number,
        pass : password
    }

    console.log(studentform);
    

})