import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export interface ItemContainerProps<T> {
  title: string;
  values: T[];
  onDelete: (value: T) => void;
  children: JSX.Element[] | null;
  placeholder: string;
}

export default function ItemContainer<T>(props: ItemContainerProps<T>) {
  return (
    <Paper sx={{ padding: '1rem 2rem', marginTop: '1rem' }}>
      <Typography variant="h5">
        {props.title}
      </Typography>
      <Box display="flex" flexDirection="column" gap="1rem" mt={2}>
        {props.children ?? <Typography variant="body1" color="GrayText" my={2}>{props.placeholder}</Typography>}
      </Box>
    </Paper>
  );
}
