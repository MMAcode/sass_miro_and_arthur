import logo from './logo.svg';
import './App.css';
import './css/style.css';
import {Header} from "./components/Header";
import {BlogsWrapper} from "./components/BlogsWrapper";
import {Blog} from "./components/Blog";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
        <body>
        <Header/>
        <BlogsWrapper>
            <Blog>
                <h2>Blog title</h2>
                <article>blog text</article>
            </Blog>
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
