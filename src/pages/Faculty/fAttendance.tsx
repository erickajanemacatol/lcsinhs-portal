import { IonContent, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption } from "@ionic/react";
import React, { useEffect, useState } from "react";
import './fAttendance.css'
import FacultyHeader from "../../components/FacultyHeader";
import { useMediaQuery } from "react-responsive";

const fAttendance: React.FC = () => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    const [availableDates, setAvailableDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');


    return (
        <IonPage >
            <FacultyHeader />
            {isDesktop ?
                <>
                    <IonContent scrollX={false} color={'light'}>
                        <div className="spacer-h-l"></div>
                        <IonLabel className="my-activity-text">View Attendance</IonLabel>
                        <div>
                            <IonItem color={'light'}>
                                <IonSelect
                                    placeholder="Select Date"
                                    value={selectedDate}
                                    onIonChange={(e) => setSelectedDate(e.detail.value)}
                                >
                                </IonSelect>
                            </IonItem>
                        </div>

                    </IonContent>

                </>
                :
                <>
                    <IonContent scrollX={false} color={'light'}>
                        <div className="spacer-h-l"></div>
                        <IonLabel className="my-activity-text">View Attendance</IonLabel>
                        <div>
                            <IonItem color={'light'}>
                                <IonSelect
                                    placeholder="Select Date"
                                    value={selectedDate}
                                    onIonChange={(e) => setSelectedDate(e.detail.value)}
                                >
                                </IonSelect>
                            </IonItem>
                        </div>

                    </IonContent>
                </>
            }
        </IonPage>
    );
};

export { fAttendance };
