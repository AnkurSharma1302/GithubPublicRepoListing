const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const clearAndRefresh = document.querySelector(".clear");

const searchUser = ()=>{
    let searchBox = document.querySelector('#mysearch');
    if(searchBox.value){
        getUser(searchBox.value);
    }
    return false;
}

// var input = document.getElementById("myInput");

// Execute a function when the user presses a key on the keyboard
search.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    
    event.preventDefault();
    // Trigger the button element with a click
    // document.getElementById("myBtn").click();
    let searchBox = document.querySelector('#mysearch');
    
    if(searchBox.value){
        getUser(searchBox.value);
    }
   
    return false;

  }
});

search.addEventListener("keyup", function(event) {
    // If the user presses the "Enter" key on the keyboard
    cnt =0;
    if (event.key === "Backspace" || event.key ==="Delete") {
      // Cancel the default action, if needed
        
      window.location.reload();
    
      
    //   if(searchBox.value){
    //       getUser(searchBox.value);
    //   }
     
      return false;
  
    }
  });

let cardData =
[
    // {
    //     heading: 'Repo1',
    //     desc: 'This is repo1 desc'
    // },
    // {
    //     heading: 'Repo2',
    //     desc: 'This is repo2 desc'
    // },
    // {
    //     heading: 'Repo3',
    //     desc: 'This is repo3 desc'
    // },
    // {
    //     heading: 'Repo4',
    //     desc: 'This is repo4 desc'
    // },
    // {
    //     heading: 'Repo5',
    //     desc: 'This is repo5 desc'
    // },
    // {
    //     heading: 'Repo6',
    //     desc: 'This is repo6 desc'
    // },
    // {
    //     heading: 'Repo7',
    //     desc: 'This is repo7 desc'
    // },
    // {
    //     heading: 'Repo8',
    //     desc: 'This is repo8 desc'
    // },
    // {
    //     heading: 'Repo9',
    //     desc: 'This is repo9 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },{
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },
    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },

    // {
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },{
    //     heading: 'Repo10',
    //     desc: 'This is repo10 desc'
    // },

]

const APIURL = 'https://api.github.com/users/';
const profile = document.querySelector('.profile');
const getUser = async(username)=>{
    const response = await fetch(APIURL+ username);
    const data = await response.json();
    const profile_card = `
        <div class="profile-wrapper container">
            <div class="profile-img">
                <img src="${data.avatar_url}" alt="default_profile">
            </div>
            <div class="profile-text">
                <h2 class="profile-name">${data.name}</h2>
                <p class="profile-bio">${data.bio}</p>
                <p class="fa-solid fa-location-dot extra">&nbsp; ${data.location}</p><br>
                <p class="fa-brands fa-x-twitter extra">&nbsp; ${data.twitter_username}</p>
                <br>
                <a href="${data.html_url}" target = "_blank"><i class="fa-solid fa-link"></i>&nbsp; Github Profile</a>
                
            </div>
        </div>
    `
    public_repo = data.public_repos;
    // console.log(public_repo);
    profile.innerHTML = profile_card;
    getRepos(username);
    // console.log(data);
}
// getUser();

const getRepos = async(username)=>{
    const response = await fetch(APIURL+username+"/repos");
    const data = await response.json();
    cardData = data;
    // console.log(data);
    postMethods();
}

getRepos();


const postContainer = document.querySelector(".repo-wrapper");

const postMethods = ()=>{
    cardData.map((postData)=>{
        const postElement = document.createElement('div');
        postElement.classList.add('repo-card');
        description = String(postData.description)
        if(description.length <= 100){
            postElement.innerHTML = `
            <a href="${postData.url}" class="repo-card-heading">${postData.name}</a>
            <p class="repo-desc" >${(postData.description)}</p>
            <span class="repo-program">${postData.language}</span>
            
        `
        // console.log(postData)
        postContainer.appendChild(postElement);
        }
        else{
            postElement.innerHTML = `
            <a href="${postData.url}" class="repo-card-heading">${postData.name}</a>
            <p class="repo-desc" >${String(postData.description).slice(0,120)}</p>
            <span class="repo-program">${postData.language}</span>
            
        `
            // console.log(postData)
            postContainer.appendChild(postElement);
        }
        // postElement.innerHTML = `
        //     <a href="${postData.url}" class="repo-card-heading">${postData.name}</a>
        //     <p class="repo-desc" >${String(postData.description).slice(0,120)} ...</p>
        //     <span class="repo-program">${postData.language}</span>
            
        // `
        // // console.log(postData)
        // postContainer.appendChild(postElement);
    })
    cardData = [];
    // console.log(cardData)
}
//
// postMethods();
let thisPage = 1;
let limit = 10;
let list = document.querySelectorAll('.repo-wrapper .repo-card');
// console.log(list);
function loadItem(){
    let beginGet = limit * (thisPage -1);
    let endGet = limit *thisPage -1;
    list.forEach((item, key)=>{
        // console.log(item, key);
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
    // console.log(list);
    listPage();
}

loadItem();
function listPage(){
    let count = Math.ceil(list.length / limit);
    // console.log(count);
    document.querySelector('.listPage').innerHTML = '';
    // if(thisPage != 1){
    //     let prev = document.createElement('li');
    //     prev.innerHTML='PREV';
    //     prev.setAttribute('onclick', "changePage(" +(thisPage-1)+ ")");
    //     document.querySelector('.listPage').appendChild(prev);
    // }
    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
            // console.log(i)
        }
        newPage.setAttribute('onclick', "changePage(" + i+ ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    // if(thisPage != count && thisPage > 1){
    //     let next = document.createElement('li');
    //     next.innerHTML='NEXT';
    //     next.setAttribute('onclick', "changePage(" +(thisPage+1)+ ")");
    //     document.querySelector('.listPage').appendChild(next);
    // }
}
function changePage(i){
    thisPage = i;
    loadItem();
}