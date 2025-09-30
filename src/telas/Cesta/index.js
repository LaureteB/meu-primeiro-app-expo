import react from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function Cesta(){
    <FlatList>
        data={itens.lista}
        renderItem={item}
        keyExtractor={({nome})=> nome}
            ListaHeaderComponent={()=>{
                return <>
                
                </>
            }}
    </FlatList>

}

const estilos = StyleSheet.create({
    titulo:{
        color:"rgba(194, 236, 255, 0)",
        fontWeight:"bold",
        marginTop:32,
        marginBottom:8,
        fontSize:20,
        lineHeight:32,
    },
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,
    }
})
import { FlatList, StyleSheet, View } from "react-native-web";