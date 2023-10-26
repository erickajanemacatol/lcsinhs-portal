import {
    IonCard, IonLabel,
    IonCardContent,
    IonContent, IonPage,
    IonIcon, 
    IonInput, IonItem, IonButton,
    IonList, IonSelect, IonSelectOption,
    IonDatetime, IonChip, IonText,
    useIonToast,
    IonHeader,
    IonToolbar
} from "@ionic/react";
import './AddActivity.css';
import { add, arrowBack, closeCircle, pricetag } from "ionicons/icons";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router";


const AddActivity = () => {
    const isDesktop = useMediaQuery({ minWidth: 1050 })
    const history = useHistory();
    const [newTask, setNewTask] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPriority, setSelectedPriority] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const currentDate = new Date();
    const minDate = currentDate.toISOString();


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
                    <IonContent color={'light'} scrollX={false} >
                        <IonHeader className="ion-no-border">
                            <IonToolbar>
                                <div className="activity-label">
                                    <IonButton href='/activities' className="back-button-size" fill="clear" color={'dark'}>
                                        <IonIcon icon={arrowBack}></IonIcon>
                                    </IonButton>
                                    <div className="act-text-pos">
                                        <IonLabel className="my-activity-text">Activity Details</IonLabel>
                                    </div>
                                </div>
                            </IonToolbar>
                        </IonHeader>

                        <div className="div-sz">
                            <IonCard className="add-activity-card">
                                <div className="enter-task">

                                    <div className="center">
                                        <IonDatetime
                                            color={'dark'}
                                            value={selectedDate}
                                            min={minDate}
                                        ></IonDatetime>
                                    </div>
                                    <div>
                                        <div className="spacer-h-xl" />
                                        <div className="spacer-h-xl" />
                                        <IonInput
                                            fill="outline"
                                            label="Enter Task Here"
                                            labelPlacement="floating"
                                            counter={true}
                                            maxlength={50}
                                            counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}
                                            value={newTask}
                                            onIonChange={(e) => setNewTask(e.detail.value || '')}>
                                        </IonInput>

                                        <IonList>
                                            <IonItem>
                                                Priority
                                                <IonSelect
                                                    slot="end"
                                                    aria-label="priority"
                                                    value={selectedPriority} 
                                                    onIonChange={(e) => setSelectedPriority(e.detail.value)}
                                                >
                                                    <IonSelectOption value="0">Low</IonSelectOption>
                                                    <IonSelectOption value="1">Middle</IonSelectOption>
                                                    <IonSelectOption value="2">High</IonSelectOption>
                                                </IonSelect>

                                            </IonItem>
                                        </IonList>

                                        <IonItem>
                                            <IonIcon icon={pricetag}></IonIcon>
                                            <div className="spacer-w-xxs"></div>
                                            <IonLabel>
                                                Category
                                            </IonLabel>

                                            <IonItem>
                                                <IonChip
                                                    color="dark"
                                                    onClick={() => setSelectedCategory('Personal')}
                                                    className={selectedCategory === 'Personal' ? 'selected' : ''}
                                                >
                                                    Personal
                                                </IonChip>

                                                <IonChip
                                                    color="dark"
                                                    onClick={() => setSelectedCategory('School')}
                                                    className={selectedCategory === 'School' ? 'selected' : ''}
                                                >
                                                    School
                                                </IonChip>

                                                <IonChip
                                                    color="dark"
                                                    onClick={() => setSelectedCategory('Work')}
                                                    className={selectedCategory === 'Work' ? 'selected' : ''}
                                                >
                                                    Work
                                                </IonChip>

                                                <IonChip
                                                    color="dark"
                                                    onClick={() => setSelectedCategory('Home')}
                                                    className={selectedCategory === 'Home' ? 'selected' : ''}
                                                >
                                                    Home
                                                </IonChip>
                                            </IonItem>


                                            <div className='spacer-w-xl' />
                                            <IonText color="dark">
                                                {selectedCategory}
                                            </IonText>
                                            <IonButton color={'dark'} fill="clear">
                                                <IonIcon icon={closeCircle} />
                                            </IonButton>
                                        </IonItem>


                                        <div className='spacer-h-xl' />
                                        <div className="submit-button-pos">
                                            <IonButton
                                                className="submit-button"
                                                size="default">
                                                <IonIcon icon={add} />
                                                <IonText>Submit</IonText>
                                            </IonButton>
                                        </div>

                                    </div>
                                </div>
                            </IonCard>
                        </div>



                    </IonContent>
                </>
                :
                <>
                    <IonContent color={'light'} scrollX={false} >

                        <div className="m-activity-label">
                            <IonButton href={'/activities'} className="back-button-size" color={'dark'} fill="clear">
                                <IonIcon icon={arrowBack}></IonIcon>
                            </IonButton>
                            <div className="act-text-pos">
                                <IonLabel className="m-activity-text">Activity Details</IonLabel>
                            </div>
                        </div>

                        <div>
                            <IonCard className="m-add-activity-card">
                                <IonCardContent className="m-enter-task-card">
                                    <div className="spacer-h-xs" />
                                    <div className="m-enter-task">
                                        <IonInput
                                            fill="outline"
                                            label="Enter Task Here"
                                            labelPlacement="floating"
                                            counter={true}
                                            maxlength={50}
                                            counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}
                                            value={newTask}
                                            onIonChange={(e) => setNewTask(e.detail.value || '')}>
                                        </IonInput>

                                        <p>Select Date and Time:</p>
                                        <div className="center">

                                            <IonDatetime
                                                color={'dark'}
                                                value={selectedDate}
                                                min={minDate}
                                            ></IonDatetime>
                                        </div>

                                        <IonList>
                                            <IonItem>
                                                Select Priority
                                                <IonSelect
                                                    slot="end"
                                                    aria-label="priority"
                                                    value={selectedPriority} // Make sure this is correctly bound
                                                    onIonChange={(e) => setSelectedPriority(e.detail.value)}
                                                >
                                                    <IonSelectOption value="0">Low</IonSelectOption>
                                                    <IonSelectOption value="1">Middle</IonSelectOption>
                                                    <IonSelectOption value="2">High</IonSelectOption>
                                                </IonSelect>

                                            </IonItem>
                                        </IonList>

                                        <IonItem>
                                            <IonIcon icon={pricetag}></IonIcon>
                                            <div className="spacer-w-xxs"></div>
                                            <IonLabel>
                                                Category
                                            </IonLabel>

                                            <div className='spacer-w-xl' />
                                            <IonText color="dark">
                                                {selectedCategory}
                                            </IonText>
                                            <IonButton color={'dark'} fill="clear">
                                                <IonIcon icon={closeCircle} />
                                            </IonButton>
                                        </IonItem>

                                        <IonItem>
                                            <IonChip
                                                color="dark"
                                                onClick={() => setSelectedCategory('Personal')}
                                                className={selectedCategory === 'Personal' ? 'selected' : ''}
                                            >
                                                Personal
                                            </IonChip>

                                            <IonChip
                                                color="dark"
                                                onClick={() => setSelectedCategory('School')}
                                                className={selectedCategory === 'School' ? 'selected' : ''}
                                            >
                                                School
                                            </IonChip>

                                            <IonChip
                                                color="dark"
                                                onClick={() => setSelectedCategory('Work')}
                                                className={selectedCategory === 'Work' ? 'selected' : ''}
                                            >
                                                Work
                                            </IonChip>

                                            <IonChip
                                                color="dark"
                                                onClick={() => setSelectedCategory('Home')}
                                                className={selectedCategory === 'Home' ? 'selected' : ''}
                                            >
                                                Home
                                            </IonChip>
                                        </IonItem>
                                    </div>

                                    <div className="spacer-h-xs" />
                                    <IonButton
                                        size="default"
                                        expand="block"
                                        color={'dark'}>
                                        Submit
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>
                        </div>

                    </IonContent>
                </>}

        </IonPage>
    );
};

export default AddActivity;

