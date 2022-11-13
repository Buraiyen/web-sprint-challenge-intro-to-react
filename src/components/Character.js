// Write your Character component here
const Character = (props) => {
  const {characterInfo} = props;
  return (
    <div>
      <h2>{characterInfo.name}</h2>
    </div>
  )
}

export default Character;
