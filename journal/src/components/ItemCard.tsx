import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';

export interface Item {
  id: string;
  date: string;
  value: string;
}

export interface ItemCardProps {
  thought: Item;
  onDelete: (thought: Item) => void;
}

export default function ItemCard(props: ItemCardProps) {
  return (
    <Card variant="outlined">
      <CardContent sx={{ textAlign: 'left', position: 'relative' }}>
        <IconButton
          size="small"
          sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
          onClick={() => props.onDelete(props.thought)}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6">
          {`Date: ${props.thought.date}`}
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ whiteSpace: 'pre-wrap' }}>
          {props.thought.value}
        </Typography>
      </CardContent>
    </Card>
  );
}
