import React, { useEffect, useState } from 'react';
import ListContent from '../contents/ListContent';
import Grid from '@mui/material/Grid';

export default function Home() {

    const [komiks, setKomiks] = useState(['not found']);

    // For development and production purpose
    // useEffect(() => {
    //     fetch('http://localhost:8000/notes')
    //         .then(res => res.json())
    //         .then(data => setKomik(data))
    //         .then()
    // }, []);

    console.log(komiks);

    useEffect(() => {
        // For Beta version
        setKomiks([
            {
                "judul": "Cinta Dipucuk Pohon",
                "detail": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "kategori": "manga",
                "featured_image": "https://via.placeholder.com/190x240",
                "rating": 4,
                "id": 1
            },
            {
                "judul": "Solo Farming",
                "detail": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                "kategori": "manhwa",
                "featured_image": "https://via.placeholder.com/190x240",
                "rating": 5,
                "id": 2
            },
            {
                "judul": "Tales of Kocheng and Miau",
                "detail": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                "kategori": "manga",
                "featured_image": "https://via.placeholder.com/190x240",
                "rating": 2.5,
                "id": 3
            },
            {
                "judul": "Manusia Satu Sundulan",
                "detail": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                "kategori": "manga",
                "featured_image": "https://via.placeholder.com/190x240",
                "rating": 4.5,
                "id": 4
            }
        ]);

        console.log(komiks);
    }, []);

    return (
        <Grid container spacing={1}>
            {komiks.map(el => (
                <ListContent data={el} />
            ))}
        </Grid>
    );

}