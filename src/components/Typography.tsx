interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Heading1 = ({ children, className }: Props) => {
  return (
    <h1
      className={
        "2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-bold " + className
      }
    >
      {children}
    </h1>
  );
};

export const Heading2 = ({ children, className }: Props) => {
  return (
    <h2
      className={
        "2xl:text-3xl xl:text-2xl lg:text-xl text-lg font-medium mt-2 " + className
      }
    >
      {children}
    </h2>
  );
};

export const Paragraph = ({ children, className }: Props) => {
  return (
    <p
      className={
        "2xl:text-xl xl:text-lg lg:text-base text-sm font-thin mt-2 " + className
      }
    >
      {children}
    </p>
  );
};

interface CodeProps extends Props {
  caption?: string;
}

export const Code = ({ caption = "", children, className = "" }: CodeProps) => {
  return (
    <figure className={"w-1/2 lg:w-1/3 min-w-min " + className}>
      <pre className="flex items-start 2xl:text-xl xl:text-lg lg:text-base text-sm font-mono text-white/60 bg-[#302d2d] rounded-md p-4 mt-4 h-min min-w-min">
        {children}
      </pre>
      {caption && (
        <figcaption className="w-full text-xs italic font-light text-right 2xl:text-lg xl:text-base lg:text-sm text-white/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export const Output = ({ children, className = "w-1/2" }: Props) => {
  return (
    <div
      className={
        "flex items-start 2xl:text-xl xl:text-lg lg:text-base text-sm min-w-min font-mono text-white/60 bg-[#302d2d] rounded-md p-4 mt-4 " +
        className
      }
    >
      {children}
    </div>
  );
};

export const CodeBlock = ({ children, className }: Props) => {
  return (
    <div
      className={
        "flex lg:flex-row flex-col-reverse gap-6 align-center lg:justify-around items-center " +
        className
      }
    >
      {children}
    </div>
  );
};
