import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        // locale is in ctx.locale

        return { ...initialProps, locale: ctx?.locale || 'fa' }
    }
   
    render = () => (
        <Html dir={'rtl'} lang={'fa'}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument