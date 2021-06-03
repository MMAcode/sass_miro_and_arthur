import {Blog} from "../Blog";

export const Blog_Responsive = ({tabIndexForBlog}) => {
    return (
        <Blog author="Miro & Arthur"
              id="responsive"
              tabIndexForBlog={tabIndexForBlog}
              date="03/06/2021"
              title="Responsive Design - using REM units and @media queries">
            <article>
                <p>Default <strong>font size</strong> of everything ( html &#123; font-size:} ) is set to 20px, only blog title (h2) of all normal articles is set to 40px.</p>
                <p>Using a <strong>@media query</strong>, when 'screen-width' is &lt;= 700px, default font size is changed to 10px, title/h2 size stays the same - 40px - and the background of this web-page changes to light-yellow).</p>

                <p><strong>Title/h2 of this article</strong> is using responsive "rem" units (h2=2rem). Notice that when the screen width changes across the 'breaking point' of 700px width, sizes of titles of other articles stay the same, but size of title of this article changes. This is due to the implemented 'rem' units. The actual size of this title/h2 is determined by current default size. Since we changed that size from orignal 20px to 10px, also all elements using rem units will change - will be halved. </p>
                <p>(You may also notice that <strong>normal text</strong> size changes. Since we didn't define any specific size for 'article' or 'p' tags, it is using default 20px for big screen and 10px for small.)</p>
                <p>This behaviour is implemented for demonstration purposes. Alternative/possibly better solution would be to make all/most of the elements use rem and other flexible units from the beginning.</p>
            </article>
        </Blog>
    )
}