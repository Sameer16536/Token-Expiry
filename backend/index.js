const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const port = 3000
const app = new express()
app.use(express.json())


//secret key
const JWT_SECRET = 'nfnoifada'

//Mock users::
const users = [
    {
        id: 1,
        username: 'user1',
        password: bcrypt.hashSync('password1', 8), 
    },
    {
        id: 2,
        username: 'user2',
        password: bcrypt.hashSync('password2', 8),
    },
];


//login:
app.post('/login', async (req, res) => {
    const { username, password } = req.body
    //find user:
    const user = users.find((u) => u.username === username)
    if (!user) {
        return res.status(401).json({ Error: "Invalid username or password" })
    }
    const isPassValid = bcrypt.compareSync(password, user.password)
    if (!isPassValid) {
        return res.json({ msg: "Invalid Password" })
    }
    //Token::
    const token = jwt.sign({id:user.id,username:user.username},JWT_SECRET,{expiresIn:'1h'})
    return res.json(token)
})

app.get('/protected', (req, res) => {
    // Get the token from the Authorization header
    const token = req.headers['authorization'];
   

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    // Verify the token
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Failed to authenticate token' });
      }
  
     
      res.json({ message: 'This is protected data', user: decoded });
    });
  });


  app.listen(port,()=>{
    console.log(`Server is listeninng at port:${port}`)
  })
