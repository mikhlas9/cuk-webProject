document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(event.target);

    let personalDetails = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        dateOfBirth: formData.get('dateOfBirth'),
        email: formData.get('email'),
        password: formData.get('password'),
        mobileNumber: formData.get('mobileNumber'),
        gender: formData.get('gender')
    };

    let educationDetails = {
        highestQualification: formData.get('highestQualification'),
        institutionName: formData.get('institutionName'),
        startDate: formData.get('startDate'),
        endDate: formData.get('endDate'),

    };

    let achievements = {
        achievementTitle: formData.get('achievementTitle'),
        achievementDescription: formData.get('achievementDescription'),
        dateOfAchievement: formData.get('dateOfAchievement')
    };

    let hobbies = {
        hobbyName: formData.get('hobbyName'),
        hobbyDescription: formData.get('hobbyDescription')
    };

    // Storing data in localStorage
    localStorage.setItem('personalDetails', JSON.stringify(personalDetails));
    localStorage.setItem('educationDetails', JSON.stringify(educationDetails));
    localStorage.setItem('achievements', JSON.stringify(achievements));
    localStorage.setItem('hobbies', JSON.stringify(hobbies));

    console.log("Personal Details:", personalDetails);
    console.log("Education Details:", educationDetails);
    console.log("Achievements:", achievements);
    console.log("Hobbies:", hobbies);

    alert('Form data saved successfully!');
    window.location.href = 'login.html';
});



//login

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Dummy authentication check - replace with actual authentication logic
//     const personalDetails = JSON.parse(localStorage.getItem('personalDetails'));
//     if (personalDetails && personalDetails.email === email && personalDetails.password === password) {
//         sessionStorage.setItem('loggedInUser', email);
//         window.location.href = 'index.html';
//     } else {
//         alert('Invalid email or password');
//     }
// });


//logout

document.getElementById('logoutLink')?.addEventListener('click', function() {
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
});


document.addEventListener('DOMContentLoaded', function () {
    const personalDetails = JSON.parse(localStorage.getItem('personalDetails'));
    if (personalDetails) {
        document.querySelector('.initials').innerText = personalDetails.firstName.charAt(0) + '.' + personalDetails.lastName.charAt(0) + '.';
    }
})






















// document.addEventListener('DOMContentLoaded', () => {
//     const registrationForm = document.getElementById('registrationForm');
//     const loginForm = document.getElementById('loginForm');
//     const usersDiv = document.getElementById('users');
//     const loginLink = document.getElementById('loginLink');
//     const registerLink = document.getElementById('registerLink');
//     const logoutLink = document.getElementById('logoutLink');

//     if (registrationForm) {
//         registrationForm.addEventListener('submit', event => {
//             event.preventDefault();
//             const firstName = document.getElementById('firstName').value;
//             const lastName = document.getElementById('lastName').value;
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;
//             const bio = document.getElementById('bio').value;

//             if (!firstName || !lastName || !email || !password || !bio) {
//                 alert('Please fill in all fields');
//                 return;
//             }

//             if (!validateEmail(email)) {
//                 alert('Please enter a valid email address');
//                 return;
//             }

//             if (password.length < 6) {
//                 alert('Password must be at least 6 characters long');
//                 return;
//             }

//             const user = {
//                 firstName,
//                 lastName,
//                 email,
//                 password,
//                 bio
//             };

//             let users = JSON.parse(localStorage.getItem('users')) || [];
//             users.push(user);
//             localStorage.setItem('users', JSON.stringify(users));
//             alert('Registration successful');
//             window.location.href = 'index.html';
//         });
//     }

//     if (loginForm) {
//         loginForm.addEventListener('submit', event => {
//             event.preventDefault();
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;

//             const users = JSON.parse(localStorage.getItem('users')) || [];
//             const user = users.find(user => user.email === email && user.password === password);

//             if (user) {
//                 sessionStorage.setItem('loggedInUser', JSON.stringify(user));
//                 alert('Login successful');
//                 window.location.href = 'index.html';
//             } else {
//                 alert('Invalid email or password');
//             }
//         });
//     }

//     const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

//     if (loggedInUser) {
//         if (loginLink) loginLink.style.display = 'none';
//         if (registerLink) registerLink.style.display = 'none';
//         if (logoutLink) logoutLink.style.display = 'block';

//         if (usersDiv) {
//             usersDiv.innerHTML = `
//                 <div class="user">
//                     <h3>${loggedInUser.firstName} ${loggedInUser.lastName}</h3>
//                     <p><strong>Email:</strong> ${loggedInUser.email}</p>
//                     <p><strong>Bio:</strong> ${loggedInUser.bio}</p>
//                 </div>
//             `;
//         }
//     } else {
//         if (window.location.pathname !== '/login.html') {
//             window.location.href = 'login.html';
//         }
//     }

//     if (logoutLink) {
//         logoutLink.addEventListener('click', () => {
//             sessionStorage.removeItem('loggedInUser');
//             window.location.href = 'login.html';
//         });
//     }

//     function validateEmail(email) {
//         const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//         return re.test(email);
//     }
// });
