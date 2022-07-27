const { Psicologo, Paciente, Usuario, Especialidades, Rol, Genero, Ciudad, Administrador, Dia, Servicio, Precio } = require("../db")
const bcrypt = require('bcryptjs');
let psicologos = [
	{
		"name": "Lucas Bridges",
		"email": "adipiscing.elit@aol.com",
		"lastname": "Stewart Stein",
		"telephone": 1133445566,
		"address": "Ap #336-9930 Lobortis Rd.",
		"birth": "2023/36/24",
		"password": "123456789",
		"dni": 20000000,
		"matriculaProfesional": "MP Nº 6056",
		"cbu": "01702046600000087865"
	},
	{
		"name": "Adrian Guerra",
		"email": "laoreet.libero@hotmail.net",
		"lastname": "Idola Schwartz",
		"telephone": 1133445566,
		"address": "Ap #638-5964 Est/Rd.",
		"birth": "2021/23/12",
		"password": "123456789",
		"dni": 20047258,
		"matriculaProfesional": "MP Nº 6432",
		"cbu": "01702046600000049578"
	},
	{
		"name": "Hector Stephens",
		"email": "ut.eros@outlook.couk",
		"lastname": "Kerry Brennan",
		"telephone": 1133445566,
		"address": "930-3702 Massa. Road",
		"birth": "2022/50/08",
		"password": "123456789",
		"dni": 42149875,
		"matriculaProfesional": "MP Nº 1579",
		"cbu": "01702046600000033333"
	},
	{
		"name": "Talon Harper",
		"email": "elementum@protonmail.org",
		"lastname": "Michael Chen",
		"telephone": 1133445566,
		"address": "Ap #653-8569 Laoreet Rd.",
		"birth": "2022/14/24",
		"password": "123456789",
		"dni": 32569841,
		"matriculaProfesional": "MP Nº 1793",
		"cbu": "01702046600000074589"
	},
	{
		"name": "Kasimir Mcguire",
		"email": "ipsum@yahoo.net",
		"lastname": "Macon Mcleod",
		"telephone": 1133445566,
		"address": "926-1212 Purus Ave",
		"birth": "2021/50/15",
		"password": "123456789",
		"dni": 24987632,
		"matriculaProfesional": "MP Nº 6579",
		"cbu": "017020466000000425964"
	},
	{
		"name": "Carol Stafford",
		"email": "nec@aol.org",
		"lastname": "Ralph Roberson",
		"telephone": 1133445566,
		"address": "Ap #730-7194 Lectus St.",
		"birth": "2003/44/01",
		"password": "123456789",
		"dni": 21498653,
		"matriculaProfesional": "MP Nº 4875",
		"cbu": "01702046600000088888"
	},
	{
		"name": "Inez Johnston",
		"email": "urna.et@google.couk",
		"lastname": "Jacob Bishop",
		"telephone": 1133445566,
		"address": "Ap #340-4256 Vitae, Rd.",
		"birth": "2002/46/03",
		"password": "123456789",
		"dni": 24698531,
		"matriculaProfesional": "MP Nº 2014",
		"cbu": "017020466000000478333"
	},
	{
		"name": "Alfonso Raymond",
		"email": "class@aol.org",
		"lastname": "Hakeem Flores",
		"telephone": 1133445566,
		"address": "440-3788 Erat, Avenue",
		"birth": "2019/05/13",
		"password": "123456789",
		"dni": 44269587,
		"matriculaProfesional": "MP Nº 3245",
		"cbu": "01702046600000072589"
	},
	{
		"name": "Finn Nixon",
		"email": "donec.dignissim.magna@protonmail.edu",
		"lastname": "Jana Nelson",
		"telephone": 1133445566,
		"address": "Ap #740-5332 Curabitur Road",
		"birth": "2001/41/21",
		"password": "123456789",
		"dni": 14523698,
		"matriculaProfesional": "MP Nº 5047",
		"cbu": "01702046600000084593"
	},
	{
		"name": "Blythe Fitzgerald",
		"email": "enim.mauris@icloud.ca",
		"lastname": "Connor Perez",
		"telephone": 1164632737,
		"address": "Ap #932-7481 Donec Road",
		"birth": "2015/44/07",
		"password": "123456789",
		"dni": 12547956,
		"matriculaProfesional": "MP Nº 4025",
		"cbu": "01002046600000047652"
	},
	{
		"name": "Neville Odom",
		"email": "nisl.maecenas@aol.com",
		"lastname": "Ignacia Workman",
		"telephone": 1133445566,
		"address": "896-9537 Lectus Rd.",
		"birth": "2015/55/17",
		"password": "123456789",
		"dni": 19875264,
		"matriculaProfesional": "MP Nº 4068",
		"cbu": "04802046600000084125"
	},
	{
		"name": "Dominic Smith",
		"email": "odio@hotmail.com",
		"lastname": "Fuller Richardson",
		"telephone": 1133445566,
		"address": "P.O. Box 156, 8525 Dui Avenue",
		"birth": "2017/02/11",
		"password": "123456789",
		"dni": 41658749,
		"matriculaProfesional": "MP Nº 5014",
		"cbu": "01702046600000048569"
	},
	{
		"name": "Leonard Ballard",
		"email": "etiam@hotmail.com",
		"lastname": "Palmer Alvarez",
		"telephone": 1133445566,
		"address": "914-5733 Sit Street",
		"birth": "2007/44/10",
		"password": "123456789",
		"dni": 40254789,
		"matriculaProfesional": "MP Nº 6014",
		"cbu": "01702046600004852367"
	},
	{
		"name": "Shea Torres",
		"email": "luctus.vulputate@hotmail.net",
		"lastname": "Len Black",
		"telephone": 1133445566,
		"address": "Ap #594-6552 Pharetra Rd.",
		"birth": "2009/19/28",
		"password": "123456789",
		"dni": 34589657,
		"matriculaProfesional": "MP Nº 4862",
		"cbu": "01702046600000087865"
	},
	{
		"name": "Octavia Donovan",
		"email": "lectus.justo@outlook.edu",
		"lastname": "Dean Rutledge",
		"telephone": 1133445566,
		"address": "Ap #658-5072 Rutrum, Ave",
		"birth": "2015/04/11",
		"password": "123456789",
		"dni": 40658954,
		"matriculaProfesional": "MP Nº 4567",
		"cbu": "01702046600000042897"
	}
]

let pacientes = [
	{
		"name": "Mannix Sawyer",
		"email": "dui@yahoo.ca",
		"lastname": "Yuli Craft",
		"telephone": 1133445566,
		"address": "270-1598 Mollis Street",
		"birth": "2022/04/17",
		"password": "123456789"
	},
	{
		"name": "Kylee Morse",
		"email": "rutrum.non.hendrerit@hotmail.com",
		"lastname": "Priscilla Key",
		"telephone": 1133445566,
		"address": "Ap #114-8067 Tincidunt/Road",
		"birth": "2022/52/06",
		"password": "123456789"
	},
	{
		"name": "Brock Ballard",
		"email": "luctus.lobortis@aol.ca",
		"lastname": "Patrick Valencia",
		"telephone": 1133445566,
		"address": "6512 Dolor. Ave",
		"birth": "2023/53/23",
		"password": "123456789"
	},
	{
		"name": "Colorado George",
		"email": "curabitur.consequat.lectus@outlook.com",
		"lastname": "Lara Glenn",
		"telephone": 1133445566,
		"address": "Ap #584-690 Ac Road",
		"birth": "2021/43/01",
		"password": "123456789"
	},
	{
		"name": "Adara Conley",
		"email": "sed@icloud.edu",
		"lastname": "Roth Macdonald",
		"telephone": 1133445566,
		"address": "P.O. Box 711/7412 A Street",
		"birth": "2021/28/24",
		"password": "123456789"
	},
	{
		"name": "Xyla Dalton",
		"email": "blandit.viverra@aol.couk",
		"lastname": "Destiny Kidd",
		"telephone": 1133445566,
		"address": "5349 Lectus St.",
		"birth": "2001/22/01",
		"password": "123456789"
	},
	{
		"name": "Jameson Beck",
		"email": "tincidunt.aliquam.arcu@yahoo.couk",
		"lastname": "Aquila Powell",
		"telephone": 1133445566,
		"address": "196-379 Maecenas Avenue",
		"birth": "2022/57/28",
		"password": "123456789"
	},
	{
		"name": "Germaine Simpson",
		"email": "a.enim@icloud.couk",
		"lastname": "Gabriel Newton",
		"telephone": 1133445566,
		"address": "Ap #200-1684 Ac Av.",
		"birth": "2011/25/25",
		"password": "123456789"
	},
	{
		"name": "Noble Valencia",
		"email": "integer@yahoo.org",
		"lastname": "Zeus Blackburn",
		"telephone": 1133445566,
		"address": "515-7884 Penatibus Rd.",
		"birth": "2005/47/08",
		"password": "123456789"
	},
	{
		"name": "Autumn Beach",
		"email": "dolor.elit.pellentesque@outlook.ca",
		"lastname": "Sylvester Suarez",
		"telephone": 1133445566,
		"address": "Ap #106-6406 Etiam Av.",
		"birth": "2008/56/30",
		"password": "123456789"
	},
	{
		"name": "Brenden Madden",
		"email": "quis@protonmail.couk",
		"lastname": "Zenia Hughes",
		"telephone": 1133445566,
		"address": "2579 Ridiculus Rd.",
		"birth": "2003/32/02",
		"password": "123456789"
	},
	{
		"name": "Marsden Evans",
		"email": "tellus.aenean.egestas@yahoo.edu",
		"lastname": "Mohammad Weber",
		"telephone": 1133445566,
		"address": "P.O. Box 676, 536 Dictum St.",
		"birth": "2005/39/21",
		"password": "123456789"
	},
	{
		"name": "Ishmael Fisher",
		"email": "at@google.org",
		"lastname": "Yoshi Guy",
		"telephone": 1133445566,
		"address": "Ap #261-7944 Sit Rd.",
		"birth": "2012/42/29",
		"password": "123456789"
	},
	{
		"name": "Cade Wade",
		"email": "adipiscing@outlook.edu",
		"lastname": "Ahmed Frazier",
		"telephone": 1133445566,
		"address": "Ap #863-7698 Integer Rd.",
		"birth": "2017/48/22",
		"password": "123456789"
	},
	{
		"name": "Hiroko Graham",
		"email": "pretium.neque.morbi@hotmail.ca",
		"lastname": "August Lang",
		"telephone": 1133445566,
		"address": "P.O. Box 982, 719 Euismod Ave",
		"birth": "2023/51/30",
		"password": "123456789"
	},
	{
		"name": "Oprah Ewing",
		"email": "aliquam@google.couk",
		"lastname": "Wyoming Dillard",
		"telephone": 1133445566,
		"address": "P.O. Box 247, 1076 Cursus Av.",
		"birth": "2015/33/05",
		"password": "123456789"
	},
	{
		"name": "Baker Mullins",
		"email": "nunc.id@icloud.ca",
		"lastname": "Noelle Good",
		"telephone": 1133445566,
		"address": "363-9407 Mattis. Street",
		"birth": "2017/56/06",
		"password": "123456789"
	},
	{
		"name": "Hiroko Page",
		"email": "lobortis.tellus@protonmail.com",
		"lastname": "Marsden Odom",
		"telephone": 1133445566,
		"address": "653-315 Cursus Road",
		"birth": "2001/47/20",
		"password": "123456789"
	},
	{
		"name": "Lacota Dillard",
		"email": "mauris.rhoncus@protonmail.edu",
		"lastname": "Yetta Hooper",
		"telephone": 1133445566,
		"address": "893-1214 Nascetur Rd.",
		"birth": "2017/27/04",
		"password": "123456789"
	},
	{
		"name": "Jerry Sexton",
		"email": "aenean.massa@hotmail.edu",
		"lastname": "Bertha Macdonald",
		"telephone": 1133445566,
		"address": "276-514 Ut St.",
		"birth": "2019/22/05",
		"password": "123456789"
	},
];
const administrador = {
	"name": "Lucas Bridges",
	"email": "lbridges@aol.com",
	"lastname": "Stewart Stein",
	"telephone": 1133445566,
	"address": "Ap #336-9930 Lobortis Rd.",
	"birth": "2023/36/24",
	"password": "123456789"
};
let dia = 4
const fechas = []
const findes = [10, 17, 24, 31, 9, 16, 23, 30]
while (dia < 31) {
	if (!findes.includes(dia)) fechas.push({ fecha: `2022-07-${dia >= 10 ? dia : "0" + dia}` })
	dia++
}

const generePsicologos = async () => {
	const servicios = await Servicio.findAll();
	let preciosServicios = 3000
	servicios.map(async s => {
		preciosServicios = preciosServicios + 500
		const p = await Precio.create({ costo: preciosServicios })
		await s.setPrecios(p)
	})
	const crearAvatar=(generoId)=>{
		let aux = "";
		if(generoId===1){
			aux = "https://res.cloudinary.com/dtm0efty5/image/upload/v1657766157/images_lgfiz6.png";
		}else if(generoId===2){
			aux = "https://res.cloudinary.com/dtm0efty5/image/upload/v1657765996/a65832155622ac173337874f02b218fb--people-icon-avatar_tgc3v2.jpg";
		}else if(generoId===3){
			aux = "https://res.cloudinary.com/dtm0efty5/image/upload/v1657767243/fzzd629f582o3w0mzund.jpg";
		}else{
			aux = "https://res.cloudinary.com/dtm0efty5/image/upload/v1657767300/images_xjkhx3.jpg";
		}
		return aux;
	}
	psicologos.map(p => async function () {
		
		const generoNumber = Math.ceil(Math.random() * 4);


		const actualPS = await Usuario.create({
			name: p.name,
			email: p.email,
			lastname: p.lastname,
			telephone: p.telephone,
			address: p.address,
			birth: p.birth,
			password: bcrypt.hashSync(p.password, 10),
			avatar : crearAvatar(generoNumber)
		});
		const actualPsicologo = await Psicologo.create({ yearsExperience: 10, inicioHorario: "08:00:00", finHorario: "16:00:00", intervaloSesion: 60, pacientesAtendidos: [5, 4, 1, 2], dni: p.dni, cbu: p.cbu, matriculaProfesional: p.matriculaProfesional })
		const dias = await Dia.bulkCreate(fechas)
		dias.map(async (d) => await actualPsicologo.addDia(d))
		actualPS.setPsicologo(actualPsicologo)
		const rol = await Rol.findOne({ where: { id: 2 } })
		actualPS.setRol(rol)
		
		const genero = await Genero.findOne({ where: { id: generoNumber } })
		actualPS.setGenero(genero)
		const number = Math.ceil(Math.random() * 5)
		const especialidad = await Especialidades.findOne({ where: { id: number } })
		actualPsicologo.setEspecialidades(especialidad)
		const ciudadNumber = Math.ceil(Math.random() * 4142)
		const ciudad = await Ciudad.findByPk(ciudadNumber)
		servicios.map(async s => {
			await actualPsicologo.addServicios(s)
		})
		actualPS.setCiudad(ciudad)
	}())
}

const generePacientes = () => {
	pacientes.map(p => async function () {
		const actualP = await Usuario.create({
			name: p.name,
			email: p.email,
			lastname: p.lastname,
			telephone: p.telephone,
			address: p.address,
			birth: p.birth,
			password: bcrypt.hashSync(p.password, 10)
		})
		const actualPaciente = await Paciente.create()
		actualP.setPaciente(actualPaciente)
		const rol = await Rol.findOne({ where: { id: 1 } })
		actualP.setRol(rol)
		const generoNumber = Math.ceil(Math.random() * 4)
		const genero = await Genero.findOne({ where: { id: generoNumber } })
		actualP.setGenero(genero)
		const ciudadNumber = Math.ceil(Math.random() * 4142)
		const ciudad = await Ciudad.findByPk(ciudadNumber)
		actualP.setCiudad(ciudad)
	}())
};
const generarAdmin = async () => {
	const actual = await Usuario.create({
		name: administrador.name,
		email: administrador.email,
		lastname: administrador.lastname,
		telephone: administrador.telephone,
		address: administrador.address,
		birth: administrador.birth,
		password: bcrypt.hashSync(administrador.password, 10)
	})
	const actualAdministrador = await Administrador.create()
	actual.setAdministrador(actualAdministrador)
	const rol = await Rol.findOne({ where: { id: 3 } })
	actual.setRol(rol)
	const generoNumber = Math.ceil(Math.random() * 4)
	const genero = await Genero.findOne({ where: { id: generoNumber } })
	actual.setGenero(genero)
	const ciudadNumber = Math.ceil(Math.random() * 4142)
	const ciudad = await Ciudad.findByPk(ciudadNumber)
	actual.setCiudad(ciudad)
}

module.exports = {
	generePsicologos,
	generePacientes,
	generarAdmin
}