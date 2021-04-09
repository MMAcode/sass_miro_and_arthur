export const BlogsWrapper = (props) => {
    return (
        <div className="blogsWrapper">
            <h1>Articles</h1>
            <p>Blog tips: title: h2; body: article</p>
            {props.children}
        </div>
    );
}