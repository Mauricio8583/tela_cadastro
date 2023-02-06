import { ButtonOption, Buttons, Container, Flags, ImgFlag, ListaMenu, ListaMenuItem, Logo, LogoImg, Menu } from './Styles'

export const Navbar = () => {
  return (
    <Container>
        <Logo>
          <LogoImg src='https://hermes.digitalinnovation.one/assets/diome/logo.png' alt='' />
        </Logo>

        <Menu>
          <ListaMenu>
            <ListaMenuItem>Home</ListaMenuItem>
            <ListaMenuItem>Catalogo</ListaMenuItem>
            <ListaMenuItem>Planos</ListaMenuItem>
            <ListaMenuItem>Para Empresas</ListaMenuItem>
          </ListaMenu>

          <Buttons>
             <ButtonOption>Entrar</ButtonOption>
             <ButtonOption>Cadastrar</ButtonOption>
          </Buttons>

          <Flags>
            <ImgFlag src='https://www.curitiba.pr.leg.br/atividade-parlamentar/legislacao/imagens/bandeira-do-brasil.png/image' alt='Portugues' />
            <ImgFlag src='https://www.gov.br/agricultura/pt-br/assuntos/relacoes-internacionais/agro-mais-investimentos/imagens/bandeira-dos-estados-unidos.png/@@images/image.png' alt='Ingles' />
            <ImgFlag src='https://imagepng.org/wp-content/uploads/2017/09/bandeira-espanha.png' alt='Espanhol' />
          </Flags>
        </Menu>
      
    </Container>
  )
}
