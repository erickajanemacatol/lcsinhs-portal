import React, { useEffect, useState } from 'react';
import { IonCard, IonContent, IonImg, IonButton, IonPage, IonAvatar, IonText } from "@ionic/react";
import { useMediaQuery } from "react-responsive";
import './ID_temp.css';
import { useHistory, useLocation } from 'react-router-dom';

const ID_temp = () => {
    const isDesktop = useMediaQuery({ minWidth: 1050 });
    const [userData, setUserData] = useState({});
    const location = useLocation();
    const [profilePicturePath, setProfilePicturePath] = useState("https://ionicframework.com/docs/img/demos/avatar.svg"); // Set a default value
    const history = useHistory(); // For navigation

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get('print') === 'true') {
            window.print();
        }
    }, [location.search]);

    return (
        <IonPage>
            <IonContent color={'light'} >
                <div className="spacer-h-m" />
                <div className="cards-pref">
                    {/* Front */}
                    <IonCard className="card-size">
                        <div className="card-content">
                            <IonImg src="/src/imgs/idfront_jhs.png"></IonImg>
                            <div className="avatar-post">
                                <IonAvatar className="avatar-size">
                                    <img alt="Student Avatar" src={profilePicturePath || "https://ionicframework.com/docs/img/demos/avatar.svg"} />
                                </IonAvatar>
                            </div>
                            <div className="name-over-image">
                                <IonText className="name-size">
                                    {"First"} {"Last"}
                                </IonText>
                            </div>
                            <div className="lrn-over-image">
                                <IonText className="lrn-size">
                                    {"123456789012"}
                                </IonText>
                            </div>
                        </div>
                    </IonCard>
                    {/* Back */}
                    <IonCard className="card-size">
                        <div className="card-content">
                            <IonImg src='/src/imgs/idback_jhs.png'></IonImg>
                        </div>
                        <div className="poc-over-image">
                            <IonText className='poc-size'>
                                {"Sabrina Macs"}
                            </IonText>
                        </div>
                        <div className="add-over-image">
                            <IonText className='add-size'>
                                {"Bauan, Batangas"}
                            </IonText>
                        </div>
                        <div className="num-over-image">
                            <IonText className='num-size'>
                                {"09998765432"}
                            </IonText>
                        </div>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    );
};

export { ID_temp };
