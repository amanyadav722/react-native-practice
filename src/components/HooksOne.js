import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
    },
});

const HooksOne = () => {
    return (
        <View style={styles.container}>
            <Text>Hello from HooksOne!!</Text>
        </View>
    );
};

export default HooksOne;