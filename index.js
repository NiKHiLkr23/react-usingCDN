

function Header() {
    return (
        <header>
            <nav className="flex items-center bg-[#21222A] h-24 py-8 px-6">
                <img src="react-icon-small.png" className="h-11 mr-3" />
                <p className="text-[#61DAFB] mr-auto text-xl font-bold m-0">React Facts</p>
                <a href="https://reactjs.org/docs/cdn-links.html" className="text-gray-200 font-semibold m-0 hover:text-blue-300 hover:ease-in transition hover:duration-100">React CDN</a>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div className="py-14 px-10">
            <p className="text-white text-4xl m-0 tracking-tighter">Fun facts about React</p>
            <ul className="list-disc marker:text-[#61DAFB] text-gray-200 mt-5 max-w-md">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 199K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

function Footer() {
    return (
        <footer className="flex justify-center">
            <small className="text-gray-400">© 2022 NiKHiL </small>
        </footer>
    )
}

function App() {
    return (
        <div className="bg-[url('react-icon-large.png')] bg-no-repeat bg-[right_10rem]">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(<App />)