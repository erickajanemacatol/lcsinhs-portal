import { IonButton, IonCard, IonCardContent, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, useIonToast } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { addCircle } from "ionicons/icons";
import { useMediaQuery } from "react-responsive";
import './Calendar.css';
import AdminHeader from "../../components/AdminHeader";

const Calendar: React.FC = () => {
    const isDesktop = useMediaQuery({ minWidth: 1050 });

    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState(null);
    const [error, setError] = useState("");
    const [events, setEvents] = useState([]);

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
            <AdminHeader />
            {isDesktop ?
                <>
                    <IonContent>

                        <div className="spacer-h-l"></div>
                        <IonLabel className="annc-title">School Calendar</IonLabel>
                        <div className="spacer-h-xs"></div>

                        <div className="upload-cal-button">
                            <IonCard className="event-card">
                                <IonCardContent className="upload-cal-button">
                                    <IonInput fill="outline"
                                        label="Event Name"
                                        labelPlacement="stacked"
                                        className="event-custom-input"
                                        value={eventName}
                                        onIonChange={(e) => setEventName(e.detail.value!)}>
                                    </IonInput>

                                    <IonInput fill="outline"
                                        label="Description (Optional)"
                                        labelPlacement="stacked"
                                        className="desc-custom-input"
                                        value={description}
                                        onIonChange={(e) => setDescription(e.detail.value!)}>
                                    </IonInput>

                                    <IonLabel slot="start">Start Date</IonLabel>
                                    <div className="spacer-w-xs" />
                                    <IonInput type="date" className="custom-date-input"
                                        value={startDate} onIonChange={(e) => setStartDate(e.detail.value!)} />


                                    <IonLabel slot="start">End Date</IonLabel>
                                    <div className="spacer-w-xs" />
                                    <IonInput type="date" className="custom-date-input"
                                        value={endDate} />

                                    <div className="spacer-w-xs" />

                                    {/*Submit Button*/}
                                    <IonButton color={'dark'} fill="clear" type="submit">
                                        <IonIcon slot="icon-only" icon={addCircle} size="large" />
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>
                        </div>

                        <div className="display-cal-button">
                            <IonList>
                                - Display School Events Here
                            </IonList>
                        </div>
                    </IonContent>

                </> : <>
                    {/*MOBILE*/}
                    <IonContent>
                        <div className="spacer-h-l"></div>
                        <IonLabel className="annc-title">School Calendar</IonLabel>
                        <div className="spacer-h-xs"></div>

                        <div className="m-upload-cal-button">

                            <IonInput fill="outline"
                                label="Event Name"
                                labelPlacement="stacked"
                                className="m-event-custom-input"
                                value={eventName}
                                onIonChange={(e) => setEventName(e.detail.value!)}>
                            </IonInput>

                            <IonInput fill="outline"
                                label="Description (Optional)"
                                labelPlacement="stacked"
                                className="m-desc-custom-input"
                                value={description}
                                onIonChange={(e) => setDescription(e.detail.value!)}>
                            </IonInput>


                            <h6>Start Date</h6>
                            <div className="spacer-w-xs" />
                            <IonInput type="date" className="m-custom-date-input" fill="outline"
                                value={startDate} onIonChange={(e) => setStartDate(e.detail.value!)} />

                            <h6>End Date</h6>
                            <div className="spacer-w-xs" />
                            <IonInput type="date" className="m-custom-date-input" fill="outline"
                                value={endDate} />

                            <div className="spacer-w-xs" />

                            {/*Submit Button*/}
                            <IonButton color={'dark'} type="submit">
                                Add
                            </IonButton>

                        </div>


                        <IonCard >
                            <div className="display-cal-button">
                                <IonList>
                                    - Display School Events Here
                                </IonList>
                            </div>
                        </IonCard>
                    </IonContent>
                </>
            }
        </IonPage>
    );
};

export { Calendar };


