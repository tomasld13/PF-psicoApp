require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;
let sequelize = process.env.NODE_ENV === "production" ? new Sequelize({
  database: DB_NAME,
  dialect: "postgres",
  host: DB_HOST,
  port: 5432,
  username: DB_USER,
  password: DB_PASSWORD,
  pool: {
    max: 3,
    min: 1,
    idle: 10000,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }, 
    keepAlive: true
  },
  ssl: true,
}) : 
  new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/psicoapp`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Psicologo, Paciente, Usuario, Rol, Genero, MetodoPago, Factura, Detalle, Modalidad, Administrador, Especialidades, Horarios, Reviews, HistoriasClinicas, Consulta, Provincia, Ciudad, Servicio } = sequelize.models;
// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//Usuario-Paciente
Usuario.hasOne(Paciente,{foreignKey : 'fk_usuarioID', targetKey : 'id'}, {
  onDelete : 'CASCADE',
  onUpdate : 'CASCADE'
});
Paciente.belongsTo(Usuario, {foreignKey : 'fk_usuarioID', targetKey : 'id'});
//Usuario-Psicologo
Usuario.hasOne(Psicologo,{foreignKey : 'fk_usuarioID', targetKey : 'id'}, {
  onDelete : 'CASCADE',
  onUpdate : 'CASCADE'
});
Psicologo.belongsTo(Usuario, {foreignKey : 'fk_usuarioID', targetKey : 'id'});
//Rol->Usuario
Rol.hasMany(Usuario);
Usuario.belongsTo(Rol);
//Genero->Usuario
Genero.hasMany(Usuario);
Usuario.belongsTo(Genero)
//MetodoPago->Factura
MetodoPago.hasMany(Factura)
Factura.belongsTo(MetodoPago)
//Paciente->Factura
Paciente.hasMany(Factura)
Factura.belongsTo(Paciente)
//Facturas->Detalle
Factura.hasMany(Detalle)
Detalle.belongsTo(Factura)
//Modalidad->Detalle
Modalidad.hasMany(Detalle)
Detalle.belongsTo(Modalidad)
//Psicologo->Detalle
Psicologo.hasMany(Detalle)
Detalle.belongsTo(Psicologo)
//Usuario->Administrador
Usuario.hasOne(Administrador,{foreignKey : 'fk_usuarioID', targetKey : 'id'}, {
  onDelete : 'CASCADE',
  onUpdate : 'CASCADE'
});
Administrador.belongsTo(Usuario, {foreignKey : 'fk_usuarioID', targetKey : 'id'});
//Espcialidad->Psicologo
Especialidades.hasMany(Psicologo);
Psicologo.belongsTo(Especialidades);
//Horario->Psicologo
Horarios.belongsToMany(Psicologo, {through : 'Horario_Psicologo'});
Psicologo.belongsToMany(Horarios, {through : 'Horario_Psicologo'});
//Reviews->Psicologo
Reviews.belongsTo(Psicologo, {foreignKey : 'fk_psicologoID', targetKey : 'id'});
Psicologo.hasMany(Reviews, {foreignKey : 'fk_psicologoID', targetKey : 'id'});
//Reviews->Paciente
Reviews.belongsTo(Paciente, {foreignKey : 'fk_pacienteID', targetKey : 'id'});
Paciente.hasMany(Reviews, {foreignKey : 'fk_pacienteID', targetKey : 'id'});
//HistoriasClinicas->Paciente
Paciente.hasOne(HistoriasClinicas,{foreignKey : 'fk_pacienteID', targetKey : 'id'}, {
  onDelete : 'CASCADE',
  onUpdate : 'CASCADE'});
HistoriasClinicas.belongsTo(Paciente, {foreignKey : 'fk_pacienteID', targetKey : 'id'});
//HistoriasClinicas->Psicologo
HistoriasClinicas.belongsTo(Psicologo, {foreignKey : 'fk_psicologoID', targetKey : 'id'});
Psicologo.hasMany(HistoriasClinicas, {foreignKey : 'fk_psicologoID', targetKey : 'id'});
//HistoriasClinicas->Consulta
HistoriasClinicas.hasMany(Consulta, {foreignKey : 'fk_historiaClinicaID', targetKey : 'id'});
Consulta.belongsTo(HistoriasClinicas, {foreignKey : 'fk_historiaClinicaID', targetKey : 'id'});
//Provincias Ciudades
Provincia.hasMany(Ciudad);
Ciudad.belongsTo(Provincia)
//Ciudades -> Usuarios
Ciudad.hasMany(Usuario);
Usuario.belongsTo(Ciudad);

//Servicio-Detalle
Servicio.hasMany(Detalle);
Detalle.belongsTo(Servicio);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,   // para importart la conexión { conn } = require('./db.js');
};