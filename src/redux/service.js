export function createNewUser(user){
    fetch('http://localhost:3030/user/NewUser',{
        method:'POST',
        headers: {'Content-Type':'application/Json'},
        body:JSON.stringify(user)
    }).then(function(result){
        console.log(result);
    }).then(
        alert("נרשמת בהצלחה!")
    ).catch((err) => {
        console.log(err);
    })
}
