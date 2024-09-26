import {
  Code,
  CodeBlock,
  Heading1,
  Heading2,
  ListItem,
  Output,
  Paragraph,
  TextColumn
} from "./components/Typography";

function App() {
  return (
    <>
      <section id="introduction">
        <Heading1>How to Write CSS 10x Faster in 5 Minutes</Heading1>
        <TextColumn>
          <Paragraph>
            Let's face it. Writing Vanilla CSS sucks. It's slow, tedious, and becomes
            nightmarish to maintain as the project grows.
          </Paragraph>
          <Paragraph>
            After this article, you'll never have to deal with that again, because
            I'm going to show you a CSS solution that allows you to write styles
            almost as fast as you think them.
          </Paragraph>
          <Paragraph className="mt-16">
            If you want to write CSS blazingly fast you need:{" "}
            <strong className="font-medium">TailwindCSS</strong>.
          </Paragraph>
          <Paragraph>
            With Tailwind, you style elements by applying pre-existing utlity classes
            directly in your HTML. If you've never seen styling like this before it
            might look like heresy at first, but I'm going to share 5 reasons why
            TailwindCSS will make you a much faster developer.
          </Paragraph>
        </TextColumn>
      </section>
      <section id="section-1">
        <TextColumn>
          <Heading2>There's Less to Write</Heading2>
          <Paragraph>
            Look at the example below to see the difference between how much code is
            needed in Vanilla CSS and TailwindCSS to create the same effect.
          </Paragraph>
        </TextColumn>
        <CodeBlock>
          <Code caption={"Vanilla CSS"}>
            {
              ".circle {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 1000px;\n  margin: 0 auto;\n  background-color: #2563eb;\n  transition-property: width height background-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n\n  &:hover {\n    width: 3rem;\n    height: 3rem;\n    background-color: #dc2626;\n  }\n}"
            }
          </Code>
          <Output>
            <div className="circle" />
          </Output>
        </CodeBlock>
        <CodeBlock>
          <Code caption={"TailwindCSS"}>
            {
              '<div className="size-10 rounded-full mx-auto bg-blue-600 transition-[width_height_background-color] hover:size-12 hover:bg-red-600" />'
            }
          </Code>
          <Output>
            <div className="size-10 rounded-full mx-auto bg-blue-600 transition-[width_height_background-color] hover:size-12 hover:bg-red-600" />
          </Output>
        </CodeBlock>
        <TextColumn className="mt-20">
          <Paragraph>
            There is one huge difference between the two examples above that's
            immediately apparent: <em>the size difference</em>.
          </Paragraph>
          <Paragraph variant="quote">
            TailwindCSS is simply faster to write than vanilla because there's{" "}
            <u>less to write</u>.
          </Paragraph>
          <Paragraph>
            With Tailwind, you can write a handleful of classes and achieve the same
            functionality that would take you dozens of lines of CSS. In fact, let's
            break down each class from the example above:
          </Paragraph>
          <ul className="ml-10 list-disc list-outside">
            <ListItem>
              <b>size-10</b>: Sets both the width and height to 2.5rem.
            </ListItem>
            <ListItem>
              <b>rounded-full</b>: Sets border-radius to 1000px (a circle).
            </ListItem>
            <ListItem>
              <b>mx-auto</b>: Sets the horizontal margin to auto. (
              <em>Same as setting margin left and right to auto</em>)
            </ListItem>
            <ListItem>
              <b>bg-blue-600</b>: Sets background-color to #2563eb.
            </ListItem>
            <ListItem>
              <b>transition-[width_height_background-color]</b>: Sets
              transition-property to width, height, and background-color, in addition
              to setting the transition-timing-function and transition-duration.
            </ListItem>
            <ListItem>
              <b>hover:size-12</b>: Sets both the width and height to 3rem when
              hovered.
            </ListItem>
            <ListItem>
              <b>hover:bg-red-600</b>: Sets background-color to #dc2626 when hovered.
            </ListItem>
          </ul>
          <Paragraph className="mt-[4rem]">
            Each Tailwind utility class is not only shorter than the property it
            corresponds to, but some classes refer to multiple properties at once.
            I'm sure you can already see how much faster this is than vanilla, but
            we're just getting started.
          </Paragraph>
        </TextColumn>
      </section>
      <section id="section-2">
        <TextColumn className="mt-20">
          <Heading2>Responsive Design</Heading2>
          <Paragraph>
            If you've ever tried making a website responsive using Vanilla CSS, you
            know that it quickly becomes utter chaos. Look at this simple example
            below to show you what I mean.
          </Paragraph>
        </TextColumn>
        <CodeBlock>
          <Code caption={"TailwindCSS"}>
            {
              '<div className="size-10 rounded-full mx-auto bg-blue-600 transition-[width_height_background-color] hover:size-12 hover:bg-red-600" />'
            }
          </Code>
          <Output>
            <div className="w-full h-40 bg-blue-600 rounded-md" />
          </Output>
        </CodeBlock>
      </section>
    </>
  );
}

export default App;
