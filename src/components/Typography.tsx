interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Heading1 = ({ children, className }: Props) => {
  return (
    <h1
      className={
        "2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-bold text-center " +
        className
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
        "2xl:text-2xl xl:text-xl lg:text-lg text-base font-bold mt-16 " + className
      }
    >
      {children}
    </h2>
  );
};

interface ParagraphProps extends Props {
  variant?: "default" | "quote";
}

export const Paragraph = ({
  children,
  className,
  variant = "default"
}: ParagraphProps) => {
  if (variant === "default")
    return (
      <p
        className={
          "2xl:text-xl xl:text-lg lg:text-base text-sm font-thin mt-6 " + className
        }
      >
        {children}
      </p>
    );
  return (
    <p
      className={
        "2xl:text-xl xl:text-lg lg:text-base text-sm font-light mt-6 text-center rounded-md italic text-accent-foreground bg-accent py-2 mx-auto  " +
        className
      }
    >
      {children}
    </p>
  );
};

export const TextColumn = ({ children, className }: Props) => {
  return (
    <div
      style={{ maxWidth: "clamp(45ch, 50%, 75ch)" }}
      className={
        "mx-auto text-sm font-thin 2xl:text-xl xl:text-lg lg:text-base " + className
      }
    >
      {children}
    </div>
  );
};

export const ListItem = ({ children, className }: Props) => {
  return (
    <li
      className={
        "2xl:text-xl xl:text-lg lg:text-base text-sm font-thin mt-6 " + className
      }
    >
      {children}
    </li>
  );
};

interface CodeProps extends Props {
  caption?: string;
}

export const Code = ({ caption = "", children, className = "" }: CodeProps) => {
  return (
    <figure className={"w-full lg:w-1/3 min-w-min " + className}>
      <pre className="flex items-start p-4 mt-4 font-mono text-sm rounded-md 2xl:text-xl xl:text-lg lg:text-base card-foreground bg-card h-min min-w-min text-wrap">
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

export const Output = ({ children, className = "w-full lg:w-1/3" }: Props) => {
  return (
    <div
      className={
        "flex items-start 2xl:text-xl xl:text-lg lg:text-base text-sm min-w-min font-mono text-white/60 bg-card rounded-md p-4 lg:mt-0 mt-4 " +
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
        "flex lg:flex-row flex-col-reverse gap-6 align-center lg:justify-around items-center mt-16 " +
        className
      }
    >
      {children}
    </div>
  );
};
