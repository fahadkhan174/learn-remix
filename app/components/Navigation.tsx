import { useState } from "react";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import Tabs from "./Tabs";

type Props = {};

const Navigation = (props: Props) => {
  const [state, setState] = useState({
    left: false,
    right: false,
  });

  return (
    <>
      <AppBar
        toggleDrawer={(anchor: any, open: any) =>
          setState({ ...state, [anchor]: open })
        }
      >
        <Tabs />
      </AppBar>
      <Drawer
        state={state}
        closeDrawer={(anchor: any, open: any) =>
          setState({ ...state, [anchor]: open })
        }
      />
    </>
  );
};

export default Navigation;
