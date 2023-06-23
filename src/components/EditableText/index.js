import {Component} from 'react'
import {
  AppContainer,
  MainContainer,
  Heading,
  InputContainer,
  UserInput,
  ButtonEl,
  EditedInput,
} from './styledComponents'

class EditableText extends Component {
  state = {userText: '', editable: true}

  getText = event => {
    this.setState({userText: event.target.value})
  }

  onChangeStatus = () => {
    this.setState(prevState => ({editable: !prevState.editable}))
  }

  render() {
    const {userText, editable} = this.state
    return (
      <AppContainer>
        <MainContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {editable ? (
              <UserInput onChange={this.getText} type="text" value={userText} />
            ) : (
              <EditedInput>{userText}</EditedInput>
            )}

            {editable ? (
              <ButtonEl onClick={this.onChangeStatus}>Save</ButtonEl>
            ) : (
              <ButtonEl onClick={this.onChangeStatus}>Edit</ButtonEl>
            )}
          </InputContainer>
        </MainContainer>
      </AppContainer>
    )
  }
}

export default EditableText
