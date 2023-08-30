import "./styles.css";

// Components
import ClassComponent from "./components/ClassComponent/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent/FunctionalComponent";
import LoginForm from "./components/LoginForm/LoginForm";

// Types
import { LoginFormValuesType } from "./types/common";

export default function App() {
  const handleSubmit = (val: LoginFormValuesType) => {
    alert(JSON.stringify(val));
  };

  return (
    <div className="App">
      <ClassComponent>
        <LoginForm title="Class based component" handleSubmit={handleSubmit} />
      </ClassComponent>
      <FunctionalComponent>
        <LoginForm
          title="Function based component"
          handleSubmit={handleSubmit}
        />
      </FunctionalComponent>
    </div>
  );
}
