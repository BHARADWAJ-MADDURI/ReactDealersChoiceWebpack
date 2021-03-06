const db = require('./db')
const Country = require('./countries')
const Details = require('./details')
Details.belongsTo(Country);
Country.hasMany(Details);
const syncAndSeed = async() => {
    try{     
        await db.sync({ force:true });            
        const afghanistan = await Country.create({name: 'Afghanistan'});
        const albania = await Country.create({name: 'Albania'});
        const algeria = await Country.create({name: 'Algeria'});
        const andorra = await Country.create({name: 'Andorra'});
        const angola = await Country.create({name: 'Angola'});
        const antiguaBarbuda = await Country.create({name: 'Antigua and Barbuda'});
        const argentina = await Country.create({name: 'Argentina'});
        const armenia = await Country.create({name: 'Armenia'});
        const australia = await Country.create({name: 'Australia'});
        const austria = await Country.create({name: 'Austria'});
        const azerbaijan = await Country.create({name: 'Azerbaijan'});
        const bahamas = await Country.create({name: 'Bahamas'});
        const bahrain = await Country.create({name: 'Bahrain'});
        const bangladesh = await Country.create({name: 'Bangladesh'});
        const barbados = await Country.create({name: 'Barbados'});
        const belarus = await Country.create({name: 'Belarus'});
        const belgium = await Country.create({name: 'Belgium'});
        const belize = await Country.create({name: 'Belize'});
        const benin = await Country.create({name: 'Benin'});
        const bhutan = await Country.create({name: 'Bhutan'});
        const bolivia = await Country.create({name: 'Bolivia'});
        const bosniaHerzegovina = await Country.create({name: 'Bosnia and Herzegovina'});
        const botswana = await Country.create({name: 'Botswana'});
        const brazil = await Country.create({name: 'Brazil'});
        const brunei = await Country.create({name: 'Brunei'});
        const bulgaria = await Country.create({name: 'Bulgaria'});
        const burkinaFaso = await Country.create({name: 'Burkina Faso'});
        const burundi = await Country.create({name: 'Burundi'});
        const cambodia = await Country.create({name: 'Cambodia'});
        const cameroon = await Country.create({name: 'Cameroon'});
        const canada = await Country.create({name: 'Canada'});
        const capeVerde = await Country.create({name: 'Cape Verde'});
        const centralAfricanRepublic = await Country.create({name: 'Central African Republic'});
        const chad = await Country.create({name: 'Chad'});
        const chile = await Country.create({name: 'Chile'});
        const china = await Country.create({name: 'China'});
        const colombia = await Country.create({name: 'Colombia'});
        const comoros = await Country.create({name: 'Comoros'});
        const costaRica = await Country.create({name: 'Costa Rica'});
        const croatia = await Country.create({name: 'Croatia'});
        const cuba = await Country.create({name: 'Cuba'});
        const cyprus = await Country.create({name: 'Cyprus'});
        const czechRepublic = await Country.create({name: 'Czech Republic'});
        const democraticRepublicofCongo = await Country.create({name: 'Democratic Republic of Congo'});
        const denmark = await Country.create({name: 'Denmark'});
        const djibouti = await Country.create({name: 'Djibouti'});
        const dominica = await Country.create({name: 'Dominica'});
        const dominicanRepublic = await Country.create({name: 'Dominican Republic'});
        const eastTimor = await Country.create({name: 'East Timor'});
        const ecuador = await Country.create({name: 'Ecuador'});
        const egypt = await Country.create({name: 'Egypt'});
        const elSalvador = await Country.create({name: 'El Salvador'});
        const equatorialGuinea = await Country.create({name: 'Equatorial Guinea'});
        const eritrea = await Country.create({name: 'Eritrea'});
        const estonia = await Country.create({name: 'Estonia'});
        const eswatini = await Country.create({name: 'Eswatini'});
        const ethiopia = await Country.create({name: 'Ethiopia'});
        const fiji = await Country.create({name: 'Fiji'});
        const finland = await Country.create({name: 'Finland'});
        const france = await Country.create({name: 'France'});
        const gabon = await Country.create({name: 'Gabon'});
        const gambia = await Country.create({name: 'Gambia'});
        const georgia = await Country.create({name: 'Georgia'});
        const germany = await Country.create({name: 'Germany'});
        const ghana = await Country.create({name: 'Ghana'});
        const greece = await Country.create({name: 'Greece'});
        const grenada = await Country.create({name: 'Grenada'});
        const guatemala = await Country.create({name: 'Guatemala'});
        const guinea = await Country.create({name: 'Guinea'});
        const guineaBissau = await Country.create({name: 'Guinea-Bissau'});
        const guyana = await Country.create({name: 'Guyana'});
        const haiti = await Country.create({name: 'Haiti'});
        const honduras = await Country.create({name: 'Honduras'});
        const hungary = await Country.create({name: 'Hungary'});
        const iceland = await Country.create({name: 'Iceland'});
        const india = await Country.create({name: 'India'});
        const indonesia = await Country.create({name: 'Indonesia'});
        const iran = await Country.create({name: 'Iran'});
        const iraq = await Country.create({name: 'Iraq'});
        const ireland = await Country.create({name: 'Ireland'});
        const israel = await Country.create({name: 'Israel'});
        const italy = await Country.create({name: 'Italy'});
        const ivoryCoast = await Country.create({name: 'Ivory Coast'});
        const jamaica = await Country.create({name: 'Jamaica'});
        const japan = await Country.create({name: 'Japan'});
        const jordan = await Country.create({name: 'Jordan'});
        const kazakhstan = await Country.create({name: 'Kazakhstan'});
        const kenya = await Country.create({name: 'Kenya'});
        const kiribati = await Country.create({name: 'Kiribati'});
        const koreaNorth = await Country.create({name: 'Korea, North'});
        const koreaSouth = await Country.create({name: 'Korea, South'});
        const kosovo = await Country.create({name: 'Kosovo'});
        const kuwait = await Country.create({name: 'Kuwait'});
        const kyrgyzstan = await Country.create({name: 'Kyrgyzstan'});
        const laos = await Country.create({name: 'Laos'});
        const latvia = await Country.create({name: 'Latvia'});
        const lebanon = await Country.create({name: 'Lebanon'});
        const lesotho = await Country.create({name: 'Lesotho'});
        const liberia = await Country.create({name: 'Liberia'});
        const libya = await Country.create({name: 'Libya'});
        const liechtenstein = await Country.create({name: 'Liechtenstein'});
        const lithuania = await Country.create({name: 'Lithuania'});
        const luxembourg = await Country.create({name: 'Luxembourg'});
        const madagascar = await Country.create({name: 'Madagascar'});
        const malawi = await Country.create({name: 'Malawi'});
        const malaysia = await Country.create({name: 'Malaysia'});
        const maldives = await Country.create({name: 'Maldives'});
        const mali = await Country.create({name: 'Mali'});
        const malta = await Country.create({name: 'Malta'});
        const marshallIslands = await Country.create({name: 'Marshall Islands'});
        const mauritania = await Country.create({name: 'Mauritania'});
        const mauritius = await Country.create({name: 'Mauritius'});
        const mexico = await Country.create({name: 'Mexico'});
        const micronesia = await Country.create({name: 'Micronesia'});
        const moldova = await Country.create({name: 'Moldova'});
        const monaco = await Country.create({name: 'Monaco'});
        const mongolia = await Country.create({name: 'Mongolia'});
        const montenegro = await Country.create({name: 'Montenegro'});
        const morocco = await Country.create({name: 'Morocco'});
        const mozambique = await Country.create({name: 'Mozambique'});
        const myanmar = await Country.create({name: 'Myanmar'});
        const namibia = await Country.create({name: 'Namibia'});
        const nauru = await Country.create({name: 'Nauru'});
        const nepal = await Country.create({name: 'Nepal'});
        const netherlands = await Country.create({name: 'Netherlands'});
        const newZealand = await Country.create({name: 'New Zealand'});
        const nicaragua = await Country.create({name: 'Nicaragua'});
        const niger = await Country.create({name: 'Niger'});
        const nigeria = await Country.create({name: 'Nigeria'});
        const northMacedonia = await Country.create({name: 'North Macedonia'});
        const norway = await Country.create({name: 'Norway'});
        const oman = await Country.create({name: 'Oman'});
        const pakistan = await Country.create({name: 'Pakistan'});
        const palau = await Country.create({name: 'Palau'});
        const palestine = await Country.create({name: 'Palestine'});
        const panama = await Country.create({name: 'Panama'});
        const papuaNewGuinea = await Country.create({name: 'Papua New Guinea'});
        const paraguay = await Country.create({name: 'Paraguay'});
        const peru = await Country.create({name: 'Peru'});
        const philippines = await Country.create({name: 'Philippines'});
        const poland = await Country.create({name: 'Poland'});
        const portugal = await Country.create({name: 'Portugal'});
        const qatar = await Country.create({name: 'Qatar'});
        const republicoftheCongo = await Country.create({name: 'Republic of the Congo'});
        const romania = await Country.create({name: 'Romania'});
        const russia = await Country.create({name: 'Russia'});
        const rwanda = await Country.create({name: 'Rwanda'});
        const saintKittsNevis = await Country.create({name: 'Saint Kitts and Nevis'});
        const saintLucia = await Country.create({name: 'Saint Lucia'});
        const saintVincenttheGrenadines = await Country.create({name: 'Saint Vincent and the Grenadines'});
        const samoa = await Country.create({name: 'Samoa'});
        const sanMarino = await Country.create({name: 'San Marino'});
        const saoTomeandPrincipe = await Country.create({name: 'S??o Tom?? and Pr??ncipe'});
        const saudiArabia = await Country.create({name: 'Saudi Arabia'});
        const senegal = await Country.create({name: 'Senegal'});
        const serbia = await Country.create({name: 'Serbia'});
        const seychelles = await Country.create({name: 'Seychelles'});
        const sierraLeone = await Country.create({name: 'Sierra Leone'});
        const singapore = await Country.create({name: 'Singapore'});
        const slovakia = await Country.create({name: 'Slovakia'});
        const slovenia = await Country.create({name: 'Slovenia'});
        const solomonIslands = await Country.create({name: 'Solomon Islands'});
        const somalia = await Country.create({name: 'Somalia'});
        const southAfrica = await Country.create({name: 'South Africa'});
        const southSudan = await Country.create({name: 'South Sudan'});
        const spain = await Country.create({name: 'Spain'});
        const sriLanka = await Country.create({name: 'Sri Lanka'});
        const sudan = await Country.create({name: 'Sudan'});
        const suriname = await Country.create({name: 'Suriname'});
        const sweden = await Country.create({name: 'Sweden'});
        const switzerland = await Country.create({name: 'Switzerland'});
        const syria = await Country.create({name: 'Syria'});
        const taiwan = await Country.create({name: 'Taiwan'});
        const tajikistan = await Country.create({name: 'Tajikistan'});
        const tanzania = await Country.create({name: 'Tanzania'});
        const thailand = await Country.create({name: 'Thailand'});
        const togo = await Country.create({name: 'Togo'});
        const tonga = await Country.create({name: 'Tonga'});
        const trinidadTobago = await Country.create({name: 'Trinidad and Tobago'});
        const tunisia = await Country.create({name: 'Tunisia'});
        const turkey = await Country.create({name: 'Turkey'});
        const turkmenistan = await Country.create({name: 'Turkmenistan'});
        const tuvalu = await Country.create({name: 'Tuvalu'});
        const uganda = await Country.create({name: 'Uganda'});
        const ukraine = await Country.create({name: 'Ukraine'});
        const unitedArabEmirates = await Country.create({name: 'United Arab Emirates'});
        const unitedKingdom = await Country.create({name: 'United Kingdom'});
        const unitedStates = await Country.create({name: 'United States'});
        const uruguay = await Country.create({name: 'Uruguay'});
        const uzbekistan = await Country.create({name: 'Uzbekistan'});
        const vanuatu = await Country.create({name: 'Vanuatu'});
        const vaticanCity = await Country.create({name: 'Vatican City'});
        const venezuela = await Country.create({name: 'Venezuela'});
        const vietnam = await Country.create({name: 'Vietnam'});
        const yemen = await Country.create({name: 'Yemen'});
        const zambia = await Country.create({name: 'Zambia'});
        const zimbabwe = await Country.create({name: 'Zimbabwe'});
        await Details.create({capitalCity: 'Kabul', continent: 'Asia', countryId: afghanistan.id});
        await Details.create({capitalCity: 'Tirana', continent: 'Europe', countryId: albania.id});
        await Details.create({capitalCity: 'Algiers', continent: 'Africa', countryId: algeria.id});
        await Details.create({capitalCity: 'Andorra la Vella', continent: 'Europe', countryId: andorra.id});
        await Details.create({capitalCity: 'Luanda', continent: 'Africa', countryId: angola.id});
        await Details.create({capitalCity: 'St. Johns', continent: 'America', countryId: antiguaBarbuda.id});
        await Details.create({capitalCity: 'Buenos Aires', continent: 'America', countryId: argentina.id});
        await Details.create({capitalCity: 'Yerevan', continent: 'Asia', countryId: armenia.id});
        await Details.create({capitalCity: 'Canberra', continent: 'Oceania', countryId: australia.id});
        await Details.create({capitalCity: 'Vienna', continent: 'Europe', countryId: austria.id});
        await Details.create({capitalCity: 'Baku', continent: 'Asia', countryId: azerbaijan.id});
        await Details.create({capitalCity: 'Nassau', continent: 'America', countryId: bahamas.id});
        await Details.create({capitalCity: 'Manama', continent: 'Asia', countryId: bahrain.id});
        await Details.create({capitalCity: 'Dhaka', continent: 'Asia', countryId: bangladesh.id});
        await Details.create({capitalCity: 'Bridgetown', continent: 'America', countryId: barbados.id});
        await Details.create({capitalCity: 'Minsk', continent: 'Europe', countryId: belarus.id});
        await Details.create({capitalCity: 'Brussels', continent: 'Europe', countryId: belgium.id});
        await Details.create({capitalCity: 'Belmopan', continent: 'America', countryId: belize.id});
        await Details.create({capitalCity: 'Porto Novo', continent: 'Africa', countryId: benin.id});
        await Details.create({capitalCity: 'Thimphu', continent: 'Asia', countryId: bhutan.id});
        await Details.create({capitalCity: 'Sucre', continent: 'America', countryId: bolivia.id});
        await Details.create({capitalCity: 'Sarajevo', continent: 'Europe', countryId: bosniaHerzegovina.id});
        await Details.create({capitalCity: 'Gaborone', continent: 'Africa', countryId: botswana.id});
        await Details.create({capitalCity: 'Brasilia', continent: 'America', countryId: brazil.id});
        await Details.create({capitalCity: 'Bandar Seri Begawan', continent: 'Asia', countryId: brunei.id});
        await Details.create({capitalCity: 'Sofia', continent: 'Europe', countryId: bulgaria.id});
        await Details.create({capitalCity: 'Ouagadougou', continent: 'Africa', countryId: burkinaFaso.id});
        await Details.create({capitalCity: 'Bujumbura', continent: 'Africa', countryId: burundi.id});
        await Details.create({capitalCity: 'Phnom Penh', continent: 'Asia', countryId: cambodia.id});
        await Details.create({capitalCity: 'Yaound??', continent: 'Africa', countryId: cameroon.id});
        await Details.create({capitalCity: 'Ottawa', continent: 'America', countryId: canada.id});
        await Details.create({capitalCity: 'Praia', continent: 'Africa', countryId: capeVerde.id});
        await Details.create({capitalCity: 'Bangui', continent: 'Africa', countryId: centralAfricanRepublic.id});
        await Details.create({capitalCity: 'NDjamena', continent: 'Africa', countryId: chad.id});
        await Details.create({capitalCity: 'Santiago', continent: 'America', countryId: chile.id});
        await Details.create({capitalCity: 'Beijing', continent: 'Asia', countryId: china.id});
        await Details.create({capitalCity: 'Bogota', continent: 'America', countryId: colombia.id});
        await Details.create({capitalCity: 'Moroni', continent: 'Africa', countryId: comoros.id});
        await Details.create({capitalCity: 'San Jos??', continent: 'America', countryId: costaRica.id});
        await Details.create({capitalCity: 'Zagreb', continent: 'Europe', countryId: croatia.id});
        await Details.create({capitalCity: 'Havana', continent: 'America', countryId: cuba.id});
        await Details.create({capitalCity: 'Nicosia', continent: 'Europe', countryId: cyprus.id});
        await Details.create({capitalCity: 'Prague', continent: 'Europe', countryId: czechRepublic.id});
        await Details.create({capitalCity: 'Kinshasa', continent: 'Africa', countryId: democraticRepublicofCongo.id});
        await Details.create({capitalCity: 'Copenagen', continent: 'Europe', countryId: denmark.id});
        await Details.create({capitalCity: 'Djibouti', continent: 'Africa', countryId: djibouti.id});
        await Details.create({capitalCity: 'Roseau', continent: 'America', countryId: dominica.id});
        await Details.create({capitalCity: 'Santo Domingo', continent: 'America', countryId: dominicanRepublic.id});
        await Details.create({capitalCity: 'Dili', continent: 'Oceania', countryId: eastTimor.id});
        await Details.create({capitalCity: 'Quito', continent: 'America', countryId: ecuador.id});
        await Details.create({capitalCity: 'Cairo', continent: 'Africa', countryId: egypt.id});
        await Details.create({capitalCity: 'San Salvador', continent: 'America', countryId: elSalvador.id});
        await Details.create({capitalCity: 'Malabo', continent: 'Africa', countryId: equatorialGuinea.id});
        await Details.create({capitalCity: 'Asmara', continent: 'Africa', countryId: eritrea.id});
        await Details.create({capitalCity: 'Tallinn', continent: 'Europe', countryId: estonia.id});
        await Details.create({capitalCity: 'Mbabane', continent: 'Africa', countryId: eswatini.id});
        await Details.create({capitalCity: 'Addis Ababa', continent: 'Africa', countryId: ethiopia.id});
        await Details.create({capitalCity: 'Suva', continent: 'Oceania', countryId: fiji.id});
        await Details.create({capitalCity: 'Helsinki', continent: 'Europe', countryId: finland.id});
        await Details.create({capitalCity: 'Paris', continent: 'Europe', countryId: france.id});
        await Details.create({capitalCity: 'Libreville', continent: 'Africa', countryId: gabon.id});
        await Details.create({capitalCity: 'Banjul', continent: 'Africa', countryId: gambia.id});
        await Details.create({capitalCity: 'Tbilisi', continent: 'Asia', countryId: georgia.id});
        await Details.create({capitalCity: 'Berlin', continent: 'Europe', countryId: germany.id});
        await Details.create({capitalCity: 'Accra', continent: 'Africa', countryId: ghana.id});
        await Details.create({capitalCity: 'Athens', continent: 'Europe', countryId: greece.id});
        await Details.create({capitalCity: 'St. Georges', continent: 'America', countryId: grenada.id});
        await Details.create({capitalCity: 'Guatemala City', continent: 'America', countryId: guatemala.id});
        await Details.create({capitalCity: 'Conakry', continent: 'Africa', countryId: guinea.id});
        await Details.create({capitalCity: 'Bissau', continent: 'Africa', countryId: guineaBissau.id});
        await Details.create({capitalCity: 'Georgetown', continent: 'America', countryId: guyana.id});
        await Details.create({capitalCity: 'Port-au-Prince', continent: 'America', countryId: haiti.id});
        await Details.create({capitalCity: 'Tegucigalpa', continent: 'America', countryId: honduras.id});
        await Details.create({capitalCity: 'Budapest', continent: 'Europe', countryId: hungary.id});
        await Details.create({capitalCity: 'Reykjav??k', continent: 'Europe', countryId: iceland.id});
        await Details.create({capitalCity: 'New Delhi', continent: 'Asia', countryId: india.id});
        await Details.create({capitalCity: 'Jakarta', continent: 'Asia', countryId: indonesia.id});
        await Details.create({capitalCity: 'Tehran', continent: 'Asia', countryId: iran.id});
        await Details.create({capitalCity: 'Baghdad', continent: 'Asia', countryId: iraq.id});
        await Details.create({capitalCity: 'Dublin', continent: 'Europe', countryId: ireland.id});
        await Details.create({capitalCity: 'Jerusalem', continent: 'Asia', countryId: israel.id});
        await Details.create({capitalCity: 'Rome', continent: 'Europe', countryId: italy.id});
        await Details.create({capitalCity: 'Yamoussoukro', continent: 'Africa', countryId: ivoryCoast.id});
        await Details.create({capitalCity: 'Kingston', continent: 'America', countryId: jamaica.id});
        await Details.create({capitalCity: 'Tokyo', continent: 'Asia', countryId: japan.id});
        await Details.create({capitalCity: 'Amman', continent: 'Asia', countryId: jordan.id});
        await Details.create({capitalCity: 'Astana', continent: 'Asia', countryId: kazakhstan.id});
        await Details.create({capitalCity: 'Nairobi', continent: 'Africa', countryId: kenya.id});
        await Details.create({capitalCity: 'Tarawa', continent: 'Oceania', countryId: kiribati.id});
        await Details.create({capitalCity: 'Pyongyang', continent: 'Asia', countryId: koreaNorth.id});
        await Details.create({capitalCity: 'Seoul', continent: 'Asia', countryId: koreaSouth.id});
        await Details.create({capitalCity: 'Pristina', continent: 'Europe', countryId: kosovo.id});
        await Details.create({capitalCity: 'Kuwait City', continent: 'Asia', countryId: kuwait.id});
        await Details.create({capitalCity: 'Bishkek', continent: 'Asia', countryId: kyrgyzstan.id});
        await Details.create({capitalCity: 'Vientiane', continent: 'Asia', countryId: laos.id});
        await Details.create({capitalCity: 'Riga', continent: 'Europe', countryId: latvia.id});
        await Details.create({capitalCity: 'Beirut', continent: 'Asia', countryId: lebanon.id});
        await Details.create({capitalCity: 'Maseru', continent: 'Africa', countryId: lesotho.id});
        await Details.create({capitalCity: 'Monrovia', continent: 'Africa', countryId: liberia.id});
        await Details.create({capitalCity: 'Tripoli', continent: 'Africa', countryId: libya.id});
        await Details.create({capitalCity: 'Vaduz', continent: 'Europe', countryId: liechtenstein.id});
        await Details.create({capitalCity: 'Vilnius', continent: 'Europe', countryId: lithuania.id});
        await Details.create({capitalCity: 'Luxembourg', continent: 'Europe', countryId: luxembourg.id});
        await Details.create({capitalCity: 'Antananarivo', continent: 'Africa', countryId: madagascar.id});
        await Details.create({capitalCity: 'Lilongwe', continent: 'Africa', countryId: malawi.id});
        await Details.create({capitalCity: 'Kuala Lumpur', continent: 'Asia', countryId: malaysia.id});
        await Details.create({capitalCity: 'Mal??', continent: 'Asia', countryId: maldives.id});
        await Details.create({capitalCity: 'Bamako', continent: 'Africa', countryId: mali.id});
        await Details.create({capitalCity: 'Valletta', continent: 'Europe', countryId: malta.id});
        await Details.create({capitalCity: 'Majuro', continent: 'Oceania', countryId: marshallIslands.id});
        await Details.create({capitalCity: 'Nouakchott', continent: 'Africa', countryId: mauritania.id});
        await Details.create({capitalCity: 'Port Louis', continent: 'Africa', countryId: mauritius.id});
        await Details.create({capitalCity: 'Mexico City', continent: 'America', countryId: mexico.id});
        await Details.create({capitalCity: 'Palikir', continent: 'Oceania', countryId: micronesia.id});
        await Details.create({capitalCity: 'Chisinau', continent: 'Europe', countryId: moldova.id});
        await Details.create({capitalCity: 'Monaco', continent: 'Europe', countryId: monaco.id});
        await Details.create({capitalCity: 'Ulaanbaatar', continent: 'Asia', countryId: mongolia.id});
        await Details.create({capitalCity: 'Podgorica', continent: 'Europe', countryId: montenegro.id});
        await Details.create({capitalCity: 'Rabat', continent: 'Africa', countryId: morocco.id});
        await Details.create({capitalCity: 'Maputo', continent: 'Africa', countryId: mozambique.id});
        await Details.create({capitalCity: 'Naypyidaw', continent: 'Asia', countryId: myanmar.id});
        await Details.create({capitalCity: 'Windhoek', continent: 'Africa', countryId: namibia.id});
        await Details.create({capitalCity: 'Yaren', continent: 'Oceania', countryId: nauru.id});
        await Details.create({capitalCity: 'Kathmandu', continent: 'Asia', countryId: nepal.id});
        await Details.create({capitalCity: 'Amsterdam', continent: 'Europe', countryId: netherlands.id});
        await Details.create({capitalCity: 'Wellington', continent: 'Oceania', countryId: newZealand.id});
        await Details.create({capitalCity: 'Managua', continent: 'America', countryId: nicaragua.id});
        await Details.create({capitalCity: 'Niamey', continent: 'Africa', countryId: niger.id});
        await Details.create({capitalCity: 'Abuja', continent: 'Africa', countryId: nigeria.id});
        await Details.create({capitalCity: 'Skopje', continent: 'Europe', countryId: northMacedonia.id});
        await Details.create({capitalCity: 'Oslo', continent: 'Europe', countryId: norway.id});
        await Details.create({capitalCity: 'Muscat', continent: 'Asia', countryId: oman.id});
        await Details.create({capitalCity: 'Islamabad', continent: 'Asia', countryId: pakistan.id});
        await Details.create({capitalCity: 'Melekeok', continent: 'Oceania', countryId: palau.id});
        await Details.create({capitalCity: 'East Jerusalem', continent: 'Asia', countryId: palestine.id});
        await Details.create({capitalCity: 'Panama City', continent: 'America', countryId: panama.id});
        await Details.create({capitalCity: 'Port Moresby', continent: 'Oceania', countryId: papuaNewGuinea.id});
        await Details.create({capitalCity: 'Asunci??n', continent: 'America', countryId: paraguay.id});
        await Details.create({capitalCity: 'Lima', continent: 'America', countryId: peru.id});
        await Details.create({capitalCity: 'Manila', continent: 'Asia', countryId: philippines.id});
        await Details.create({capitalCity: 'Warsaw', continent: 'Europe', countryId: poland.id});
        await Details.create({capitalCity: 'Lisbon', continent: 'Europe', countryId: portugal.id});
        await Details.create({capitalCity: 'Doha', continent: 'Asia', countryId: qatar.id});
        await Details.create({capitalCity: 'Brazzaville', continent: 'Africa', countryId: republicoftheCongo.id});
        await Details.create({capitalCity: 'Bucharest', continent: 'Europe', countryId: romania.id});
        await Details.create({capitalCity: 'Moscow', continent: 'Europe', countryId: russia.id});
        await Details.create({capitalCity: 'Kigali', continent: 'Africa', countryId: rwanda.id});
        await Details.create({capitalCity: 'Basseterre', continent: 'America', countryId: saintKittsNevis.id});
        await Details.create({capitalCity: 'Castries', continent: 'America', countryId: saintLucia.id});
        await Details.create({capitalCity: 'Kingstown', continent: 'America', countryId: saintVincenttheGrenadines.id});
        await Details.create({capitalCity: 'Apia', continent: 'Oceania', countryId: samoa.id});
        await Details.create({capitalCity: 'San Marino', continent: 'Europe', countryId: sanMarino.id});
        await Details.create({capitalCity: 'S??o Tom??', continent: 'Africa', countryId: saoTomeandPrincipe.id});
        await Details.create({capitalCity: 'Riyadh', continent: 'Asia', countryId: saudiArabia.id});
        await Details.create({capitalCity: 'Dakar', continent: 'Africa', countryId: senegal.id});
        await Details.create({capitalCity: 'Belgrade', continent: 'Europe', countryId: serbia.id});
        await Details.create({capitalCity: 'Victoria', continent: 'Africa', countryId: seychelles.id});
        await Details.create({capitalCity: 'Freetown', continent: 'Africa', countryId: sierraLeone.id});
        await Details.create({capitalCity: 'Singapore', continent: 'Asia', countryId: singapore.id});
        await Details.create({capitalCity: 'Bratislava', continent: 'Europe', countryId: slovakia.id});
        await Details.create({capitalCity: 'Ljubljana', continent: 'Europe', countryId: slovenia.id});
        await Details.create({capitalCity: 'Honiara', continent: 'Oceania', countryId: solomonIslands.id});
        await Details.create({capitalCity: 'Mogadishu', continent: 'Africa', countryId: somalia.id});
        await Details.create({capitalCity: 'Pretoria', continent: 'Africa', countryId: southAfrica.id});
        await Details.create({capitalCity: 'Juba', continent: 'Africa', countryId: southSudan.id});
        await Details.create({capitalCity: 'Madrid', continent: 'Europe', countryId: spain.id});
        await Details.create({capitalCity: 'Sri Jayawardenapura Kotte', continent: 'Asia', countryId: sriLanka.id});
        await Details.create({capitalCity: 'Khartoum', continent: 'Africa', countryId: sudan.id});
        await Details.create({capitalCity: 'Paramaribo', continent: 'America', countryId: suriname.id});
        await Details.create({capitalCity: 'Stockholm', continent: 'Europe', countryId: sweden.id});
        await Details.create({capitalCity: 'Bern', continent: 'Europe', countryId: switzerland.id});
        await Details.create({capitalCity: 'Damascus', continent: 'Asia', countryId: syria.id});
        await Details.create({capitalCity: 'Taipei', continent: 'Asia', countryId: taiwan.id});
        await Details.create({capitalCity: 'Dushanbe', continent: 'Asia', countryId: tajikistan.id});
        await Details.create({capitalCity: 'Dodoma', continent: 'Africa', countryId: tanzania.id});
        await Details.create({capitalCity: 'Bangkok', continent: 'Asia', countryId: thailand.id});
        await Details.create({capitalCity: 'Lom??', continent: 'Africa', countryId: togo.id});
        await Details.create({capitalCity: 'Nukualofa', continent: 'Oceania', countryId: tonga.id});
        await Details.create({capitalCity: 'Port of Spain', continent: 'America', countryId: trinidadTobago.id});
        await Details.create({capitalCity: 'Tunis', continent: 'Africa', countryId: tunisia.id});
        await Details.create({capitalCity: 'Ankara', continent: 'Asia', countryId: turkey.id});
        await Details.create({capitalCity: 'Ashgabat', continent: 'Asia', countryId: turkmenistan.id});
        await Details.create({capitalCity: 'Funafuti', continent: 'Oceania', countryId: tuvalu.id});
        await Details.create({capitalCity: 'Kampala', continent: 'Africa', countryId: uganda.id});
        await Details.create({capitalCity: 'Kiev', continent: 'Europe', countryId: ukraine.id});
        await Details.create({capitalCity: 'Abu Dhabi', continent: 'Asia', countryId: unitedArabEmirates.id});
        await Details.create({capitalCity: 'London', continent: 'Europe', countryId: unitedKingdom.id});
        await Details.create({capitalCity: 'Washington D.C.', continent: 'America', countryId: unitedStates.id});
        await Details.create({capitalCity: 'Montevideo', continent: 'America', countryId: uruguay.id});
        await Details.create({capitalCity: 'Tashkent', continent: 'Asia', countryId: uzbekistan.id});
        await Details.create({capitalCity: 'Port Vila', continent: 'Oceania', countryId: vanuatu.id});
        await Details.create({capitalCity: 'Vatican City', continent: 'Europe', countryId: vaticanCity.id});
        await Details.create({capitalCity: 'Caracas', continent: 'America', countryId: venezuela.id});
        await Details.create({capitalCity: 'Hanoi', continent: 'Asia', countryId: vietnam.id});
        await Details.create({capitalCity: 'Sanaa', continent: 'Asia', countryId: yemen.id});
        await Details.create({capitalCity: 'Lusaka', continent: 'Africa', countryId: zambia.id});
        await Details.create({capitalCity: 'Harare', continent: 'Africa', countryId: zimbabwe.id});
    }
    catch(ex){
        console.log(ex);
    }
}
//syncAndSeed();
module.exports = {
    db,
    Country,
    Details,
    syncAndSeed
}