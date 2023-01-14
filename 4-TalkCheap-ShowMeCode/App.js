import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { resturantList } from "./constants";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6"
        alt="logo"
      />
      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About</li>
          <li> Contact</li>
          <li> Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = () => {
  return (
    <>
      <div className="resturantCardContainer">
        {resturantList.map((restuant) => (
          <div class="card">
            <img
              style={{ height: "150px" }}
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                restuant.data.cloudinaryImageId
              }
            />
            <div className="cardDiv">{restuant.data.name}</div>
            <div className="cardDiv">{restuant.data.cuisines.join(", ")}</div>
            <div className="cardDiv">
              {restuant.data.lastMileTravelString} minutes
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search.."
          name="search"
        />
        <button type="submit">Search</button>
      </div>

      <ResturantCard />
    </>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
