function onSubmit(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let url = document.getElementById('url').value;
    let check = document.getElementById('check').checked;
    console.log( 'email = ' + email );
    console.log( 'password = ' + password );
    console.log( 'Check me out? = ' + check );
    console.log( 'url = ' + url );
}

document.getElementById('submit').onclick = onSubmit;