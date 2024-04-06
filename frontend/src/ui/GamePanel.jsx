import React, { useEffect, useState, useImperativeHandle } from 'react';
import styled from 'styled-components';
import constants from '../Constants';

const GameOverlay = styled.div`
`

const BackpackOverlay = styled.div`
  padding: 10px;
  border: 16px solid transparent;
  border-image: url(./assets/ui/panel.png) 7.5 fill repeat;

  position: fixed;
  bottom: 10px; /* Adjust this value as needed */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`

const CurrencyOverlay = styled.div`
  padding-right: 10px; // Adjust padding here
  padding-left: 10px; // Adjust padding here
  border: 16px solid transparent;
  border-image: url(./assets/ui/panel.png) 7.5 fill repeat;

  position: fixed;
  top: 0px; /* Adjust this value as needed */
  right: 0px;
  transform: translate(-50%, 20%);
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  /* Add transition for smooth animation */
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    transform: translate(-50%, 10%); /* Adjust the translateY value */
  }
`

const Backpack = styled.img`
  width: 80px;
  height: 80px;

  image-rendering: pixelated; /* Preserve image quality when scaled up */

  transition: 0.3s;
  -webkit-transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
`

const CurrencyText = styled.h1`
  margin-right: 10px; /* Adjust margin as needed */
  font-family: "VT323", monospace;
  font-size: 75px; /* Adjust font size as needed */
  font-weight: 400;
  margin-right: 10px;
  color: ${constants.primary}
`

const Coin = styled.img`
  width: 60px;
  height: 60px;

  image-rendering: pixelated; /* Preserve image quality when scaled up */

  transition: 0.3s;
  -webkit-transition: 0.3s;
`

export const GamePanel = ({ inventoryClicked, currencyClicked}) => {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
        // const items = await fetch('http://localhost:3000/inventory/evan');
        // const response = await items.json();
        // // console.log(response);
        // setStoreData(response.items);
    }

    fetchUserData();
  });
  
  return (
    <GameOverlay>
      <BackpackOverlay>
        <Backpack src='./assets/ui/backpack.png' onClick={()=>inventoryClicked()}></Backpack>
      </BackpackOverlay>

      <CurrencyOverlay onClick={()=>currencyClicked()}>
        <CurrencyText>{coins}</CurrencyText>
        <Coin src='./assets/ui/coin.png'></Coin>
      </CurrencyOverlay>
    </GameOverlay>
  );
};