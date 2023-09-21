import { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "fahadkhan174 | About" }];
};

type Props = {};

const About = (props: Props) => {
  return (
    <>
      <div>About</div>
      <Link to={"/"} className="link">
        Home
      </Link>
    </>
  );
};

export default About;
