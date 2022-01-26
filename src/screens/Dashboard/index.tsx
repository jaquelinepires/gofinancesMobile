import React from "react";
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
  TransactionList
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
    id: '1',
    type: 'positive',
    title:"Desenvolvimento de site",
    amount:"R$ 10.100,00",
    category:{
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: '31/01/2022'
  },
  {
    id: '2',
    type: 'negative',
    title:"Hamburgueria Pizzy",
    amount:"R$ 60",
    category:{
      name: 'Alimentação',
      icon: 'coffee',
    },
    date: '10/01/2022'
  },
  {
    id: '3',
    type: 'negative',
    title:"Aluguel de apartamento",
    amount:"R$ 1.200,00",
    category:{
      name: 'Casa',
      icon: 'shopping-bag',
    },
    date: '10/01/2022'
  }
];

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
          <Icon name="exit-to-app" />
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
