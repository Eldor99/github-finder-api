const github = new Github;

// Search input
const searchUser = document.querySelector('.form-control');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // make http call
        github.getUser(userText)
        .then(data => console.log(data))
        if(data.profile.message === 'Not Found'){
            // Show alert
            alert('Users not found');
        }else{

        }
    }
});