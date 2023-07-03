import React from 'react'
import '../Styles/About.css'
import thomas from '../img/Integrantes/Thomas.webp'
import eric from '../img/Integrantes/Eric.webp'

export const About = () => {
    return (
        <div className='bg-dark'>
            <div className="container2">
                <div className="box">
                    <div className="imgBox">
                        <img src={eric} />
                    </div>
                    <div className="content">
                        <h2>Eric Ibrahim
                            <span>Licenciado en Psicologia</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="box">
                    <div className="imgBox">
                        <img src={thomas} />
                    </div>
                    <div className="content">
                        <h2>Thomas Valla
                            <span>Estudiante de programacion</span>
                        </h2>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="box">
                    <div className="imgBox">
                        <img src="https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/335590405_900357777921427_4232585447908121682_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4MrtM6oOH8YAX_4WwMy&_nc_ht=scontent.ftuc1-2.fna&oh=00_AfDrzYtPNTK6WSPibcBHtgJgu0kWKoMjSpnidck2A6W_kw&oe=647817B3" />
                    </div>
                    <div className="content">
                        <h2>Matias Ozores
                            <span>Analista en sistemas y redes</span>

                        </h2>
                    </div>

                </div>
            </div>
            <div className="container2">
                <div className="box">
                    <div className="imgBox">
                        <img src="" />
                    </div>
                    <div className="content">
                        <h2>Franco Figueroa
                            <span>Estudiante de programacion</span>

                        </h2>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default About
