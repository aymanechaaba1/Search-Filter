'use strict';

const searchInput = document.querySelector('.search-input');
const table = document.querySelector('table');

const data = [
  {
    id: 1,
    firstName: 'Enrika',
    lastName: 'Merrigan',
    email: 'emerrigan0@macromedia.com',
    phone: '382-400-9942',
  },
  {
    id: 2,
    firstName: 'Marji',
    lastName: 'Hamprecht',
    email: 'mhamprecht1@ezinearticles.com',
    phone: '751-722-5054',
  },
  {
    id: 3,
    firstName: 'Farah',
    lastName: 'Dedrick',
    email: 'fdedrick2@a8.net',
    phone: '684-579-9220',
  },
  {
    id: 4,
    firstName: 'Batholomew',
    lastName: 'Bollum',
    email: 'bbollum3@foxnews.com',
    phone: '845-251-6930',
  },
  {
    id: 5,
    firstName: 'Lisbeth',
    lastName: 'Larne',
    email: 'llarne4@webeden.co.uk',
    phone: '669-472-0080',
  },
  {
    id: 6,
    firstName: 'Hirsch',
    lastName: 'Binford',
    email: 'hbinford5@jigsy.com',
    phone: '604-664-3068',
  },
  {
    id: 7,
    firstName: 'Charleen',
    lastName: 'Gavahan',
    email: 'cgavahan6@squarespace.com',
    phone: '305-919-9036',
  },
  {
    id: 8,
    firstName: 'Hillard',
    lastName: 'Shucksmith',
    email: 'hshucksmith7@dagondesign.com',
    phone: '778-698-3581',
  },
  {
    id: 9,
    firstName: 'Kinsley',
    lastName: 'Yurasov',
    email: 'kyurasov8@blinklist.com',
    phone: '194-750-6502',
  },
  {
    id: 10,
    firstName: 'Sayer',
    lastName: 'Grestye',
    email: 'sgrestye9@ameblo.jp',
    phone: '439-427-4256',
  },
  {
    id: 11,
    firstName: 'Ciel',
    lastName: 'Ruffli',
    email: 'crufflia@salon.com',
    phone: '547-224-9075',
  },
  {
    id: 12,
    firstName: 'Ethelbert',
    lastName: 'Podbury',
    email: 'epodburyb@examiner.com',
    phone: '808-929-7229',
  },
  {
    id: 13,
    firstName: 'Berry',
    lastName: 'Coite',
    email: 'bcoitec@pbs.org',
    phone: '302-538-6355',
  },
  {
    id: 14,
    firstName: 'Der',
    lastName: 'Millberg',
    email: 'dmillbergd@creativecommons.org',
    phone: '348-394-4223',
  },
  {
    id: 15,
    firstName: 'Timmie',
    lastName: 'Slyman',
    email: 'tslymane@com.com',
    phone: '601-293-7962',
  },
  {
    id: 16,
    firstName: 'Torrance',
    lastName: 'MacVaugh',
    email: 'tmacvaughf@rambler.ru',
    phone: '165-846-9048',
  },
  {
    id: 17,
    firstName: 'Reinaldo',
    lastName: 'Haslam',
    email: 'rhaslamg@digg.com',
    phone: '327-986-9960',
  },
  {
    id: 18,
    firstName: 'Shurwood',
    lastName: 'Petters',
    email: 'spettersh@youku.com',
    phone: '844-985-8744',
  },
  {
    id: 19,
    firstName: 'Brittani',
    lastName: 'Joanic',
    email: 'bjoanici@google.com.au',
    phone: '786-856-4736',
  },
  {
    id: 20,
    firstName: 'Paule',
    lastName: 'Dancey',
    email: 'pdanceyj@wisc.edu',
    phone: '337-940-2741',
  },
  {
    id: 21,
    firstName: 'Marietta',
    lastName: 'Yurikov',
    email: 'myurikovk@qq.com',
    phone: '751-658-8708',
  },
  {
    id: 22,
    firstName: 'Valenka',
    lastName: 'Pietrzyk',
    email: 'vpietrzykl@nifty.com',
    phone: '727-205-2145',
  },
  {
    id: 23,
    firstName: 'Percy',
    lastName: 'Ghidetti',
    email: 'pghidettim@cocolog-nifty.com',
    phone: '821-570-2852',
  },
  {
    id: 24,
    firstName: 'Flinn',
    lastName: 'Bowater',
    email: 'fbowatern@ox.ac.uk',
    phone: '577-109-3656',
  },
  {
    id: 25,
    firstName: 'Antonetta',
    lastName: 'Crandon',
    email: 'acrandono@phpbb.com',
    phone: '505-534-0282',
  },
  {
    id: 26,
    firstName: 'Drugi',
    lastName: 'Catonne',
    email: 'dcatonnep@bandcamp.com',
    phone: '662-418-9489',
  },
  {
    id: 27,
    firstName: 'Mela',
    lastName: 'Spadari',
    email: 'mspadariq@storify.com',
    phone: '998-532-4333',
  },
  {
    id: 28,
    firstName: 'Aland',
    lastName: 'Turfitt',
    email: 'aturfittr@weather.com',
    phone: '565-650-4405',
  },
  {
    id: 29,
    firstName: 'Augie',
    lastName: 'Grimwade',
    email: 'agrimwades@webs.com',
    phone: '406-483-0720',
  },
  {
    id: 30,
    firstName: 'Clayborn',
    lastName: 'Avramovitz',
    email: 'cavramovitzt@e-recht24.de',
    phone: '473-688-2175',
  },
  {
    id: 31,
    firstName: 'Dael',
    lastName: 'Kempston',
    email: 'dkempstonu@google.es',
    phone: '990-239-4617',
  },
  {
    id: 32,
    firstName: 'Rebeca',
    lastName: 'Haggie',
    email: 'rhaggiev@earthlink.net',
    phone: '729-337-9828',
  },
  {
    id: 33,
    firstName: 'Ninetta',
    lastName: 'Pyatt',
    email: 'npyattw@nytimes.com',
    phone: '514-646-3145',
  },
  {
    id: 34,
    firstName: 'Pippy',
    lastName: 'Trattles',
    email: 'ptrattlesx@squidoo.com',
    phone: '388-517-8936',
  },
  {
    id: 35,
    firstName: 'Waverly',
    lastName: 'Bunkle',
    email: 'wbunkley@hao123.com',
    phone: '212-948-9187',
  },
  {
    id: 36,
    firstName: 'Lorinda',
    lastName: 'Firby',
    email: 'lfirbyz@alibaba.com',
    phone: '170-245-4712',
  },
  {
    id: 37,
    firstName: 'Shermie',
    lastName: 'Belhomme',
    email: 'sbelhomme10@a8.net',
    phone: '856-116-5106',
  },
  {
    id: 38,
    firstName: 'Julina',
    lastName: 'La Croce',
    email: 'jlacroce11@nps.gov',
    phone: '163-780-6644',
  },
  {
    id: 39,
    firstName: 'Merill',
    lastName: 'Martellini',
    email: 'mmartellini12@toplist.cz',
    phone: '557-444-0147',
  },
  {
    id: 40,
    firstName: 'Candice',
    lastName: 'MacGiolla Pheadair',
    email: 'cmacgiollapheadair13@example.com',
    phone: '502-419-7819',
  },
  {
    id: 41,
    firstName: 'Josee',
    lastName: 'Verbrugge',
    email: 'jverbrugge14@wired.com',
    phone: '420-876-9080',
  },
  {
    id: 42,
    firstName: 'Hershel',
    lastName: 'McTrustrie',
    email: 'hmctrustrie15@about.me',
    phone: '274-945-6232',
  },
  {
    id: 43,
    firstName: 'Teodor',
    lastName: 'Grishagin',
    email: 'tgrishagin16@reuters.com',
    phone: '146-868-2320',
  },
  {
    id: 44,
    firstName: 'Karlis',
    lastName: 'Czajkowski',
    email: 'kczajkowski17@e-recht24.de',
    phone: '837-353-2582',
  },
  {
    id: 45,
    firstName: 'Ulrikaumeko',
    lastName: 'Chinn',
    email: 'uchinn18@simplemachines.org',
    phone: '231-785-4995',
  },
  {
    id: 46,
    firstName: 'Zacharie',
    lastName: 'Pitrollo',
    email: 'zpitrollo19@reverbnation.com',
    phone: '329-256-2430',
  },
  {
    id: 47,
    firstName: 'Tasha',
    lastName: 'Really',
    email: 'treally1a@google.com.br',
    phone: '169-364-0556',
  },
  {
    id: 48,
    firstName: 'Kessiah',
    lastName: 'Larkins',
    email: 'klarkins1b@disqus.com',
    phone: '601-812-8748',
  },
  {
    id: 49,
    firstName: 'Glory',
    lastName: 'Bontine',
    email: 'gbontine1c@is.gd',
    phone: '568-283-4743',
  },
  {
    id: 50,
    firstName: 'Fernande',
    lastName: 'Paullin',
    email: 'fpaullin1d@nydailynews.com',
    phone: '277-255-4486',
  },
  {
    id: 51,
    firstName: 'Fernandina',
    lastName: 'Estevez',
    email: 'festevez1e@berkeley.edu',
    phone: '895-513-5988',
  },
  {
    id: 52,
    firstName: 'Aldon',
    lastName: 'Colbrun',
    email: 'acolbrun1f@mapy.cz',
    phone: '401-713-6182',
  },
  {
    id: 53,
    firstName: 'Tandie',
    lastName: 'Caunce',
    email: 'tcaunce1g@narod.ru',
    phone: '100-147-9641',
  },
  {
    id: 54,
    firstName: 'Leland',
    lastName: 'Choldcroft',
    email: 'lcholdcroft1h@dell.com',
    phone: '589-453-5282',
  },
  {
    id: 55,
    firstName: 'Arnuad',
    lastName: 'Lacasa',
    email: 'alacasa1i@goodreads.com',
    phone: '703-906-5712',
  },
  {
    id: 56,
    firstName: 'Wolfgang',
    lastName: 'Le Merchant',
    email: 'wlemerchant1j@usda.gov',
    phone: '924-178-9315',
  },
  {
    id: 57,
    firstName: 'Michael',
    lastName: 'Chitson',
    email: 'mchitson1k@gravatar.com',
    phone: '661-457-6391',
  },
  {
    id: 58,
    firstName: 'Meier',
    lastName: 'Annwyl',
    email: 'mannwyl1l@umich.edu',
    phone: '532-240-1350',
  },
  {
    id: 59,
    firstName: 'Lester',
    lastName: 'Sains',
    email: 'lsains1m@about.com',
    phone: '206-197-6152',
  },
  {
    id: 60,
    firstName: 'Corrine',
    lastName: 'Nund',
    email: 'cnund1n@creativecommons.org',
    phone: '367-986-3406',
  },
  {
    id: 61,
    firstName: 'Nikolia',
    lastName: 'Presslie',
    email: 'npresslie1o@reddit.com',
    phone: '474-383-3508',
  },
  {
    id: 62,
    firstName: 'Cammy',
    lastName: 'Peachment',
    email: 'cpeachment1p@google.cn',
    phone: '706-595-2370',
  },
  {
    id: 63,
    firstName: 'Georgie',
    lastName: 'Gaitung',
    email: 'ggaitung1q@wikispaces.com',
    phone: '500-353-2912',
  },
  {
    id: 64,
    firstName: 'Peg',
    lastName: 'Goalby',
    email: 'pgoalby1r@arizona.edu',
    phone: '134-887-2831',
  },
  {
    id: 65,
    firstName: 'Leoine',
    lastName: 'Akeherst',
    email: 'lakeherst1s@samsung.com',
    phone: '892-252-6584',
  },
  {
    id: 66,
    firstName: 'Elsworth',
    lastName: 'Yesson',
    email: 'eyesson1t@cisco.com',
    phone: '704-946-4247',
  },
  {
    id: 67,
    firstName: 'Hasheem',
    lastName: 'Stigers',
    email: 'hstigers1u@netvibes.com',
    phone: '810-872-2676',
  },
  {
    id: 68,
    firstName: 'Ezri',
    lastName: 'Perryman',
    email: 'eperryman1v@discovery.com',
    phone: '357-282-1363',
  },
  {
    id: 69,
    firstName: 'Ruthe',
    lastName: 'Macey',
    email: 'rmacey1w@dyndns.org',
    phone: '337-812-5182',
  },
  {
    id: 70,
    firstName: 'Jareb',
    lastName: 'Ashpole',
    email: 'jashpole1x@spotify.com',
    phone: '109-869-4537',
  },
  {
    id: 71,
    firstName: 'Trescha',
    lastName: 'Godfray',
    email: 'tgodfray1y@ycombinator.com',
    phone: '429-656-8156',
  },
  {
    id: 72,
    firstName: 'Levi',
    lastName: 'Paragreen',
    email: 'lparagreen1z@goo.ne.jp',
    phone: '911-329-9400',
  },
  {
    id: 73,
    firstName: 'Greggory',
    lastName: 'Billett',
    email: 'gbillett20@youtube.com',
    phone: '878-687-8384',
  },
  {
    id: 74,
    firstName: 'Karlotte',
    lastName: 'Bruckenthal',
    email: 'kbruckenthal21@posterous.com',
    phone: '240-883-6857',
  },
  {
    id: 75,
    firstName: 'Zara',
    lastName: 'Tandy',
    email: 'ztandy22@parallels.com',
    phone: '189-389-9366',
  },
  {
    id: 76,
    firstName: 'Kermie',
    lastName: 'Schechter',
    email: 'kschechter23@sohu.com',
    phone: '826-590-4123',
  },
  {
    id: 77,
    firstName: 'Tobe',
    lastName: 'Windrus',
    email: 'twindrus24@webnode.com',
    phone: '886-198-5723',
  },
  {
    id: 78,
    firstName: 'Moore',
    lastName: 'Snelling',
    email: 'msnelling25@jigsy.com',
    phone: '731-142-6425',
  },
  {
    id: 79,
    firstName: 'Chrissy',
    lastName: 'Cobbing',
    email: 'ccobbing26@psu.edu',
    phone: '316-334-7322',
  },
  {
    id: 80,
    firstName: 'Hobey',
    lastName: 'McCreary',
    email: 'hmccreary27@comsenz.com',
    phone: '402-673-1489',
  },
  {
    id: 81,
    firstName: 'Theo',
    lastName: 'Diperaus',
    email: 'tdiperaus28@baidu.com',
    phone: '409-832-7347',
  },
  {
    id: 82,
    firstName: 'Somerset',
    lastName: 'Nelligan',
    email: 'snelligan29@dyndns.org',
    phone: '187-517-6599',
  },
  {
    id: 83,
    firstName: 'Monah',
    lastName: 'Wordesworth',
    email: 'mwordesworth2a@indiegogo.com',
    phone: '296-251-3453',
  },
  {
    id: 84,
    firstName: 'Hale',
    lastName: 'Beade',
    email: 'hbeade2b@mapquest.com',
    phone: '179-505-8651',
  },
  {
    id: 85,
    firstName: 'Andromache',
    lastName: 'Somerscales',
    email: 'asomerscales2c@samsung.com',
    phone: '522-583-7961',
  },
  {
    id: 86,
    firstName: 'Verina',
    lastName: 'Gillyett',
    email: 'vgillyett2d@yellowpages.com',
    phone: '276-539-7012',
  },
  {
    id: 87,
    firstName: 'Warner',
    lastName: 'Cotterrill',
    email: 'wcotterrill2e@mlb.com',
    phone: '206-582-5759',
  },
  {
    id: 88,
    firstName: 'Jammal',
    lastName: 'Von Welldun',
    email: 'jvonwelldun2f@stumbleupon.com',
    phone: '755-443-5607',
  },
  {
    id: 89,
    firstName: 'Tabina',
    lastName: 'Jozwicki',
    email: 'tjozwicki2g@wufoo.com',
    phone: '367-955-1647',
  },
  {
    id: 90,
    firstName: 'Mark',
    lastName: 'Radden',
    email: 'mradden2h@gnu.org',
    phone: '329-334-2903',
  },
  {
    id: 91,
    firstName: 'Leigha',
    lastName: 'Mountlow',
    email: 'lmountlow2i@theatlantic.com',
    phone: '751-720-7867',
  },
  {
    id: 92,
    firstName: 'Randee',
    lastName: 'Cranham',
    email: 'rcranham2j@telegraph.co.uk',
    phone: '674-331-9067',
  },
  {
    id: 93,
    firstName: 'Doretta',
    lastName: 'Frushard',
    email: 'dfrushard2k@admin.ch',
    phone: '952-841-0819',
  },
  {
    id: 94,
    firstName: 'Danielle',
    lastName: 'Eveleigh',
    email: 'develeigh2l@jigsy.com',
    phone: '139-509-4287',
  },
  {
    id: 95,
    firstName: 'Emmott',
    lastName: 'Stanyard',
    email: 'estanyard2m@unblog.fr',
    phone: '941-372-2576',
  },
  {
    id: 96,
    firstName: 'Tabby',
    lastName: 'Clamp',
    email: 'tclamp2n@oaic.gov.au',
    phone: '353-223-7366',
  },
  {
    id: 97,
    firstName: 'Otto',
    lastName: 'Wawer',
    email: 'owawer2o@arstechnica.com',
    phone: '106-219-4314',
  },
  {
    id: 98,
    firstName: 'Mei',
    lastName: 'Chapelhow',
    email: 'mchapelhow2p@chronoengine.com',
    phone: '816-579-9887',
  },
  {
    id: 99,
    firstName: 'Torr',
    lastName: 'Lamplough',
    email: 'tlamplough2q@zimbio.com',
    phone: '766-424-9311',
  },
  {
    id: 100,
    firstName: 'Grantley',
    lastName: 'Blethin',
    email: 'gblethin2r@homestead.com',
    phone: '701-327-9867',
  },
];

const renderData = function (data) {
  const html = data
    .map(
      (data) => `
      <tr>
        <td>${data.id}</td>
        <td>${data.firstName}</td>
        <td>${data.lastName}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
      </tr> 
    `
    )
    .join('');
  table.innerHTML = '';
  table.insertAdjacentHTML('beforeend', html);
};

renderData(data);

searchInput.addEventListener('input', (e) => {
  renderData(
    data.filter((user) => {
      const { value } = e.target;
      return (
        user.firstName.toLowerCase().includes(value) ||
        user.lastName.toLowerCase().includes(value) ||
        user.email.includes(value) ||
        user.phone.includes(value)
      );
    })
  );
});
