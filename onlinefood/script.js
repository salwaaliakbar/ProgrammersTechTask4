const emailsend = () => {
    const email = document.getElementById('email');
    let randomNum = Math.floor(Math.random() * 1000000);
    let randomCode = randomNum.toString().padStart(6, '0');
    var messageBody = "Your Reset verification code is: " + randomCode;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "salwaaliakbar22@gmail.com",
        Password: "17851582ED9BDD6C893216A046C5845934AD",
        To: email.value,
        From: "salwaaliakbar22@gmail.com",
        Subject: "Verification Code",
        Body: messageBody
    }).then(
        message => {
            if (message === 'OK') {
                alert('Email sent successfully!');
                document.getElementById('emailmessage').style.display = 'block';
                setTimeout(function() {
                    window.location.href = 'forgetPassword2.html';
                }, 2000); 
            } else {
                alert('Failed to send email: ' + message);
            }
        }
    ).catch(
        error => {
            alert('Error: ' + error);
        }
    );
}
const aferverify = () => {
    setTimeout(function() {
        document.getElementById('verifymessage').style.display = 'block';
        setTimeout(function() {
            window.location.href = 'reset.html';
        }, 1000);
    }, 2000); 
}
const resetVerified = () => {
    setTimeout(function() {
        document.getElementById('resetmessage').style.display = 'block';
        setTimeout(function() {
            location.reload();
        }, 2000);
    }, 2000);
}
const LoginAccount = () => {
    setTimeout(function() {
        document.getElementById('loginmessage').style.display = 'block';
        document.getElementsByClassName('moreOptions')[0].style.display = 'none';
        setTimeout(function() {
            location.reload();
        }, 2000);
    }, 2000);
}
let username='';
let password='';
if(document.getElementById('ContactForm')) {
document.getElementById('ContactForm').addEventListener('submit', function(event) {
    event.preventDefault();
     if (this.checkValidity()) {
        document.getElementById('message').style.display = 'block';
        setTimeout(() => {
            this.submit();
        }, 2000);
    } else {
        alert('Please fill out all required fields.');
    }
});
}
else if(document.getElementById('newAccountForm')){
document.getElementById('newAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();
     if (this.checkValidity()) {
        username=document.getElementById('username').innerText;
        password=document.getElementById('password').innerText;
        console.log(username);
        console.log(password);
        document.getElementById('message').style.display = 'block';
        setTimeout(() => {
            this.submit();
        }, 2000);
    } else {
        alert('Please fill out all required fields.');
    }
});
}
