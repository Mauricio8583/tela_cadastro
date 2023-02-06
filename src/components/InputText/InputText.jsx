import { Advertisement, AdvertisementLink, ButtonForm, Container, FormCreate, GoToLogin, ImgIcon, InputField, InputLine, Line, LoginLink, MainTitle, Text } from "./Styles"

export const InputText = () => {
  return (
    <Container>
        <Line />
        <MainTitle>Comece agora grátis</MainTitle>
        <Text>Crie sua conta e make the change._</Text>
        <FormCreate>
            <InputLine><ImgIcon src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" /><InputField type="text" placeholder="Nome Completo" required={true} /></InputLine>
            <InputLine><ImgIcon src="https://cdn-icons-png.flaticon.com/512/2989/2989993.png" /><InputField type="email" placeholder="Seu Melhor @e-mail" required={true} /></InputLine>
            <InputLine><ImgIcon src="https://www.curitiba.pr.leg.br/atividade-parlamentar/legislacao/imagens/bandeira-do-brasil.png/image" /><InputField type="text" placeholder="Celular ex (11) 96123-4567" required={true} /></InputLine>
            <InputLine><ImgIcon src="https://cdn-icons-png.flaticon.com/512/6117/6117000.png" /><InputField type="password" placeholder="Senha" required={true} /></InputLine>
            <ButtonForm type="submit">CRIAR MINHA CONTA GRÁTIS</ButtonForm>
        </FormCreate>
        <Advertisement>
        Ao clicar em "criar minha conta grátis", declaro que aceito as <AdvertisementLink href="#">Políticas de Privacidade</AdvertisementLink> e os <AdvertisementLink href="#">Termos de Uso</AdvertisementLink> da DIO.
        </Advertisement>
        <GoToLogin>
            Já tenho conta. <LoginLink href="#">Fazer login</LoginLink> 
        </GoToLogin>
    </Container>
  )
}
