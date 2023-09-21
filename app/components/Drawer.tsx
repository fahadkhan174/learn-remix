import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

type Anchor = "left" | "right";

type Props = {
  state: any;
  closeDrawer: any;
};

export default function TemporaryDrawer({ state, closeDrawer }: Props) {
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      closeDrawer(anchor, open);
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 320, padding: "8px 8px 0" }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <>
        {anchor === "left" ? (
          <>
            <Grid
              container
              justifyContent={"space-between"}
              alignContent={"center"}
              sx={{ verticalAlign: "middle", padding: "6px 8px 0px 6px" }}
            >
              <Box sx={{ padding: "0px 0px 0px 0px" }}>
                <GitHubIcon fontSize="large" />
              </Box>
              <Box
                sx={{
                  marginTop: "2px",
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover > svg": {
                    color: "black",
                  },
                }}
                onClick={toggleDrawer(anchor, false)}
              >
                <CloseIcon
                  sx={{
                    fontSize: "16px",
                    color: "grey",
                    verticalAlign: "middle",
                    textAlign: "center",
                  }}
                />
              </Box>
            </Grid>
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem
                    key={text}
                    disablePadding
                    onClick={toggleDrawer(anchor, false)}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </>
        ) : (
          rightSideNav(anchor, toggleDrawer)
        )}
      </>
    </Box>
  );

  return (
    <>
      {(["left", "right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{
              "& .MuiDrawer-paper": {
                borderRadius:
                  anchor === "left" ? "0 12px 12px 0" : "12px 0 0 12px",
                borderTop: "1px",
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}

const rightSideNav = (anchor: Anchor, toggleDrawer: Function) => (
  <Box
    sx={{ width: 320, padding: "8px 8px 0" }}
    role="presentation"
    // onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <Grid
      container
      justifyContent={"space-between"}
      alignContent={"center"}
      sx={{ verticalAlign: "middle", padding: "6px 8px 0px 6px" }}
    >
      <Box sx={{ padding: "0px 0px 0px 0px" }}>
        {/* <GitHubIcon fontSize="large" /> */}
        <IconButton
          size="small"
          edge="end"
          aria-label="account of current user"
          aria-controls={"avatar-profile"}
          aria-haspopup="true"
          // onClick={handleProfileMenuOpen}
          color="inherit"
          onClick={() => toggleDrawer("right", true)}
        >
          <Avatar
            alt="Mohd Fahad"
            src="/images/profile.jpg"
            sx={{
              width: "32px",
              height: "32px",
            }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          marginTop: "2px",
          width: "32px",
          height: "32px",
          backgroundColor: "#f5f5f5",
          borderRadius: "6px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover > svg": {
            color: "black",
          },
        }}
        onClick={toggleDrawer(anchor, false)}
      >
        <CloseIcon
          sx={{
            fontSize: "16px",
            color: "grey",
            verticalAlign: "middle",
            textAlign: "center",
          }}
        />
      </Box>
    </Grid>
  </Box>
);
