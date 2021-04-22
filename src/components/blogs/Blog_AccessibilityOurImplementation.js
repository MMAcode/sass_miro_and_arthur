import {Blog} from "../Blog";
export const Blog_AccessibilityOurImplementation = ({tabIndexForBlog}) => {
    return (
        <Blog author="Miroslav" date="06/04/2021" tabIndexForBlog={tabIndexForBlog}
              title="Accessibility - our implementation">
            <article className="center">
                Checkout how our webpage looked like before making any ux/accessibility changes <a target="_blank" href="https://mmacode.github.io/sass_miro_and_arthur_before_ux_changes/" ><h2 style={{display:'inline'}}>here</h2></a>.
            </article>
        </Blog>
    )
}