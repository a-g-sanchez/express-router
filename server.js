const app = require('./src/app')
const port = 3000
// Express Routes
const userRouter = require('./routes/users')
app.use('/users', userRouter)




app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
