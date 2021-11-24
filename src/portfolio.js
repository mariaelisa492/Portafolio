const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.linkedin.com/in/mariaeli492/',
  title: 'MariaEli...',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Maria Elisa',
  role: 'Front End Developer',
  description:
    '¡Hola, soy Maria Elisa! Front End developer con conocimientos en tecnologías PERN y MERN stack. Actualmente me encuentro estudiando en Digital House a través de la Beca de Mercado Libre y Globant en la carrera "Certified Tech Developer”. Me gusta crear diseños creativos y que generen la mejor experiencia a los usuarios.   Actualmente estoy buscando oportunidades para seguir creciendo en el campo de TI como Frontend developer. He trabajado en equipos aplicando metodologías ágiles. Me gusta participar en retos en donde se debe sacar a flote la capacidad de adaptabilidad, colaborar en equipos y aprender constantemente. En mi experiencia me destaco por ser empática, proactiva, responsable pero sobre todo por generar espacios adecuados de comunicación.',
  resume: 'https://www.linkedin.com/in/mariaeli492',
  social: {
    linkedin: 'https://www.linkedin.com/in/mariaeli492',
    github: 'https://github.com/mariaelisa492?tab=repositories',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Pokemon App',
    description:
      'Desarrollo Full Stack de una Single Page Application. Este consistió en crear una aplicación web con la temática de Pokémon. Para el Backend utilice Nodejs, ExpressJS, PostgreSQL y Sequelize como ORM, el Frontend está desarrollado en React, Redux y Sass. La aplicación permite ver más de 40 Pokemons, ver el detalle de sus datos y estadísticas, buscar por el nombre, filtrar por el tipo al que pertenece cada uno, ordenarlos en orden alfabético y por su fuerza o ataque. Finalmente permite crear tu propio Pokémon',
    stack: ['SASS', 'NodeJS', 'Express', 'React', 'Redux', 'PostgreSQL', 'Sequelize',],
    sourceCode: 'https://github.com/mariaelisa492/App-Pokemon-PI',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Wave Music',
    description:
      'En este proyecto se utilizó para poder comprender el github flow, la metodología de scrum y las responsabilidades del trabajo en equipo. Para el e-commerce utilizamos Javascript, CSS, React, Redux, MongoDB y Mongoose. En el deploy se utilizó Mongo Atlas para la base de datos, Heroku para el servidor y Firebase para el front.',
    stack: ['NodeJS', 'Express', 'React', 'Redux', 'MongoDB', 'Mongoose'],
    sourceCode: 'https://github.com/mariaelisa492/Repo-para-PG',
    livePreview: 'https://proyecto-grupal-18c81.web.app/',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'LESS',
  'Git',
  'GitHub',
  'Jest',
  'Enzyme',
  'NodeJS',
  'Express',
  'MongoDB'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mariahernandez@unicauca.edu.co',
}

export { header, about, projects, skills, contact }
