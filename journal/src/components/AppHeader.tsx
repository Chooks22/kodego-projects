import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';

export interface AppHeaderProps {
  value: number;
  onChange: (event: React.SyntheticEvent, index: number) => void;
  tabs: string[];
}

export default function AppHeader(props: AppHeaderProps) {
  const { tabs, ...prop } = props;
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box component="header" sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
      <Tabs component="ol" {...prop} sx={{ margin: 0, padding: 0 }} variant={large ? 'standard' : 'fullWidth'} centered>
        {tabs.map((tab, i) => <Tab component="li" label={tab} key={tab + i} />)}
      </Tabs>
    </Box>
  );
}
