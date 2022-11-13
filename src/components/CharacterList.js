import Character from './Character';

const CharacterList = (props) => {
  const {characters} = props;
  console.log(characters)
  return (
    <section>
      {characters.map((character) => (
        <Character characterInfo={character} />
      ))}
    </section>
  )
}

export default CharacterList;
