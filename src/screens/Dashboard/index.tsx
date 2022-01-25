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
  Title
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

export function Dashboard() {
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
      <TransactionCard />
    </Transactions>
    </Container>
  );
}
