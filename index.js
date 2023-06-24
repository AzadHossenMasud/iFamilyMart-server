const express = require('express')
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()
const cors = require('cors')

// 
app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://familymart:qsfYqnJHW0UpTdgy@cluster0.2kitjkk.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
  try {
    const productCollection = client.db('familyMart').collection('products')
    const brandListCollection = client.db('familyMart').collection('brandList')
    const productGroupCollection = client.db('familyMart').collection('productGroup')

    // get All Brands
    app.get('/brandname', async (req, res) => {
      const query = {};
      const cursor = brandListCollection.find(query);
      const result = await cursor.toArray()
      // console.log(result);
      res.send(result)
    })

    // Add Brand Name
    app.post('/brandname', async (req, res) => {
      const brandName = req.body
      // console.log(brandName);
      const result = await brandListCollection.insertOne(brandName)
      // console.log(result)
      res.send(result)
    })



     // get Product Groups
     app.get('/productgroup', async (req, res) => {
      const query = {};
      const cursor = productGroupCollection.find(query);
      const result = await cursor.toArray()
      // console.log(result);
      res.send(result)
    })

    // Add product group
    app.post('/productgroup', async (req, res) => {
      const productGroup = req.body
      // console.log(productGroup);
      const result = await productGroupCollection.insertOne(productGroup)
      // console.log(result)
      res.send(result)
    })

  

//  Products
    app.get('/products', async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const result = await cursor.toArray()
      // console.log(result);
      res.send(result)
    })


    app.post('/products', async (req, res) => {
      const productInfo = req.body
      // console.log(productGroup);
      const result = await productCollection.insertOne(productInfo)
      console.log(result)
      res.send(result)
    })

    app.delete('/products/:id', async (req, res) => {
      const id = req.params.id
      console.log(id)
      const query = { _id: new ObjectId(id) }
      const result = await productCollection.deleteOne(query)
      console.log(result);
      res.send(result)

    })

    // app.get('/allservices', async (req, res) => {
    //   const query = {};
    //   const options = {
    //     sort: {
    //       name: 1
    //     }
    //   }
    //   const cursor = serviceCollection.find(query, options);
    //   const result = await cursor.toArray()
    //   // console.log(result);
    //   res.send(result)
    // })

    // app.get('/services/:id', async (req, res) => {
    //   const id = req.params.id
    //   const query = { _id: ObjectId(id) }
    //   const result = await serviceCollection.findOne(query)
    //   // console.log(result);
    //   res.send(result)
    // })

    // app.get('/givereview/:id', async (req, res) => {
    //   const id = req.params.id
    //   const query = { _id: ObjectId(id) }
    //   const result = await serviceCollection.findOne(query)
    //   // console.log(result);
    //   res.send(result)
    // })

    // app.get('/updatereview/:id', async (req, res) => {
    //   const id = req.params.id
    //   const query = { _id: ObjectId(id) }
    //   const result = await reviweCollection.findOne(query)
    //   console.log(result);
    //   res.send(result)
    // })



    // app.get('/reviews', async (req, res) => {
    //   const courseId = req.query.courseId
    //   // console.log(courseId);
    //   const query = { courseId: courseId };
    //   const cursor = reviweCollection.find(query);
    //   const result = await cursor.toArray()
    //   // console.log(result);
    //   res.send(result)
    // })

    // app.get('/myreviews', async (req, res) => {
    //   const email = req.query.email
    //   // console.log(email);
    //   const query = { email: email };
    //   const cursor = reviweCollection.find(query);
    //   const result = await cursor.toArray()
    //   // console.log(result);
    //   res.send(result)
    // })
    // // Post a review
    // app.post('/review', async (req, res) => {
    //   const review = req.body
    //   const result = await reviweCollection.insertOne(review)
    //   // console.log(result)
    //   res.send(result)
    // })
    // // add service
    // app.post('/addservice', async (req, res) => {
    //   const review = req.body
    //   const result = await serviceCollection.insertOne(review)
    //   // console.log(result)
    //   res.send(result)
    // })

    // // Update a review
    // app.patch('/updatereview/:id', async (req, res) => {
    //   const id = req.params.id
    //   const updateReview = req.body.updateText
    //   const query = { _id: ObjectId(id) }
    //   const updateDoc = {
    //     $set: {
    //       review: updateReview
    //     }
    //   }

    //   const result = await reviweCollection.updateOne(query, updateDoc)
    //   // console.log(result)
    //   res.send(result)
    // })

    // Delete a review
    


  }
  finally {

  }
}

run().catch(console.dir);






app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// familymart
// qsfYqnJHW0UpTdgy