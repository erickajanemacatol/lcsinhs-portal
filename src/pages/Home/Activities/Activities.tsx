import {
    IonLabel,
    IonContent, IonPage,
    IonFab, IonFabButton,
    IonIcon, IonChip, IonItem,
    IonButton} from "@ionic/react";
import './Activities.css';
import '/src/components/utils/Spacer.css'
import { add, addSharp } from "ionicons/icons";
import Header from "../../../components/StudentHeader";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";


const Activities = () => {
    const isDesktop = useMediaQuery({ minWidth: 1050 })
    const [selectedCategory, setSelectedCategory] = useState("All");


    return (

        <IonPage>
            <Header />

            {isDesktop ? <>
                <IonContent color={'light'} scrollX={false}>
                    <div className="spacer-h-m" />
                    <div className="display-flex">

                        <IonLabel className="my-act-title">My Activities </IonLabel>

                        <div className="add-pos">
                            <IonButton
                                className="add-btn-properties"
                                href={"/activities/add-activity"}
                                color={'dark'}
                            > Add Task
                                <IonIcon icon={addSharp}></IonIcon>
                            </IonButton>
                        </div>

                        <div className="spacer-h-s" />
                    </div>

                    <IonItem color={"light"}>
                        <IonChip
                            color={selectedCategory === "All" ? "primary" : "dark"}
                          
                        >
                            All
                        </IonChip>
                        <IonChip
                            color={selectedCategory === "Personal" ? "primary" : "dark"}
                           
                        >
                            Personal
                        </IonChip>
                        <IonChip
                            color={selectedCategory === "School" ? "primary" : "dark"}
                        >
                            School
                        </IonChip>
                        <IonChip
                            color={selectedCategory === "Work" ? "primary" : "dark"}
                        >
                            Work
                        </IonChip>
                        <IonChip
                            color={selectedCategory === "Home" ? "primary" : "dark"}
                        >
                            Home
                        </IonChip>
                    </IonItem>
                </IonContent>
            </>
                :

                /*MOBILE VIEW*/
                <>
                    <IonContent color={'light'} scrollX={false}>
                        <IonFab vertical="bottom" horizontal="end" slot="fixed">
                            <IonFabButton className="m-add-btn-properties"
                                href={"/activities/add-activity"}
                                color={'dark'}>
                                <IonIcon icon={add}></IonIcon>
                            </IonFabButton>
                        </IonFab>

                        <div className="spacer-h-s" />

                        <IonLabel className="m-my-act-title">My Activities </IonLabel>

                        <IonItem color={"light"}>
                            <IonChip
                                color={selectedCategory === "All" ? "primary" : "dark"}
                            >
                                All
                            </IonChip>
                            <IonChip
                                color={selectedCategory === "Personal" ? "primary" : "dark"}
                            >
                                Personal
                            </IonChip>
                            <IonChip
                                color={selectedCategory === "School" ? "primary" : "dark"}
                            >
                                School
                            </IonChip>
                            <IonChip
                                color={selectedCategory === "Work" ? "primary" : "dark"}
                            >
                                Work
                            </IonChip>
                            <IonChip
                                color={selectedCategory === "Home" ? "primary" : "dark"}
                            >
                                Home
                            </IonChip>
                        </IonItem>


                    </IonContent>
                </>

            }
        </IonPage >
    );
};

export { Activities };