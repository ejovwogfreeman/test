import { Link } from 'react-router-dom'

const Navbar= () => {
    return(
        <nav className="navbar">
            <Link to="/" className='logo'><h1>GBgram.</h1></Link>
            <div className = "links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    padding: "8px",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
export default Navbar;