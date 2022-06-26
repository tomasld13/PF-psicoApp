const {Psicologo, Paciente, Usuario, Especialidades, Rol, Genero, Ciudad} = require("../db")
const bcrypt = require('bcryptjs');
let psicologos = [
	{
		"name": "Lucas Bridges",
		"email": "adipiscing.elit@aol.com",
		"lastname": "Stewart Stein",
		"telephone": 1133445566,
		"address": "Ap #336-9930 Lobortis Rd.",
		"birth": "2023/36/24",
		"password" : "123456789"
	},
	{
		"name": "Adrian Guerra",
		"email": "laoreet.libero@hotmail.net",
		"lastname": "Idola Schwartz",
		"telephone": 1133445566,
		"address": "Ap #638-5964 Est/Rd.",
		"birth": "2021/23/12",
		"password" : "123456789"
	},
	{
		"name": "Hector Stephens",
		"email": "ut.eros@outlook.couk",
		"lastname": "Kerry Brennan",
		"telephone": 1133445566,
		"address": "930-3702 Massa. Road",
		"birth": "2022/50/08",
		"password" : "123456789"
	},
	{
		"name": "Talon Harper",
		"email": "elementum@protonmail.org",
		"lastname": "Michael Chen",
		"telephone":1133445566,
		"address": "Ap #653-8569 Laoreet Rd.",
		"birth": "2022/14/24",
		"password" : "123456789"
	},
	{
		"name": "Kasimir Mcguire",
		"email": "ipsum@yahoo.net",
		"lastname": "Macon Mcleod",
		"telephone": 1133445566,
		"address": "926-1212 Purus Ave",
		"birth": "2021/50/15",
		"password" : "123456789"
	},
	{
		"name": "Carol Stafford",
		"email": "nec@aol.org",
		"lastname": "Ralph Roberson",
		"telephone": 1133445566,
		"address": "Ap #730-7194 Lectus St.",
		"birth": "2003/44/01",
		"password" : "123456789"
	},
	{
		"name": "Inez Johnston",
		"email": "urna.et@google.couk",
		"lastname": "Jacob Bishop",
		"telephone": 1133445566,
		"address": "Ap #340-4256 Vitae, Rd.",
		"birth": "2002/46/03",
		"password" : "123456789"
	},
	{
		"name": "Alfonso Raymond",
		"email": "class@aol.org",
		"lastname": "Hakeem Flores",
		"telephone": 1133445566,
		"address": "440-3788 Erat, Avenue",
		"birth": "2019/05/13",
		"password" : "123456789"
	},
	{
		"name": "Finn Nixon",
		"email": "donec.dignissim.magna@protonmail.edu",
		"lastname": "Jana Nelson",
		"telephone": 1133445566,
		"address": "Ap #740-5332 Curabitur Road",
		"birth": "2001/41/21",
		"password" : "123456789"
	},
	{
		"name": "Blythe Fitzgerald",
		"email": "enim.mauris@icloud.ca",
		"lastname": "Connor Perez",
		"telephone": 1164632737,
		"address": "Ap #932-7481 Donec Road",
		"birth": "2015/44/07",
		"password" : "123456789"
	},
	{
		"name": "Neville Odom",
		"email": "nisl.maecenas@aol.com",
		"lastname": "Ignacia Workman",
		"telephone": 1133445566,
		"address": "896-9537 Lectus Rd.",
		"birth": "2015/55/17",
		"password" : "123456789"
	},
	{
		"name": "Dominic Smith",
		"email": "odio@hotmail.com",
		"lastname": "Fuller Richardson",
		"telephone": 1133445566,
		"address": "P.O. Box 156, 8525 Dui Avenue",
		"birth": "2017/02/11",
		"password" : "123456789"
	},
	{
		"name": "Leonard Ballard",
		"email": "etiam@hotmail.com",
		"lastname": "Palmer Alvarez",
		"telephone": 1133445566,
		"address": "914-5733 Sit Street",
		"birth": "2007/44/10",
		"password" : "123456789"
	},
	{
		"name": "Shea Torres",
		"email": "luctus.vulputate@hotmail.net",
		"lastname": "Len Black",
		"telephone": 1133445566,
		"address": "Ap #594-6552 Pharetra Rd.",
		"birth": "2009/19/28",
		"password" : "123456789"
	},
	{
		"name": "Octavia Donovan",
		"email": "lectus.justo@outlook.edu",
		"lastname": "Dean Rutledge",
		"telephone": 1133445566,
		"address": "Ap #658-5072 Rutrum, Ave",
		"birth": "2015/04/11",
		"password" : "123456789"
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
		"password" : "123456789"
	},
	{
		"name": "Kylee Morse",
		"email": "rutrum.non.hendrerit@hotmail.com",
		"lastname": "Priscilla Key",
		"telephone": 1133445566,
		"address": "Ap #114-8067 Tincidunt/Road",
		"birth": "2022/52/06",
		"password" : "123456789"
	},
	{
		"name": "Brock Ballard",
		"email": "luctus.lobortis@aol.ca",
		"lastname": "Patrick Valencia",
		"telephone": 1133445566,
		"address": "6512 Dolor. Ave",
		"birth": "2023/53/23",
		"password" : "123456789"
	},
	{
		"name": "Colorado George",
		"email": "curabitur.consequat.lectus@outlook.com",
		"lastname": "Lara Glenn",
		"telephone": 1133445566,
		"address": "Ap #584-690 Ac Road",
		"birth": "2021/43/01",
		"password" : "123456789"
	},
	{
		"name": "Adara Conley",
		"email": "sed@icloud.edu",
		"lastname": "Roth Macdonald",
		"telephone": 1133445566,
		"address": "P.O. Box 711/7412 A Street",
		"birth": "2021/28/24",
		"password" : "123456789"
	},
	{
		"name": "Xyla Dalton",
		"email": "blandit.viverra@aol.couk",
		"lastname": "Destiny Kidd",
		"telephone": 1133445566,
		"address": "5349 Lectus St.",
		"birth": "2001/22/01",
		"password" : "123456789"
	},
	{
		"name": "Jameson Beck",
		"email": "tincidunt.aliquam.arcu@yahoo.couk",
		"lastname": "Aquila Powell",
		"telephone": 1133445566,
		"address": "196-379 Maecenas Avenue",
		"birth": "2022/57/28",
		"password" : "123456789"
	},
	{
		"name": "Germaine Simpson",
		"email": "a.enim@icloud.couk",
		"lastname": "Gabriel Newton",
		"telephone": 1133445566,
		"address": "Ap #200-1684 Ac Av.",
		"birth": "2011/25/25",
		"password" : "123456789"
	},
	{
		"name": "Noble Valencia",
		"email": "integer@yahoo.org",
		"lastname": "Zeus Blackburn",
		"telephone": 1133445566,
		"address": "515-7884 Penatibus Rd.",
		"birth": "2005/47/08",
		"password" : "123456789"
	},
	{
		"name": "Autumn Beach",
		"email": "dolor.elit.pellentesque@outlook.ca",
		"lastname": "Sylvester Suarez",
		"telephone": 1133445566,
		"address": "Ap #106-6406 Etiam Av.",
		"birth": "2008/56/30",
		"password" : "123456789"
	},
	{
		"name": "Brenden Madden",
		"email": "quis@protonmail.couk",
		"lastname": "Zenia Hughes",
		"telephone": 1133445566,
		"address": "2579 Ridiculus Rd.",
		"birth": "2003/32/02",
		"password" : "123456789"
	},
	{
		"name": "Marsden Evans",
		"email": "tellus.aenean.egestas@yahoo.edu",
		"lastname": "Mohammad Weber",
		"telephone": 1133445566,
		"address": "P.O. Box 676, 536 Dictum St.",
		"birth": "2005/39/21",
		"password" : "123456789"
	},
	{
		"name": "Ishmael Fisher",
		"email": "at@google.org",
		"lastname": "Yoshi Guy",
		"telephone": 1133445566,
		"address": "Ap #261-7944 Sit Rd.",
		"birth": "2012/42/29",
		"password" : "123456789"
	},
	{
		"name": "Cade Wade",
		"email": "adipiscing@outlook.edu",
		"lastname": "Ahmed Frazier",
		"telephone": 1133445566,
		"address": "Ap #863-7698 Integer Rd.",
		"birth": "2017/48/22",
		"password" : "123456789"
	},
	{
		"name": "Hiroko Graham",
		"email": "pretium.neque.morbi@hotmail.ca",
		"lastname": "August Lang",
		"telephone": 1133445566,
		"address": "P.O. Box 982, 719 Euismod Ave",
		"birth": "2023/51/30",
		"password" : "123456789"
	},
	{
		"name": "Oprah Ewing",
		"email": "aliquam@google.couk",
		"lastname": "Wyoming Dillard",
		"telephone": 1133445566,
		"address": "P.O. Box 247, 1076 Cursus Av.",
		"birth": "2015/33/05",
		"password" : "123456789"
	},
	{
		"name": "Baker Mullins",
		"email": "nunc.id@icloud.ca",
		"lastname": "Noelle Good",
		"telephone": 1133445566,
		"address": "363-9407 Mattis. Street",
		"birth": "2017/56/06",
		"password" : "123456789"
	},
	{
		"name": "Hiroko Page",
		"email": "lobortis.tellus@protonmail.com",
		"lastname": "Marsden Odom",
		"telephone": 1133445566,
		"address": "653-315 Cursus Road",
		"birth": "2001/47/20",
		"password" : "123456789"
	},
	{
		"name": "Lacota Dillard",
		"email": "mauris.rhoncus@protonmail.edu",
		"lastname": "Yetta Hooper",
		"telephone": 1133445566,
		"address": "893-1214 Nascetur Rd.",
		"birth": "2017/27/04",
		"password" : "123456789"
	},
	{
		"name": "Jerry Sexton",
		"email": "aenean.massa@hotmail.edu",
		"lastname": "Bertha Macdonald",
		"telephone": 1133445566,
		"address": "276-514 Ut St.",
		"birth": "2019/22/05",
		"password" : "123456789"
	},
]

const generePsicologos = () => {
    psicologos.map(p => async function(){
        const actual = await Usuario.create({
            name: p.name,
            email: p.email,
            lastname: p.lastname,
            telephone: p.telephone,
            address: p.address,
            birth: p.birth,
			password : bcrypt.hashSync(p.password, 10)
        })
        const actualPsicologo = await Psicologo.create({yearsExperience: 10, honorario: 10})
		actual.setPsicologo(actualPsicologo)
		const rol = await Rol.findOne({where:{id:2}})
		actual.setRol(rol)
		const generoNumber = Math.ceil(Math.random()*3)
		const genero = await Genero.findOne({where:{id:generoNumber}})
		actual.setGenero(genero)
		const number = Math.ceil(Math.random()*5)
		const especialidad = await Especialidades.findOne({where:{id:number}})
		actualPsicologo.setEspecialidades(especialidad)
		const ciudadNumber = Math.ceil(Math.random()*1814)
		const ciudad = await Ciudad.findByPk(ciudadNumber)
		actual.setCiudad(ciudad)
    }())
}

const generePacientes = () => {
    pacientes.map(p => async function(){
        const actual = await Usuario.create({
            name: p.name,
            email: p.email,
            lastname: p.lastname,
            telephone: p.telephone,
            address: p.address,
            birth: p.birth,
			password : bcrypt.hashSync(p.password, 10)
        })
        const actualPaciente = await Paciente.create()
		actual.setPaciente(actualPaciente)
		const rol = await Rol.findOne({where:{id:1}})
		actual.setRol(rol)
		const generoNumber = Math.ceil(Math.random()*3)
		const genero = await Genero.findOne({where:{id:generoNumber}})
		actual.setGenero(genero)
		const ciudadNumber = Math.ceil(Math.random()*1814)
		const ciudad = await Ciudad.findByPk(ciudadNumber)
		actual.setCiudad(ciudad)
    }())
}

module.exports = {
    generePsicologos,
    generePacientes
}