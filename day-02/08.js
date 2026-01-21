const users = [
    {
        id: 1,
        name: "John Doe",
        isActive: true,
        roles: ["admin", "users"],
        profile: {
            location: "SY",
            othr: {
                notification: true,
                darkMode: false
            }
        },
        friends: [2, 3]
    },
    {
        id: 2,
        name: "Jane Smith",
        isActive: false,
        roles: ["users"],
        profile: {
            location: "US",
            othr: {
                notification: false,
                darkMode: true
            }
        },
        friends: [1, 4]
    },
    {
        id: 3,
        name: "Ali Hassan",
        isActive: true,
        roles: ["editor", "users"],
        profile: {
            location: "AE",
            othr: {
                notification: true,
                darkMode: true
            }
        },
        friends: [1]
    },
    {
        id: 4,
        name: "Maria Garcia",
        isActive: true,
        roles: ["guest"],
        profile: {
            location: "ES",
            othr: {
                notification: false,
                darkMode: false
            }
        },
        friends: [2, 3]
    }
];

let result = {
    updatedUsers: [],
    InactiveUsersFriends: [],
    rolebaseAnalysis: {},
    location: {}
}

for (let i = 0; i < users.length; i++) {
    const element = users[i];

    let isActive = element.isActive

    // updatedUsers
    if (isActive && !element.roles.includes("guest")) {
        result.updatedUsers.push({
            ...element,
            profile: {
                location: element.profile.location,
                othr: {
                    notification: element.profile.othr.notification == true ? false : true,
                    darkMode: element.profile.othr.darkMode
                }

            }
        })
    }

    // InactiveUsersFriends
    if (!element.isActive) {
        const { friends } = users[i];
        for (let j = 0; j < friends.length; j++) {
            result.InactiveUsersFriends.push(users.find(item => item.id == friends[j]))
        }
    }

    // rolebaseAnalysis
    const { roles } = users[i];
    for (let r = 0; r < roles.length; r++) {
        const role = roles[r];
        if (!result.rolebaseAnalysis[role]) {
            result.rolebaseAnalysis[role] = 0
        }
        result.rolebaseAnalysis[role] += 1
    }

    // location
    if (!result.location[element.profile.location]) {
        result.location[element.profile.location] = [element];
    } else {
        result.location[element.profile.location].push(element)
    }

}

console.dir(result, { depth: null });