import Heading from "./component/Heading";
import HookContainer from "./component/HookContainer";
import UseRefHookComponent from './component/UseRefHookComponent'


function App() {
  return (
    <div>
      <Heading />
      <HookContainer>
        <UseRefHookComponent></UseRefHookComponent>
      </HookContainer>
    </div>
  );
}

export default App;
