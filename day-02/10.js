const sessions = [
    { user: "A", start: 10, end: 20 },
    { user: "A", start: 30, end: 50 },
    { user: "B", start: 15, end: 25 },
    { user: "B", start: 40, end: 60 }
];

const result = {}

for (let i = 0; i < sessions.length; i++) {
    const element = sessions[i];
    
    if (!result[element.user]) {
        result[element.user] = {
            totalTime: 0,
            sessions: 0
        }
    }
    let time = element.end - element.start
     
    result[element.user].sessions += 1
    result[element.user].totalTime += time 
}
console.log("🚀 ~ result:", result)


// {
//   A: { totalTime: 30, sessions: 2 },
//   B: { totalTime: 30, sessions: 2 }
// }
