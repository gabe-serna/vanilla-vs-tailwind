import { Code, Heading1, Paragraph } from "./components/Typography";

function App() {
  return (
    <>
      <Heading1>Heading</Heading1>
      <Paragraph>Paragraph</Paragraph>
      <Code caption={"Vanilla CSS"} className="w-1/3">
        Code {"\n"}apple{"\n"}apple
      </Code>
    </>
  );
}

export default App;
