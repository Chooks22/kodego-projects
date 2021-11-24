import './index.scss';
import Typography from '@mui/material/Typography';
import { icons } from '../../components/Icons';

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
          {icons.javascript}
          {icons.typescript}
          {icons.html5}
          {icons.css3}
          {icons.sass}
          {icons.react}
          {icons.vue}
        </span>
      </section>
      <section className="TechStack">
        <Typography variant="h4">
          Backend
        </Typography>
        <span className="TechList">
          {icons.nodejs}
          {icons.javascript}
          {icons.typescript}
          {icons.swc}
          {icons.nginx}
          {icons.ubuntu}
          {icons.mongodb}
          {icons.graphql}
          {icons.discord}
          {icons.youtube}
          {icons.gcp}
        </span>
      </section>
    </article>
  </main>;
}

export default Home;
