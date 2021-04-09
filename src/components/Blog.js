export const Blog = (props) => {
    return (
        <div className="blog">
            <div className="blogHeader">
                <p>Published: {props.date ? props.date : new Date().toLocaleDateString()}</p>
                <p>by: {props.author ? props.author : "unknown"}</p>
            </div>

            {props.children}


        </div>
    );
}