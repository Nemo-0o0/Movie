function Header() {
    return (
        <div className="p-4 bg-black flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <h1 className="text-[40px] uppercase font-bold text-red-700">Movie</h1>
                <nav className="flex items-center space-x-4">
                    <a href="#" className="text-sm font-medium text-gray-300 hover:text-gray-400">
                        Home
                    </a>
                    <a href="#" className="text-sm font-medium text-gray-300 hover:text-gray-400">
                        About
                    </a>
                    <a href="#" className="text-sm font-medium text-gray-300 hover:text-gray-400">
                        Contact
                    </a>
                </nav>
            </div>
            {/* Input */}
            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Search" className="p-3 text-black " />
                <button className="p-2 bg-red-700 text-white rounded-md">Search</button>
            </div>
        </div>
    );
}

export default Header;
