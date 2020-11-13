const express = require('express')
const admin = require('firebase-admin')

const app = express()
const serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()



app.get('/posts', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')

  let posts = []
  db.collection('posts').orderBy('date', 'desc').get().then(snapshot => {
    snapshot.forEach(doc => {
      posts.push(doc.data())
    })
    response.send(posts)
  })
})

app.listen(process.env.PORT || 3000)
