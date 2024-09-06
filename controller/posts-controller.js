//APPLICTAION : >>>

const posts = [
    {
        title  : 'Angular 14',
        content : 'Angular 14 and angular 10',
        userId : '1',
        id : '123'
    },
    {
        title  : 'Rxjs and Ngrx',
        content : 'Rxjs and Ngrx',
        userId : '2',
        id : '124'
    }
]

//base url >> localhost:3000
//version url >> baseurl/api/v1/

// fetch all data 

exports.getAllPostsData = (req , res) => {
    res.status(200).json(posts)
}

// get single obj


exports.getSinglePost = (req , res) => {
    let postId = req.params.id;

    let getObj = posts.find(post => post.id === postId)
    res.status(200).json(getObj)
}

// create post

exports.createPost = (req, res) => {
    let newPost = req.body;
    let PostTitle = req.body.title
    posts.unshift(newPost);
    res.status(200).json({
        message  : `New Post ${PostTitle} is created successfully !!`,
        post : newPost
    })
}

// update obj

exports.updatePost = (req, res) => {
    let updateId = req.params['id']
    let updatedObj = req.body;

    let getUpdateIndex = posts.findIndex(post => post.id === updateId);
    posts[getUpdateIndex] = updatedObj;


    res.status(201).json({
        message : `Post with id ${updateId} is updated successfully`,
        post : updatedObj
    })
}

//delete post

exports.deletePost = (req,res) => {
    let removeId = req.params.id;

    let getRemoveIndex = posts.findIndex(post => post.id === removeId)

    posts.splice(getRemoveIndex , 1)

    res.status(200).json({
       message : `post with id ${removeId} is removed successfully!!!`
    })
}