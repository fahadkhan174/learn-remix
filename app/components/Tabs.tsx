import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import ViewComfyOutlinedIcon from "@mui/icons-material/ViewComfyOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import * as React from "react";
import Overview from "./Overview";

export default function ColorTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box
        sx={{
          width: "100%",
          maxHeight: "48px",
          "& .MuiTabs-root": {},
          "& ": {},
          "& .MuiButtonBase-root": {
            minHeight: "28px !important",
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
        <TabList
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
            value="1"
            icon={<ImportContactsOutlinedIcon sx={{ fontSize: "18px" }} />}
            iconPosition="start"
            label={"Overview"}
          />
          <Tab
            value="2"
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
            value="3"
            icon={<ViewComfyOutlinedIcon sx={{ fontSize: "18px" }} />}
            iconPosition="start"
            label={"Projects"}
          />
          <Tab
            value="4"
            icon={<WidgetsOutlinedIcon sx={{ fontSize: "18px" }} />}
            iconPosition="start"
            label={"Packages"}
          />
          <Tab
            value="5"
            icon={<StarOutlineRoundedIcon sx={{ fontSize: "18px" }} />}
            iconPosition="start"
            label={"Stars"}
          />
        </TabList>
        <TabPanel value="1">
          <Overview />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
        <TabPanel value="5">Item Three</TabPanel>
      </Box>
    </TabContext>
  );
}
