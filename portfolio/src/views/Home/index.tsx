import './index.scss';
import Typography from '@mui/material/Typography';
import * as Icons from '../../components/Icons';

function Home() {
  return <main className="Home">
    <figure>
      <Typography variant="h1">
        Isiah Kayl Nabablit
      </Typography>
      <Typography variant="h4" component="figcaption">
        Fullstack Developer
      </Typography>
    </figure>
    <article className="Technologies">
      <Typography variant="h2">
        Technologies
      </Typography>
      <section className="TechStack">
        <Typography variant="h4">
          Frontend
        </Typography>
        <span className="TechList">
          {Icons.JavaScript}
          {Icons.TypeScript}
          {Icons.HTML5}
          {Icons.CSS3}
          {Icons.Sass}
          {Icons.ReactJS}
          {Icons.VueJS}
        </span>
      </section>
      <section className="TechStack">
        <Typography variant="h4">
          Backend
        </Typography>
        <span className="TechList">
          {Icons.NodeJS}
          {Icons.JavaScript}
          {Icons.TypeScript}
          {Icons.Swc}
          {Icons.Nginx}
          {Icons.Ubuntu}
          {Icons.MongoDB}
          {Icons.GraphQL}
          {Icons.GCP}
        </span>
      </section>
    </article>
  </main>;
}

export default Home;
