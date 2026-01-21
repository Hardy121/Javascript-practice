const users = [
    { id: 1, name: "A", purchases: [100, 200] },
    { id: 2, name: "B", purchases: [] },
    { id: 3, name: "C", purchases: [50] }
];

let result = {
    totalUsers: 0,
    usersWithPurchases: 0,
    revenue: 0,
    avgPurchasePerUser: 0
}

for (let i = 0; i < users.length; i++) {
    const element = users[i];

    result.totalUsers += 1;
    if (element.purchases.length > 0) {
        result.usersWithPurchases += 1;
    }

    for (let j = 0; j < element.purchases.length; j++) {
        result.revenue += element.purchases[j]
    }

    result.avgPurchasePerUser = result.revenue / result.usersWithPurchases

}
console.log(result)

// {
//   totalUsers: 3,
//   usersWithPurchases: 2,
//   revenue: 350,
//   avgPurchasePerUser: 175
// }
