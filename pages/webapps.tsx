import { useState, createContext, useEffect } from "react";
import About from "../app/Components/About/About";
import Notification from "../app/Components/Misc/Notification";
import Navbar from "../app/Components/Navbar/Navbar";
import { TGlobalContext } from "../app/Components/Utility/types";
import WebApps from "../app/Components/Webapps/WebAppsHub";
import R from "../app/Routes/Route";
// import Main from "../app/Routes/Main";

const defaultValue = {
    sendNotif: () => {
        throw new Error("Global Context is set to default");
    },
};
export const GlobalContext = createContext<TGlobalContext>(defaultValue);

function App() {
    const [notif, sendNotif] = useState<string>("");

    return (
        <GlobalContext.Provider value={{ sendNotif }}>
            <Navbar />
            {/* <Main /> */}
            <R component={<WebApps />} />
            <Notification notif={notif} sendNotif={sendNotif} />
        </GlobalContext.Provider>
    );
}

export default App;
