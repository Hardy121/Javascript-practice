const actions = [
    "LOGIN",
    "CLICK",
    "CLICK",
    "LOGOUT",
    "CLICK",
    "LOGIN",
    "CLICK",
    "LOGOUT"
];

let isLogin = false;
let count = 0;
for (let i = 0; i < actions.length; i++) {
    const element = actions[i];
    if(element == "LOGIN"){
        isLogin = true
    }else if(element == "LOGOUT"){
        isLogin = false;
    }

    if(isLogin && element == "CLICK"){
        count++
    }
}
console.log(count)