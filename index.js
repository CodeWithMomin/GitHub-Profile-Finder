let user_name=document.querySelector("#GetUsername");
let btnclick=document.querySelector("button");
let box=document.querySelector(".box");
//let user_name="CodeWithMomin";
let outputBox=document.createElement("div");
   outputBox.className+="outputBox";
  box.appendChild(outputBox);
  let profilePic=document.createElement("div");
  profilePic.className+="profile-pic";
  outputBox.appendChild(profilePic);
  let img=document.createElement("img");
  img.className+="image";
  profilePic.appendChild(img);
  let infoBox=document.createElement("div");
  //infoBox
  infoBox.className+="infoBox";
  outputBox.appendChild(infoBox);
  //Name
  let Name=document.createElement("p");
  Name.className+="Name";
  infoBox.appendChild(Name);
  let Bio=document.createElement("p");
  Bio.className+="Bio";
  infoBox.appendChild(Bio);
  let repos=document.createElement("p");
  repos.className+="repos";
  infoBox.appendChild(repos);
  let followers=document.createElement("p");
  followers.className+="followers";
  infoBox.appendChild(followers);
  let following=document.createElement("p");
  following.className+="following";
  infoBox.appendChild(following);


    async function getprofile(user_name){
        let response=await fetch(`https://api.github.com/users/${user_name}`);
    let data= await response.json();
   console.log(data);
   if(data.message=='Not Found'){
     alert("User Not Found");
    return ;
   }
   else{
     img.src=data.avatar_url;
     Name.innerText=data.name;
    Bio.innerText=data.bio;
    repos.innerText=` ${data.public_repos} Repositories`;
    //repos.innerText=data.public-repos;
    followers.innerText=` ${data.followers}   Followers`;
    following.innerText=`${data.following}  Following `;
   
   }
    
}


btnclick.addEventListener('click',()=>{
    getprofile(user_name.value);
})
window.addEventListener("load",()=>{
    getprofile(user_name.value);
    })