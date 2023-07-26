import './globals.css'

export const metadata = {
  title: 'Currículum Vitae',
  description: 'Generated Manuel Pérez de Arce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body >{children}</body>
    </html>
  )
}
