import { useIonToast, IonPage, IonContent, IonLabel, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import './News.css';
import AdminHeader from "../../components/AdminHeader";
import { trash } from "ionicons/icons";

const News: React.FC = () => {
    const isDesktop = useMediaQuery({ minWidth: 1050 });
    const [presentToast] = useIonToast();
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const selectedFileNameRef = useRef<HTMLDivElement | null>(null);

    const showToast = (message: string, color: string) => {
        presentToast({
            message: message,
            duration: 2000,
            color: color,
        });
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
    };


    return (
        <IonPage>
            <AdminHeader />
            {isDesktop ? (
                <IonContent>
                    <div className="spacer-h-l"></div>
                    <div className="div-title-n">

                        <div className="title-pl">
                            <IonLabel className="annc-title">News</IonLabel>
                        </div>
                        <div className="upload-pl">
                            <IonCard className="upload-card">
                                <input
                                    type="file"
                                    name="news"
                                    accept=".jpeg, .jpg, .png"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                />
                                <div>
                                    <IonCardContent className="upload-card-cont">
                                        <div className="select-file-text">
                                            Selected File: <span ref={selectedFileNameRef}></span>
                                        </div>
                                        <div className="select-file-but">
                                            <IonButton fill="outline" color={'dark'}>Select File</IonButton>
                                            <IonButton color={'dark'}>Upload</IonButton>
                                        </div>
                                    </IonCardContent>
                                </div>
                            </IonCard>
                        </div>
                    </div>
                </IonContent >

            ) : (

                <IonContent>
                    <div className="spacer-h-l"></div>
                    <div className="div-title-n">

                        <div className="title-pl">
                            <IonLabel className="annc-title">News</IonLabel>
                        </div>
                    </div>
                    <div className="upload-pl">
                            <IonCard className="upload-card">
                                <input
                                    type="file"
                                    name="news"
                                    accept=".jpeg, .jpg, .png"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                />
                                <div>
                                    <IonCardContent className="upload-card-cont">
                                        <div className="select-file-text">
                                            Selected File: <span ref={selectedFileNameRef}></span>
                                        </div>
                                        <div className="select-file-but">
                                            <IonButton fill="outline" color={'dark'}>Select File</IonButton>
                                            <IonButton color={'dark'}>Upload</IonButton>
                                        </div>
                                    </IonCardContent>
                                </div>
                            </IonCard>
                        </div>

                </IonContent>
            )}
        </IonPage >
    );
};

export { News };
