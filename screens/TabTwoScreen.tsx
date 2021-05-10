import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FC } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { mdiOilTemperature } from '@mdi/js';

const FlexContainer = styled.View`
   display: flex;
   align-items: center;
   padding-top: 3%;
   height: 100%;
   width: 100%;
`

const MainText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`

const ItemContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin-bottom: 20px;
  height: 50px;
  border: 1px solid black;
  background-color: white;
`

const Wrapper = styled.ScrollView`
  height: 100%;
  width: 100%;
  background-color: #D7D9CA;
`;

const ItemImageContainer = styled.View`
  display: flex;
  width: 20%;
  height: 100%;
  padding: 3px;
  border: 1px solid black;
`

const ItemText = styled.Text`
 display: flex;
 width: 80%;
 padding: 0 0 0 5px;
 font-size: 20px;
`

const TabTwoScreen: FC = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <MainText>Favorites</MainText>
        <ItemContainer>
          <ItemImageContainer></ItemImageContainer>
          <ItemText>SampleText</ItemText>
        </ItemContainer>
        <ItemContainer>
          <ItemImageContainer></ItemImageContainer>
          <ItemText>SampleText</ItemText>
        </ItemContainer>
        <ItemContainer>
          <ItemImageContainer></ItemImageContainer>
          <ItemText>SampleText</ItemText>
        </ItemContainer>
        <ItemContainer>
          <ItemImageContainer></ItemImageContainer>
          <ItemText>SampleText</ItemText>
        </ItemContainer>
        <ItemContainer>
          <ItemImageContainer></ItemImageContainer>
          <ItemText>SampleText</ItemText>
        </ItemContainer>
        <ItemContainer>
          <ItemImageContainer></ItemImageContainer>
          <ItemText>SampleText</ItemText>
        </ItemContainer>
        <ItemContainer>
          <ItemImageContainer></ItemImageContainer>
          <ItemText>SampleText</ItemText>
        </ItemContainer>
        <ItemContainer>
          <ItemImageContainer></ItemImageContainer>
          <ItemText>SampleText</ItemText>
        </ItemContainer>
      </FlexContainer>
    </Wrapper>
  )
};
export default TabTwoScreen;
