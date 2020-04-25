const mongoose = require('mongoose')
const validator = require('validator')


const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task

// const task1 = new Task({
//     description: 'Brush Teeth'
  
// })

// task1.save().then(() => {
//     console.log(task1)
// }).catch((error) => {
//     console.log(error)
// })
