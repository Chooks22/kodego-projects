import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { getFormattedDate } from '../utils/date';

export interface ItemFormProps {
  name: string;
  title: string;
  label: string;
  placeholder: string;
  onSubmit: (value: string) => void;
}

export default function ItemForm(props: ItemFormProps) {
  const [value, setValue] = useState('');

  const addThought: React.FormEventHandler = e => {
    e.preventDefault();
    props.onSubmit(value);
    setValue('');
  };

  return (
    <Paper sx={{ padding: '1rem 2rem' }}>
      <Box component="span" textAlign="left">
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Date: {getFormattedDate(new Date())}
        </Typography>
      </Box>
      <Box component="form" onSubmit={addThought} onReset={() => setValue('')} mt={2}>
        <TextField
          id={`form-${props.name}`}
          fullWidth
          multiline
          rows={3}
          label={props.label}
          placeholder={props.placeholder}
          value={value}
          onChange={e => setValue(e.currentTarget.value)}
          required />
        <Box display="flex" justifyContent="flex-end" gap={1} mt={2}>
          <Button type="reset">Reset</Button>
          <Button type="submit" variant="contained">Submit</Button>
        </Box>
      </Box>
    </Paper>
  );
}
