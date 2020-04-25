require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5ea458c9dd50da0f76590d3f').then(() => {
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments( {completed: false })
    return count
}

deleteTaskAndCount('5ea35d941a28db036be66144').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})