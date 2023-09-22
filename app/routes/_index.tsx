import { Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Navigation from "~/components/Navigation";

export const meta: MetaFunction = () => {
  return [
    { title: "fahadkhan174" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <Navigation />
      <main>
        <Grid2 container></Grid2>
      </main>
      <div style={{ lineHeight: "1.8" }}>
        <h1 className="text-green-500 text-2xl font-bold">Welcome to Remix</h1>
        <Link to={"/about"} className="link">
          About
        </Link>
      </div>
      <div>
        <Button variant="contained" className="text-gray-900">
          TESTING
        </Button>
      </div>
    </>
  );
}
