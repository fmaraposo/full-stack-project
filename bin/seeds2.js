const mongoose = require('mongoose');
const Card = require('../models/Card.js');
const DB_NAME = 'proverbs';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}); 

const cards = [
  {
    phrase: 'Walking to papers',
    translation:' Andar aos papéis',
    meaning: 'Not understanding something or being disoriented'
  },
  {
    phrase: 'Crazy swept',
    translation:'Doido varrido',
    meaning: 'Someone who is really insane'
  },
  {
    phrase: 'Raining on the wet',
    translation:'Chover no molhado',
    meaning: 'Doing or saying something irrelevant or repeating something too much'
  },
  {
    phrase: 'Like who doesn\'t want the thing',
    translation:'Como quem não quer a coisa',
    meaning: '1.Discretely / 2. Doing something while hiding second intentions'
  },
  {
    phrase: 'You are a half bowl',
    translation:'És um meia tigela',
    meaning: 'Calling someone a dork'
  },
  {
    phrase: 'With nervous little kid',
    translation:'Com nervoso miudinho',
    meaning: 'Light nervous sensation'
  },
  {
    phrase: 'Tie-fucks',
    translation:'Empata-fodas',
    meaning: 'Same as \'cockblocker\''
  },
  {
    phrase: 'Scratching the ass by the corners',
    translation:'Coçar o cu pelas esquinas',
    meaning: 'Not doing anything'
  },
  {
    phrase: 'Filling chorizos',
    translation:'Encher chouriços',
    meaning: 'Not doing anything productive'
  },
  {
    phrase: 'Give two fingers of conversation',
    translation:'Dar dois dedos de conversa',
    meaning: 'Briefly talking to someone'
  },
  {
    phrase: 'Calling Gregory',
    translation:'Chamar o Gregório',
    meaning: 'Puking'
  },
  {
    phrase: 'Giving a cod',
    translation:'Dar um bacalhau',
    meaning: 'Greeting someone - usually a handshake'
  },
  {
    phrase: 'Thinking a donkey died',
    translation:'A pensar morreu um burro',
    meaning: 'Said to someone who is very indecisive'
  },
  {
    phrase: 'Still hasn\'t fell the token',
    translation:'Ainda não caiu a ficha',
    meaning: 'When someone hasn\'t understood or accepted a situation'
  },
  {
    phrase: 'Give the master fart',
    translation:'Dar o peido mestre',
    meaning: 'Dying'
  },
  {
    phrase: 'Laying rockets before the party',
    translation:'Deitar foguetes antes da festa',
    meaning: 'Celebrating something to soon'
  },
  {
    phrase: 'What doesn\'t kill you makes you fat',
    translation:'O que não mata engorda',
    meaning: 'Used when someone is worried about something they are eating (if food falls on the floor for example)'
  },
  {
    phrase: 'Waking up with the feet outside the bed',
    translation:'Acordar com os pés fora da cama',
    meaning: 'Waking up in a bad mood'
  },
  {
    phrase: 'To give with a stick',
    translation:'A dar com um pau',
    meaning: 'In abundance'
  },
  {
    phrase: 'Beating up the clown',
    translation:'Espancar o palhaço',
    meaning: 'Masturbating'
  },
  {
    phrase: 'Doing figure of bear',
    translation:'Fazer figura de urso',
    meaning: 'Looking like an idiot'
  },
  {
    phrase: 'It\'s her for her',
    translation:'É ela por ela',
    meaning: 'Meaning it\'s the same or very close to being the same (used when making price comparisons for example)'
  },
  {
    phrase: 'You are here you are eating',
    translation:'Tás aqui tás a comer',
    meaning: 'Menacing to kick your ass'
  },
  {
    phrase: 'Go give bath to the dog',
    translation:'Vai dar banho ao cão',
    meaning: 'Telling someone to fuck off'
  },
  {
    phrase: 'For whore, whore and a half',
    translation:'Para puta, puta e meia',
    meaning: '1. Meaning "If I am something you are even worse" 2. When someone does something mean to you, so you get them back extra hard'
  },
  {
    phrase: 'Allowance of the family',
    translation:'Abono de família',
    meaning: 'Male genitalia'
  },
  {
    phrase: 'Giving pearls to pigs',
    translation:'Dar pérolas a porcos',
    meaning: 'Giving something valuable to someone who doesn\'t appreciate it, understand it or deserve it'
  },
  {
    phrase: 'Being all blind',
    translation:'Estar todo cego',
    meaning: '1.Being drunk 2.Being high 3.Used after saying something stupid and realizing it'
  },
  {
    phrase: 'I\'m already with a hooker',
    translation:'Já estou com uma puta',
    meaning: 'Being already drunk'
  },
  {
    phrase: 'Having bugs wood workers',
    translation:'Ter bichos carpinteiros',
    meaning: 'Someone who can\'t sit still'
  },
  {
    phrase: 'Time of the fat cows',
    translation:'Tempo das vacas gordas',
    meaning: 'Refering to a time where someone/something was wealthier and/or more prosper.'
  },
  {
    phrase: 'Fat like a goatling',
    translation:'Gordo como um chibo',
    meaning: 'When someone is really fat'
  },
  {
    phrase: 'Too much sand for your truck',
    translation:'Demasiada areia para a tua camioneta',
    meaning: '1. When someone is too good for you 2. When something is too much for you to handle.'
  },
  {
    phrase: 'Not here, neither in China',
    translation:'Nem aqui, nem na China',
    meaning: 'Refering to something that isn\'t gonna happen'
  },
  {
    phrase: 'You are a turnip',
    translation:'És um nabo',
    meaning: 'Calling someone a dork'
  },
  {
    phrase: 'Grain to grain fills the chicken the belly',
    translation:'Grão a grão enche a galinha o papo',
    meaning: 'Meaning that even if slowly but patiently, you can achieve a goal if you keep working on it'
  },
  {
    phrase: 'Calm down the popcorn',
    translation:'Acalma a pipoca',
    meaning: 'Telling someone to chill'
  },
  {
    phrase: 'Taking the little horse out of the raing',
    translation:'Tirar o cavalinho da chuva',
    meaning: 'Telling someone to get rid of expectations'
  },
  {
    phrase: 'What a medicine',
    translation:'Que remédio',
    meaning: 'Said when were isn\'t another favorable option'
  },
  {
    phrase: 'Holding on to the pens',
    translation:'Aguentar-se nas canetas',
    meaning: 'Person that because of a disease or fatigue has difficulty standing up'
  },
  {
    phrase: 'You are a bread without salt',
    translation:'És um pão sem sal',
    meaning: 'Someone who is not very interesting/bland'
  },
  {
    phrase: 'That\'s like cleaning the ass of young boys',
    translation:'Isso é como limpar o cu a meninos',
    meaning: 'Comparing something to a really easy task'
  },
  {
    phrase: 'Who complains it\'s who drops the plum',
    translation:'Quem se queixa é quem larga a ameixa',
    meaning: 'Said after someone says he smells a fart'
  },
  {
    phrase: 'Crazy swept',
    translation:'Doido varrido',
    meaning: 'Someone who is really insane'
  },
  {
    phrase: 'Giving thong',
    translation:'Dar tanga',
    meaning: '1. Making fun of someone 2. When you make up stories'
  },
  {
    phrase: 'All to the sauce and faith in God',
    translation:'Tudo ao molho e fé em Deus',
    meaning: '1. Used when a big group gets together in a big confusion'
  },
  {
    phrase: 'That\'s gonna give shit',
    translation:'Isso vai dar merda',
    meaning: 'Expressing a feeling that something will end badly'
  },
  {
    phrase: 'Turn the disc and play the same',
    translation:'Vira o disco e toca o mesmo',
    meaning: 'Same as "You sound like a broken record"'
  },
  {
    phrase: 'Put the dots in the i\'s',
    translation:'Pôr os pontos nos is',
    meaning: 'Making something super clear'
  },
  {
    phrase: 'Who pooped you?',
    translation:'Quem te cagou?',
    meaning: 'Asked to someone who said/did something weird, stupid or dumb'
  },
  {
    phrase: 'Scratching the tomatoes',
    translation:'Coçar os tomates',
    meaning: '1. Scratching your balls 2. When someone isn\'t doing anything productive'
  },
  {
    phrase: 'Being with the rocket in the ass',
    translation:'Estar com um foguete no cu',
    meaning: '1. When someone is in a hurry, specially used when they are walking really fast'
  },
  {
    phrase: 'Donkey like a door',
    translation:'Burro como uma porta',
    meaning: 'Someone who is really dumb'
  },
  {
    phrase: 'Costing a cask of pasta',
    translation:'Custar uma pipa de massa',
    meaning: 'Being really expensive'
  },
  {
    phrase: 'Scrabble the mussel',
    translation:'Escarafunchar o mexilhão',
    meaning: 'Female oral sex'
  },
  {
    phrase: 'You have a lot of throat',
    translation:'Tens muita garganta',
    meaning: 'Used to tell someone they talk a lot but don\'t do anything about what they are saying'
  },
  {
    phrase: 'That is your face',
    translation:'Isso é a tua cara',
    meaning: 'Meaning that something really suits you'
  },
  {
    phrase: 'Who is alive always appears',
    translation:'Quem é vivo sempre aparece',
    meaning: 'Used to say to someone who hasn\'t been around recently'
  },
  {
    phrase: 'You don\'t give one to the box',
    translation:'Não dás uma para a caixa',
    meaning: 'Meaning someone doesn\'t do anything right'
  },
  {
    phrase: 'You are a bread',
    translation:'És um pão',
    meaning: 'Telling a guy he\'s hot'
  },
  {
    phrase: 'In the day of Saint Never in the Afternoon',
    translation:'No dia do São Nunca à Tarde',
    meaning: 'Referring to a day that doesn\'t exist, normally related to a situation that will never happen'
  },
  {
    phrase: 'Go see if it\'s raining',
    translation:'Vai ver se tá a chover',
    meaning: 'Telling someone to fuck off'
  },
  {
    phrase: 'What does the ass have to do with the pants?',
    translation:'O que é que o cu tem a ver com as calças?',
    meaning: 'Asked when someone says two things that have nothing to do with each other'
  },
  {
    phrase: 'Having the broth spilled',
    translation:'Ter o caldo entornado',
    meaning: 'Meaning that something now is ruined'
  },
  {
    phrase: 'Breaking the coconut laughing',
    translation:'Partir o coco a rir',
    meaning: 'Describes something really funny'
  },
  {
    phrase: 'I never saw him fatter',
    translation:'Nunca o vi mais gordo',
    meaning: 'Way to see you never saw that person in your life'
  },
  {
    phrase: 'Hulls of stopper',
    translation:'Cascos de rolha',
    meaning: 'Somewhere far away'
  },
  {
    phrase: 'Exchanging in kids',
    translation:'Trocar em miúdos',
    meaning: '1. Carefully detailing something 2.Explaining in an easier way'
  },
  {
    phrase: 'Bad Bad Mary',
    translation:'Mau Mau maria',
    meaning: 'When you are start thinking that what someone\'s doing or saying is a bad/wrong idea'
  },
  {
    phrase: 'I pooped and walked',
    translation:'Caguei e andei',
    meaning: 'When you are over a situation'
  },
  {
    phrase: 'I don\'t do kid',
    translation:'Não faço puto',
    meaning: 'Not doing anything'
  },
  {
    phrase: 'You are here you are taking',
    translation:'Tás aqui tás apanhar',
    meaning: 'Warning someone that they are going to get hit if they don\'t stop doing something'
  },
  {
    phrase: 'Swaolling frogs',
    translation:'Engolir sapos',
    meaning: 'To not say something that might upset someone and keep it to yourself instead, even if you get frustrated from it'
  },
  {
    phrase: 'Who talks like that isn\'t a stutterer',
    translation:'Quem fala assim não é gago',
    meaning: '1. Knowing so much that you can talk easily 2. Not afraid to say something'
  },
  {
    phrase: 'Walking stepping on eggs',
    translation:'Andar a pisar ovos',
    meaning: '1. Walking very slowly 2. Also used when someone drives very slowly'
  },
  {
    phrase: 'Lick my rapini',
    translation:'Lambe-me o grelo',
    meaning: 'Female oral sex'
  },
  {
    phrase: 'Having more eyes than belly',
    translation:'Ter mais olhos que barriga',
    meaning: 'Describes people who want more than they can handle (normally related to food)'
  },
  {
    phrase: 'Raining pots',
    translation:'Chover a potes',
    meaning: 'When it rains a lot'
  },
  {
    phrase: 'Not doing an ass',
    translation:'Não fazer um cu',
    meaning: 'Not doing anything'
  },
  {
    phrase: 'Rain wets fools',
    translation:'Chuva molha tolos',
    meaning: 'Rain that isn\'t very noticeable but ends up leaving you soaked'
  },
  {
    phrase: 'Storm in a glass of water',
    translation:'Tempestade num copo de água',
    meaning: 'Overreaction to situations'
  },
  {
    phrase: 'Drowning the goose',
    translation:'Afogar o ganso',
    meaning: 'Having sex'
  },
  {
    phrase: 'Not hitting well of the ball',
    translation:'Não bater bem da bola',
    meaning: 'Someone who is mentally unstable'
  },
  {
    phrase: 'It\'s feather',
    translation:'É pena',
    meaning: 'Same as "It\'s a pity"'
  },
  {
    phrase: 'Go to the hooker who gave you birth',
    translation:'Vai para a puta que te pariu',
    meaning: 'Telling someone to fuck off'
  },
  {
    phrase: 'Hitting bad of the horns',
    translation:'Bater mal dos cornos',
    meaning: 'Someone who is crazy'
  },
  {
    phrase: 'Trust the virgin and don\'t run',
    translation:'Fia-te na virgem e não corras',
    meaning: 'Meaning that if you don\'t put hard work into something there\'s no divine spirits that will do it for you.'
  },
  {
    phrase: 'Lead foot',
    translation:'Pé de chumbo',
    meaning: 'Normally describing someone who sucks at dancing'
  },
  {
    phrase: 'Put yourself to stick',
    translation:'Põe-te a pau',
    meaning: 'Staying alert towards something'
  },
  {
    phrase: 'Having a screw less',
    translation:'Ter um parafuso a menos',
    meaning: 'Not being mentally stable'
  },
  {
    phrase: 'Putting the ass between the legs',
    translation:'Meter o rabo entre as pernas',
    meaning: 'Not being able to face and/or being afraid of something/someone'
  },
  {
    phrase: 'Releasing the chicken',
    translation:'Soltar a franga',
    meaning: 'When you are really excited and going all-out (normally for a party)'
  },
  {
    phrase: 'I have you with a powder',
    translation:'Estou-te com um pó',
    meaning: 'When you are mad at someone'
  },
  {
    phrase: 'Being made to the steak',
    translation:'Estar feito ao bife',
    meaning: 'Being in a difficult situation'
  },
  {
    phrase: 'From small you twist the cucumber',
    translation:'De pequenino se torce o pepino',
    meaning: 'You start defining your personality from when you are young'
  },
  {
    phrase: 'More than moms',
    translation:'Mais que as mães',
    meaning: 'Describes a big group of people'
  },
  {
    phrase: 'Not having where to fall dead',
    translation:'Não ter onde cair morto',
    meaning: 'Insult towards someone who doesn\'t own a lot of material things and/or money'
  },
  {
    phrase: 'Throwing fish fillets',
    translation:'Mandar postas de pescada',
    meaning: 'Giving your opinion about something you don\'t really know much about'
  },
  {
    phrase: 'I\'m pooping myself',
    translation:'Estou-me a cagar',
    meaning: 'When you don\'t care about something'
  },
  {
    phrase: 'Unshit your self',
    translation:'Desemerda-te',
    meaning: 'Used to tell someone to figure out how to get out of a situation by themsleves'
  },
  {
    phrase: 'Looping the peach tree',
    translation:'Esgalhar o pessegueiro',
    meaning: 'Masturbating'
  },
  {
    phrase: 'Staying in cod waters',
    translation:'Ficar em águas de bacalhau',
    meaning: 'Usually shows frustration, when something didn\'t happen as expected.'
  },
  {
    phrase: 'Pissing while laughing',
    translation:'Mijar a rir',
    meaning: 'Laughing so hard you could pee your pants'
  },
  {
    phrase: 'Eating and shutting up',
    translation:'Comer e calar',
    meaning: 'Listening to something you don\'t like or agree but not saying anything about it'
  },
  {
    phrase: 'It\'s chicken soup',
    translation:'É canja',
    meaning: 'Something that is easy'
  },
  {
    phrase: 'Arness the rock',
    translation:'Arrear o calhau',
    meaning: 'Pooping'
  },
  {
    phrase: 'Going like Canned Sardines',
    translation:'Ir como sardinhas enlatadas',
    meaning: 'when a place/transport is extremely full'
  },
  {
    phrase: 'Idea without feet or a head',
    translation:'Ideia sem pés nem cabeça',
    meaning: 'Ilogical or senseless idea'
  },
  {
    phrase: 'Having a stick face',
    translation:'Estar com cara de pau',
    meaning: 'Someone who looks very serious'
  },
  {
    phrase: 'Going around like a dizzy cockroach',
    translation:'Andar feito barata tonta',
    meaning: 'Someone that is very distracted/aloof'
  },
  {
    phrase: 'You were born with your ass facing the moon',
    translation:'Nasceste com o rabo virado para a lua',
    meaning: 'Someone who is very lucky in life even if they are desorganized and lazy'
  },
  {
    phrase: 'Being with trunks',
    translation:'Estar de trombas',
    meaning: 'Describes someone who has an annoyed/angry face and posture'
  },
  {
    phrase: 'Monster of seven heads',
    translation:'Bicho de sete cabeças',
    meaning: 'Describes something that is really hard or complicated'
  },
  {
    phrase: 'It\'s not a big shotgun',
    translation:'Não é grande espingarda',
    meaning: 'Describes something that\'s not that great'
  },
  {
    phrase: 'In the ass of Judas',
    translation:'No cu de Judas',
    meaning: 'Somewhere very far away'
  },
  {
    phrase: 'Doing the candle',
    translation:'Fazer de vela',
    meaning: 'Describes "third-wheeling", being alone with a couple'
  },
  {
    phrase: 'Bread Bread Cheese Cheese',
    translation:'Pão Pão Queijo Queijo',
    meaning: 'Used to introduce a frank or direct statement'
  },
  {
    phrase: 'Having can',
    translation:'Ter lata',
    meaning: '1. Someone who is not afraid/ashamed to do or say something 2. Someone confident'
  },
  {
    phrase: 'Rotten Face',
    translation:'Cara podre',
    meaning: 'Someonw who is not afraid/ashamed to do or say something'
  },
  {
    phrase: 'Go with the pigs',
    translation:'Ir com os porcos',
    meaning: 'Another way to say someone passed away'
  },
  {
    phrase: 'Go comb monkeys',
    translation:'Vai pentear macacos',
    meaning: 'When your patience has reached its limits'
  },
  {
    phrase: 'Did the hoodie fit you?',
    translation:'Serviu-te a carapuça?',
    meaning: 'Ironic question asked to someone when a story is told and they commited that same mistake'
  },
  {
    phrase: 'Give your arm to twist',
    translation:'Dar o braço a torcer',
    meaning: 'When you accept an option or outcome that initially wasn\'t your choice'
  },
  {
    phrase: 'Hitting your boots',
    translation:'Bater as botas',
    meaning: 'Means dying'
  },
  {
    phrase: 'I must have a clown face',
    translation:'Devo ter cara de palhaço',
    meaning: 'What you say when someone tries to/makes fun of you'
  },
  {
    phrase: 'Boil in a little water',
    translation:'Ferver em pouca água',
    meaning: 'When someone easily gets annoyed and/or irritated'
  },
  {
    phrase: 'Greenhouse flower',
    translation:'Florzinha de estufa',
    meaning: 'Someone who is extremely sensitive and gets triggered with the smallest things'
  },
  {
    phrase: 'Treating someone with hot blankets',
    translation:'Tratar alguém com paninhos quentes',
    meaning: 'Treating someone in a condescent way because they are unable to handle a situation'
  },
  {
    phrase: 'A lot of years turning chickens',
    translation:'Muitos anos a virar frangos',
    meaning: 'When you do something for a long time and know what you are talking about'
  },
];