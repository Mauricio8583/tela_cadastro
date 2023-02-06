import { Container, GoBack, Line, Text } from "./Styles"

export const SimpleText = () => {
  return (
    <Container>
        <Line />
        <Text>
        A plataforma para você aprender com experts, 
        dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Text>
        <GoBack href="#">VOLTAR PARA LOGIN</GoBack>
    </Container>
  )
}
