export const Header = () => {
    return (
        <nav className="header">
            <div className="logo"><a href="">SCSS</a></div>
            <div><a href="">Home</a></div>
            <div><a href="">About</a></div>
            <div><button className="btn-primary">Login</button></div>
            <a href="javascript:void(0);" className="icon" onClick="myFunction()">
                <i className="fa fa-bars"></i>
            </a>
        </nav>
    );
}