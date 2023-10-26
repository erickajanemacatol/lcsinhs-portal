import { IonButton, IonButtons, IonCard, IonContent, IonIcon, IonInput, IonModal, IonPage, useIonToast } from "@ionic/react";
import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import { addOutline, create, trash } from "ionicons/icons";
import { useMediaQuery } from "react-responsive";
import './Faculty.css'

const Faculty: React.FC = () => {
    const isDesktop = useMediaQuery({ minWidth: 1050 });
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false); //

    const [facultyInfo, setFacultyInfo] = useState({
        title: "",
        fname: "",
        lname: "",
        employee_no: "",
    });

    const handleClear = () => {
        setFacultyInfo({
            title: "",
            fname: "",
            lname: "",
            employee_no: "",
        });
    };


    return (
        <IonPage>
            <AdminHeader />
            {isDesktop ? <>
                <IonContent>

                    <div>
                        <div>
                            <IonButton
                                onClick={() => setShowAddModal(true)}>
                                <IonIcon icon={addOutline} />
                                Add Faculty
                            </IonButton>
                        </div>

                        {/*                        <div className="search-bar">
                            <div className="search-bar-desc">
                            </div>
                            <IonSearchbar

                                placeholder="Search"
                                debounce={300}
                            />
                            <div className="search-desc">
                                <IonText color={'medium'} className="search-desc-size">
                                    Input detail of Faculty using either Employee Number, First Name or Last Name and hit enter.
                                </IonText>
                            </div>
                        </div> */}

                    </div>


                </IonContent>
            </> : <></>}

            <IonModal isOpen={showAddModal}>
                <div>
                    <IonInput
                        fill="outline"
                        name="title"
                        value={facultyInfo.title}
                        placeholder="Mr./Ms./Mrs. or leave blank"
                    ></IonInput>
                    <div className="spacer-h-xxs" />
                    <IonInput
                        fill="outline"
                        name="fname"
                        value={facultyInfo.fname}
                        placeholder="First Name"
                    ></IonInput>
                    <div className="spacer-h-xxs" />
                    <IonInput
                        fill="outline"
                        name="lname"
                        value={facultyInfo.lname}
                        placeholder="Last Name"
                    ></IonInput>
                    <div className="spacer-h-xxs" />
                    <IonInput
                        fill="outline"
                        name="employee_no"
                        value={facultyInfo.employee_no}
                        placeholder="Employee Number"
                    ></IonInput>
                    <div className="spacer-h-xxs" />

                    <div className="buttons-pref">
                        <IonButton fill="outline" color={'dark'} onClick={handleClear}>Clear</IonButton>
                        <IonButton color={'dark'}>Add</IonButton>
                    </div>
                </div>
            </IonModal>

            <IonModal isOpen={showUpdateModal}>
                <IonContent>
                    <IonInput
                        fill="outline"
                        name="title"
                        placeholder="Title"
                    ></IonInput>
                    <IonInput
                        fill="outline"
                        name="fname"
                        placeholder="First Name"
                    ></IonInput>
                    <IonInput
                        fill="outline"
                        name="lname"
                        placeholder="Last Name"
                    ></IonInput>
                    <IonInput
                        fill="outline"
                        name="employee_no"
                        placeholder="Employee Number"
                    ></IonInput>
                    <IonButton>Update</IonButton>
                </IonContent>
            </IonModal>
        </IonPage>
    );
};

export { Faculty };

