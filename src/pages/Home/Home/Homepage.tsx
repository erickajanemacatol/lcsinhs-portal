import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonContent,
    IonFooter,
    IonIcon,
    IonImg,
    IonLabel,
    IonList,
    IonPage,
    IonText,
    IonToolbar
} from "@ionic/react";
import './Homepage.css'
import StudentHeader from "../../../components/StudentHeader";
import { useMediaQuery } from "react-responsive";
import { useRef, useState } from "react";
import { chevronBack, chevronForward } from "ionicons/icons";


const Homepage = () => {

    const isDesktop = useMediaQuery({ minWidth: 1050 })
    const [newsItems, setNewsItems] = useState<string[]>([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollableContainerRef = useRef(null);
    const [events, setEvents] = useState([]);

    let startX = 0;
    let currentX = 0;

    return (
        <IonPage >
            <StudentHeader />
            {isDesktop ? <>
                <IonContent className="home-background">

                    <div className="content">
                        <div className='homepage-card-position'>
                            <IonCard className="homepage-card">
                                <div className="spacer-h-m" />
                                <IonLabel className="p">Recent News</IonLabel>
                                <div>

                                    <div className="center">
                                        <IonButton
                                            className="scroll-button prev"
                                            disabled={scrollPosition === 0}
                                        >
                                            <IonIcon slot="icon-only" icon={chevronBack} />
                                        </IonButton>
                                        <IonButton
                                            className="scroll-button next"
                                            disabled={scrollPosition === 100}
                                        >
                                            <IonIcon slot="icon-only" icon={chevronForward} />
                                        </IonButton>
                                    </div>
                                    <div className="spacer-h-s" />
                                </div>

                            </IonCard>

                            <IonCard className='homepage-card'>
                                <div className="spacer-h-m" />
                                <IonLabel className="p">School Announcements</IonLabel>
                               
                            </IonCard>

                        </div>

                        <div className='calendar-pos'>
                            <IonCard className='calendar-card'>

                                <div className="spacer-h-m" />
                                <IonLabel className="p">School Calendar</IonLabel>

                                <div className="cal-cont">
                                    <IonList>
                                      
                                    </IonList>
                                </div>
                            </IonCard>
                        </div>


                    </div><div className="footer1">
                        <IonFooter className="ion-no-border" color={"dark"}>
                            <IonToolbar>
                                <div className='footer-toolbar'>
                                    <div className="about">
                                        <div className="s-font">About LCSINHS</div>
                                        <div className="mission">
                                            <div>
                                                <IonCard className="mission-card">
                                                    <IonCardHeader className="mission-card-header">Mission</IonCardHeader>
                                                    <IonCardContent className="p1">
                                                        The LCSINHS shall enhance maturity and mold students inclincation
                                                        in Science and Techonology for them to be productive citizens and be future
                                                        leaders who will direct and help the country towards new undertakings and
                                                        goals. The concept, objectives, goals, and educational performance of the
                                                        LCSINHS can contribute a lot in the quality and standard education.
                                                    </IonCardContent>
                                                </IonCard>
                                            </div>
                                            <div>
                                                <IonCard className="mission-card">
                                                    <IonCardHeader className="mission-card-header">Vision</IonCardHeader>
                                                    <IonCardContent className="p1">
                                                        A school to turn Filipino youth with desirable traits, who are scientifically-inclined
                                                        and can compete with other graduates and can serve as efficient future leaders.
                                                    </IonCardContent>
                                                </IonCard>
                                            </div>
                                            <div>
                                                <IonCard className="mission-card">
                                                    <IonCardHeader className="mission-card-header">Motto</IonCardHeader>
                                                    <IonCardContent className="p1">
                                                        "Excellence is not our goal, it is our standard."
                                                    </IonCardContent>
                                                </IonCard>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="logo-w-name">
                                        <IonImg className="logo-size1" src="/src/imgs/footer-logo.png"></IonImg>
                                    </div>

                                    <div className="allrights">
                                        <IonLabel className="a-font">All rights reserved.</IonLabel>
                                    </div>
                                </div>

                            </IonToolbar>
                        </IonFooter>
                    </div>
                </IonContent>
            </>
                :
                <>
                    <IonContent>
                        <div className="m-content">
                            <div className='m-homepage-card-position'>
                                <p className="m-p">Recent News</p>
                                <div className="scrollable-container">
                                    <div>
                                        <div
                                            className="scrollable-container"
                                            ref={scrollableContainerRef}
                                        >
                                            <div className="news-items">
                                                {newsItems && newsItems.length > 0 ? (
                                                    newsItems.map((imageUrl, index) => (
                                                        <div className="news-card" key={index}>
                                                            <img src={imageUrl} alt={`Image ${index}`} />
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="center">
                                                        <IonText>No news items to display</IonText>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="m-p">School Announcements</p>
                            <IonCard className="m-recent-news">
                               
                            </IonCard>

                        </div>
                        <div className='m-calendar-pos'>
                            <p className="m-p">School Calendar</p>
                            <IonCard className='m-calendar-card'>
                                <IonCardContent>
                                    <IonList>
                                     
                                    </IonList>
                                </IonCardContent>


                            </IonCard>
                        </div>


                        <div className="spacer-h-s" />

                        <IonFooter className="ion-no-border" color={"light"}>
                            <IonToolbar>
                                <div className='m-footer-toolbar'>
                                    <div className="m-about">
                                        <div className="spacer-h-s" />
                                        <div className="m-s-font">About LCSINHS</div>

                                        <IonCard className="m-mission-card">
                                            <IonCardHeader className="m-mission-card-header">Mission</IonCardHeader>
                                            <IonCardContent className="m-p1">
                                                The LCSINHS shall enhance maturity and mold students inclincation
                                                in Science and Techonology for them to be productive citizens and be future
                                                leaders who will direct and help the country towards new undertakings and
                                                goals. The concept, objectives, goals, and educational performance of the
                                                LCSINHS can contribute a lot in the quality and standard education.
                                            </IonCardContent>
                                        </IonCard>

                                        <IonCard className="m-mission-card">
                                            <IonCardHeader className="m-mission-card-header">Vision</IonCardHeader>
                                            <IonCardContent className="m-p1">
                                                A school to turn Filipino youth with desirable traits, who are scientifically-inclined
                                                and can compete with other graduates and can serve as efficient future leaders.
                                            </IonCardContent>
                                        </IonCard>

                                        <IonCard className="m-mission-card">
                                            <IonCardHeader className="m-mission-card-header">Motto</IonCardHeader>
                                            <IonCardContent className="m-p1">
                                                "Excellence is not our goal, it is our standard."
                                            </IonCardContent>
                                        </IonCard>
                                    </div>

                                    <div className="m-logo-w-name">
                                        <IonImg className="m-logo-size1" src="/src/imgs/footer-logo.png"></IonImg>                                </div>

                                    <div className="m-allrights">
                                        <IonLabel className="m-a-font">All rights reserved.</IonLabel>
                                    </div>
                                    <div className="spacer-h-m" />

                                </div>

                            </IonToolbar>
                        </IonFooter>
                    </IonContent>
                </>
            }

        </IonPage >
    );
};

export { Homepage };