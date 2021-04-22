import {Blog} from "../Blog";
import m1 from "../../images/map_1.png"
import m2 from "../../images/map_2.png"
import m3 from "../../images/map_3.png"
import m4 from "../../images/map_4.png"

export const Blog_SassMaps = ({tabIndexForBlog}) => {
    return (
        <Blog author="Miroslav" date="06/04/2021" tabIndexForBlog={tabIndexForBlog}
              title="Sass maps - How to generate class names from variables">
            <article>
                <ol className="flex">
                    <li>
                        <p>Create new map of variables in scss file.</p>
                        <img src={m1} alt=""/>
                    </li>
                    <li>
                        <p>Use looping to create wanted classes in scss file.</p>
                        <img src={m2} alt=""/>
                    </li>
                    <li>
                        <p>Check results in css file.</p>
                        <img src={m3} alt=""/>
                    </li>
                    <li>
                        <p>Use new classes in html/React component.</p>
                        <img src={m4} alt=""/>
                    </li>
                    <li>
                        <p> See results in browser:
                            <span className="Tred"> text </span>
                            <span className="Bgreen">text</span> <span> </span>
                            <span className="Bred Tblue">text</span>
                        </p>
                    </li>
                </ol>
                <p className="center">More info in the <a href="https://sass-lang.com/documentation/values/maps" target="_blank">official documentation</a>.</p>
            </article>
        </Blog>
    )
}