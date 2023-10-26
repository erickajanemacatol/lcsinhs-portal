import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonNote, IonPage, IonText, IonTitle, IonToolbar, useIonToast } from "@ionic/react";
import React, { useEffect, useState } from "react";
import './Announcements.css';
import AdminHeader from "../../components/AdminHeader";
import { add, create, trash } from "ionicons/icons";
import { useMediaQuery } from "react-responsive";


const Announcements: React.FC = () => {
    const isDesktop = useMediaQuery({ minWidth: 1050 });
    const [presentToast, dismissToast] = useIonToast();
    const showToast = (message: string, color: string) => {
        presentToast({
            message: message,
            duration: 2000,
            color: color,
        });
    };

    const [updateModal, setUpdateModal] = useState(false);

    const closeUpdateModal = () => {
        setUpdateModal(false);
    };

    return (
        <IonPage>
            <AdminHeader />

            {isDesktop ?
                <>
                    <IonContent >

                        <div className="spacer-h-l"></div>
                        <div className="div-title">
                            <div className="title-pl">
                                <IonLabel className="annc-title">Announcements</IonLabel>
                            </div>

                            <div className="create-button">
                                <IonButton size="default" href="/admin/announcement-details" color={'dark'}>
                                    <IonIcon icon={add} />
                                    Create
                                </IonButton>
                            </div>
                        </div>

                        <div className="spacer-h-m"></div>

                    </IonContent>
                </> : <>

                    {/*MOBILE*/}
                    <IonContent>

                        <div className="div-title">
                                <IonLabel className="annc-title">Announcements</IonLabel>
                            <div className="create-button">
                                <IonButton size="default" href="/admin/announcement-details" color={'dark'}>
                                    <IonIcon icon={add} />
                                    Create
                                </IonButton>
                            </div>
                        </div>

                        <div className="spacer-h-m"></div>

                     

                    </IonContent>
                </>
            }

        </IonPage>
    );
};

export { Announcements };
