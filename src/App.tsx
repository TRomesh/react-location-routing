import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import Home from "./pages/Home";
import Error from "./components/error/Error";
import Countries from "./pages/Countries";
import Country from "./pages/Country";
import Loader from "./components/loader/Loader";
import Navigation from "./components/navigation/Navigation";
import { getCountries, getCountry } from "./services";
import { ReactLocationSimpleCache } from "@tanstack/react-location-simple-cache";
import { ReactLocationDevtools } from "@tanstack/react-location-devtools";

// Set up a ReactLocation SimpleCache instance
const routeCache = new ReactLocationSimpleCache();
// Set up a ReactLocation instance
const location = new ReactLocation();

function App() {
  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: <Home /> },
        {
          path: "countries",
          element: <Countries />,
          loader: routeCache.createLoader(
            async () => {
              let { data } = await getCountries();
              return {
                countries: data,
              };
            },
            {
              maxAge: 1000 * 10, // 10 seconds
            }
          ),
          pendingElement: async () => <Loader />,
          pendingMs: 1000 * 2, // 2 seconds
          errorElement: <Error />,
          children: [
            { path: "/", element: <div>Select Country</div> },
            {
              path: ":code",
              element: <Country />,
              loader: async ({ params: { code } }) => {
                let { data } = await getCountry(code);
                return {
                  country: data,
                };
              },
              errorElement: <Error />,
            },
          ],
        },
      ]}
    >
      <Navigation>
        <Outlet /> {/* Start rendering router matches */}
        <ReactLocationDevtools /> {/* enable Devtools */}
      </Navigation>
    </Router>
  );
}

export default App;
