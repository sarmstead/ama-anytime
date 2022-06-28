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
import { SettingLayout } from './layouts/SettingLayout'
import { LoginLayout } from './layouts/LoginLayout/LoginLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={[LoginLayout]}>
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route path="/login" page={LoginPage} name="login" />
      </Set>

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

      <Set wrap={[SettingLayout]}>
        <Private unauthenticated="login">
          <Route path="/settings" page={SettingsPage} name="settings" />
          <Route path="/invites" page={InvitesPage} name="invites" />
          <Route path="/notification-settings" page={NotificationSettingsPage} name="notificationSettings" />
          <Route path="/privacy-safety" page={PrivacySafetyPage} name="privacySafety" />
          <Route path="/profile-settings" page={ProfileSettingsPage} name="profileSettings" />
        </Private>
      </Set>

      <Set wrap={[AppLayout]}>
        <Route path="/followers" page={FollowersPage} name="followers" />
        <Route path="/following" page={FollowingPage} name="following" />
        <Route path="/tag/{tag}" page={TagPage} name="tag" />
        <Route path="/questions/{id}" page={QuestionQuestionPage} name="question" />
        <Route path="/profile/{username}" page={ProfilePage} name="profile" />
        <Private unauthenticated="login">
          <Route path="/" page={FeedPage} name="home" />
          <Route path="/profile" page={ProfilePage} name="me" />
          <Route path="/bookmarks" page={BookmarksPage} name="bookmarks" />
          <Route path="/notifications" page={NotificationsPage} name="notifications" />
        </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
