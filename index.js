function Header(props) {
  return (
    <header>
      <nav
        className={`flex items-center dark:bg-red-300 h-24 py-8 px-6 ${
          props.darkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <img src="react-icon-small.png" className="h-11 mr-3" />
        <p className=" mr-auto text-xl font-bold m-0">React Facts</p>
        <a
          href="https://reactjs.org/docs/cdn-links.html"
          className="text-gray-400 font-semibold m-0 hover:text-blue-300 hover:ease-in transition hover:duration-100 mr-10"
        >
          React CDN
        </a>
        <div className="flex items-center">
          <p
            className={`font-semibold text-xs ${
              props.darkMode ? "text-gray-900" : "text-gray-900"
            } `}
          >
            Light
          </p>
          <div
            className={`w-5 h-1 p-1 m-2 rounded-lg cursor-pointer flex items-center border-2 border-solid box-content ${
              props.darkMode
                ? "bg-[#F5F5F5] border-white justify-end"
                : "bg-[#2B283A] border-black justify-start"
            } `}
            onClick={props.darkToggle}
          >
            <div
              className={` h-2 w-2 rounded-lg ${
                props.darkMode ? "bg-white" : "bg-black"
              }`}
            ></div>
          </div>
          <p
            className={`text-xs ${
              props.darkMode ? "text-white" : "text-white"
            } `}
          >
            Dark
          </p>
        </div>
      </nav>
    </header>
  );
}

function MainContent(props) {
  return (
    <section
      className={`py-14 px-10 ${props.darkMode ? "dark-mode" : "light-mode"}`}
    >
      <p
        className={`text-4xl m-0 tracking-tighter ${
          props.darkMode ? "text-gray-200" : "text-black"
        }`}
      >
        Fun facts about React
      </p>
      <ul
        className={`list-disc ${
          props.darkMode
            ? "marker:text-sky-400 text-gray-200"
            : "marker:text-[#61DAFB] text-black"
        }  mt-5 max-w-md`}
      >
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 199K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer
      className={`flex justify-center ${
        props.darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <small className="p-2">© 2022 NiKHiL </small>
    </footer>
  );
}

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function darkToggle() {
    setDarkMode(!darkMode);
  }
  return (
    <div
      className={`w-screen h-screen ${darkMode ? "dark-mode" : "light-mode"} `}
    >
      <div className="h-full w-full lg:pt-20 lg:mx-auto lg:max-w-2xl md:pt-10 md:mx-auto md:max-w-3xl">
        <Header darkMode={darkMode} darkToggle={darkToggle} />
        <MainContent darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
