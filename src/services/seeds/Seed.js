import { Reset } from './Reset';

export const Seed = () => {
  Reset();

  // const currentUserId = '';
  // const posts = [];
  // const comments = [];
  // const likes = [];
  // const users = [];

  const date = Date.now();

  const currentUserId = 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90';

  const users = [
    {
      id: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userName: 'BTU',
      email: 'btu@gmail.com',
      password: '12345678',
      firstName: 'BTU',
      lastName: 'University',
      avatar:
        'https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.6435-9/118974653_1185472291837040_8177821905411797845_n.png?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFM4PpqHwAwf5QH94OAkWSNgMx3kTryjzWAzHeROvKPNc_7f8q39epNGYUveRxc-ZblMknN4YvwqO3c_Le2TR0t&_nc_ohc=DcNnWL05KywAX-6DAJk&_nc_ht=scontent.ftbs5-1.fna&oh=277dd7575cf9670133ac71d7eda0e235&oe=60ED4778',
      cover:
        'https://btu.edu.ge/media/1001285/2017/07/13/9dbcd750661ef4ad858d0a7c1cf2ce71.png',
      birth: '2016-01-01',
      bio: 'ბიზნესისა და ტექნოლოგიების უნივერსიტეტი განლაგებულია სილიკონ ველი თბილისის ტერიტორიაზე, თბილისის ცენტრში, ეკოლოგიურად სუფთა ადგილას. ',
    },
    {
      id: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
      userName: 'Bill',
      email: 'bill@gmail.com',
      password: '12345678',
      firstName: 'Bill',
      lastName: 'Gates',
      avatar:
        'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987',
      cover: 'https://betanews.com/wp-content/uploads/2021/01/microsoft-hq.jpg',
      birth: '1955-01-01',
      bio: 'William Henry Gates III is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft Corporation, along with his late childhood friend Paul Allen',
    },
    {
      id: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userName: 'Dilar',
      email: 'dilar@gmail.com',
      password: '12345678',
      firstName: 'Dilar',
      lastName: 'Gelenava',
      avatar: '/images/avatar.png',
      cover: '/images/cover.png',
      birth: '2001-08-17',
      bio: 'The program, which does not have equivalent in Georgian educational field. The student studies not only Informational Technologies but also the most efficient ways of using it in managerial processes. The program aims to: Give you the knowledge of the principles of computer engineering, computer systems construction and management methods, working principles of network devices; Develop competencies for designing and creating network connections and computer systems; Develop relevant skills to take part in network, system, programming project of informational technology consumer organizations and companies and plan new projects.',
    },
    {
      id: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
      userName: 'Keanu',
      email: 'keanu@gmail.com',
      password: '12345678',
      firstName: 'Keanu',
      lastName: 'Reevs',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg/1200px-Reuni%C3%A3o_com_o_ator_norte-americano_Keanu_Reeves_%2846806576944%29_%28cropped%29.jpg',
      cover:
        'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/06/Keanu-Reeves-as-Neo-in-The-Matrix.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5',
      birth: '1964-01-01',
      bio: 'Keanu Charles Reeves is a Canadian actor. Born in Beirut and raised in Toronto, Reeves began acting in theatre productions and in television films before making his feature film debut in Youngblood.',
    },
    {
      id: '88bfae85-80cd-4c13-984c-83354c64bec3',
      userName: 'Mark',
      email: 'mark@gmail.com',
      password: '12345678',
      firstName: 'Mark',
      lastName: 'Zuckerberg',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg',
      cover: '/images/cover.png',
      birth: '1984-01-01',
      bio: 'Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder.',
    },
    {
      id: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
      userName: 'Jeff',
      email: 'jeff@gmail.com',
      password: '12345678',
      firstName: 'Jeff',
      lastName: 'Bezos',
      avatar: 'https://i.insider.com/6093e1f434af8d001859bbf5?width=700',
      cover: '/images/cover.png',
      birth: '1964-01-01',
      bio: 'Jeffrey Preston Bezos is an American business magnate, media proprietor, and investor. Bezos is the founder and executive chairman of Amazon, having previously served as chairman, president and CEO of the company.',
    },
    {
      id: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      userName: 'Elon',
      email: 'elon@gmail.com',
      password: '12345678',
      firstName: 'Elon',
      lastName: 'Musk',
      avatar:
        'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg',
      cover: '/images/cover.png',
      birth: '1971-01-01',
      bio: 'Elon Reeve Musk FRS is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI. A centibillionaire, Musk is one of the richest people in the world.',
    },
  ];

  const posts = [
    {
      id: '15599acc-2b21-4852-bad8-7b525d88906a',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      description:
        'უნივერსიტეტის ინფრასტრუქტურა მზად არის მიიღოს 5000 სტუდენტი, სასწავლო, სამეცნიერო და კვლევითი საქმიანობისთვის.  უნივერსიტეტის ინფრასტრუქტურა ადაპტირებულია შეზღუდული შესაძლებლობების მქონე პირთა საჭიროებებთან.',
      imageUrl:
        'https://btu.edu.ge/media/1001285/2017/07/13/9dbcd750661ef4ad858d0a7c1cf2ce71.png',
      videoUrl: '',
      youtubeUrl: '',
      facebookUrl: '',
      date: date,
    },
    {
      id: 'ced388b4-5e00-4abf-ba40-494fc4b5a660',
      userId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      description:
        'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
      imageUrl:
        'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      videoUrl: '',
      youtubeUrl: '',
      facebookUrl: '',
      date: date,
    },
    {
      id: '75b38e00-a779-4165-b0bd-b5642fd49a1d',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
      description:
        'Windows 11 is an upcoming major version of the Windows NT operating system developed by Microsoft. Announced on June 24, 2021, with an expected release in late 2021, Windows 11 is the successor to Windows 10, released in 2015.',
      imageUrl:
        'https://46c4ts1tskv22sdav81j9c69-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/2/2021/06/WIN_Start_GenZ_Light_16x10_en-US-1024x640.png',
      videoUrl: '',
      youtubeUrl: '',
      facebookUrl: '',
      date: date,
    },
    {
      id: '9f833257-e5dc-460f-b6d3-b0103e463a93',
      userId: '88bfae85-80cd-4c13-984c-83354c64bec3',
      description: "Did you like Facebook's new design? 😉",
      imageUrl: '',
      videoUrl: '',
      youtubeUrl: '',
      facebookUrl: 'https://fb.watch/6EnVbKAo_e/',
      date: date,
    },
    {
      id: '3faa0198-3717-4021-b540-53e5f574ca27',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
      description: 'John Wick 3 Parabellum',
      imageUrl:
        'https://p4.wallpaperbetter.com/wallpaper/621/286/348/keanu-reeves-keanu-reeves-parabellum-john-wick-john-wick-hd-wallpaper-preview.jpg',
      videoUrl: '',
      youtubeUrl: '',
      facebookUrl: '',
      date: date,
    },
    {
      id: '8842dd90-752d-45ea-b164-19a4d9066671',
      userId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      description:
        '“შურისმაძიებლების” საგის მეოთხე დასკვნითი ნაწილი ოცდაორი ურთიერთდაკავშირებული ფილმის კულმინაცია გახდება, რომელიც ამ ეპიკური მოგზაურობის გარდამტეხ მომენტს წარმოგვიდგენს. ჩვენი საყვარელი გმირები აცნობიერებენ, თუ რამდენად მყიფეა ეს რეალობა და ჯერ კიდევ რამხელა მსხვერპლის გაღებაა საჭირო, რათა დაიცვან ის. შურისმაძიებელების და გალაქტიკის მცველების გადარჩენილთა ჯგუფი ძალებს კაპიტან მარველთნ აერთიანებენ, რათა ომის ბოლო ეტაპზე შეერკინონ თანოს, რომელიც ყოვლისშემძლე უსასრულობის ხელთათმანს ფლობს. გმირებს და თანოს შორის გადამწყვეტი ბრძოლა ახლოვდება, რომელიც ერთხელ და სამუდამოდ განსაზღვრავს არა მარტო დედამიწის, არამედ მთელი სამყაროს ბედს…',
      imageUrl: '',
      videoUrl:
        'https://trailers.imovies.cc/movie_files7/5c0a768dd2e51.mp4?md5=PSqE5yNmc5lY5IspR62v6A&expires=1625946280&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTQ6IjIxMi41OC4xMTkuMjEyIjtzOjEwOiJ1c2VyX2FnZW50IjtzOjExNToiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkxLjAuNDQ3Mi4xMjQgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==',
      youtubeUrl: '',
      facebookUrl: '',
      date: date,
    },
    {
      id: '7190ad0f-5aa2-49ed-8d7b-437f41aaded8',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      description:
        "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, as well as other related products and services.",
      imageUrl:
        'https://tesla-cdn.thron.com/delivery/public/image/tesla/195458a0-ff67-488c-b972-14d23d2c42fb/bvlatuR/std/1200x630/ms-homepage-social',
      videoUrl: '',
      youtubeUrl: '',
      facebookUrl: '',
      date: date,
    },
    {
      id: '753c06bc-b14d-4f75-9e1c-1ad0a86f0321',
      userId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
      description:
        'Blue Origin, LLC is an American privately funded aerospace manufacturer and sub-orbital spaceflight services company headquartered in Kent, Washington.',
      imageUrl:
        'https://orbitaltoday.com/wp-content/uploads/2021/03/Blue-Origin-Rocket.jpg',
      videoUrl: '',
      youtubeUrl: '',
      facebookUrl: '',
      date: date,
    },
    {
      id: 'f68f7eb9-5f18-4bd4-8f6f-e6072f5d4345',
      userId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      description:
        'Rick Astley - Never Gonna Give You Up (Official Music Video)',
      imageUrl: '',
      videoUrl: '',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      facebookUrl: '',
      date: date,
    },
    {
      id: 'b78cce33-13e0-4559-b5be-2f357b99bfdb',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      description:
        'The program, which does not have equivalent in Georgian educational field. The student studies not only Informational Technologies but also the most efficient ways of using it in managerial processes. The program aims to: Give you the knowledge of the principles of computer engineering, computer systems construction and management methods, working principles of network devices; Develop competencies for designing and creating network connections and computer systems; Develop relevant skills to take part in network, system, programming project of informational technology consumer organizations and companies and plan new projects.',
      imageUrl: '',
      videoUrl: '',
      youtubeUrl: '',
      facebookUrl: '',
      date: date,
    },
    {
      id: 'd2f977ff-845d-40b9-b3a2-83dc0720374f',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      description: "I Don't Ever Give Up",
      imageUrl: '',
      videoUrl: '',
      youtubeUrl: 'https://www.youtube.com/watch?v=43TmnIaL3n4',
      facebookUrl: '',
      date: date,
    },
    {
      id: '2d5d5380-59e6-41ea-8aa3-ba91ff81f128',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      description: 'პროგრამით დაინტერესებულებმა გაიარეთ წინასწარი რეგისტრაცია',
      imageUrl: '',
      videoUrl: '',
      youtubeUrl: '',
      facebookUrl: 'https://fb.watch/6EoLfghnYb/',
      date: date,
    },
  ];

  const comments = [
    {
      id: 'b103f525-c189-4a7c-b104-582b70f06628',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      postId: '15599acc-2b21-4852-bad8-7b525d88906a',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      text: '  ბიზნესისა და ტექნოლოგიების უნივერსიტეტი განლაგებულია სილიკონ ველი თბილისის ტერიტორიაზე, თბილისის ცენტრში, ეკოლოგიურად სუფთა ადგილას.',
      date: date,
    },
    {
      id: 'dd4aa398-aaa0-4709-9726-a653a382243e',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
      postId: '75b38e00-a779-4165-b0bd-b5642fd49a1d',
      postUserId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
      text: 'Initial release date: 2021',
      date: date,
    },
    {
      id: '0d418ee1-9af6-4c1f-bfac-2103c22a4e07',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      postId: '7190ad0f-5aa2-49ed-8d7b-437f41aaded8',
      postUserId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      text: 'Electric car company',
      date: date,
    },
    {
      id: 'b836a9b3-b9e4-4c49-a5d0-553361f3451a',
      userId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      postId: '2d5d5380-59e6-41ea-8aa3-ba91ff81f128',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      text: 'უნივერსიტეტის ინფრასტრუქტურა მზად არის მიიღოს 5000 სტუდენტი, სასწავლო, სამეცნიერო და კვლევითი საქმიანობისთვის.',
      date: date,
    },
    {
      id: 'b9651f9a-6fd9-4f5b-aa07-fb68be94904e',
      userId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      postId: '15599acc-2b21-4852-bad8-7b525d88906a',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      text: 'უნივერსიტეტის ინფრასტრუქტურა მზად არის მიიღოს 5000 სტუდენტი, სასწავლო, სამეცნიერო და კვლევითი საქმიანობისთვის.',
      date: date,
    },
    {
      id: '07d371f4-6fad-4620-b97e-b4ae4305cd46',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      postId: '2d5d5380-59e6-41ea-8aa3-ba91ff81f128',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      text: 'უნივერსიტეტის ინფრასტრუქტურა ადაპტირებულია შეზღუდული შესაძლებლობების მქონე პირთა საჭიროებებთან.',
      date: date,
    },
    {
      id: '9c167acc-a52d-4e23-96e4-5338a3ba00d6',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      postId: '15599acc-2b21-4852-bad8-7b525d88906a',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      text: 'უნივერსიტეტის ინფრასტრუქტურა ადაპტირებულია შეზღუდული შესაძლებლობების მქონე პირთა საჭიროებებთან.',
      date: date,
    },
    {
      id: '38e3f1ea-a3b3-4cea-9b8d-511f7feb1a74',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
      postId: 'b78cce33-13e0-4559-b5be-2f357b99bfdb',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      text: 'ბიზნესისა და ტექნოლოგიების უნივერსიტეტი განლაგებულია სილიკონ ველი თბილისის ტერიტორიაზე, თბილისის ცენტრში, ეკოლოგიურად სუფთა ადგილას.',
      date: date,
    },
    {
      id: '81c45f44-486e-47b6-94e7-fc8a14e05fb0',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
      postId: 'f68f7eb9-5f18-4bd4-8f6f-e6072f5d4345',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      text: "Rick Astley's official music video for “Never Gonna Give You Up” ",
      date: date,
    },
    {
      id: 'e86fce12-320e-4d06-8e55-4cb95d018a8f',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
      postId: '2d5d5380-59e6-41ea-8aa3-ba91ff81f128',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      text: 'ბიზნესისა და ტექნოლოგიების უნივერსიტეტი განლაგებულია სილიკონ ველი თბილისის ტერიტორიაზე, თბილისის ცენტრში, ეკოლოგიურად სუფთა ადგილას.',
      date: date,
    },
    {
      id: 'b1739e7f-0f23-4789-b238-165aa3806e33',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      postId: '2d5d5380-59e6-41ea-8aa3-ba91ff81f128',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      text: 'უნივერსიტეტის ტერიტორიაზე მდებარეობს ინოვაციური სტუდენტური სამუშაო სივრცე',
      date: date,
    },
  ];

  const likes = [
    {
      id: '07d37fe0-8b73-4bed-b474-c98bd32576a1',
      isUp: true,
      postId: '15599acc-2b21-4852-bad8-7b525d88906a',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
    },
    {
      id: 'c25164e9-89d0-4415-9a2f-a1a0fba6e698',
      isUp: true,
      postId: 'ced388b4-5e00-4abf-ba40-494fc4b5a660',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
    },
    {
      id: 'cc9e5672-bffc-41db-9f1e-3ea29c7cdeb8',
      isUp: true,
      postId: '9f833257-e5dc-460f-b6d3-b0103e463a93',
      postUserId: '88bfae85-80cd-4c13-984c-83354c64bec3',
      userId: '88bfae85-80cd-4c13-984c-83354c64bec3',
    },
    {
      id: '816c5f7f-e950-4481-a4e0-58f5cfdf3dbd',
      isUp: true,
      postId: '3faa0198-3717-4021-b540-53e5f574ca27',
      postUserId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
    },
    {
      id: 'b04e914c-4ed1-4a5b-b6c5-4c7f6a5ec343',
      isUp: true,
      postId: '8842dd90-752d-45ea-b164-19a4d9066671',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
    },
    {
      id: 'ca4e1f59-a9e4-4fd0-91bd-5e2dc66be4bc',
      isUp: true,
      postId: '3faa0198-3717-4021-b540-53e5f574ca27',
      postUserId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
      userId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
    },
    {
      id: '6a45c48b-6a91-4c3d-bdeb-fefd842ad604',
      isUp: true,
      postId: '9f833257-e5dc-460f-b6d3-b0103e463a93',
      postUserId: '88bfae85-80cd-4c13-984c-83354c64bec3',
      userId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
    },
    {
      id: '5995ffaa-fb17-4b9b-bf42-7320c046b56f',
      isUp: true,
      postId: '75b38e00-a779-4165-b0bd-b5642fd49a1d',
      postUserId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
      userId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
    },
    {
      id: 'f46623f1-1aa5-45b3-b760-101373656142',
      isUp: true,
      postId: 'ced388b4-5e00-4abf-ba40-494fc4b5a660',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
    },
    {
      id: 'c756ccbd-9cec-47c9-b8c0-84b94c9603f1',
      isUp: true,
      postId: '15599acc-2b21-4852-bad8-7b525d88906a',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
    },
    {
      id: 'e1cdff39-3b6c-41e1-a036-14e4260a48e9',
      isUp: true,
      postId: '8842dd90-752d-45ea-b164-19a4d9066671',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
    },
    {
      id: '45aa29e8-0daf-4f82-8749-13d15586e966',
      isUp: true,
      postId: '753c06bc-b14d-4f75-9e1c-1ad0a86f0321',
      postUserId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
      userId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
    },
    {
      id: 'e49daa65-92b2-4ff5-8cf1-6f33637c5191',
      isUp: false,
      postId: '7190ad0f-5aa2-49ed-8d7b-437f41aaded8',
      postUserId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      userId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
    },
    {
      id: '2a66c4e2-bc2d-4416-9419-6a468f5ec67c',
      isUp: true,
      postId: 'b78cce33-13e0-4559-b5be-2f357b99bfdb',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
    },
    {
      id: 'e477db0c-623f-44ee-a61e-c0faf25f3584',
      isUp: true,
      postId: 'f68f7eb9-5f18-4bd4-8f6f-e6072f5d4345',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
    },
    {
      id: 'd5a2c985-0602-4aef-960d-f0ec3bd92593',
      isUp: true,
      postId: '7190ad0f-5aa2-49ed-8d7b-437f41aaded8',
      postUserId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
    },
    {
      id: 'b894c446-c7c2-4349-ba10-5c4eb8c1ba0c',
      isUp: true,
      postId: '8842dd90-752d-45ea-b164-19a4d9066671',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
    },
    {
      id: '10ca2f6d-cdff-457c-9ece-d73bff741a73',
      isUp: true,
      postId: '3faa0198-3717-4021-b540-53e5f574ca27',
      postUserId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
    },
    {
      id: '0500a7e0-c53e-4010-a02c-750107699955',
      isUp: true,
      postId: '9f833257-e5dc-460f-b6d3-b0103e463a93',
      postUserId: '88bfae85-80cd-4c13-984c-83354c64bec3',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
    },
    {
      id: 'a1b55f62-1354-4492-baf5-1dad342f7b30',
      isUp: true,
      postId: '75b38e00-a779-4165-b0bd-b5642fd49a1d',
      postUserId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
    },
    {
      id: 'cee5dfdd-62c3-4f7f-a234-30e98e13c652',
      isUp: true,
      postId: 'ced388b4-5e00-4abf-ba40-494fc4b5a660',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
    },
    {
      id: '4d03e475-5a03-4cb4-bc6f-47407fc2e569',
      isUp: true,
      postId: 'd2f977ff-845d-40b9-b3a2-83dc0720374f',
      postUserId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
    },
    {
      id: 'ce6553b9-f1c1-4ffe-b559-4a1df30a4dcc',
      isUp: false,
      postId: '753c06bc-b14d-4f75-9e1c-1ad0a86f0321',
      postUserId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
    },
    {
      id: '7f3e3757-0b2f-4f97-a8c8-c9b850ee4f2a',
      isUp: true,
      postId: '7190ad0f-5aa2-49ed-8d7b-437f41aaded8',
      postUserId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
    },
    {
      id: '851e8bb7-5b61-4477-be6f-ec4a45cb66b5',
      isUp: true,
      postId: '8842dd90-752d-45ea-b164-19a4d9066671',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
    },
    {
      id: '926914b2-6579-437d-80a0-eaa88d31438e',
      isUp: true,
      postId: '3faa0198-3717-4021-b540-53e5f574ca27',
      postUserId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
    },
    {
      id: 'c7389baf-b296-4373-87e7-6372d32da8d4',
      isUp: true,
      postId: '9f833257-e5dc-460f-b6d3-b0103e463a93',
      postUserId: '88bfae85-80cd-4c13-984c-83354c64bec3',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
    },
    {
      id: '05fccf3b-04ea-46c5-8f11-422f8e29f0b4',
      isUp: true,
      postId: '75b38e00-a779-4165-b0bd-b5642fd49a1d',
      postUserId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
    },
    {
      id: '98d37cf0-8149-4e7c-a51e-5b962b7ffff9',
      isUp: true,
      postId: 'ced388b4-5e00-4abf-ba40-494fc4b5a660',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
    },
    {
      id: '1300a14e-0ee8-4a07-b3d8-0dfc2c0a1851',
      isUp: true,
      postId: '15599acc-2b21-4852-bad8-7b525d88906a',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
    },
    {
      id: '2df4bc99-6249-4222-b638-f57439f1f999',
      isUp: true,
      postId: 'f68f7eb9-5f18-4bd4-8f6f-e6072f5d4345',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
    },
    {
      id: 'd3523469-a744-44a3-94a8-2da3810c36de',
      isUp: true,
      postId: '2d5d5380-59e6-41ea-8aa3-ba91ff81f128',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
    },
    {
      id: 'f117fa15-af0c-4d6e-b39e-9c4d08a5646d',
      isUp: true,
      postId: 'd2f977ff-845d-40b9-b3a2-83dc0720374f',
      postUserId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
    },
    {
      id: 'f0117f7e-0281-4cda-b3f1-9516ec414e6a',
      isUp: true,
      postId: '753c06bc-b14d-4f75-9e1c-1ad0a86f0321',
      postUserId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
      userId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
    },
    {
      id: 'a3b2f522-d951-41fa-9751-56d1093d1b37',
      isUp: true,
      postId: '2d5d5380-59e6-41ea-8aa3-ba91ff81f128',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
    },
    {
      id: 'e0300466-7424-4f08-89df-10333f5f6ad6',
      isUp: true,
      postId: 'd2f977ff-845d-40b9-b3a2-83dc0720374f',
      postUserId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
    },
    {
      id: '81ead9a8-a58b-492b-9ddd-3d558b275e74',
      isUp: true,
      postId: 'b78cce33-13e0-4559-b5be-2f357b99bfdb',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
    },
    {
      id: 'f7bb0408-a007-48a7-914e-7bff3f210f08',
      isUp: true,
      postId: 'f68f7eb9-5f18-4bd4-8f6f-e6072f5d4345',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
    },
    {
      id: 'deff93de-1ec1-433f-9d47-3d76b6b484bb',
      isUp: true,
      postId: '753c06bc-b14d-4f75-9e1c-1ad0a86f0321',
      postUserId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
    },
    {
      id: '399e2d2f-9797-46bb-8102-80fd1e9f4c6e',
      isUp: true,
      postId: '7190ad0f-5aa2-49ed-8d7b-437f41aaded8',
      postUserId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
    },
    {
      id: 'c04392fc-b0be-4350-95d7-5fc10da073f0',
      isUp: true,
      postId: '8842dd90-752d-45ea-b164-19a4d9066671',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
    },
    {
      id: '735c7611-71ea-4fad-ad8e-b5e41ea3ddb2',
      isUp: true,
      postId: 'ced388b4-5e00-4abf-ba40-494fc4b5a660',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
    },
    {
      id: '6486dcfb-2382-4408-9486-5de089806565',
      isUp: true,
      postId: '15599acc-2b21-4852-bad8-7b525d88906a',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
    },
    {
      id: '156ffd6e-80fb-4294-aaf7-f1137900e06f',
      isUp: true,
      postId: '2d5d5380-59e6-41ea-8aa3-ba91ff81f128',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: '88bfae85-80cd-4c13-984c-83354c64bec3',
    },
    {
      id: '956729ee-c869-4770-a2be-4c04d83436be',
      isUp: true,
      postId: 'd2f977ff-845d-40b9-b3a2-83dc0720374f',
      postUserId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      userId: '88bfae85-80cd-4c13-984c-83354c64bec3',
    },
    {
      id: '122b7e98-c83b-4d57-bec2-7d0f1d224b94',
      isUp: false,
      postId: '753c06bc-b14d-4f75-9e1c-1ad0a86f0321',
      postUserId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
      userId: '88bfae85-80cd-4c13-984c-83354c64bec3',
    },
    {
      id: '5dc2fa94-2de7-4ea5-8448-df30179101d3',
      isUp: true,
      postId: '7190ad0f-5aa2-49ed-8d7b-437f41aaded8',
      postUserId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      userId: '88bfae85-80cd-4c13-984c-83354c64bec3',
    },
    {
      id: '58c5b2b9-ab54-42bc-bca9-f40917fd362d',
      isUp: false,
      postId: '8842dd90-752d-45ea-b164-19a4d9066671',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: '88bfae85-80cd-4c13-984c-83354c64bec3',
    },
    {
      id: '49f8eacd-65a5-4db9-bbb6-acf31b9a8b97',
      isUp: false,
      postId: '3faa0198-3717-4021-b540-53e5f574ca27',
      postUserId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
      userId: '88bfae85-80cd-4c13-984c-83354c64bec3',
    },
    {
      id: 'd1ebffd8-7a69-4400-80cb-065c4028c7e7',
      isUp: false,
      postId: 'ced388b4-5e00-4abf-ba40-494fc4b5a660',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: '88bfae85-80cd-4c13-984c-83354c64bec3',
    },
    {
      id: '8f4db07c-451b-43ed-b1a1-498f406b510d',
      isUp: false,
      postId: '15599acc-2b21-4852-bad8-7b525d88906a',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: '88bfae85-80cd-4c13-984c-83354c64bec3',
    },
    {
      id: '69f86485-3b00-4009-96e6-9ba7d3c87ec8',
      isUp: true,
      postId: '75b38e00-a779-4165-b0bd-b5642fd49a1d',
      postUserId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
      userId: '88bfae85-80cd-4c13-984c-83354c64bec3',
    },
    {
      id: '53659cd2-dcb1-44c4-bf15-9c7d2d0fec7b',
      isUp: true,
      postId: 'f68f7eb9-5f18-4bd4-8f6f-e6072f5d4345',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: '88bfae85-80cd-4c13-984c-83354c64bec3',
    },
    {
      id: '262fb46a-8269-4b59-9e01-a0fa66dfdb28',
      isUp: false,
      postId: '2d5d5380-59e6-41ea-8aa3-ba91ff81f128',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
    },
    {
      id: 'c365aabf-7e84-4c04-a23c-cf6bacc0bbd6',
      isUp: false,
      postId: 'd2f977ff-845d-40b9-b3a2-83dc0720374f',
      postUserId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
    },
    {
      id: 'cc3ad070-6d47-4974-9aab-77c0d25e162a',
      isUp: false,
      postId: 'b78cce33-13e0-4559-b5be-2f357b99bfdb',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
    },
    {
      id: '33c1cb1e-898a-4760-b874-443d58d91f03',
      isUp: false,
      postId: 'f68f7eb9-5f18-4bd4-8f6f-e6072f5d4345',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
    },
    {
      id: '2a1300c4-7642-421a-9db4-37b6d7e2eed5',
      isUp: true,
      postId: '753c06bc-b14d-4f75-9e1c-1ad0a86f0321',
      postUserId: 'd722d4a8-9f52-4d27-9fb4-e808c419088a',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
    },
    {
      id: 'ceb6fac2-a616-4feb-8d02-aff974456a85',
      isUp: true,
      postId: '7190ad0f-5aa2-49ed-8d7b-437f41aaded8',
      postUserId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
    },
    {
      id: '8cd3164e-b9bf-4bda-9fa4-5cb5e24c8b4f',
      isUp: false,
      postId: '8842dd90-752d-45ea-b164-19a4d9066671',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
    },
    {
      id: '100f890c-223f-45bf-ade0-4582a6a5c31d',
      isUp: false,
      postId: '3faa0198-3717-4021-b540-53e5f574ca27',
      postUserId: 'b7ac9261-d1f1-4ff5-a69b-dc5033b1d4e4',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
    },
    {
      id: '705a45f9-f83a-47a6-b106-a6c433692c68',
      isUp: false,
      postId: '9f833257-e5dc-460f-b6d3-b0103e463a93',
      postUserId: '88bfae85-80cd-4c13-984c-83354c64bec3',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
    },
    {
      id: 'e1401938-0505-4972-a858-39fef6b5b039',
      isUp: false,
      postId: '75b38e00-a779-4165-b0bd-b5642fd49a1d',
      postUserId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
    },
    {
      id: '96768ae5-7d4f-4cf7-b4a7-fa24a1b88e76',
      isUp: false,
      postId: 'ced388b4-5e00-4abf-ba40-494fc4b5a660',
      postUserId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
    },
    {
      id: '082531da-2970-4e24-afd0-72274b87cbe8',
      isUp: false,
      postId: '15599acc-2b21-4852-bad8-7b525d88906a',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: '0a9f3728-9c43-4e4e-ac10-d606ab344524',
    },
    {
      id: 'b3d9c060-8f72-4520-a49d-aadf189e5de9',
      isUp: true,
      postId: '15599acc-2b21-4852-bad8-7b525d88906a',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: 'a48c0f37-b5f5-4c16-8bc8-ce683ae18f90',
    },
    {
      id: 'ae5248b1-e995-436d-aa05-c84c456f3889',
      isUp: true,
      postId: '2d5d5380-59e6-41ea-8aa3-ba91ff81f128',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
    },
    {
      id: 'fad7162d-78f2-4076-b650-945705d27be8',
      isUp: true,
      postId: 'b78cce33-13e0-4559-b5be-2f357b99bfdb',
      postUserId: 'efb65fc3-f150-4c8c-965a-cf2bafd841c9',
      userId: '8a554ba9-1f2a-4822-a716-53df0f64405b',
    },
  ];

  localStorage.setItem('currentUserId', currentUserId);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('posts', JSON.stringify(posts));
  localStorage.setItem('comments', JSON.stringify(comments));
  localStorage.setItem('likes', JSON.stringify(likes));
};
