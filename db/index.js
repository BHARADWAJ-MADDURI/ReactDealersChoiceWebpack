const db = require('./db')

const Country = require('./countries')
const Details = require('./details')

Details.belongsTo(Country);
Country.hasMany(Details);

const syncAndSeed = async() => {
    try{
        await db.sync({force:true});
        await Country.create({name: 'Afghanistan'});
        await Country.create({name: 'Albania'});
        await Country.create({name: 'Algeria'});
        await Country.create({name: 'Andorra'});
        await Country.create({name: 'Angola'});
        await Country.create({name: 'Antigua and Barbuda'});
        await Country.create({name: 'Argentina'});
        await Country.create({name: 'Armenia'});
        await Country.create({name: 'Australia'});
        await Country.create({name: 'Austria'});
        await Country.create({name: 'Azerbaijan'});
        await Country.create({name: 'Bahamas'});
        await Country.create({name: 'Bahrain'});
        await Country.create({name: 'Bangladesh'});
        await Country.create({name: 'Barbados'});
        await Country.create({name: 'Belarus'});
        await Country.create({name: 'Belgium'});
        await Country.create({name: 'Belize'});
        await Country.create({name: 'Benin'});
        await Country.create({name: 'Bhutan'});
        await Country.create({name: 'Bolivia'});
        await Country.create({name: 'Bosnia and Herzegovina'});
        await Country.create({name: 'Botswana'});
        await Country.create({name: 'Brazil'});
        await Country.create({name: 'Brunei'});
        await Country.create({name: 'Bulgaria'});
        await Country.create({name: 'Burkina Faso'});
        await Country.create({name: 'Burundi'});
        await Country.create({name: 'Cambodia'});
        await Country.create({name: 'Cameroon'});
        await Country.create({name: 'Canada'});
        await Country.create({name: 'Cape Verde'});
        await Country.create({name: 'Central African Republic'});
        await Country.create({name: 'Chad'});
        await Country.create({name: 'Chile'});
        await Country.create({name: 'China'});
        await Country.create({name: 'Colombia'});
        await Country.create({name: 'Comoros'});
        await Country.create({name: 'Costa Rica'});
        await Country.create({name: 'Croatia'});
        await Country.create({name: 'Cuba'});
        await Country.create({name: 'Cyprus'});
        await Country.create({name: 'Czech Republic'});
        await Country.create({name: 'Democratic Republic of Congo'});
        await Country.create({name: 'Denmark'});
        await Country.create({name: 'Djibouti'});
        await Country.create({name: 'Dominica'});
        await Country.create({name: 'Dominican Republic'});
        await Country.create({name: 'East Timor'});
        await Country.create({name: 'Ecuador'});
        await Country.create({name: 'Egypt'});
        await Country.create({name: 'El Salvador'});
        await Country.create({name: 'Equatorial Guinea'});
        await Country.create({name: 'Eritrea'});
        await Country.create({name: 'Estonia'});
        await Country.create({name: 'Eswatini'});
        await Country.create({name: 'Ethiopia'});
        await Country.create({name: 'Fiji'});
        await Country.create({name: 'Finland'});
        await Country.create({name: 'France'});
        await Country.create({name: 'Gabon'});
        await Country.create({name: 'Gambia'});
        await Country.create({name: 'Georgia'});
        await Country.create({name: 'Germany'});
        await Country.create({name: 'Ghana'});
        await Country.create({name: 'Greece'});
        await Country.create({name: 'Grenada'});
        await Country.create({name: 'Guatemala'});
        await Country.create({name: 'Guinea'});
        await Country.create({name: 'Guinea-Bissau'});
        await Country.create({name: 'Guyana'});
        await Country.create({name: 'Haiti'});
        await Country.create({name: 'Honduras'});
        await Country.create({name: 'Hungary'});
        await Country.create({name: 'Iceland'});
        await Country.create({name: 'India'});
        await Country.create({name: 'Indonesia'});
        await Country.create({name: 'Iran'});
        await Country.create({name: 'Iraq'});
        await Country.create({name: 'Ireland'});
        await Country.create({name: 'Israel'});
        await Country.create({name: 'Italy'});
        await Country.create({name: 'Ivory Coast'});
        await Country.create({name: 'Jamaica'});
        await Country.create({name: 'Japan'});
        await Country.create({name: 'Jordan'});
        await Country.create({name: 'Kazakhstan'});
        await Country.create({name: 'Kenya'});
        await Country.create({name: 'Kiribati'});
        await Country.create({name: 'Korea, North'});
        await Country.create({name: 'Korea, South'});
        await Country.create({name: 'Kosovo'});
        await Country.create({name: 'Kuwait'});
        await Country.create({name: 'Kyrgyzstan'});
        await Country.create({name: 'Laos'});
        await Country.create({name: 'Latvia'});
        await Country.create({name: 'Lebanon'});
        await Country.create({name: 'Lesotho'});
        await Country.create({name: 'Liberia'});
        await Country.create({name: 'Libya'});
        await Country.create({name: 'Liechtenstein'});
        await Country.create({name: 'Lithuania'});
        await Country.create({name: 'Luxembourg'});
        await Country.create({name: 'Madagascar'});
        await Country.create({name: 'Malawi'});
        await Country.create({name: 'Malaysia'});
        await Country.create({name: 'Maldives'});
        await Country.create({name: 'Mali'});
        await Country.create({name: 'Malta'});
        await Country.create({name: 'Marshall Islands'});
        await Country.create({name: 'Mauritania'});
        await Country.create({name: 'Mauritius'});
        await Country.create({name: 'Mexico'});
        await Country.create({name: 'Micronesia'});
        await Country.create({name: 'Moldova'});
        await Country.create({name: 'Monaco'});
        await Country.create({name: 'Mongolia'});
        await Country.create({name: 'Montenegro'});
        await Country.create({name: 'Morocco'});
        await Country.create({name: 'Mozambique'});
        await Country.create({name: 'Myanmar'});
        await Country.create({name: 'Namibia'});
        await Country.create({name: 'Nauru'});
        await Country.create({name: 'Nepal'});
        await Country.create({name: 'Netherlands'});
        await Country.create({name: 'New Zealand'});
        await Country.create({name: 'Nicaragua'});
        await Country.create({name: 'Niger'});
        await Country.create({name: 'Nigeria'});
        await Country.create({name: 'North Macedonia'});
        await Country.create({name: 'Norway'});
        await Country.create({name: 'Oman'});
        await Country.create({name: 'Pakistan'});
        await Country.create({name: 'Palau'});
        await Country.create({name: 'Palestine'});
        await Country.create({name: 'Panama'});
        await Country.create({name: 'Papua New Guinea'});
        await Country.create({name: 'Paraguay'});
        await Country.create({name: 'Peru'});
        await Country.create({name: 'Philippines'});
        await Country.create({name: 'Poland'});
        await Country.create({name: 'Portugal'});
        await Country.create({name: 'Qatar'});
        await Country.create({name: 'Republic of the Congo'});
        await Country.create({name: 'Romania'});
        await Country.create({name: 'Russia'});
        await Country.create({name: 'Rwanda'});
        await Country.create({name: 'Saint Kitts and Nevis'});
        await Country.create({name: 'Saint Lucia'});
        await Country.create({name: 'Saint Vincent and the Grenadines'});
        await Country.create({name: 'Samoa'});
        await Country.create({name: 'San Marino'});
        await Country.create({name: 'São Tomé and Príncipe'});
        await Country.create({name: 'Saudi Arabia'});
        await Country.create({name: 'Senegal'});
        await Country.create({name: 'Serbia'});
        await Country.create({name: 'Seychelles'});
        await Country.create({name: 'Sierra Leone'});
        await Country.create({name: 'Singapore'});
        await Country.create({name: 'Slovakia'});
        await Country.create({name: 'Slovenia'});
        await Country.create({name: 'Solomon Islands'});
        await Country.create({name: 'Somalia'});
        await Country.create({name: 'South Africa'});
        await Country.create({name: 'South Sudan'});
        await Country.create({name: 'Spain'});
        await Country.create({name: 'Sri Lanka'});
        await Country.create({name: 'Sudan'});
        await Country.create({name: 'Suriname'});
        await Country.create({name: 'Sweden'});
        await Country.create({name: 'Switzerland'});
        await Country.create({name: 'Syria'});
        await Country.create({name: 'Taiwan'});
        await Country.create({name: 'Tajikistan'});
        await Country.create({name: 'Tanzania'});
        await Country.create({name: 'Thailand'});
        await Country.create({name: 'Togo'});
        await Country.create({name: 'Tonga'});
        await Country.create({name: 'Trinidad and Tobago'});
        await Country.create({name: 'Tunisia'});
        await Country.create({name: 'Turkey'});
        await Country.create({name: 'Turkmenistan'});
        await Country.create({name: 'Tuvalu'});
        await Country.create({name: 'Uganda'});
        await Country.create({name: 'Ukraine'});
        await Country.create({name: 'United Arab Emirates'});
        await Country.create({name: 'United Kingdom'});
        await Country.create({name: 'United States'});
        await Country.create({name: 'Uruguay'});
        await Country.create({name: 'Uzbekistan'});
        await Country.create({name: 'Vanuatu'});
        await Country.create({name: 'Vatican City'});
        await Country.create({name: 'Venezuela'});
        await Country.create({name: 'Vietnam'});
        await Country.create({name: 'Yemen'});
        await Country.create({name: 'Zambia'});
        await Country.create({name: 'Zimbabwe'});
        await Details.create({capitalCity: 'Kabul', continent: 'Asia'});
        await Details.create({capitalCity: 'Tirana', continent: 'Europe'});
        await Details.create({capitalCity: 'Algiers', continent: 'Africa'});
        await Details.create({capitalCity: 'Andorra la Vella', continent: 'Europe'});
        await Details.create({capitalCity: 'Luanda', continent: 'Africa'});
        await Details.create({capitalCity: 'St. Johns', continent: 'America'});
        await Details.create({capitalCity: 'Buenos Aires', continent: 'America'});
        await Details.create({capitalCity: 'Yerevan', continent: 'Asia'});
        await Details.create({capitalCity: 'Canberra', continent: 'Oceania'});
        await Details.create({capitalCity: 'Vienna', continent: 'Europe'});
        await Details.create({capitalCity: 'Baku', continent: 'Asia'});
        await Details.create({capitalCity: 'Nassau', continent: 'America'});
        await Details.create({capitalCity: 'Manama', continent: 'Asia'});
        await Details.create({capitalCity: 'Dhaka', continent: 'Asia'});
        await Details.create({capitalCity: 'Bridgetown', continent: 'America'});
        await Details.create({capitalCity: 'Minsk', continent: 'Europe'});
        await Details.create({capitalCity: 'Brussels', continent: 'Europe'});
        await Details.create({capitalCity: 'Belmopan', continent: 'America'});
        await Details.create({capitalCity: 'Porto Novo', continent: 'Africa'});
        await Details.create({capitalCity: 'Thimphu', continent: 'Asia'});
        await Details.create({capitalCity: 'Sucre', continent: 'America'});
        await Details.create({capitalCity: 'Sarajevo', continent: 'Europe'});
        await Details.create({capitalCity: 'Gaborone', continent: 'Africa'});
        await Details.create({capitalCity: 'Brasilia', continent: 'America'});
        await Details.create({capitalCity: 'Bandar Seri Begawan', continent: 'Asia'});
        await Details.create({capitalCity: 'Sofia', continent: 'Europe'});
        await Details.create({capitalCity: 'Ouagadougou', continent: 'Africa'});
        await Details.create({capitalCity: 'Bujumbura', continent: 'Africa'});
        await Details.create({capitalCity: 'Phnom Penh', continent: 'Asia'});
        await Details.create({capitalCity: 'Yaoundé', continent: 'Africa'});
        await Details.create({capitalCity: 'Ottawa', continent: 'America'});
        await Details.create({capitalCity: 'Praia', continent: 'Africa'});
        await Details.create({capitalCity: 'Bangui', continent: 'Africa'});
        await Details.create({capitalCity: 'N Djamena', continent: 'Africa'});
        await Details.create({capitalCity: 'Santiago', continent: 'America'});
        await Details.create({capitalCity: 'Beijing', continent: 'Asia'});
        await Details.create({capitalCity: 'Bogota', continent: 'America'});
        await Details.create({capitalCity: 'Moroni', continent: 'Africa'});
        await Details.create({capitalCity: 'San José', continent: 'America'});
        await Details.create({capitalCity: 'Zagreb', continent: 'Europe'});
        await Details.create({capitalCity: 'Havana', continent: 'America'});
        await Details.create({capitalCity: 'Nicosia', continent: 'Europe'});
        await Details.create({capitalCity: 'Prague', continent: 'Europe'});
        await Details.create({capitalCity: 'Kinshasa', continent: 'Africa'});
        await Details.create({capitalCity: 'Copenagen', continent: 'Europe'});
        await Details.create({capitalCity: 'Djibouti', continent: 'Africa'});
        await Details.create({capitalCity: 'Roseau', continent: 'America'});
        await Details.create({capitalCity: 'Santo Domingo', continent: 'America'});
        await Details.create({capitalCity: 'Dili', continent: 'Oceania'});
        await Details.create({capitalCity: 'Quito', continent: 'America'});
        await Details.create({capitalCity: 'Cairo', continent: 'Africa'});
        await Details.create({capitalCity: 'San Salvador', continent: 'America'});
        await Details.create({capitalCity: 'Malabo', continent: 'Africa'});
        await Details.create({capitalCity: 'Asmara', continent: 'Africa'});
        await Details.create({capitalCity: 'Tallinn', continent: 'Europe'});
        await Details.create({capitalCity: 'Mbabane', continent: 'Africa'});
        await Details.create({capitalCity: 'Addis Ababa', continent: 'Africa'});
        await Details.create({capitalCity: 'Suva', continent: 'Oceania'});
        await Details.create({capitalCity: 'Helsinki', continent: 'Europe'});
        await Details.create({capitalCity: 'Paris', continent: 'Europe'});
        await Details.create({capitalCity: 'Libreville', continent: 'Africa'});
        await Details.create({capitalCity: 'Banjul', continent: 'Africa'});
        await Details.create({capitalCity: 'Tbilisi', continent: 'Asia'});
        await Details.create({capitalCity: 'Berlin', continent: 'Europe'});
        await Details.create({capitalCity: 'Accra', continent: 'Africa'});
        await Details.create({capitalCity: 'Athens', continent: 'Europe'});
        await Details.create({capitalCity: 'St. Georges', continent: 'America'});
        await Details.create({capitalCity: 'Guatemala City', continent: 'America'});
        await Details.create({capitalCity: 'Conakry', continent: 'Africa'});
        await Details.create({capitalCity: 'Bissau', continent: 'Africa'});
        await Details.create({capitalCity: 'Georgetown', continent: 'America'});
        await Details.create({capitalCity: 'Port-au-Prince', continent: 'America'});
        await Details.create({capitalCity: 'Tegucigalpa', continent: 'America'});
        await Details.create({capitalCity: 'Budapest', continent: 'Europe'});
        await Details.create({capitalCity: 'Reykjavík', continent: 'Europe'});
        await Details.create({capitalCity: 'New Delhi', continent: 'Asia'});
        await Details.create({capitalCity: 'Jakarta', continent: 'Asia'});
        await Details.create({capitalCity: 'Tehran', continent: 'Asia'});
        await Details.create({capitalCity: 'Baghdad', continent: 'Asia'});
        await Details.create({capitalCity: 'Dublin', continent: 'Europe'});
        await Details.create({capitalCity: 'Jerusalem', continent: 'Asia'});
        await Details.create({capitalCity: 'Rome', continent: 'Europe'});
        await Details.create({capitalCity: 'Yamoussoukro', continent: 'Africa'});
        await Details.create({capitalCity: 'Kingston', continent: 'America'});
        await Details.create({capitalCity: 'Tokyo', continent: 'Asia'});
        await Details.create({capitalCity: 'Amman', continent: 'Asia'});
        await Details.create({capitalCity: 'Astana', continent: 'Asia'});
        await Details.create({capitalCity: 'Nairobi', continent: 'Africa'});
        await Details.create({capitalCity: 'Tarawa', continent: 'Oceania'});
        await Details.create({capitalCity: 'Pyongyang', continent: 'Asia'});
        await Details.create({capitalCity: 'Seoul', continent: 'Asia'});
        await Details.create({capitalCity: 'Pristina', continent: 'Europe'});
        await Details.create({capitalCity: 'Kuwait City', continent: 'Asia'});
        await Details.create({capitalCity: 'Bishkek', continent: 'Asia'});
        await Details.create({capitalCity: 'Vientiane', continent: 'Asia'});
        await Details.create({capitalCity: 'Riga', continent: 'Europe'});
        await Details.create({capitalCity: 'Beirut', continent: 'Asia'});
        await Details.create({capitalCity: 'Maseru', continent: 'Africa'});
        await Details.create({capitalCity: 'Monrovia', continent: 'Africa'});
        await Details.create({capitalCity: 'Tripoli', continent: 'Africa'});
        await Details.create({capitalCity: 'Vaduz', continent: 'Europe'});
        await Details.create({capitalCity: 'Vilnius', continent: 'Europe'});
        await Details.create({capitalCity: 'Luxembourg', continent: 'Europe'});
        await Details.create({capitalCity: 'Antananarivo', continent: 'Africa'});
        await Details.create({capitalCity: 'Lilongwe', continent: 'Africa'});
        await Details.create({capitalCity: 'Kuala Lumpur', continent: 'Asia'});
        await Details.create({capitalCity: 'Malé', continent: 'Asia'});
        await Details.create({capitalCity: 'Bamako', continent: 'Africa'});
        await Details.create({capitalCity: 'Valletta', continent: 'Europe'});
        await Details.create({capitalCity: 'Majuro', continent: 'Oceania'});
        await Details.create({capitalCity: 'Nouakchott', continent: 'Africa'});
        await Details.create({capitalCity: 'Port Louis', continent: 'Africa'});
        await Details.create({capitalCity: 'Mexico City', continent: 'America'});
        await Details.create({capitalCity: 'Palikir', continent: 'Oceania'});
        await Details.create({capitalCity: 'Chisinau', continent: 'Europe'});
        await Details.create({capitalCity: 'Monaco', continent: 'Europe'});
        await Details.create({capitalCity: 'Ulaanbaatar', continent: 'Asia'});
        await Details.create({capitalCity: 'Podgorica', continent: 'Europe'});
        await Details.create({capitalCity: 'Rabat', continent: 'Africa'});
        await Details.create({capitalCity: 'Maputo', continent: 'Africa'});
        await Details.create({capitalCity: 'Naypyidaw', continent: 'Asia'});
        await Details.create({capitalCity: 'Windhoek', continent: 'Africa'});
        await Details.create({capitalCity: 'Yaren', continent: 'Oceania'});
        await Details.create({capitalCity: 'Kathmandu', continent: 'Asia'});
        await Details.create({capitalCity: 'Amsterdam', continent: 'Europe'});
        await Details.create({capitalCity: 'Wellington', continent: 'Oceania'});
        await Details.create({capitalCity: 'Managua', continent: 'America'});
        await Details.create({capitalCity: 'Niamey', continent: 'Africa'});
        await Details.create({capitalCity: 'Abuja', continent: 'Africa'});
        await Details.create({capitalCity: 'Skopje', continent: 'Europe'});
        await Details.create({capitalCity: 'Oslo', continent: 'Europe'});
        await Details.create({capitalCity: 'Muscat', continent: 'Asia'});
        await Details.create({capitalCity: 'Islamabad', continent: 'Asia'});
        await Details.create({capitalCity: 'Melekeok', continent: 'Oceania'});
        await Details.create({capitalCity: 'East Jerusalem', continent: 'Asia'});
        await Details.create({capitalCity: 'Panama City', continent: 'America'});
        await Details.create({capitalCity: 'Port Moresby', continent: 'Oceania'});
        await Details.create({capitalCity: 'Asunción', continent: 'America'});
        await Details.create({capitalCity: 'Lima', continent: 'America'});
        await Details.create({capitalCity: 'Manila', continent: 'Asia'});
        await Details.create({capitalCity: 'Warsaw', continent: 'Europe'});
        await Details.create({capitalCity: 'Lisbon', continent: 'Europe'});
        await Details.create({capitalCity: 'Doha', continent: 'Asia'});
        await Details.create({capitalCity: 'Brazzaville', continent: 'Africa'});
        await Details.create({capitalCity: 'Bucharest', continent: 'Europe'});
        await Details.create({capitalCity: 'Moscow', continent: 'Europe'});
        await Details.create({capitalCity: 'Kigali', continent: 'Africa'});
        await Details.create({capitalCity: 'Basseterre', continent: 'America'});
        await Details.create({capitalCity: 'Castries', continent: 'America'});
        await Details.create({capitalCity: 'Kingstown', continent: 'America'});
        await Details.create({capitalCity: 'Apia', continent: 'Oceania'});
        await Details.create({capitalCity: 'San Marino', continent: 'Europe'});
        await Details.create({capitalCity: 'São Tomé', continent: 'Africa'});
        await Details.create({capitalCity: 'Riyadh', continent: 'Asia'});
        await Details.create({capitalCity: 'Dakar', continent: 'Africa'});
        await Details.create({capitalCity: 'Belgrade', continent: 'Europe'});
        await Details.create({capitalCity: 'Victoria', continent: 'Africa'});
        await Details.create({capitalCity: 'Freetown', continent: 'Africa'});
        await Details.create({capitalCity: 'Singapore', continent: 'Asia'});
        await Details.create({capitalCity: 'Bratislava', continent: 'Europe'});
        await Details.create({capitalCity: 'Ljubljana', continent: 'Europe'});
        await Details.create({capitalCity: 'Honiara', continent: 'Oceania'});
        await Details.create({capitalCity: 'Mogadishu', continent: 'Africa'});
        await Details.create({capitalCity: 'Pretoria', continent: 'Africa'});
        await Details.create({capitalCity: 'Juba', continent: 'Africa'});
        await Details.create({capitalCity: 'Madrid', continent: 'Europe'});
        await Details.create({capitalCity: 'Sri Jayawardenapura Kotte', continent: 'Asia'});
        await Details.create({capitalCity: 'Khartoum', continent: 'Africa'});
        await Details.create({capitalCity: 'Paramaribo', continent: 'America'});
        await Details.create({capitalCity: 'Stockholm', continent: 'Europe'});
        await Details.create({capitalCity: 'Bern', continent: 'Europe'});
        await Details.create({capitalCity: 'Damascus', continent: 'Asia'});
        await Details.create({capitalCity: 'Taipei', continent: 'Asia'});
        await Details.create({capitalCity: 'Dushanbe', continent: 'Asia'});
        await Details.create({capitalCity: 'Dodoma', continent: 'Africa'});
        await Details.create({capitalCity: 'Bangkok', continent: 'Asia'});
        await Details.create({capitalCity: 'Lomé', continent: 'Africa'});
        await Details.create({capitalCity: 'Nukualofa', continent: 'Oceania'});
        await Details.create({capitalCity: 'Port of Spain', continent: 'America'});
        await Details.create({capitalCity: 'Tunis', continent: 'Africa'});
        await Details.create({capitalCity: 'Ankara', continent: 'Asia'});
        await Details.create({capitalCity: 'Ashgabat', continent: 'Asia'});
        await Details.create({capitalCity: 'Funafuti', continent: 'Oceania'});
        await Details.create({capitalCity: 'Kampala', continent: 'Africa'});
        await Details.create({capitalCity: 'Kiev', continent: 'Europe'});
        await Details.create({capitalCity: 'Abu Dhabi', continent: 'Asia'});
        await Details.create({capitalCity: 'London', continent: 'Europe'});
        await Details.create({capitalCity: 'Washington D.C.', continent: 'America'});
        await Details.create({capitalCity: 'Montevideo', continent: 'America'});
        await Details.create({capitalCity: 'Tashkent', continent: 'Asia'});
        await Details.create({capitalCity: 'Port Vila', continent: 'Oceania'});
        await Details.create({capitalCity: 'Vatican City', continent: 'Europe'});
        await Details.create({capitalCity: 'Caracas', continent: 'America'});
        await Details.create({capitalCity: 'Hanoi', continent: 'Asia'});
        await Details.create({capitalCity: 'Sana a', continent: 'Asia'});
        await Details.create({capitalCity: 'Lusaka', continent: 'Africa'});
        await Details.create({capitalCity: 'Harare', continent: 'Africa'});
    }
    catch(ex){
        console.log(ex);
    }
}
syncAndSeed();


module.exports = {
    db,
    Country,
    Details,
    syncAndSeed
}