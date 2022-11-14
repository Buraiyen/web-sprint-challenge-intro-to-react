// Write your Character component here

import styled from 'styled-components';

const Character = (props) => {
  const CharacterCard = styled.div`
     border-radius: 10px;
     width: 600px;
     background-color: white;
     padding: 10px 20px;
     margin: 15px;
   `
  const {characterInfo} = props;
  if (!characterInfo) return <h2>Loading...</h2>
  return (
    <CharacterCard>
      <h2>{characterInfo.name}</h2>
    </CharacterCard>

  )
}

export default Character;
