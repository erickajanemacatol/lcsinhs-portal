import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { AddAnnouncement } from './pages/Admin/AddAnnouncement';
import { Announcements } from './pages/Admin/Announcements';
import { Calendar } from './pages/Admin/Calendar';
import { Faculty } from './pages/Admin/Faculty';
import { News } from './pages/Admin/News';
import { Students } from './pages/Admin/Students';
import { Links } from './pages/Admin/Survey';
import { Activities } from './pages/Home/Activities/Activities';
import AddActivity from './pages/Home/Activities/AddActivity';
import { Attendance } from './pages/Home/Attendance/Attendance';
import { Grades } from './pages/Home/Grades/Grades';
import { Homepage } from './pages/Home/Home/Homepage';
import { ID_temp } from './pages/Home/Profile/ID_temp';
import { Profile } from './pages/Home/Profile/Profile';
import Login from './pages/Login';
import { fRegistration } from './pages/Faculty/fRegistration';
import { fAttendance } from './pages/Faculty/fAttendance';
import { fGrades } from './pages/Faculty/fGrades';

setupIonicReact();

const App: React.FC = () => (
 
<IonApp>
<IonReactRouter>
  <IonRouterOutlet>
    <Router>
      <Switch>
        <Route path="/home" component={Homepage}  />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/activities/add-activity" component={AddActivity}/>
        <Route exact path="/attendance" component={Attendance} />
        <Route exact path="/grades" component={Grades}/>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/school_id" component={ID_temp} />

        <Route exact path="/faculty/attendance" component={fAttendance}  />
        <Route exact path="/faculty/grades" component={fGrades}  />
        <Route exact path="/faculty/registrationlist" component={fRegistration}/>

        <Route exact path="/admin/news" component={News}/>
        <Route exact path="/admin/announcements" component={Announcements} />
        <Route exact path="/admin/announcement-details" component={AddAnnouncement}  />
        <Route exact path="/admin/calendar" component={Calendar}/>
        <Route exact path="/admin/students" component={Students}  />
        <Route exact path="/admin/faculty" component={Faculty}/>
        <Route exact path="/admin/links" component={Links} />

        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  </IonRouterOutlet>
</IonReactRouter>
</IonApp>
);

export default App;
