import { IonButton, IonContent, IonIcon, IonInput, IonLabel, IonPage, useIonToast } from "@ionic/react";
import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import { add } from "ionicons/icons";
import { useMediaQuery } from "react-responsive";
import './Survey.css';

const Links: React.FC = () => {
    const isDesktop = useMediaQuery({ minWidth: 1050 });
    const [presentToast, dismissToast] = useIonToast();
    const [surveyLink, setSurveyLink] = useState("");
    const surveyID = 1;
    const [enrolLink, setEnrolLink] = useState("");
    const enrolID = 1;
    const [editing, setEditing] = useState(true);
    const [editingE, setEditingE] = useState(true);
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
                        {/*SURVEY*/}
                        <div className="spacer-h-l"></div>
                        <IonLabel className="annc-title">Survey Form Link</IonLabel>
                        <div className="spacer-h-m"></div>
                        <div className="disp-block">
                            <div className="disp-flex">
                                <IonInput
                                    fill="outline"
                                    placeholder="Enter link to survey here"
                                    value={surveyLink}
                                    onIonChange={(e) => setSurveyLink(e.detail.value!)}
                                ></IonInput>
                                <div className="spacer-w-xs" />
                                <IonButton>
                                    {editing ? "Save Link" : "Edit Link"}
                                </IonButton>
                            </div>
                        </div>

                        <div className="spacer-h-l" />
                        <div className="disp-center-flex">
                            {surveyLink && !editing && (
                                <div className="disp-block">
                                    <IonLabel>Current Link to Survey:</IonLabel>
                                    <div className="spacer-w-s" />
                                    <IonButton href={surveyLink} target="_blank">
                                        Open Survey
                                    </IonButton>
                                    <IonButton color="danger">
                                        Delete Link
                                    </IonButton>
                                </div>
                            )}
                        </div>

                        {/*ENROLMENT*/}
                        <div className="spacer-h-xl"></div>
                        <div className="spacer-h-xl"></div>

                        <IonLabel className="annc-title">Enrolment Form Link</IonLabel>
                        <div className="spacer-h-m"></div>
                        <div className="disp-block">
                            <div className="disp-flex">
                                <IonInput
                                    fill="outline"
                                    placeholder="Enter link to enrolment form here"
                                    value={enrolLink}
                                    onIonChange={(e) => setEnrolLink(e.detail.value!)}
                                ></IonInput>
                                <div className="spacer-w-xs" />
                                <IonButton>
                                    {editingE ? "Save Link" : "Edit Link"}
                                </IonButton>
                            </div>
                        </div>

                        <div className="spacer-h-l" />
                        <div className="disp-center-flex">
                            {enrolLink && !editingE && (
                                <div className="disp-block">
                                    <IonLabel>Current Link to Enrolment:</IonLabel>
                                    <div className="spacer-w-s" />
                                    <IonButton href={enrolLink} target="_blank">
                                        Open Enrolment Form
                                    </IonButton>
                                    <IonButton color="danger">
                                        Delete Link
                                    </IonButton>
                                </div>
                            )}
                        </div>

                    </IonContent>
                </> : <>
                    {/*MOBILE*/}
                    <IonContent>
                        <div className="spacer-h-l"></div>
                        <IonLabel className="annc-title">Survey Form Link</IonLabel>
                        <div className="spacer-h-m"></div>
                        <div className="disp-block">
                            <div className="disp-flex">
                                <IonInput
                                    fill="outline"
                                    placeholder="Enter link to survey here"
                                    value={surveyLink}
                                    onIonChange={(e) => setSurveyLink(e.detail.value!)}
                                ></IonInput>
                                <div className="spacer-w-xs" />
                                <IonButton>
                                    {editing ? "Save Link" : "Edit Link"}
                                </IonButton>
                            </div>
                        </div>

                        <div className="spacer-h-l" />
                        <div className="disp-center-flex">
                            {surveyLink && !editing && (
                                <div className="disp-block">
                                    <IonLabel>Current Link to Survey:</IonLabel>
                                    <div className="spacer-w-s" />
                                    <IonButton href={surveyLink} target="_blank">
                                        Open Survey
                                    </IonButton>
                                    <IonButton color="danger">
                                        Delete Link
                                    </IonButton>
                                </div>
                            )}
                        </div>

                        {/*ENROLMENT*/}
                        <div className="spacer-h-xl"></div>
                        <div className="spacer-h-xl"></div>

                        <IonLabel className="annc-title">Enrolment Form Link</IonLabel>
                        <div className="spacer-h-m"></div>
                        <div className="disp-block">
                            <div className="disp-flex">
                                <IonInput
                                    fill="outline"
                                    placeholder="Enter link to enrolment form here"
                                    value={enrolLink}
                                    onIonChange={(e) => setEnrolLink(e.detail.value!)}
                                ></IonInput>
                                <div className="spacer-w-xs" />
                                <IonButton>
                                    {editingE ? "Save Link" : "Edit Link"}
                                </IonButton>
                            </div>
                        </div>

                        <div className="spacer-h-l" />
                        <div className="disp-center-flex">
                            {enrolLink && !editingE && (
                                <div className="disp-block">
                                    <IonLabel>Current Link to Enrolment:</IonLabel>
                                    <div className="spacer-w-s" />
                                    <IonButton href={enrolLink} target="_blank">
                                        Open Enrolment Form
                                    </IonButton>
                                    <IonButton color="danger">
                                        Delete Link
                                    </IonButton>
                                </div>
                            )}
                        </div>



                    </IonContent>
                </>
            }
        </IonPage>
    );
};

export { Links };
