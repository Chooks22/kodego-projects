import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GitHubIcon from './GitHubIcon';

export interface RepoCardProps {
  icon: string;
  username: string;
  title: string;
  media: string;
  desc: string;
  repo: string;
}

interface RepoCardLinkButtonProps {
  url: string;
  children: string;
}

function RepoCardLinkButton(props: RepoCardLinkButtonProps) {
  return (
    <Button
      component="a"
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </Button>
  );
}

export default function RepoCard(props: RepoCardProps) {
  return (
    <Card sx={{ maxWidth: 344 }}>
      <CardHeader
        avatar={<Avatar aria-label="User Icon" src={props.icon} />}
        action={<GitHubIcon username={props.username} />}
        title={props.title}
        subheader={`@${props.username}`}
      />

      <CardMedia component="img" image={props.media} />

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {props.desc}
        </Typography>
      </CardContent>

      <CardActions>
        <RepoCardLinkButton url={`https://github.com/${props.username}`}>
          GitHub
        </RepoCardLinkButton>
        <RepoCardLinkButton url={`https://github.com/${props.username}/${props.repo}`}>
          Visit Repo
        </RepoCardLinkButton>
      </CardActions>
    </Card>
  );
}
