let mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connect Success')
    })
    .catch((error) => {
        console.log(error)
    })

const schema = new mongoose.Schema({
    UserName: String,
    Email: String,
    Age : Number,
});

const user = new mongoose.model("user", schema );

var Users = [
    {
        UserName: "Akhenaton",
        Email : "lun123@yahoo.com",
        Age: 17,
    },
    {
        UserName: "Amateratsu888",
        Email : "sesame5@gmail.com",
        Age: 28,
    },
    {
        UserName: "Kangame",
        Email : "coconut85@hotmail.com",
        Age: 15,
    }
]

user.create(Users, (err, data) => err ?
    console.log(err) : console.log("Data saved", data))

// exportation de mon modèle
user.exports = user