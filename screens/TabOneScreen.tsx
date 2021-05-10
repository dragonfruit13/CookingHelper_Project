import * as React from 'react';
import styled from 'styled-components/native';
import { FC } from 'react';
import { MaterialCommunityIcons } from 'react-native-vector-icons';


const FlexContainer = styled.View`
   display: flex;
   align-items: center;
   padding-top: 40%;
   /* justify-content: center; */
   height: 100%;
   width: 100%;
   background-color: #D7D9CA;
`

const AppTitle = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`

const MiddleSectionContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  width: 70%;
  /* border: 1px solid black; */
`

const SearchBox = styled.TextInput`
  display: flex;
  height: 40px;
  width: 80%;
  background-color: white;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  padding: 0 10px;
`
const MagnifyContainer = styled.View`
  display: flex;
  width: 20%;
  height: 40px;
  padding: 5px 10px 0 10px;
  background-color: white;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`

const TabOneScreen: FC = () => {
  return (

    <FlexContainer>
      <MiddleSectionContainer>
        <AppTitle>Cooking helper</AppTitle>
        <SearchBox placeholder="Search"></SearchBox>
        <MagnifyContainer>
          <MaterialCommunityIcons name="magnify" size={30}/>
          </MagnifyContainer>
      </MiddleSectionContainer>
    </FlexContainer>
  )
};
export default TabOneScreen;