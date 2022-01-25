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
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";

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
      <HighlightCard />
    </Container>
  );
}
