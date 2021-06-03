export const Blog = (props) => {
    console.log(props);
    return (
        <div className="blog" id={props.id}>
            <div className="blogHeader">
                <p>Published: {props.date ? props.date : new Date().toLocaleDateString()}</p>
                <p>by: {props.author ? props.author : "unknown"}</p>
            </div>
            <h2 tabIndex={props.tabIndexForBlog}>{props.title}</h2>
            <div className="blogMain">
                {props.children}
            </div>
        </div>
    );
}