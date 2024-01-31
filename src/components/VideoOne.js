import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
    },
    videoStyle: {
        width: 400,
        height: 250,
    },
});

const VideoOne = () => {
    return (
        <View style={styles.container}>
            <Text>Hello from VideoOne!!!</Text>
            <Video
                source={require('../assets/iceclair.mp4')}
                style={styles.videoStyle}
                controls={true}
                resizeMode="cover"
                useNativeControls
                isLooping
            />
            <Video
                source={require('../assets/iceclair.mp4')}
                style={styles.videoStyle}
                controls={true}
                resizeMode="cover"
                useNativeControls
                isLooping
            />
        </View>
    );
};

export default VideoOne;











// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Video } from 'expo-av';

// const styles = StyleSheet.create({
//     container: {
//         paddingTop: 10,
//     },
//     videoStyle: {
//         width: 400,
//         height: 250,
//     },
//     txt: {
//         fontWeight: "bold",
//         fontSize: 40,
//         alignItems: "center",
//         textAlign: "center",
//     },
// });

// const VideoOne = () => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.txt}>Iceclàir!!!{"\n"}{"\n"}</Text>
//             <Video
//                 source={require('../assets/iceclair.mp4')}
//                 style={styles.videoStyle}
//                 controls={true}
//                 resizeMode="cover"
//                 useNativeControls
//                 isLooping
//             />
//         </View>
//     );
// };

// export default VideoOne;
