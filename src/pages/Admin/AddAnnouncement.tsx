import { IonButton, IonContent, IonIcon, IonInput, IonLabel, IonPage, useIonToast } from "@ionic/react";
import React, { useState } from "react";
import './Announcements.css'
import { arrowBack, checkmark, close } from "ionicons/icons";
import { useMediaQuery } from "react-responsive";
import { useHistory } from 'react-router-dom';

const AddAnnouncement: React.FC = () => {
    const isDesktop = useMediaQuery({ minWidth: 1050 });
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();
    const [presentToast, dismissToast] = useIonToast();

    const showToast = (message: string, color: string) => {
        presentToast({
            message: message,
            duration: 2000,
            color: color,
        });
    };


    return (
        <IonPage>
            {isDesktop ?
                <>
                    <IonContent>
                        <div className="spacer-h-l"></div>
                        <div className="top-placement">
                            <div className="my-profile-top">
                                <IonButton
                                    href={"/admin/announcements"}
                                    className="back-button-size"
                                    fill="clear"
                                >
                                    <IonIcon icon={arrowBack}></IonIcon>
                                </IonButton>
                                <IonLabel className="my-profile-text">
                                    Announcement Details
                                </IonLabel>
                            </div>
                        </div>

                        <div className="spacer-h-l"></div>
                        <div className="body-display">
                            <div className="spacer-h-m"></div>
                            <IonLabel>Title</IonLabel>
                            <IonInput
                                type="text"
                                value={title}
                                labelPlacement="floating"
                                onIonChange={(e) => setTitle(e.detail.value!)}
                                counter={true}
                                maxlength={50}
                                counterFormatter={(inputLength, maxLength) =>
                                    `${maxLength - inputLength} characters remaining`
                                }
                            ></IonInput>

                            <div className="spacer-h-m"></div>

                            <IonLabel>Description</IonLabel>
                            <IonInput
                                type="text"
                                value={description}
                                labelPlacement="floating"
                                onIonChange={(e) => setDescription(e.detail.value!)}
                                counter={true}
                                maxlength={200}
                                counterFormatter={(inputLength, maxLength) =>
                                    `${maxLength - inputLength} characters remaining`
                                }
                            ></IonInput>

                            <div className="spacer-h-l"></div>
                            <div className="submit-button-pos">
                                <IonButton
                                    fill="outline"
                                    className="cancel-button"
                                    size="default"
                                    onClick={() => history.push('/admin/announcements')}>
                                    <IonIcon icon={close}></IonIcon>
                                </IonButton>

                                <IonButton
                                    className="submit-button"
                                    size="default"
                                    href='/admin/annoucements'>
                                    <IonIcon icon={checkmark}></IonIcon>
                                </IonButton>
                            </div>

                            {error && (
                                <div className="error-message">
                                    <IonLabel color="danger">{error}</IonLabel>
                                </div>
                            )}
                        </div>
                    </IonContent>


                </> : <>
                    {/*MOBILE*/}
                    <IonContent >
                        <div className="spacer-h-l"></div>
                        <div className="top-placement">
                            <div className="my-profile-top">
                                <IonLabel className="my-profile-text">Announcement Details</IonLabel>
                            </div>
                        </div>

                        <div className="spacer-h-l"></div>
                        <div className="body-display">

                            <div className="spacer-h-m"></div>
                            <IonLabel>Title</IonLabel>
                            <IonInput
                                type="text"
                                value={title}
                                labelPlacement="floating"
                                onIonChange={(e) => setTitle(e.detail.value!)}
                                counter={true}
                                maxlength={25}
                                counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                            </IonInput>

                            <div className="spacer-h-m"></div>

                            <IonLabel>Description</IonLabel>
                            <IonInput
                                type="text"
                                value={description}
                                labelPlacement="floating"
                                onIonChange={(e) => setDescription(e.detail.value!)}
                                counter={true}
                                maxlength={200}
                                counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                            </IonInput>

                            <div className="spacer-h-l"></div>
                            <div className="submit-button-pos">
                                <IonButton
                                    fill="outline"
                                    className="cancel-button"
                                    size="default"
                                    href="/admin/announcements">
                                    <IonIcon icon={close}></IonIcon>
                                </IonButton>

                                <IonButton
                                    className="submit-button"
                                    size="default"
                                    href="/admin/announcements">
                                    <IonIcon icon={checkmark}></IonIcon>
                                </IonButton>
                            </div>

                            {error && (
                                <div className="error-message">
                                    <IonLabel color="danger">{error}</IonLabel>
                                </div>
                            )}
                        </div>
                    </IonContent>
                </>

            }

        </IonPage >
    );

};

export { AddAnnouncement };

