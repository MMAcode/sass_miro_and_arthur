import {Blog} from "../Blog";
export const Blog_AccessibilityGuidelines = () => {
    return (
        <Blog author="Miroslav" date="06/04/2021">
            <h2>Accessibility guidelines</h2>
            <article className="center">
                {/*<img className='accessibilityImg' src="https://accessibility.blog.gov.uk/wp-content/uploads/sites/52/2016/08/Karwai-blog-1-1.png" alt=''/>*/}
                <img className='accessibilityImg' src="https://raw.githubusercontent.com/UKHomeOffice/posters/2e2c5687f102deec5fd55e8af0cba44354f74771/accessibility/dos-donts/posters_en-UK/svg/deaf.svg" alt=''/>
                <img className='accessibilityImg' src="https://raw.githubusercontent.com/UKHomeOffice/posters/2e2c5687f102deec5fd55e8af0cba44354f74771/accessibility/dos-donts/posters_en-UK/svg/low-vision.svg" alt=''/>
                <img className='accessibilityImg' src="https://raw.githubusercontent.com/UKHomeOffice/posters/2e2c5687f102deec5fd55e8af0cba44354f74771/accessibility/dos-donts/posters_en-UK/svg/dyslexia.svg" alt=''/>
                <img className='accessibilityImg' src="https://raw.githubusercontent.com/UKHomeOffice/posters/2e2c5687f102deec5fd55e8af0cba44354f74771/accessibility/dos-donts/posters_en-UK/svg/motor-disabilities.svg" alt=''/>
                <img className='accessibilityImg' src="https://raw.githubusercontent.com/UKHomeOffice/posters/2e2c5687f102deec5fd55e8af0cba44354f74771/accessibility/dos-donts/posters_en-UK/svg/screenreader.svg" alt=''/>
                <img className='accessibilityImg' src="https://raw.githubusercontent.com/UKHomeOffice/posters/2e2c5687f102deec5fd55e8af0cba44354f74771/accessibility/dos-donts/posters_en-UK/svg/anxiety.svg" alt=''/>
                <img className='accessibilityImg' src="https://raw.githubusercontent.com/UKHomeOffice/posters/2e2c5687f102deec5fd55e8af0cba44354f74771/accessibility/dos-donts/posters_en-UK/svg/deaf.svg" alt=''/>
                <p className="center"> Images taken from <a href="https://github.com/UKHomeOffice/posters/tree/master/accessibility/dos-donts/posters_en-UK/svg">here</a>.</p>
            </article>
        </Blog>
    )
}