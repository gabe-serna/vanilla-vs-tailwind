interface Props {
  children: React.ReactNode;
}

const Heading1 = ({ children }: Props) => {
  return <h1>{children}</h1>;
};

export default Heading1;
