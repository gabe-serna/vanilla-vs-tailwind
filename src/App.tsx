import { ThemeProvider } from "./components/theme-provider";
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
import Resizeable from "./components/Resizeable";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
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
              '<div class="size-10 rounded-full mx-auto bg-blue-600 transition-[width_height_background-color] hover:size-12 hover:bg-red-600"></div>'
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
            below to show you what I mean. If you're on a computer, try resizing the
            card below by dragging on the handle to the right.
          </Paragraph>
        </TextColumn>
        <CodeBlock variant="rows">
          <Code caption={"Vanilla CSS"} scrollable={true} className="lg:w-3/4">
            {`<!-- STYLES -->
.card-container {
  max-width: 28rem;
  width: auto;
  margin: 0 auto;
  overflow: hidden;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.card {
  display: flex;
  flex-direction: column;
}
.cat-image {
  width: 100%;
  height: 8rem;
  object-position: center;
  object-fit: cover;
}
.card-text-container {
  padding: 1rem;
  margin: 0.5rem 0;
}
.purple-text {
  color: #4f46e5;
  font-size: 0.75rem;
  line-height: 1.5rem;
  font-weight: 500;
}
.card-heading {
  color: #0f172a;
  display: block;
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 600;
}
.card-body {
  color: #475569;
  font-size: 0.75rem;
  line-height: 1.25rem;
}

@media screen and (min-width: 640px) {
  .card {
    flex-direction: row;
  }
  .shrink-none {
    flex-shrink: 0;
  }
  .cat-image {
    height: 100%;
    width: 12rem;
  }
  .card-text-container {
    padding: 1.5rem;
  }
  .purple-text {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .card-heading {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .card-body {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
}
  
<!-- HTML -->
<div class="card-container">
  <div class="card">
    <div class="shrink-none">
      <img
        class="cat-image"
        src="/img/cat.jpg"
        alt="cat picture"
      />
    </div>
    <div class="card-text-container">
      <div class="purple-text">Meet Mittens the Cat</div>
      <p class="card-heading">Luxuriously Soft Fur</p>
      <p class="card-body">
        Looking to take your fur to the next level? We have a proven formula to
        get your fur silky smooth in only 30 days!
      </p>
    </div>
  </div>
</div>`}
          </Code>
          <Output className="w-full md:w-3/4 h-96">
            <Resizeable />
          </Output>
        </CodeBlock>
        <TextColumn className="mt-12">
          <Paragraph>
            Although this is a really simple example of changing flex direction and
            adjusting some sizes when on small screens, the code required to do that
            is an eyesore. You have to come up with unique class names for each part—
            <em>make sure to not reuse those names btw {":)"}</em>—and then in a
            separate part of the file manage the media queries.
          </Paragraph>
          <Paragraph>Yuck.</Paragraph>
          <Paragraph>
            Let's take a look at the code required to do the same thing with
            TailwindCSS.
          </Paragraph>
        </TextColumn>
        <CodeBlock variant="rows">
          <Code caption={"TailwindCSS"} scrollable={true} className="lg:w-3/4">
            {`<div class="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg shadow-black/50 dark:shadow-white/20 sm:max-w-2xl ring-1 ring-slate-900/5">\n  <div class="flex flex-col sm:flex-row">\n    <div class="sm:shrink-0">\n      <img class="w-full object-center sm:h-full sm:w-48 h-32 object-cover sm:object-center" src="/img/cat.jpg" alt="cat picture" />\n    </div>\n    <div class="p-4 space-y-2 sm:p-6 2xl:p-8">\n      <div class="text-xs font-medium leading-6 text-indigo-600 sm:text-sm">\n        Meet Mittens the Cat\n      </div>\n      <p class="block text-sm font-semibold leading-6 sm:text-base text-slate-900">\n        Luxuriously Soft Fur\n      </p>\n      <p class="text-xs leading-5 sm:leading-6 sm:text-sm text-slate-600">\n        Looking to take your fur to the next level? We have a proven formula to get your fur silky smooth in only 30 days!\n      </p>\n    </div>\n  </div>\n</div>`}
          </Code>
        </CodeBlock>
        <TextColumn className="mt-12">
          <Paragraph>
            Yeah, that's it. You don't have to scroll through an entire damn
            encyclopedia of classes and media queries to find what you're looking
            for. The styles you want are just… right there, inline with your HTML.
          </Paragraph>
          <Paragraph>
            You might be thinking{" "}
            <em>"Why don't I just write inline vanilla CSS then?"</em>.
          </Paragraph>
          <Paragraph>
            Well, it <em>almost</em> works except for one glaring issue:{" "}
            <strong className="font-medium">
              you can't write media queries inline with Vanilla CSS
            </strong>
            .
          </Paragraph>
          <Paragraph>Sorry.</Paragraph>
          <Paragraph>
            But hey, guess what? You can write media queries with Tailwind{";)"}
          </Paragraph>
          <Paragraph>
            Responsive design utility variants are honestly one of Tailwind's most
            convienent features (and there's a lot). Just so you can see how
            ridiculously simple it is to write responsive styles with Tailwind, take
            a look at this side-by-side comparison.
          </Paragraph>
        </TextColumn>
        <CodeBlock>
          <Code caption={"TailwindCSS"}>{`<div class="
  bg-red-600
  sm:bg-blue-600
  md:bg-green-600
  lg:bg-purple-600
  xl:bg-amber-600
  2xl:bg-stone-600
"></div>`}</Code>
          <Code caption={"Vanilla CSS"}>{`.color { background-color: #dc2626; }
          
@media screen and (min-width: 640px) {
  .color { background-color: #2563eb; }
}
@media screen and (min-width: 768px) {
  .color { background-color: #16a34a; }
}
@media screen and (min-width: 1024px) {
  .color { background-color: #9333ea; }
}
@media screen and (min-width: 1280px) {
  .color { background-color: #d97706; }
}
@media screen and (min-width: 1536px) {
  .color { background-color: #57534e; }
}`}</Code>
        </CodeBlock>
        <TextColumn className="mt-12">
          <Paragraph>I think you get the point.</Paragraph>
          <Paragraph variant="quote">
            Responsive design sucks in vanilla, but it's easy and quick with
            TailwindCSS.
          </Paragraph>
          <Paragraph>
            In the above example, the reason why the Tailwind code is faster isn't
            just because of the responsive utility classes. It's also because of
            Tailwind's built-in style system that provides colors and sizing. Let me
            show you what I mean.
          </Paragraph>
        </TextColumn>
        <TextColumn className="mt-16">
          <Heading2>Built-in Design System</Heading2>
        </TextColumn>
      </section>
    </ThemeProvider>
  );
}

export default App;
