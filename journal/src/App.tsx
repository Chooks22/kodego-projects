import Container from '@mui/material/Container';
import { useState } from 'react';
import './App.scss';
import AppHeader from './components/AppHeader';
import WrapPage, { Page } from './components/WrapPage';

const pages: Page[] = [
  {
    id: 'tasks',
    form: {
      title: 'Tasks',
      label: 'Task',
      placeholder: 'Any tasks to do?',
    },
    list: {
      title: 'Tasks',
      placeholder: 'No Tasks. Happy Weekend',
    },
  },
  {
    id: 'thoughts',
    form: {
      title: 'Thoughts for the Day',
      label: 'Thoughts',
      placeholder: 'What\'s on your mind?',
    },
    list: {
      title: 'Thoughts',
      placeholder: 'No Thoughts, Head Empty',
    },
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const page1 = pages[0];
  const page2 = pages[1];

  return (
    <div className="App">
      <AppHeader
        value={index}
        onChange={(e, i) => setIndex(i)}
        tabs={['Tasks', 'Thoughts']}
      />
      <Container component="main" maxWidth="md" sx={{ margin: '1rem auto' }}>
        {index === 0 && <WrapPage id={page1.id} form={page1.form} list={page1.list} />}
        {index === 1 && <WrapPage id={page2.id} form={page2.form} list={page2.list} />}
      </Container>
    </div>
  );
}
