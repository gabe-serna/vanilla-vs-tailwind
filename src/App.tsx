import {
  Code,
  CodeBlock,
  Heading1,
  Output,
  Paragraph
} from "./components/Typography";

function App() {
  return (
    <>
      <Heading1>How to Write CSS 10x Faster in 5 minutes</Heading1>
      <Paragraph className="mt-6">
        If you want to write CSS Faster you need:{" "}
        <strong className="font-medium">TailwindCSS</strong>.
      </Paragraph>
      <Paragraph>Look at the example below to see</Paragraph>
      <CodeBlock>
        <Code caption={"Vanilla CSS"} className="">
          {"/* CSS */\nbody {\n  background-color: #f0f0f0;\n}"}
        </Code>
        <Output className="w-1/2 h-72">h1</Output>
      </CodeBlock>
    </>
  );
}

export default App;
