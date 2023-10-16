const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config()
const app = express()

const port = process.env.PORT || 5000;


// middleware
app.use(express.json());
app.use(cors());


// database 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r486pno.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASS)
async function run() {
  try {

    const client = new MongoClient(uri)
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const coffesCollection = client.db("coffesDB").collection('coffes')
    const usersCollection = client.db("coffesDB").collection('users')
   


    // api routes server
    app.get('/',(req,res)=>{
        res.send('Coffes server is running')
    })
    
// read data db

app.get('/coffes',async(req,res)=>{

  const cursor = coffesCollection.find();
  const query = await cursor.toArray();
  res.send(query)
})



    // create data

    app.post('/coffes',async(req,res)=>{
      //  console.log(req.body)
       const coffes = req.body;
       const result = await coffesCollection.insertOne(coffes);
      res.send(result)


    })

    // get data for  users

    app.get('/userses',(req,res)=>{
      res.send('Users')
    })

// create data with users post

app.post('/users', async(req,res)=>{
  const users = req.body;
  //  console.log(users)
   const  result = await usersCollection.insertOne(users)
   res.send(result)
})

// read data users

app.get('/users',async(req,res)=>{
  
  const cursor = usersCollection.find();
  const query = await cursor.toArray();
  res.send(query)

})

// UPDATE USERS WITH PATCH

app.patch('/users',async(req,res)=>{

  const updateUsers = req.body;
  const filter = {email: updateUsers.email}
  const options = { upsert: true };

  // p1-(https://server-rjhax89va-rajs-projects-d77d3858.vercel.app)
  //live-( https://server-ev4821yqx-rajs-projects-d77d3858.vercel.app)
  const updateDoc = {
    $set: {
     
      lastSignInAt:updateUsers.lastSignInAt,
      uid:updateUsers.uid,
      name:updateUsers.name

    },
  };


  const result =  await usersCollection.updateOne(filter,updateDoc,options)
  

   res.send(result);


})


// delete users

app.delete('/users/:id',(req,res)=>{

   console.log(req.params.id)
   const id = req.params.id;
   const filter = {_id:new ObjectId(id)}

   const result =  usersCollection.deleteOne(filter)
   res.send(result)


})




    // get coffe with id

    app.get('/coffes/:id',async(req,res)=>{

        const id = req.params.id;
        const query = {_id:new ObjectId(id)}
        const result = await coffesCollection.findOne(query)
        res.send(result)
    })


    // update coffes with id


    app.put('/coffes/:id',(req,res)=>{
              const id = req.params.id
              const coffes = req.body;
            const filter = {_id:new ObjectId(id)}
            const options = { upsert: true };

            const updateDoc = {
              $set: {
            
                 name:  coffes.name,
                 chief:  coffes.chief,
                 supplier:  coffes.supplier,
                 taste:  coffes.taste,
                 category:  coffes.category,
                 details:  coffes.details,
                 photo:  coffes.photo,
              },
            };
           const result = coffesCollection.updateOne(filter,updateDoc,options);

           res.send(result)

       
    })



    // delete

    app.delete('/coffes/:id',async(req,res)=>{
    
                const id = req.params.id;
                const query = {_id:new ObjectId(id)}
                const result = await coffesCollection.deleteOne(query)
                res.send(result)
                console.log(id)

    
    })





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);







app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
