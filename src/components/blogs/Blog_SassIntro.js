import {Blog} from "../Blog";

export const Blog_SassIntro = ({tabIndexForBlog})=> {
    return (
        <Blog author="Miroslav"  tabIndexForBlog={tabIndexForBlog}
              title="Sass intro / mapping / overview">
            <article>
                <p>Sass can do many great things. Here we will learn some of them.</p>

                <ul>
                    <li>We can nest </li>
                    <li> use mappings, e.g. for different colours
                    <span className="Tred"> text </span>
                    <span className="Bgreen">text</span>
                    <span className="Bred Tblue">text</span>
                    </li>
                </ul>

            </article>
        </Blog>
    )
}