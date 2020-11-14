const mongoose = require('mongoose');´
const Card = require('../models/Card.js');
const DB_NAME = 'proverb';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}); 

const card = [
  {
    phrase: "Go for a lap around the big billiard" ,
    translation: "Vai dar uma volta ao bilhar grande",
    meaning: "Telling someone to stop annoying you and fuck off"
  },
  {
    phrase: "Not even if the cow coughs" ,
    translation: "Nem que a vaca tussa",
    meaning: "Same as : not in a million years"
  },
  {
    phrase: "That's like cleaning the ass of young boys" ,
    translation: "Isso é como limpar o cu a meninos",
    meaning: "Used to compare someone's task to a really easy one"
  },
  {
    phrase: "Here there's cat",
    translation: "Aqui há gato",
    meaning: "Meaning there's something not right in a situation/it's suspicious" 
  },
  {
    phrase: "Who talks like that isn't a stutterer" ,
    translation: "Quem fala assim não é gago",
    meaning: "Not afraid to say something/Knowing a lot about a topic, so you can easily talk about it"
  },
  {
    phrase: "Elbow pain",
    translation: "Dor de cotovelo",
    meaning: "Describes when someone envies something"
  },
  {
    phrase: "God free me" ,
    translation: "Deus me livre",
    meaning: "Hope that something bad doesn't happen" 
  },
  {
    phrase: "Not fitting a bean in the ass" ,
    translation: "Não caber um feijão no cu",
    meaning: "Said to someone who is afraid/Said to someone who is arrogant"
  },
  {
    phrase: "Silent you would be a poet" ,
    translation: "Calado eras poeta",
    meaning: "Telling someone to shut up"
  },
  {
    phrase: "In the oldest dick" ,
    translation: "No caralho mais velho",
    meaning: "Somewhere far away"
  },
  {
    phrase: "Ill of hot ass" ,
    translation: "Doente do cu quente",
    meaning: "When you don't want to go somewhere, make up an excuse that you are sick and the other person finds out that you are lying and call you out on that"
  },
  {
    phrase: "Pussy of soap" ,
    translation: "Cona de sabão",
    meaning: "Someone who doesn't have a strong personality/ Someone who is weak"
  },
  {
    phrase:  "Eating ice-cream with your forehead",
    translation: "Comer gelados com a testa",
    meaning: "Used to call out someone who isn't paying attention to what they are saying or doing/ Also used to call someone dumb"
  },
  {
    phrase: "You are a boot licker",
    translation: "És um lambe botas",
    meaning: "Describes a suck up"
  },
  {
    phrase: "I broke myself laughing",
    translation: "Parti-me a rir",
    meaning: "When you laugh super hard"
  },
  {
    phrase: "More known than the lupin bean",
    translation: "Mais conhecido que o tremoço",
    meaning: "When something or someone is famous"
  },
  {
    phrase: "What a Zé Anthony",
    translation: "Que Zé António",
    meaning: "What you call someone when he says or does something stupid, dumb, or ridiculous"
  },
  {
    phrase: "Boss out, holiday in the store",
    translation: "Patrão fora, feriado na loja",
    meaning: "When tasks aren't monitored by the person in charge, leading to slack at work"
  },
  {
    phrase: "In times of war, any hole is a trench",
    translation: "Em tempo de guerra, qualquer buraco é trincheira",
    meaning: "In times of need, anything is useful"
  },
  {
    phrase: "Doing swimming pools",
    translation: "Fazer piscinas",
    meaning: "Doing repetitive routes"
  },
  {
    phrase: "Discussing the sex of angels",
    translation: "Discutir o sexo dos anjos",
    meaning: "Used when discussing a topic that is impossible to reach a conclusion/waste of time"
  },
  {
    phrase: "And if my grandma had whells, she would be aa truck",
    translation: "E se a minha avó tivesse rodas, seria um camião",
    meaning: "Response to when a person talks hipothetically about a situation that could happen, but didn't"
  },
  {
    phrase: "Who doesn't have a dog, hunts with a cat",
    translation: "Quem não tem cão, caça com gato",
    meaning: "When you have to improvise using what you have to solve a problem"
  },
  {
    phrase: "Who doesn't cry, doens't suckle",
    translation: "Quem não chora não mama",
    meaning: "Who doesn't ask or go after what they want, doesn't get it"
  },
  {
    phrase: "Seeing yourself greek",
    translation: "Ver-se grego",
    meaning: "Having dificulty in taking care of a problem or situation"
  },
  {
    phrase: "I make question",
    translation: "FAço questão",
    meaning: "Means that you are really want to do something" 
  },
  {
    phrase: "Luck monkey",
    translation: "Sorte macaca",
    meaning: "Means bad luk"
  },
  {
    phrase: "It's worth more a bird in your hand than two flying",
    translation: "Mais vale um pássaro na mão que dois a voar",
    meaning: "Expression to say that you should choose the certain over the uncertain, to the happy with what you have"
  },
  {
    phrase: "Are you with heartburn?",
    translation: "Estás com azia?",
    meaning: "When something you dislike happens and that pisses you off"
  },
  {
    phrase: "Apologies aren't to be asked, they are to be avoided",
    translation: "Desculpas não se pedem, evitam-se",
    meaning: "Something you say when someone makes a mistake that's very serious/ Also something said to kids for them to "
  },
  {
    phrase:  ,
    translation: ,
    meaning: 
  },
  {
    phrase:  ,
    translation: ,
    meaning: 
  },
]




Card.create(movies)
 .then(cardFromDb => {
   console.log(`Created ${cardFromDb.length} movies`);
   mongoose.connection.close(); 
 }).catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));
