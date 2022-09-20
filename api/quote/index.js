const https = require('https');

const unplashApi = 'https://source.unsplash.com/1600x900?dream';
const quotes = [
"J'écris des textes tirés pas les cheveux comme ta meuf en levrette.",

"J'suis trop gore pour le grand public, t'façon j'm'en branle des Victoires de la Musique : j'vise les Hot d'Or !",

"J'suis les Beatles pour les jeunes ados, j'pourrais passer sur Sky, même si mon single s'appelait Fun Radio.",

"J'crache dans tes règles, ça fait ketchup-mayo.",

"Tous les jours j’me couche aux aurores,et j’pars au taf avec une gueule d’enterrement comme si j’étais croque-mort.",

"Ma gueule de bois ferait passer Pinocchio pour un vrai p'tit garçon.",

"Si t'as du flow et pas d'paroles, tu seras jamais plus fort que Scatman.",

"Ton équipe fait pitié comme un orphelinat en Roumanie.",

"J'la baise complètement dead comme si j'étais nécrophile.",

"Dans la nouvelle scène je suis le seul qui sort du lot. Je suis le seul écrivain potable depuis Victor Hugo."
];

async function getImage() {
  return new Promise((resolve, reject) => {
    https.get(unplashApi, (response) => {
      // API returns a HTTP 302 code, we only want the final image URL
      resolve(response.headers.location);
    }).on('error', (error) => {
      reject(error.message);
    });
  });
}

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const image = await getImage();
  const text = quotes[Math.floor(Math.random() * quotes.length)];

  context.res = {
    body: {
      image,
      text
    }
  };
};
