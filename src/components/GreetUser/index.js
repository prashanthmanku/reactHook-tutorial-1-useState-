import {useState} from 'react'
import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, setName] = useState('')
  const changeUserName = e => setName(e.target.value)
  return (
    <MainContainer>
      <NameInput
        type="text"
        placeholder="Your name"
        onChange={changeUserName}
      />
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
