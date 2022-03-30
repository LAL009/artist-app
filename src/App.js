import './App.css';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

import { Box } from '@mui/material';

import Header from './components/layout/Header';

import Homepage from './screens/Home/index';
import ArtistPage from './screens/Artist/index';
import WallPage from './screens/Wall/index';
import MarketplacePage from './screens/Marketplace/index';
import CaseStudyPage from './screens/CaseStudy/index';
import CreativesPage from './screens/Creatives/index';
import RealEstatePage from './screens/RealEstate/index';
import LoginPage from './screens/Login/index';
import ContactPage from './screens/Contact/index';
import AboutPage from './screens/About/index';
import FAQPage from './screens/FAQ/index';
import NotFoundPage from './screens/404/index';
import ArtistSearchPage from './screens/ArtistSearch/index';
import InformationArtistPage from './screens/InformationArtist/index';
import InformationOwnerPage from './screens/InformationOwner/index';
import CaseStudyDaasPage from './screens/CaseStudy/CaseStudyDaas';
import CaseStudyStandardBeanPage from './screens/CaseStudy/CaseStudyStandardBean';
import PrivacyPolicyPage from './screens/PrivacyPolicy/index';
import TermsOfUsePage from './screens/TermsOfUse/index';
import CookiePolicyPage from './screens/CookiePolicy/index';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';

import Footer from './components/layout/Footer';
import UpdateInformationArtist from './screens/UpdateInformartionArtist';

import 'react-image-lightbox/style.css';

function App() {
  let isMarketPlacePage = useRouteMatch('/marketplace');
  let isLoginPage = useRouteMatch('/login');
  let isSignUpPage = useRouteMatch('/signup');
  let isResetPasswordPage = useRouteMatch('/forgot-password');

  return (
    <Box
      id="page-wrap"
      sx={{
        height: '100%',
      }}
    >
      <Header
        isMarketplaceScreen={isMarketPlacePage}
        hideTopNavigationBar={
          isLoginPage || isSignUpPage || isResetPasswordPage
        }
      />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/artist/:name" component={ArtistPage} exact />
        <Route path="/wall/:slug" component={WallPage} exact />
        <Route path="/marketplace" component={MarketplacePage} exact></Route>
        <Route path="/case-study" component={CaseStudyPage} exact></Route>
        <Route path="/creatives" component={CreativesPage} exact></Route>
        <Route path="/real-estate" component={RealEstatePage} exact></Route>
        <Route path="/login" component={LoginPage} exact></Route>
        <Route path="/forgot-password" component={ForgotPassword} exact></Route>
        <Route
          path="/reset-password/:token"
          component={ResetPassword}
          exact
        ></Route>
        <Route path="/signup" component={LoginPage} exact></Route>
        <Route path="/contact" component={ContactPage} exact></Route>
        <Route path="/about" component={AboutPage} exact></Route>
        <Route path="/faq" component={FAQPage} exact></Route>
        <Route path="/artist-search" component={ArtistSearchPage} exact></Route>
        <Route
          path="/update-information-artist"
          component={UpdateInformationArtist}
          exact
        ></Route>
        <Route
          path="/privacy-policy"
          component={PrivacyPolicyPage}
          exact
        ></Route>
        <Route path="/terms-of-use" component={TermsOfUsePage} exact></Route>
        <Route
          path="/cookies-policy"
          component={CookiePolicyPage}
          exact
        ></Route>

        <Route
          path="/case-study/daas-for-the-stillwater"
          component={CaseStudyDaasPage}
          exact
        ></Route>
        <Route
          path="/case-study/standard-bean"
          component={CaseStudyStandardBeanPage}
          exact
        ></Route>

        <Route
          path="/information-artist"
          component={InformationArtistPage}
          exact
        ></Route>
        <Route
          path="/information-owner"
          component={InformationOwnerPage}
          exact
        ></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Switch>

      {!isMarketPlacePage && (
        <Footer hideFooterOn={isLoginPage || isSignUpPage} />
      )}
    </Box>
  );
}

export default App;
