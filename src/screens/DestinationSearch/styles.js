import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,

    },
    input: {
        fontSize: 20,
        marginBottom: 20,
        color: 'black',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    iconContainer: {
        backgroundColor: '#e7e7e7',
        padding: 8,
        borderRadius: 10,
        marginRight: 15,        
    },
    locationText: {
        color: 'black'
    },
});

export default styles;