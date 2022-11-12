import Navigation from './components/Navigation'
import { font } from './font'
import './globals.css'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
