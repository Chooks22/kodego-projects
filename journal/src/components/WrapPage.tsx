import { getFormattedDate } from '../utils/date';
import { generateId } from '../utils/ids';
import { useLocalStorage } from '../utils/localStorage';
import ItemCard, { Item } from './ItemCard';
import ItemContainer from './ItemContainer';
import ItemForm from './ItemForm';

export function createItem(thought: string): Item {
  return {
    id: generateId(),
    date: getFormattedDate(new Date()),
    value: thought,
  };
}

export interface Page {
  id: string;
  form: {
    title: string;
    label: string;
    placeholder: string;
  };
  list: {
    title: string;
    placeholder: string;
  };
}

export default function WrapPage(props: Page) {
  const [values, setValue] = useLocalStorage<Item[]>(props.id, []);

  const addThought = (value: string) => {
    const newValue = createItem(value);
    setValue([...values, newValue]);
  };

  const deleteThought = (thought: Item) => {
    setValue(values.filter(item => item !== thought));
  };

  return (
    <>
      <ItemForm
        name={props.id}
        title={props.form.title}
        label={props.form.label}
        placeholder={props.form.placeholder}
        onSubmit={value => addThought(value)}
      />
      <ItemContainer
        title={props.list.title}
        values={values}
        onDelete={deleteThought}
        placeholder={props.list.placeholder}
      >
        {values.length
          ? values.map(value => <ItemCard
            thought={value}
            onDelete={deleteThought}
            key={value.id}
          />)
          : null
        }
      </ItemContainer>
    </>
  );
}
