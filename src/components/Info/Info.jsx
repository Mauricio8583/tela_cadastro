import { Container, IconImg, InfoItens, InfoLinks, InfoMainTitle, InfoTitle, Left, Right, StoreIcon, StoreText } from "./Styles"

export const Info = () => {
  return (
    <Container>
        <Left>
            <InfoItens>
                <InfoTitle>make the change</InfoTitle>
                <InfoLinks href="#">Para Empresas</InfoLinks>
            </InfoItens>
            <InfoItens>
                <InfoTitle>Informações</InfoTitle>
                <InfoLinks href="#">Central de Ajuda</InfoLinks>
                <InfoLinks href="#">Termos e Políticas</InfoLinks>
            </InfoItens>
        </Left>
        <Right>
            <InfoMainTitle>Download Grátis</InfoMainTitle>
            <StoreIcon>
                <StoreText><IconImg src="https://cdn-icons-png.flaticon.com/512/220/220782.png" />Baixar na Google Play</StoreText>
            
                 <StoreText><IconImg src="https://img2.gratispng.com/20180315/wee/kisspng-apple-logo-business-clip-art-apple-logo-outline-5aaafe77583254.0626784515211557033613.jpg" />Baixar na App Store</StoreText>
            </StoreIcon>
        </Right>
    </Container>
  )
}
