import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { schoolOutline, bookOutline, settingsOutline } from 'ionicons/icons';

import Homepage from './pages/Homepage';
import DictionaryPage from './pages/DictionaryPage';
import SettingsPage from './pages/SettingsPage';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/homepage">
            <Homepage />
          </Route>
          <Route exact path="/dictionary">
            <DictionaryPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/homepage" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="homepage" href="/homepage">
            <IonIcon icon={schoolOutline} />
            <IonLabel>Learn</IonLabel>
          </IonTabButton>
          <IonTabButton tab="dictionary" href="/dictionary">
            <IonIcon icon={bookOutline} />
            <IonLabel>Dictionary</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settingsOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
