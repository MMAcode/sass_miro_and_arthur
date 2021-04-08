export const Blog = (props) => {
    return (
        <div className="blog">
            <p className="date">date: xy</p>
            {props.children}
        </div>
    );
}