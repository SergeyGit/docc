// import namor from "namor"

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

// const newPerson = () => {
//     const statusChance = Math.random()
//     return
// }

export default function makeData(...lens) {
    const statusChance = Math.random()
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map((d) => {
            return {
                ...{
                    firstName: 'firstName',
                    lastName: 'lastName',
                    age: Math.floor(Math.random() * 30),
                    visits: Math.floor(Math.random() * 100),
                    progress: Math.floor(Math.random() * 100),
                    status:
                        statusChance > 0.66
                            ? 'relationship'
                            : statusChance > 0.33
                            ? 'complicated'
                            : 'single',
                },
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}
