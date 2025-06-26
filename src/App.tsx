import ReactDOM from "react-dom/client";

import "./index.css";
import SignupForm from "./pages/auth/sign-up/CreateAccount.tsx";

const App = () => {
    return <SignupForm />
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
