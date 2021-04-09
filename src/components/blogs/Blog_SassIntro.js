import {Blog} from "../Blog";
// import s1 from "../../../public/images/mappings_1.png"
import s1 from "../../images/mappings_1.png"
export const Blog_SassIntro = ()=> {
    return (
        <Blog author="Miroslav">
            <h2>Sass intro / mapping / overview </h2>
            <article>
                <p>Sass can do many great things. Here we will learn some of them.</p>

                <ul>
                    <li>We can nest </li>
                    <li> use mappings, e.g. for different colours
                    <span className="Tred"> text </span>
                    <span className="Bgreen">text</span> <span className="Bred Tblue">text</span>
                    </li>
                </ul>
                <img src={s1}
                     // style={{width:'30px',height:'30px'}}
                     alt=""
                     // width="400" height="200"
                />
            </article>
        </Blog>
    )
}