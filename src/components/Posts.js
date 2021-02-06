// import './Posts.css'
import Post from './Post'
// Function name matches file name
const Posts = () => {
    // return must have one parent element
    const more_posts = [
        { fav_color: 'black', new_value: 'Amber' },
        { fav_color: 'red', new_value: 'Tara' },
        { fav_color: 'yellow', new_value: 'Will' }
    ]
    return (
        <section>
            Post Component - Wrapper for Post
            <Post fav_color="Orange" new_value="Tara, " />
            <Post fav_color="Red" new_value="Young, " />
            {more_posts.map((post) => {
                return <Post fav_color={post.fav_color} new_value={post.new_value} />
            })}

        </section >
    )
}

// Makes it available for import
export default Posts;