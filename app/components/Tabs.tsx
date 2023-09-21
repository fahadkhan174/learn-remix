import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import ViewComfyOutlinedIcon from "@mui/icons-material/ViewComfyOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import * as React from "react";

export default function ColorTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "48px",
        "& .MuiTabs-root": {},
        "& ": {},
        "& .MuiButtonBase-root": {
          minHeight: "28px !important",
          // fontSize: "13px",
          fontFamily:
            '-apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          fontSize: "0.875rem",
          fontWeight: 500,
          textTransform: "capitalize",
          paddingX: "0.5rem",
          paddingY: 0,
          marginX: "4px !important",
          marginY: "10px",
          "&:hover": {
            backgroundColor: theme.palette.hover.main,
            borderRadius: "6px",
          },
          "&.Mui-selected": {
            fontWeight: 500,
          },
        },
        "& .MuiTabs-indicator": {
          //   height: 0,
          backgroundColor: "#fe9600",
        },
        "& .MuiChip-root": {
          height: "24px",
          marginLeft: "8px",
        },
        "& .MuiChip-label": {
          fontSize: "12px",
          paddingX: "6px",
        },
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "10px",
        }}
      >
        <Tab
          value="one"
          icon={<ImportContactsOutlinedIcon sx={{ fontSize: "18px" }} />}
          iconPosition="start"
          label={"Overview"}
        />
        <Tab
          value="two"
          icon={<CollectionsBookmarkOutlinedIcon sx={{ fontSize: "18px" }} />}
          iconPosition="start"
          label={
            <>
              Repositories
              <Chip label={"15"} />
            </>
          }
        />
        <Tab
          value="three"
          icon={<ViewComfyOutlinedIcon sx={{ fontSize: "18px" }} />}
          iconPosition="start"
          label={"Projects"}
        />
        <Tab
          value="four"
          icon={<WidgetsOutlinedIcon sx={{ fontSize: "18px" }} />}
          iconPosition="start"
          label={"Packages"}
        />
        <Tab
          value="five"
          icon={<StarOutlineRoundedIcon sx={{ fontSize: "18px" }} />}
          iconPosition="start"
          label={"Stars"}
        />
      </Tabs>
    </Box>
  );
}
