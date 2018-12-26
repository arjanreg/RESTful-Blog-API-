module.exports = {
    getComments(req, res) {
        res.status(200).send(req.store.posts[req.params.postId].comments)
    },
    
    addComment(req, res) {
        if(req.store.posts[req.params.postId].comments == undefined) {
            req.store.posts[req.params.postId].comments = []
        }
        req.store.posts[req.params.postId].comments.push(req.body)
        let id = req.store.posts[req.params.postId].comments.length
        res.status(201).send({id: id})
    },
    
    updateComment(req, res) {
        req.store.posts[req.params.postId].comments[req.params.commentId] = req.body
        res.status(200).send(req.store.posts[req.params.postId].comments[req.params.commentId])
    },
    
    removeComment(req, res) {
        req.store.posts[req.params.postId].comments[req.params.commentId].splice(req.params.commentId, 1)
        res.status(204).send()
    }
}