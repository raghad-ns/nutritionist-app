import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image
} from "@react-pdf/renderer";
import logo from '../../assets/logo.svg'


const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff"
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    image: {
        height: 200,
        width: 150
    }
});

export function PdfDocument(props) {
    return (
        <Document>
            <Page style={styles.page}>
                <View>
                    <Text>{props.program.patientInfo.name}</Text>
                </View>
                {props.program.mealsPerDay.map((mealsForThisDay , index) => 
                <View key={index}>
                    {
                        mealsForThisDay.map((meal , idx) => 
                        <View key={idx}>
                            <Text> Food : {meal.name}</Text>
                            <Image source={meal.image} style={styles.image}/>
                            <Text> Amount : {meal.amount.toString()}</Text>
                            <Text> Calories : {meal.calories}</Text>
                        </View>
                        )
                    }
                </View>
                )}
                <View >
                    <Image style={styles.image} source={logo}/>
                    <Text >hello pdf</Text>
                </View>
            </Page>
        </Document>
    );
}