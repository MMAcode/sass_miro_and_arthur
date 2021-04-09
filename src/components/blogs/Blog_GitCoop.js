import {Blog} from "../Blog";

export const Blog_GitCoop = () => {
    return (
        <Blog author="Miroslav">
            <h2>Steps to synchronise git branches</h2>
            <article>
                $ git checkout main
                <br/>
                <br/>$ git pull
                <br/>
                <br/>$ git checkout miro
                <br/>$ git rebase main
                <br/>
                <br/>$ git checkout main
                <br/>$ git merge miro
                <br/>$ git push
                <br/>
                <br/>$ git checkout miro

            </article>
        </Blog>
    )
}