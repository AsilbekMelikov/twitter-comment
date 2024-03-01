import './AppHeader.css'
const AppHeader = ({allPosts,likes}) => {

    return (
        <div className='app-header d-flex'>
            <h1>Comments on Twitter</h1>
            <h2>
                {allPosts === 0 ? 'No posts, ' : (allPosts === 1 ? `${allPosts} post, ` : `${allPosts} posts, `)}
                {likes === 0 ? 'No likes' : (likes === 1 ? `${likes} like` : `${likes} likes`)}
            </h2>
        </div>
    )
}

export default AppHeader