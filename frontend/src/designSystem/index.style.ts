import styled from 'styled-components'

export const Title = styled.h1`
  color: ${props => props.color ?? '#fff'};
  margin: 0px;
  padding: 0px;
  font-family: 'Rubik Moonrocks', cursive;
`

export const Button = styled.button<{ bgColor?: string }>`
  color: ${props => props.color ?? '#000'};
  margin: 0px 5px 0px 0px;
  padding: 6px;
  cursor: pointer;
  font-family: 'Rubik Moonrocks', cursive;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: transform 100ms linear;
  background-color: ${props => props.bgColor ?? '#fff'};
  &:hover {
    transform: scale(1.05)
  }
  @media(max-width: 700px) {
    width: 100%;
  }
`

export const Card = styled.div<{ status?: number }>`
  width: 240px;
  height: 170px;
  margin: 5px;
  border: ${props => {
    if (props?.status === 1) {
      return '1px solid #e5e500'
    } else if (props?.status === 2) {
      return '1px solid green'
    }
    return '1px solid #ccc'
  }};
  padding: 5px;
  background-color: #fff;
  border-radius: 10px;
  border-left: ${props => {
    if (props?.status === 1) {
      return '8px solid yellow'
    } else if (props?.status === 2) {
      return '8px solid green'
    }
    return '8px solid #ccc'
  }};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 100ms linear;
  &:hover {
    background-color: #f1f1f1;
    transform: scale(1.02)
  }

  @media(max-width: 700px) {
    width: 100%;
  }

  @media(max-width: 950px) and  (min-width: 700px){
    width: 48%;
  }
`