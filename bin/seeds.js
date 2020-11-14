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
    meaning: "Telling someone to stop annoying you and fuck off / Mandar alguém sair do caminho"
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
    phrase: "Go suck on the fifth leg of the horse",
    translation: "Vai mamar na quinta pata do cavalo",
    meaning: "Telling someone to fuck off, specially when they are being extra annoying"
  },
  {
    phrase: "The conversation hasn't reached the kitchen",
    translation: "A conversa ainda não chegou à cozinha",
    meaning: "When someone says something and you don't care about their opinion"
  },
  {
    phrase: "Things of the arch of the old lady",
    translation: "Coisas do arco da velha",
    meaning: "Used to qualify a story absurd or impossible to have happened"
  },
  {
    phrase: "Cod hand-job",
    translation: "Punheta de bacalhau",
    meaning: "Name of a typical portuguese dish, it's cod salad, made with cod, onion, garlic and oilve oil"
  },
  {
    phrase: "Lightning bolts breaking",
    translation: "Raios partam",
    meaning: "Same as goddamnit"
  },
  {
    phrase: "Getting the clothes to the fur",
    translation: "Chegar a roupa ao pêlo", 
    meaning: "When you kick someone's ass"
  },
  {
    phrase: "Piece of bad path",
    translation: "Pedaço de mau caminho", 
    meaning: "When someone is so hot that could lead you to bad decisions"
  },
  {
    phrase: "Who has mouth goes to rome",
    translation: "Quem tem boca vai a roma",
    meaning: "If you make the right questions you can go anywhere/achieve anything"
  },
  {
    phrase: "Travelling in the mayonnaise",
    translation: "Vaijar na maionese",
    meaning: "When someone does or says something that makes no sense/ when someone is distracted"
  },
  {
    phrase: "Going on shaky ass",
    translation: "Andar de cu tremido",
    meaning: "Going somewhere by car"
  },
  {
    phrase: "Never worse",
    translation: "Nunca pior",
    meaning: "When something can't be worse"
  },
  {
    phrase: "I'll go to your horns",
    translation: "Vou-te aos cornos",
    meaning: "WHen you threaten someone that you will kick their ass"
  },
  {
    phrase: "Having fabric for sleeves",
    translation: "Ter pano para mangas",
    meaning: "Used when there's a lot to talk about a certain topic"
  },
  {
    phrase: "Where the devil lost his boots",
    translation: "Onde o diabo perdeu as botas",
    meaning: "Somewhere far away"
  },
  {
    phrase: "You smell like milk",
    translation: "Cheiras a leite",
    meaning: "Refering to someone young, or when someone dares you to do something and you chicken out"
  },
  {
    phrase: "You are a delay of life",
    translation: "És um atraso de vida",
    meaning: "Someone who doesn't do anything productive"
  },
  {
    phrase: "Are you from Braga?",
    translation: "És de Braga?",
    meaning: "Question asked to someone who leaves the door open"
  },
  {
    phrase: "Giving the last ones",
    translation: "Dar as últimas",
    meaning: "When someone is really sick, or when something is almost broken"
  },
  {
    phrase: "Olive Oil Maker",
    translation: "Azeiteiro",
    meaning: "Someone trashy, ignorant, or a simple, but not in a good way"
  },
  {
    phrase: "Give shed",
    translation: "Dar barraca",
    meaning: "Not being discreet"
  },
  {
    phrase: "Having the king in the belly",
    translation: "Ter o rei na barriga",
    meaning: "When someone acts in an arrogant way, because they think they are more important then everyone else"
  },
  {
    phrase: "When you don't know how to fuck, even the testicles are in the way",
    translation: "Quando não se sabe foder, até os colhões atrapalham",
    meaning: "when people don't know how to do something and everything makes it harder"
  },
  {
    phrase: "Who knows, knows",
    translation: "Quem sabe, sabe",
    meaning: "Normally said by someone who knows what he's talking about"
  },
  {
    phrase: "You don't know the mass at half",
    translation: "Não sabes da missa a metade",
    meaning: "When you are unaware of the full scope of a situation"
  },
  {
    phrase: "Like big people",
    translation: "Como gente grande",
    meaning: "Doing something well, with ease"
  },
  {
    phrase: "Life stepmother", 
    translation: "vida madrasta",
    meaning: "Situations that bring sadness and misery"
  },
  {
    phrase: "The Hell is full of good intentions",
    translation: "De boas intenções está o inferno cheio",
    meaning: "Only having good intentions is not enough, you actually have to take action and make it better"
  },
  {
    phrase: "With the face of few friends",
    translation: "Com cara de poucos amigos",
    meaning: "When someone looks angry or annoyed"
  },
  {
    phrase: "You tire my beauty",
    translation: "Cansas-me a beleza",
    meaning: "When someone is annoying you, you imply that you are getting wrinkles from having to deal with them"
  },
  {
    phrase: "Son of 30 hookers",
    translation: "Filho de 30 putas",
    meaning: "Something that you call to someone that is an absolute dick"
  },
  {
    phrase: "Gild the pill",
    translation: "Dourar a pílula",
    meaning: "Say something in a way that makes it seem better that actually is"
  },
  {
    phrase: "Who goes to the sea loses the spot",
    translation: "Quem vai ao mar perde o lugar",
    meaning: "Normally when someone steals your seat, also used when you miss an opportunity"
  },
  {
    phrase: "Being with the olive oils",
    translation: "Estar com os azeites",
    meaning: "When you are in a bad mood, angry or annoyed"
  },
  {
    phrase: "Pooping a toast",
    translation: "Cagar uma tosta",
    meaning: "When you don't care about something or someone"
  },
  {
    phrase: "Who goes to war gives and takes",
    translation: "Quem vai à guerra dá e leva",
    meaning: ""
  },
  {
    phrase: 
    translation: 
    meaning: 
  },
  {
    phrase: 
    translation: 
    meaning: 
  },
  {
    phrase: 
    translation: 
    meaning: 
  },
  {
    phrase: 
    translation: 
    meaning: 
  },

]




Card.create(movies)
 .then(cardFromDb => {
   console.log(`Created ${cardFromDb.length} movies`);
   mongoose.connection.close(); 
 }).catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));
