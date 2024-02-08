
let user_name=document.querySelector("#GetUsername");
let profile=document.querySelector("#profile-pic")
let name=document.querySelector(".name");
let bio=document.querySelector(".bio");
let repos=document.querySelector(".repos")
let following=document.querySelector(".following")
let followers=document.querySelector(".followers")
let userlocation=document.querySelector(".location")
let btnclick=document.querySelector("button");
let box=document.querySelector(".box");


async function getprofile(user_name){
    let response=await fetch(`https://api.github.com/users/${user_name}`);
    let data=await response.json();
    console.log(data);  
    if(data.message=='Not Found'){
        alert("User Not Found");
       return ;
      }
      else{
        profile.src=data.avatar_url;
        name.innerText=data.name;
        bio.innerText=data.bio;
        repos.innerText=`Repositories: ${data.public_repos}`;
        following.innerText=`Following: ${data.following}`;
        followers.innerText=`Followers: ${data.followers} `;
        if(data.location!=null)
        {
          userlocation.innerText=`Location: ${data.location}`;
        }
      }
}
btnclick.addEventListener('click',()=>{
    getprofile(user_name.value);
})
