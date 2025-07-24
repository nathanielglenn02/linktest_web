// app/components/common/Navbar.tsx
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">LinkTest</div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="user-info">
                {/* Add user info icon or name here */}
                <img src="/profile-pic.jpg" alt="User" />
            </div>
        </nav>
    );
};

export default Navbar;
