const uname = document.querySelector('#uname');
const sub = document.querySelector('#sub');
const username = document.querySelector('#username');
const imageprofile = document.querySelector('#imageprofile');
const nrepo = document.querySelector('#nrepo');
const nfollowers = document.querySelector('#nfollowers');
const nfollowing = document.querySelector('#nfollowing');
const name = document.querySelector('#name');
const bio = document.querySelector('#bio');
const card = document.getElementById('card');



async function github(value) {
    try {
        const responce = await fetch(`https://api.github.com/users/${value}`)
        const data = await responce.json();
        if(responce.status === 404)
        {
            alert('user not found');
        }
        else{
            
            username.innerHTML = data.login;

            imageprofile.innerHTML = `<img id="image" src="${data.avatar_url}" alt="profile pic"></img>`;

            nrepo.innerHTML = `<a href="https://github.com/${data.login}?tab=repositories" target="_">${data.public_repos}</a>`

            nfollowers.innerHTML = data.followers;

            nfollowing.innerHTML = data.following;

            name.innerHTML = data.name;

            bio.innerHTML = data.bio;

            

        }
        
    }
    catch {
        alert('no user found');
    }
}

sub.addEventListener('click', () => {
    // console.log(uname.value);
    if (uname.value === '') {
        alert('Please enter a valid GitHub Username!');
    }
    else {
        github(uname.value);
        card.style.display = "block";
        
    }

})