import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Days+One&display=swap'
					rel='stylesheet'
				/>
				<Script
					src='assets/script/truconvertion.js'
					onError={() => setHasError(true)}
					onReady={() => setIsReady(true)}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
