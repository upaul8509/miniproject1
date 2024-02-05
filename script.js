let isStatus= document.querySelector("h5");
let addFriend=document.querySelector("#Add");
let flag=true;
btn.addEventListener("click",()=>{
    if(flag){
    isStatus.innerText="Friends";
    isStatus.style.color="green";
    flag=false;
    btn.innerText="Remove Friend";
    }
    else {
        isStatus.innerText="Stranger";
        isStatus.style.color="red";
        flag=true;
        btn.innerText="Add Friend";
    }
})
