import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonText, useIonToast } from "@ionic/react";
import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import { useMediaQuery } from "react-responsive";
import './Students.css';

const Students: React.FC = () => {
    const isDesktop = useMediaQuery({ minWidth: 1050 });
    const [students, setStudents] = useState([]);
    const [presentToast, dismissToast] = useIonToast();
    const inputKeys = ["CoR", "form_137", "good_moral", "CoEnrolment", "CoRanking"];
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: CustomEvent) => {
        setSearchQuery(e.detail.value);
    };

    const [fileStates, setFileStates] = useState(
        students.map(() => ({
            CoR: null,
            form_137: null,
            good_moral: null,
            CoEnrolment: null,
            CoRanking: null
        }))
    );

    const showToast = (message: string, color: 'primary' | 'danger' | 'success' | 'warning') => {
        presentToast({
            message: message,
            duration: 2000,
            color: color,
        });
    };


    return (
        <IonPage>
            <AdminHeader />
            {isDesktop ? (
                <IonContent>
                    <div className="spacer-h-l"></div>
                    <div className="search-bar-size">
                        <IonSearchbar
                            value={searchQuery}
                            onIonChange={handleSearch}
                            placeholder="Search"
                            debounce={300}
                        />
                        <div className="search-bar-desc">
                            <IonText color={'medium'}>
                                Input detail of student using either LRN, First Name or Last Name and hit enter.
                            </IonText>
                        </div>
                    </div>

                    <div className="spacer-h-l"></div>
                    <IonItem>
                        <IonLabel>LRN</IonLabel>
                        <IonLabel>Student</IonLabel>
                        <div className="spacer-w-l" />
                        <IonLabel>CoR</IonLabel>
                        <IonLabel></IonLabel>
                        <IonLabel>Form 137</IonLabel>
                        <IonLabel></IonLabel>
                        <IonLabel>Good Moral</IonLabel>
                        <IonLabel></IonLabel>
                        <IonLabel>Enrolment</IonLabel>
                        <IonLabel></IonLabel>
                        <IonLabel>Ranking</IonLabel>
                        <IonLabel></IonLabel>
                        <IonLabel></IonLabel>
                    </IonItem>

                    <IonGrid>
                        <IonRow>
                        </IonRow>
                    </IonGrid>

                </IonContent>
            ) : (
                <IonContent>
                    <div className="spacer-h-l"></div>
                    <div className="spacer-h-m"></div>

                    <IonLabel>Not Available in Mobile View</IonLabel>
                </IonContent>
            )
            }
        </IonPage >
    );
};

export { Students };
