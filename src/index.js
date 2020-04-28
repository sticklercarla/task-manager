const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

//How to use Middleware
// app.use((req, res, next) => {
//     if (req.method == 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

//maintence call
// app.use((req, res, next) => {
//     res.status(503).send('Site unavailable for site maintenance!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5ea6fe94717e773f2d181a6a')
//     // await task.populate('owner').execPopulate()
//     // console.log(task)

//     const user = await User.findById("5ea6fdf046a8fa3ee7f21eb3")
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function () {
//     console.log(this)
//     return {}
// }
// console.log(JSON.stringify(pet))

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abcdsdf' }, 'thisismynewsecret', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewsecret')
//     console.log(data)
// }

// const myFunction = async () => {
//     const password = 'Banana123'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     // console.log(password)
//     // console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Banana123', hashedPassword)
//     // console.log(isMatch)
// }


// myFunction()

// carla -> fjdkjaljfnjaglajgk -> andrew
// mypass -> fjslakjflksdjfksdajflkdsaj (NOT reversible)