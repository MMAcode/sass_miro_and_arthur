import React from 'react';
export const BlogsWrapper = (props) => {
    let x=0;
    const children2 = React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            tabIndexForBlog: 0
        });
    });
    // tabIndexForBlog
    return (
        <div className="blogsWrapper">
            <h1 style={{fontSize:'60px'}}>Articles</h1>
            {/*{props.children}*/}
            {children2}
        </div>
    );
}