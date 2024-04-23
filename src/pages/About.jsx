import React from "react";
import Header from "../components/Header/Header";
import Tittle from "../components/Tittles/Tittles";
import Perfil from "../components/Perfil/Perfil";
import SmallCard from "../components/SmallCard/SmallCard"
import fotoPerfil from '../assets/fotoCurriculo.jpeg';
import '../styles/global.scss'

const texto = "Software engineer with 2 years of experience in web and mobile application development. I started in the development field at 18 years old when I entered university and deepened my knowledge to levels I never imagined! Based on feedback from people close to me, I consider myself extremely proactive, dedicated, hardworking, responsible and passionate about learning everything about the IT field. I'm currently studying Science Computer in UNIFACS."


const About = () => {

    return(
        <>
            <Header/>

            <main>
                <Tittle titulo='Vitor Albuquerque'/>
                <Perfil image={fotoPerfil} text={texto}/>
                <Tittle titulo='Interests'/>
                <SmallCard />
            </main>
        </>
    )
}

export default About;