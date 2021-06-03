import {Blog} from "../Blog";
import {BorderGradient} from "../BorderGradient";

export const Blog_AccessibilityOurImplementation = ({tabIndexForBlog}) => {
    return (
        <Blog author="Miroslav" date="06/04/2021" tabIndexForBlog={tabIndexForBlog}
              title="Accessibility - our implementation">
            <article>
                <h5>Using TAB keyword</h5>
                <p>To support visually inpaired people and make navigation on this page easier using TAB key, we changed
                    'tabIndex' of each blog's title into 0. By default, tab key would move user on blog's title, but
                    with this implementation, it picks our titles.</p>
                <p>Press TAB several times to experience this behaviour.</p>
                <br/>

                <p className="center">
                    Checkout how our webpage looked like before making any ux/accessibility changes
                        <a target="_blank" href="https://mmacode.github.io/sass_miro_and_arthur_before_ux_changes/"><h2
                            style={{display: 'inline'}}>here</h2></a>.
                </p>
            </article>
        </Blog>
    )
}