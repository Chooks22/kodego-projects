import GitHub from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

interface Props {
  username: string;
}

export default function GitHubIcon(props: Props) {
  return (
    <IconButton
      component="a"
      aria-label="GitHub Icon Button"
      href={`https://github.com/${props.username}`}
    >
      <GitHub />
    </IconButton>
  );
}
