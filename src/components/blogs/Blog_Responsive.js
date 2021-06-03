import {Blog} from "../Blog";

export const Blog_Responsive = ({tabIndexForBlog}) => {
    return (
        <Blog author="Miro & Arthur"
              id="responsive"
              tabIndexForBlog={tabIndexForBlog}
              date="03/06/2021"
              title="Responsive Design - using REM units (and @media)">
            <article>
                <p>Default font size of everything os set to 20px</p>
                <p>Title here has font size of 2rem; titles in other articles have fixed size of 20px.</p>
                Title here has font size of 2rem; titles in other articles have fixed size of 20px.
                <p>We are using media query with breaking point of width of 700px. To visualise this change, we change also the background of this web-page changes to light-yellow. </p>

                <br/>
            </article>
        </Blog>
    )
}