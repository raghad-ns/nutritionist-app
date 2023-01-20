import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image
} from "@react-pdf/renderer";
import { DAYS } from "../../data/days";


const styles = StyleSheet.create({
    pdfPage: {
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    mealDetails: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        border: 1,
        borderColor: '#555',
        borderRadius: 15
    },
    mealInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 5,
        padding: 10,
        border: '1px solid #888',
        borderRadius: 15
    },
    mealImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 5
    },
    mealText: {
        margin: 5,
        fontSize: 14,
        textAlign: 'left'
    },
});

export function PdfDocument(props) {
    return (
        <Document title={`${props.program.patientInfo.name}'s diet propgram`} >
            {props.program.mealsPerDay.map((mealsForThisDay, index) =>
                <Page key={index} style={styles.pdfPage}>
                    <View >
                        <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' }}>{DAYS[index] + ' : '}</Text>
                        {mealsForThisDay
                            ? mealsForThisDay.map((meal, index) =>
                                <View key={index} style={styles.mealDetails}>
                                    {
                                        meal.image &&
                                        <Image src={meal.image} style={styles.mealImage}></Image>
                                    }
                                    <View style={styles.mealInfo}>
                                        <Text style={styles.mealText}> {meal.name}</Text>
                                        <Text style={styles.mealText}> Amount : {meal.amount}</Text>
                                        <Text style={styles.mealText}> Calories : {meal.calories}</Text>
                                    </View>
                                </View>
                            )
                            : <Text style={styles.mealText}>No meals for this day</Text>
                        }
                    </View>
                </Page>
            )}

        </Document>
    );
}