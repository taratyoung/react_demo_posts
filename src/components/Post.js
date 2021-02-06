// import './Posts.css'

// Function name matches file name
// const Post = (props) => {
    const Post = ({new_value, fav_color}) => {
    // return must have one parent element
    console.log(new_value)
    return (
        <div>
            {new_value} 
            {fav_color}
            This is a Post 
        </div>
    )
}

// Makes it available for import
export default Post;