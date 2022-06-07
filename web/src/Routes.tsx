// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'
import { AppLayout } from './layouts/AppLayout'
import { ContentLayout } from './layouts/ContentLayout'
import { LegalLayout } from './layouts/LegalLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/settings" page={SettingsPage} name="settings" />
      <Route path="/invites" page={InvitesPage} name="invites" />
      <Route path="/login" page={LoginPage} name="login" />

      <Set wrap={[ContentLayout]}>
        <Route path="/waiting-list" page={WaitingListPage} name="waitingList" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact" page={ContactPage} name="contact" />
      </Set>

      <Set wrap={[LegalLayout]}>
        <Route path="/terms-and-conditions" page={TermsAndConditionsPage} name="termsAndConditions" />
        <Route path="/privacy-policy" page={PrivacyPolicyPage} name="privacyPolicy" />
        <Route path="/disclaimers" page={DisclaimersPage} name="disclaimers" />
      </Set>

      {/* <Private unauthenticated="login"></Private> */}

      <Set wrap={[AppLayout]}>
        <Route path="/" page={FeedPage} name="home" />
        <Route path="/bookmarks" page={BookmarksPage} name="bookmarks" />
        <Route path="/notifications" page={NotificationsPage} name="notifications" />
        <Route path="/question/{id}" page={QuestionPage} name="question" />
        <Route path="/profile" page={ProfilePage} name="me" />
        <Route path="/profile/{username}" page={ProfilePage} name="profile" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
