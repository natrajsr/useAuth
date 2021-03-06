/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { navigate } from "gatsby"
import { ThemeProvider } from "emotion-theming"
import theme from "@rebass/preset"

import { AuthProvider } from "react-use-auth"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <AuthProvider
      navigate={navigate}
      callback_domain="https://useauth.dev"
      auth0_domain="useauth.auth0.com"
      auth0_client_id="GjWNFNOHq1ino7lQNJBwEywa1aYtbIzh"
    >
      {element}
    </AuthProvider>
  </ThemeProvider>
)
