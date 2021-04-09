import './App.css';
import './css/style.css';
import {Header} from "./components/Header";
import {BlogsWrapper} from "./components/BlogsWrapper";
import {Blog} from "./components/Blog";
import {Blog_SassIntro} from "./components/blogs/Blog_SassIntro";
import {Blog_GitCoop} from "./components/blogs/Blog_GitCoop";
import {Blog_SassMaps} from "./components/blogs/Blog_SassMaps";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        <body>
        <Header/>
        <BlogsWrapper>
            <Blog author="Miro">
                <h2>Does React and Sass have different purpose?</h2>
                <article>I am not sure in React ans Sass are good friends as Sass is ment to style the whole scope, the whole project, but the idea behind react is to have kind
                of independent components - so that each React file should have it's own sass file. And some styles should be shared and some should be independent.
                The question is how much af a reusable components do we want to have... I guess</article>
            </Blog>

            <Blog_SassIntro/>
            <Blog_SassMaps/>
            <Blog_GitCoop/>
            <Blog>
                <h2>Blog title</h2>
                <article>blog text</article>
            </Blog>

        </BlogsWrapper>
        </body>

    </div>
  );
}

export default App;
