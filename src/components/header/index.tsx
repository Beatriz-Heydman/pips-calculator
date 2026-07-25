// Libs
import { LuChartNoAxesCombined } from "react-icons/lu";

// Components
import { Flex } from "../flex";
import { Typography } from "../typography";

// Styles
import { StyledHeader } from "./styles";

export function Header() {
    return <StyledHeader>
        <Flex direction= "column" gap= "1.5rem" justifyContent= "flex-start" alignItems= "center" style={{padding: "2.5rem", width: "55%"}}>
           
           <Flex justifyContent= "flex-start" alignItems= "center" style={{width: "100%"}}>
              <div className= "logo">
                 <LuChartNoAxesCombined size={38} color="#fff"/>
              </div>
           </Flex>
           
           <Flex direction= "column" gap= "0.5rem" justifyContent= "center" alignItems= "flex-start" style={{width: "100%"}}>
            <Typography fontSize="3rem" fontWeight="600">Calculadora de Lote Forex</Typography>
            <Typography fontSize= "1.15rem" fontWeight="300" lineHeight="1.5">Descubra o tamanho ideal do lote com base na 
                <br/> quantidade de pips e no valor máximo da operação.</Typography>
           </Flex>
        </Flex>

        <Flex  alignItems= "flex-start">
            <img src="public/assets/images/candlestick.png" alt="Header Image" className= "header-image" />
        </Flex>
    </StyledHeader>
}