import Nav from '@components/Nav';
import '@styles/globals.css';
import Provider from '@components/Provider';

export const metadata ={
    title: "prompmaster",
    description: "AI Promptsss"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
            </Provider>

        </body>
    </html>
  )
}

export default RootLayout