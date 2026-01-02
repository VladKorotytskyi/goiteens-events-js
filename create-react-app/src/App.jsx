import "./App.css";
import { PageBoard } from "./Components/PageBoard";
import data from "./upcoming-events.json";
import { AppTitle, Wrapper } from "./Components/PageBoard.styled";

function App() {
  return (
    <Wrapper className="App">
      <AppTitle>24th Core Worlds Coalition Conference</AppTitle>
      <PageBoard data={data} />
    </Wrapper>
  );
}

export default App;
