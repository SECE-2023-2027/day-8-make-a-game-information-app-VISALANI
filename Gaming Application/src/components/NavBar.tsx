export default function NavBar() {
    return (
        <nav className="flex justify-between px-8 py-4 bg-gray-900 text-white">
            <div className="text-xl font-bold">🎮 GameZone</div>
            <ul className="flex gap-6 items-center">
                {['Home', 'Contact', 'About', 'Logout'].map((item) => (
                    <li key={item}>
                        <a className="hover:text-yellow-400 transition-all duration-200 cursor-pointer">{item}</a>
                    </li>
                ))}
                <li>
                    <a className="bg-blue-500 hover:bg-blue-700 px-4 py-1 rounded-lg transition-all duration-200 cursor-pointer">Login</a>
                </li>
                <li>
                    <a className="bg-green-500 hover:scale-110 px-4 py-1 rounded-lg transition-transform duration-200 cursor-pointer">Signup</a>
                </li>
            </ul>
        </nav>
    );
}
