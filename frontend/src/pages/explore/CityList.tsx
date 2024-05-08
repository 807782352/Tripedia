import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Typography } from "@mui/material";
import React from "react";
import { canadaRegions, regionList } from "../../data/regions";
import RegionRow from "./RegionRow";

const CityList = () => {
  const [option, setOption] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setOption(newValue);
  };

  return (
    <Box>
      <Typography
        component={"h2"}
        variant={"h4"}
        color={"primary"}
        align="center"
        mt={16}
        mb={4}
      >
        Featured Regions
      </Typography>

      {/* Regions */}
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={option}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 4 }}
          >
            <TabList onChange={handleChange} centered>
              <Tab
                label="Canada"
                value={"1"}
                sx={{
                  "&:hover": {
                    color: (theme) => theme.palette.secondary.dark,
                  },
                }}
              />

              {regionList.map((region, index) => {
                return (
                  <Tab
                    label={region.continent}
                    key={region.continent}
                    value={index + 2 + ""}
                    sx={{
                      "&:hover": {
                        color: (theme) => theme.palette.secondary.dark,
                      },
                    }}
                  />
                );
              })}
            </TabList>
          </Box>

          {/* tabPanel for Canada exclusively */}
          <TabPanel
            value={"1"}
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              paddingY: 0,
            }}
          >
            {canadaRegions.map((cRegion) => (
              <RegionRow key={cRegion.province} {...cRegion} />
            ))}
          </TabPanel>

          {/* tabPanels for other countries based on the continent */}
          {regionList.map((region, index) => {
            const tabValue = index + 2 + "";
            return (
              <TabPanel
                key={tabValue}
                value={tabValue}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 2,
                  paddingY: 0,
                }}
              >
                {region.countries.map((cur) => (
                  <RegionRow key={cur.country} {...cur} />
                ))}
              </TabPanel>
            );
          })}
        </TabContext>
      </Box>
    </Box>
  );
};

export default CityList;
