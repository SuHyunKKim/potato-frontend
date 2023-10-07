import React from 'react';
import { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function EmptyWish() {
    return (
    <Wrapper>
      <EmptyWishList>
            <a>찜한 목록이 없습니다.</a>
          </EmptyWishList>
    </Wrapper>
  );
}



const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    margin : 0px auto;
    align-items: center;
    display : flex;
    flex-direction: column;
    position : relative;
 
`

const Header = styled.div`
  
  display : flex;
  flex-direction: column;
  text-align : center;
  align-items: center;
  height : 120px;
  width : 780px;
  position : relative;
  margin-top : 0px;
  
  a{
    
    margin-top:40px;
    top:70%;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.5px;
  }
`

const Headline = styled.div`
  
  display : flex;
  flex-direction: column;
  height : 0px;
  width : 780px;
  position : relative;
  margin-top : 10px;
  background-color: #DFDFDF;
`
const WishListWrapper = styled.div`
  
  display : flex;
  flex-direction: column;
  height : 2px;
  width : 780px;
  position : relative;
  margin-top : 10px;
  background-color: #DFDFDF;
`

const EmptyWishList = styled.div`
  
  display : flex;
  flex-direction: column;
  text-align : center;
  align-items: center;
  color: #686868;
  margin-top : 25%;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.36px; 


`

