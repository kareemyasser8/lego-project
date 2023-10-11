import express from 'express';

const app = express();

app.use('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: '1',
            title: 'First ever server side post',
            content: 'This is coming from the server'
        },
        {
            id: '2',
            title: 'Second ever server side post',
            content: 'This is coming from the server'
        },
    ]
    res.status(200).json({
        message: 'Posts fetched successfully!!', posts: posts
    })

})


export default app;