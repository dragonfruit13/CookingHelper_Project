import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, Button } from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #D7D9CA;
`

const ProductNameBox = styled.View`
  justify-Content: center;
  align-items: center;
  margin: 3px 0;
  height: 6%;
  width: 50%;
`

const ProductCardName = styled.Text`
  font-size: 24px;
`

const TopSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 26%;
  width:  100%;
`

const BigBox = styled.View`
  height: 94%;
  width: 45%;
  margin: 0 2%;
  border: 1px solid black;
`
const NutritionBox = styled.View`
  height: 94%;
  width: 45%;
  margin: 0 2%;
  align-items: flex-start;
  border: 1px solid black;
`
const NutritionText = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
`
const NutritonElementBox = styled.View`
  flex: 1;
  width: 100%;
  border: 1px solid black;
`
const MiddleSection = styled.View`
  height: 30%; 
  width:  100%;
`

const MatchProductsText = styled.Text`
  margin-left: 2%;
  font-size: 19px;
`

const ProductNameContainer = styled.View`
  justify-Content: center;
  align-items: flex-start;
  margin: 10px 0 0 0;
  margin-left: 2%;
  height: 10%;
  width: 80%;
  border-bottom-width: 1px;
  border-bottom-color: black;
  `

const ProductNameMatch = styled.Text`
  margin-bottom: 4px;
`

const BottomSection = styled.View`
  align-items: flex-start;
  margin-top: 15px;
  height: 27%;
  width:  100%;
`
const MealSuggestionText = styled.Text`
  justify-content: flex-start;
  margin-left: 2%;
  font-size: 19px;
`

const SmallBoxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width:  100%;
`

const SmallBox = styled.View`
  height: 94%;
  width: 28%;
  margin: 2% 2% 0 2%;
  border: 1px solid black;
`



export default function TabOneScreen() {
  return (
      <Container>
        <ProductNameBox><ProductCardName>Banana</ProductCardName></ProductNameBox>
          <TopSection>
            <BigBox>
            </BigBox>
            <NutritionBox>
                <NutritonElementBox>
                  <NutritionText>Nutrition Facts:</NutritionText>
                </NutritonElementBox>
                <NutritonElementBox>
                  <NutritionText>Sugar:</NutritionText>
                </NutritonElementBox>
                <NutritonElementBox>
                  <NutritionText>Saturated Fat:</NutritionText>
                  </NutritonElementBox>
                <NutritonElementBox>
                  <NutritionText>Protein:</NutritionText>
                </NutritonElementBox>
                <NutritonElementBox>
                  <NutritionText>Fat:</NutritionText>
                </NutritonElementBox>
                <NutritonElementBox>
                  <NutritionText>Carbohydrates:</NutritionText>
                </NutritonElementBox>
            </NutritionBox>
          </TopSection>
          <MiddleSection>
            <MatchProductsText>Goes well with:</MatchProductsText>
            <ProductNameContainer><ProductNameMatch>Apple</ProductNameMatch></ProductNameContainer>
            <ProductNameContainer><ProductNameMatch>Milk</ProductNameMatch></ProductNameContainer>
            <ProductNameContainer><ProductNameMatch>Cereal</ProductNameMatch></ProductNameContainer>
            <ProductNameContainer><ProductNameMatch>Coconut</ProductNameMatch></ProductNameContainer>
            <ProductNameContainer><ProductNameMatch>Jam</ProductNameMatch></ProductNameContainer>  
          </MiddleSection>
          <BottomSection>
            <MealSuggestionText>Meals:</MealSuggestionText>            
            <SmallBoxWrapper>
              <SmallBox></SmallBox>
              <SmallBox></SmallBox>
              <SmallBox></SmallBox>
            </SmallBoxWrapper>
          </BottomSection>
      </Container>
  );
}
