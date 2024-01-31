import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Movies = () => {
    const [movieData, setMovieData] = useState(null);

    const fetchMovieData = async () => {
        const url = `https://api.themoviedb.org/3/movie/848538?api_key=7008561cb2f105ee17b8a5d3b45f60a3`;

        try {
            const response = await fetch(url);
            const movieJson = await response.json();
            setMovieData(movieJson);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMovieData();
    }, []);

    if (!movieData) {
        return <Text>Loading...</Text>;
    }

    const { title, poster_path } = movieData;

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>{title}{"\n"}{"\n"}</Text>
            <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 500,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
});

export default Movies;













// import React, { useEffect, useState } from 'react';
// import { View, Image, Text } from 'react-native';

// const Movies = () => {
//   const [movieData, setMovieData] = useState('');

//   const fetchMovieData = async () => {
//     const url = `https://api.themoviedb.org/3/movie/572802-aquaman-and-the-lost-kingdom`;
//     const apiKey = '7008561cb2f105ee17b8a5d3b45f60a3';

//     try {
//       const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${apiKey}`
//         }
//       });

//       const movieJson = await response.json();
//       setMovieData(movieJson);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchMovieData();
//   }, []);

//   const { title, poster_path } = movieData;

//   return (
//     <View>
//       <Text>{title}</Text>
//       <Image source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }} />
//     </View>
//   );
// };

// export default Movies;
