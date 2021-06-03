import './App.css';
import './css/style.css';
import {Header} from "./components/Header";
import {BlogsWrapper} from "./components/BlogsWrapper";
import {Blog} from "./components/Blog";
import {Blog_SassIntro} from "./components/blogs/Blog_SassIntro";
import {Blog_GitCoop} from "./components/blogs/Blog_GitCoop";
import {Blog_SassMaps} from "./components/blogs/Blog_SassMaps";
import {Blog_AccessibilityGuidelines} from "./components/blogs/Blog_AccessibilityGuidelines";
import {Blog_AccessibilityOurImplementation} from "./components/blogs/Blog_AccessibilityOurImplementation";
import { Blog_Responsive } from "./components/blogs/Blog_Responsive";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        <div>
        <Header/>
        <BlogsWrapper>
            <Blog_Responsive/>
            <Blog_AccessibilityOurImplementation/>
            <Blog_AccessibilityGuidelines/>
            <Blog author="Miro"
                  title="Does React and Sass have different purpose?">
                <article>I am not sure in React ans Sass are good friends as Sass is ment to style the whole scope, the whole project, but the idea behind react is to have kind
                of independent components - so that each React file should have it's own sass file. And some styles should be shared and some should be independent.
                The question is how much af a reusable components do we want to have... I guess</article>
            </Blog>
            <Blog_SassIntro/>
            <Blog_SassMaps/>
            <Blog_GitCoop/>
            <Blog title="Blog title">
                <article>blog text</article>
            </Blog>

        </BlogsWrapper>
        </div>

    </div>
  );
}

export default App;
