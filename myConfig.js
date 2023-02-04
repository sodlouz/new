let MensajeAd =
	"​🚨*Promociona lo que desees!*🚨 \n \n" +
	"	🎁	- Web de afiliados / referidos \n" +
	"	🤑	- Acortador con AdsTerra \n" +
	"	📈	- Página con exoclick \n" +
	"	🗺	- Redirige el tráfico a @otrosCanales o a una página web \n \n" +
	"['Click Aquí🔥'](https://www.amazon.es)"

/*let MensajeAd3 =
	"​🚨*Promociona lo que desees!*🚨 \n \n"*/

let imagenAd =
	"https://vilmanunez.com/wp-content/uploads/2018/10/poner-anuncios-publicitarios-gratis.png"

const N_VIDEOS = 10 //MAX 10

const MY_AD = {
	isActive: false,
	type: 3, // //defaultAd => 1 //captionAd => 2 //linksGroupAd => 3
	data: {
		ctn: MensajeAd,
		image: imagenAd,
		link: {
			text: "🚨 LIVE 🚨",
			url: "https://sherrysex.fun",
		},
		linksGroupAd: [
			[
				{
					text: "🚨 LIVE 🚨",
					url: "https://sherrysex.fun",
				},
			],
			[
				{
					text: "🚨 LIVE 🚨",
					url: "https://sherrysex.fun",
				},
			],
			[
				{
					text: "🚨 LIVE 🚨",
					url: "https://sherrysex.fun",
				},
			],
			[
				{
					text: "🚨 LIVE 🚨",
					url: "https://sherrysex.fun",
				},
			],
		],
	},
}

module.exports = { N_VIDEOS, MY_AD }
