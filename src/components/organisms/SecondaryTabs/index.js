import React from "react";

const SecondaryTabs = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange} aria-label="tabs">
                <Tab label="Explore Tabs" value="1" />
                <Tab label="Item Two" value="2" />
                <Tab label="Item Three" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Grid direction='row'> 
                <Grid item>
                  {/* All the icon labels will be rendered here ... (3 in each row) */}
                </Grid>
                <Grid item>
                  {/* All the icon labels will be rendered here ... (3 in each row) */}
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      );
    
}

export default SecondaryTabs;