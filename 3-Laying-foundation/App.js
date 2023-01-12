import React from "react";
import ReactDOM from "react-dom/client";


const NestedHeadingJSX = ({ title }) => {
    return (
        <div>
            <h1>
                Hi,
                <h2>
                    <h3 id="title">Welcome to, {title}</h3>
                </h2>
            </h1>
        </div>
    );
};

const HeaderComponent = () => {
    return (
        <div style={{ display: "flex", backgroundColor: '#ddd' }}>
            <img
                className="logo"
                src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6"
                alt="logo"
            />
            <div className="search-container">
                <input type="text" placeholder="You can search here..." className="search-input" />
                <button type="submit">Search</button>
            </div>

            <img
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                alt="user-icon"
                className="userIcon"
            />
        </div>
    );
};

const App = () => {
    return (
        <>
            <HeaderComponent />
            <NestedHeadingJSX title={"Namasate React Assignments"} />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
