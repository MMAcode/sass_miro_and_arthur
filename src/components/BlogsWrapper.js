export const BlogsWrapper = (props) => {
    return (
        <div className="blogsWrapper">
            <h1>Articles</h1>
            {props.children}
        </div>
    );
}