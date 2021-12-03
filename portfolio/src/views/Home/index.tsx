import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as Icons from '../../components/Icons';
import RepoCard from '../../components/RepoCard';
import './index.scss';

interface TechStacksProps {
  title: string;
  children: JSX.Element[];
}

function TechStacks(props: TechStacksProps) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" my={4}>
        {props.title}
      </Typography>
      <Box sx={{ display: 'flex', justifyItems: 'center' }}>
        {props.children}
      </Box>
    </Box>
  );
}

export default function Home() {
  return (
    <main style={{ margin: '4rem' }}>
      <Box className="HomeHeader">
        <Typography variant="h1">
          Isiah Kayl Nabablit
        </Typography>
        <Typography component="span" variant="h4">
          Fullstack Developer
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center', gap: '4rem' }}>
        <Box sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
          <Typography variant="h2" my={4}>
              Featured Projects
          </Typography>
          <Box sx={{ display: 'flex', flexFlow: 'row', gap: '1rem' }}>
            <RepoCard
              username="chookscord"
              icon="https://avatars.githubusercontent.com/u/88537871"
              title="Chookscord Project"
              media="https://opengraph.githubassets.com/eac0036653f2d2aa83a2126d1c64076c8cb9dba8347cf60c612e00cf47b25f3d/chookscord/framework"
              desc="The next generation Discord.JS Framework for advanced and rapid bot development."
              repo="framework"
            />
            <RepoCard
              username="Choooks22"
              icon="https://avatars.githubusercontent.com/u/49726759"
              title="VTuber API"
              media="https://opengraph.githubassets.com/df695086b0de89fcdbcac8acac9a2dab990b20431181739408c32180b2f26313/Choooks22/vt-api"
              desc="A Mongoose / GraphQL based API to serve VTuber information from multiple platforms."
              repo="vt-api"
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
          <Typography variant="h2">
            Technologies
          </Typography>
          <Box sx={{ display: 'flex', gap: '4rem', justifyContent: 'space-evenly' }}>
            <TechStacks title="Frontend">
              {Icons.JavaScript}
              {Icons.TypeScript}
              {Icons.HTML5}
              {Icons.CSS3}
              {Icons.Sass}
              {Icons.ReactJS}
              {Icons.VueJS}
            </TechStacks>
            <TechStacks title="Backend">
              {Icons.NodeJS}
              {Icons.JavaScript}
              {Icons.TypeScript}
              {Icons.Swc}
              {Icons.Nginx}
              {Icons.Ubuntu}
              {Icons.MongoDB}
              {Icons.GraphQL}
              {Icons.GCP}
            </TechStacks>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
