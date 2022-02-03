import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import { useFocusEffect } from "@react-navigation/native";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
 const [data, setData] = useState<DataListProps[]>([]);

 async function loadTransactions() {
  const dataKey = '@gofinances:transactions';
  const response = await AsyncStorage.getItem(dataKey);
  const transactions = response ? JSON.parse(response) : [];

  const transactionsFormatted: DataListProps[] = transactions
  .map((item: DataListProps) => {

    const amount = Number(item.amount)
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    const date = Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    }).format(new Date(item.date));

    return {
      id: item.id,
      name: item.name,
      amount,
      type: item.type,
      category: item.category,
      date,
    }

  });

  setData(transactionsFormatted)
  console.log(transactionsFormatted)
  }
  useEffect(() => {
  loadTransactions()
  
  // const dataKey = '@gofinances:transactions';
  // AsyncStorage.removeItem(dataKey);
  },[])

  useFocusEffect(useCallback(() => {
    loadTransactions()
  },[]))

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/85652891?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Jaqueline</UserName>
            </User>
          </UserInfo>
            <Icon
            name="exit-to-app" />
        </UserWrapper>
      </Header>
    <HighlightCards>
      <HighlightCard
      type="up"
       title= "Entradas" 
       amount= "R$ 15.100,00" 
       lasTransactions="Ultima entrada dia 24 de Janeiro"
       />
      <HighlightCard
      type="down"
       title= "Saídas" 
       amount= "R$ 1.100,00" 
       lasTransactions="Ultima saída dia 17 de Janeiro"      
      />
      <HighlightCard
       type="total"
       title= "Total" 
       amount= "R$ 1.100,00" 
       lasTransactions="01 a 16 de Janeiro"
       />
    </HighlightCards>

    <Transactions>
      <Title>Listagem</Title>

      <TransactionList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TransactionCard data={item} />}
        
      />
      
    </Transactions>
    </Container>
  );
}
