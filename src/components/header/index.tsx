// Libs
import { LuChartNoAxesCombined } from "react-icons/lu";

// Components
import { Flex } from "../flex";
import { Typography } from "../typography";

// Styles
import { StyledHeader } from "./styles";

export function Header() {
    return <StyledHeader>
        <Flex direction= "column" gap= "1.5rem" justifyContent= "flex-start" alignItems= "flex-start" style={{padding: "2.5rem"}}>
           <div className= "logo">
             <LuChartNoAxesCombined size={38} color="#fff"/>
           </div>
           
           <Flex direction= "column" gap= "0.5rem" justifyContent= "center" alignItems= "flex-start">
            <Typography fontSize="3rem" fontWeight="600">Calculadora de Lote Forex</Typography>
            <Typography fontSize= "1.15rem" fontWeight="300" lineHeight="1.5">Descubra o tamanho ideal do lote com base na 
                <br/> quantidade de pips e no valor máximo da operação.</Typography>
           </Flex>
        </Flex>

        <Flex>
            <img src="public/assets/images/candlestick.png" alt="Header Image" className= "header-image" />
        </Flex>
    </StyledHeader>
}