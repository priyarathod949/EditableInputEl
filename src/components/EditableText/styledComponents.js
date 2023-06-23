import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainContainer = styled.div`
  background-color: #ffffff;
  width: 30%;
  height: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
`

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 800;
  font-family: 'Roboto';
  color: #000000;
  margin-bottom: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`

export const UserInput = styled.input`
  background-color: transparent;
  border-radius: 5px;
  color: grey;
  padding: 5px;
  font-size: 20px;
  font-family: 'Roboto';
  width: 240px;
  height: 30px;
  border: 1px solid #323f4b;
  margin-right: 5px;
`

export const ButtonEl = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  font-size: 15px;
  height: 30px;
  width: 60px;
  border-radius: 5px;
  border-width: 0px;
  margin-left: 20px;
`
export const EditedInput = styled.p`
  display: inline;
  margin-right: 5px;
  color: grey;
  padding: 5px;
  font-size: 20px;
  font-family: 'Roboto';
`
