import { Global } from "@mantine/core";

export const GlobalStyles = ()=>{
    return (
        <Global
        styles={(theme)=>({
            "*":{
                margin: 0,
                padding: 0,
            },
            body:{
                fontSize:"16px",
                color: "#333",
            }
        })}
        />
    )
}

