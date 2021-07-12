const github = new Github;
const ui = new UI;

// Search input
const searchUser = document.querySelector('.form-control');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input
    const userText = e.target.value;

    if(userText !== ''){
        // Make http call
        github.getUser(userText)
        .then(data => {
            ui.showProfile(data)
        })
    }
});