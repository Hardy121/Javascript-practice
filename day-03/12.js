const votes = [
    ["A", "B", "C"],
    ["B", "C"],
    ["C"],
    ["A", "C"]
];

const result = {}
let votePercentage = {}
let totalMembers = 0;
for (let i = 0; i < votes.length; i++) {
    const element = votes[i];

    for (let j = 0; j < element.length; j++) {
        const value = element[j];
        if (!result[value]) {
            result[value] = 0;
        }
        result[value] += 1;
        totalMembers += 1;
    }
}

const winner = {};
for (const key in result) {
    const value = result[key];
    const percentage = (value * 100) / totalMembers
    votePercentage[key] = percentage;
    if (percentage > 50) {
        winner[key] = percentage
    }
}
console.log("🚀 ~ winner:", winner) 