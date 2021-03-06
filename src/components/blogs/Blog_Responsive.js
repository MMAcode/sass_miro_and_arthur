import {Blog} from "../Blog";
import {BorderGradient} from "../BorderGradient";

export const Blog_Responsive = ({tabIndexForBlog}) => {
    return (
        <Blog author="Miro & Arthur"
              id="responsive"
              tabIndexForBlog={tabIndexForBlog}
              date="03/06/2021"
              title="Responsive Design">
            <article>
                <h3 className="center" style={{paddingTop:'0px', marginTop:'0px'}}>(using REM units and @media queries)</h3>
                <p>Default <strong>font size</strong> of everything ( html &#123; font-size:} ) is set to 20px.</p>
                <p>Using a <strong>@media query</strong>, when 'screen-width' is &lt;= 700px, default font size is changed to 15px (and the background of this web-page changes to light-yellow).</p>

                <p><strong>Font sizes of this article</strong> is using responsive "rem" units (eg h2=2rem). Notice that when the screen width changes across the 'breaking point' of 700px width, the size of text in other articles stays the same, but the size of text in this article changes. This is due to the implemented 'rem' units. The actual size of a text using rem units (and also any other text, which doesn't have its font size specified) is determined by current default font size in the root html tag. Since we changed that size from original 20px to 15px, also all elements using rem units became smaller - 3/4 of their original size. </p>
                {/*<p>(You may also notice that <strong>normal text</strong> size changes. Since we didn't define any specific size for 'article' or 'p' tags, it is using default 20px for big screen and 10px for small.)</p>*/}
                {/*<p>This behaviour is implemented for demonstration purposes. Alternative/possibly better solution would be to make all/most of the elements use rem and other flexible units from the beginning.</p>*/}
                <BorderGradient>
                    <div style={{padding:'10px',
                        // border:'1px dotted black',
                        borderRadius:'5px'}}>
                        <h2 id="fullyResponsiveTitle">Fully responsive title</h2>
                        <p id="fullyResponsiveText" className="center">This title and text are using vw (view width) units.</p>
                    </div>
                </BorderGradient>
            </article>
        </Blog>
    )
}