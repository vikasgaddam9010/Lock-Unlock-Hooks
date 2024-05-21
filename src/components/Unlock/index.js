import {MainContainer, Img, Heading, Button} from './styledComponents'
import {useState} from 'react'

const Unlock = () => {
  const [lockState, setLockState] = useState(true)

  const btnClicked = () => {
    setLockState(prevState => !prevState)
  }

  console.log(lockState)

  const lockImg = lockState
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const imgAlt = lockState ? 'lock' : 'unlock'
  const paraElement = lockState
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  const btnText = lockState ? 'Unlock' : 'Lock'
  return (
    <MainContainer>
      <Img alt={imgAlt} src={lockImg} />
      <Heading isTrue={lockState}>{paraElement}</Heading>
      <Button type="bttuon" onClick={btnClicked}>
        {btnText}
      </Button>
    </MainContainer>
  )
}

export default Unlock
