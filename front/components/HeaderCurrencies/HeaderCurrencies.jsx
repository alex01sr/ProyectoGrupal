import { Box, Input, ScrollView, VStack,HStack,Text,ZStack, Button,Heading,Switch } from 'native-base';
import * as React from 'react';
import { useState } from 'react';

import Criptos from './Criptos';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Pressable } from 'react-native';
import { getBalance, getBlockChain } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import {useFocusEffect } from '@react-navigation/native';

export default function HeaderCurrencies({navigation}) {

const dispatch = useDispatch();
const blockChain = useSelector(state => state.blockChain);
const stellar =[  "BTC",
"ETH",
"BNB",
"SOL",
"ADA",
"XRP",
"LUNA",
"DOT",
"AVAX",
"DOGE",
"1000SHIB",
"MATIC",
"LINK",
"LTC",
"ALGO",
"XLM",
"NEAR",
"ATOM",]

const ethereum = ["ETH"]


const [aux, setAux] = useState([

  
  ])
 
  useFocusEffect(
    React.useCallback(() => {
      dispatch(getBalance())
    
      return  () => {
     
      
      };
    }, []));


  React.useEffect(()=>{
    if(blockChain === "stellar"){
      setAux(stellar)

    }else{
      setAux(ethereum)
    }


  },[blockChain])

  return (<>
    <Box mt="20px"
    width={375}
    maxWidth="100%"
    alignSelf="center"
    
    >   


        <Box h="40" mb="-5" >
        <ZStack mt="2.5"  >
         <Box
            bg="indigo.600"
            mt="5"
            size="20"
            width={350}
            rounded="md"
            shadow={5}
          />
          <Box
            bg="#FFEC00"
            mt="7"
            ml="3"
           
            size="20"
            width={350}
            rounded="md"
            shadow={7}
          />
          
          <Box
            bg="darkBlue.900"
            mt="9"
            ml="5"
            size="20"
            width={350}
            rounded="md"
            shadow={9}
            alignItems="center"
          >

          <Text fontSize="4xl" mt="8px" fontWeight="bold" color="#ffffff">CURRENCIES</Text>
          </Box>
        </ZStack>
      </Box>

      <Box mb="3"width={300} alignSelf="center">
    <HStack>
    <Heading textAlign="center" mb="10">
        <Text color="black">BlockChain: {blockChain}</Text>
      </Heading>
      
    </HStack>
     
      <Input
      color="black"
      variant="underlined"
      px="5"
      
        InputRightElement={
          <FontAwesome5 mx="5" name="search-dollar" size={24} color="#D5D5D5" />
            
        }
        placeholder="Search Token"
      />

      </Box>
        
      

    </Box> 
         
         <ScrollView >
        <VStack mb="15">
         {aux?.map((element, index)=>{
          return <Criptos key ={index} token={element}  nav={navigation} />
        })} 
        </VStack>
      </ScrollView>
      
      </>
  );
}


