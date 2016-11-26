import React from 'react'
import Head from 'next/head'
export default () => (
    <div>
        <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="/static/styles/index.min.css" />
        </Head>
        <p className="hey">Hello <span>world!</span></p>
    </div>
)
