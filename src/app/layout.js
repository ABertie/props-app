import './globals.css'

export const metadata = {
  title: 'Eksempel Props',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/spells">Spells</a></li>
              <li><a href="/characters">Characters</a></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
