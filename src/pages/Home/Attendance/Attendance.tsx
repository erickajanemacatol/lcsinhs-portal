import { IonCard, IonCardContent, IonContent, IonItem, IonLabel, IonPage } from "@ionic/react";
import Header from "../../../components/StudentHeader";
import './Attendance.css'
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const Attendance = () => {
    const isDesktop = useMediaQuery({ minWidth: 1050 })
    const [attendanceData, setAttendanceData] = useState([]);


    return (

        <IonPage>
            <Header />

            {isDesktop ? <>
                <IonContent color={'light'} scrollX={false}>
                    <div className="spacer-h-m" />
                    <div className="display-flex">
                        <IonLabel className="my-att-title">My Classes </IonLabel>
                    </div>

                    <IonCard className="my-grades-card">
                        <IonCardContent>
                            <IonItem>

                                <p>No attendance data available.</p>

                            </IonItem>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </>
                :

                /*MOBILE VIEW*/
                <>
                    <IonContent color={'light'} scrollX={false}>
                        <div className="spacer-h-s" />
                        <div className="display-flex">
                            <IonLabel className="m-my-att-title">My Classes </IonLabel>
                        </div>

                        <IonItem>

                            <p>No attendance data available.</p>

                        </IonItem>

                    </IonContent>
                </>

            }
        </IonPage>
    );
};

export { Attendance };