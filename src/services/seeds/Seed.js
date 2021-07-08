import { Reset } from './Reset';

export const Seed = () => {
  Reset();
  const currentUserId = '47c724ec-b451-4abd-bdda-ed9911997b51';
  const users = [
    {
      id: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      userName: 'BTU',
      email: 'btu@btu.edu.ge',
      password: '12345678',
      firstName: 'BTU',
      lastName: 'უნივერსიტეტი',
      avatar:
        'https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.6435-9/118974653_1185472291837040_8177821905411797845_n.png?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFM4PpqHwAwf5QH94OAkWSNgMx3kTryjzWAzHeROvKPNc_7f8q39epNGYUveRxc-ZblMknN4YvwqO3c_Le2TR0t&_nc_ohc=DcNnWL05KywAX-6DAJk&tn=sgygeGvy_0UhmlzK&_nc_ht=scontent.ftbs5-1.fna&oh=4cf0eb7f0ee82279327215d249cb5bf4&oe=60ED4778',
      cover:
        'https://btu.edu.ge/media/1001285/2019/04/19/ba036d228858d76fb89189853a5503bd.jpg',
      birth: '2016-01-01',
      bio: 'ბიზნესისა და ტექნოლოგიების უნივერსიტეტი განლაგებულია სილიკონ ველი თბილისის ტერიტორიაზე, თბილისის ცენტრში, ეკოლოგიურად სუფთა ადგილას.',
    },
    {
      id: '47c724ec-b451-4abd-bdda-ed9911997b51',
      userName: 'Dilar',
      email: 'dilar@btu.edu.ge',
      password: '12345678',
      firstName: 'Dilar',
      lastName: 'Gelenava',
      avatar:
        'https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.6435-9/122174109_178370813883145_8887753915068651092_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGzlaDhSvFVIO9KZtubzbm9osEa2p_GR3CiwRran8ZHcJFM8at-bl95foCEZ7zXtO5jynqKHjsLKngQA5b4BXLP&_nc_ohc=doKtpU65j-MAX-Cda-p&_nc_ht=scontent.ftbs5-1.fna&oh=dc69fd7ed37dece1e68568d4cf796418&oe=60EBBE05',
      cover:
        'https://btu.edu.ge/media/1001285/2021/01/15/a438b2fe69a9dc930924aef72e1d7b1b.jpg',
      birth: '2001-08-17',
      bio: 'The program, which does not have equivalent in Georgian educational field. The student studies not only Informational Technologies but also the most efficient ways of using it in managerial processes. The program aims to: Give you the knowledge of the principles of computer engineering, computer systems construction and management methods, working principles of network devices; Develop competencies for designing and creating network connections and computer systems; Develop relevant skills to take part in network, system, programming project of informational technology consumer organizations and companies and plan new projects.',
    },
  ];
  const posts = [
    {
      id: '2002c277-b7b9-4897-8805-3ecd9ae3192b',
      userId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      description:
        'უნივერსიტეტის ინფრასტრუქტურა მზად არის მიიღოს 5000 სტუდენტი, სასწავლო, სამეცნიერო და კვლევითი საქმიანობისთვის.  უნივერსიტეტის ინფრასტრუქტურა ადაპტირებულია შეზღუდული შესაძლებლობების მქონე პირთა საჭიროებებთან.',
      imageUrl:
        'https://btu.edu.ge/media/1001285/2017/07/13/9dbcd750661ef4ad858d0a7c1cf2ce71.png',
      videoUrl: '',
      youtubeUrl: '',
      date: 1625774742363,
    },
    {
      id: '3a1050ed-9b3e-40b9-8c4b-7aba34906079',
      userId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      description:
        'უნივერსიტეტის ინფრასტრუქტურა მზად არის მიიღოს 5000 სტუდენტი, სასწავლო, სამეცნიერო და კვლევითი საქმიანობისთვის.  უნივერსიტეტის ინფრასტრუქტურა ადაპტირებულია შეზღუდული შესაძლებლობების მქონე პირთა საჭიროებებთან.',
      imageUrl:
        'https://btu.edu.ge/media/1001285/2019/02/11/e9cf989034ebe8c3ecb1f0ede59d12fd.jpg',
      videoUrl: '',
      youtubeUrl: '',
      date: 1625775273455,
    },
    {
      id: 'f919109c-e555-40ef-a947-8cd0c741ac03',
      userId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      description:
        'ბიზნესისა და ტექნოლოგიების უნივერსიტეტი განლაგებულია სილიკონ ველი თბილისის ტერიტორიაზე, თბილისის ცენტრში, ეკოლოგიურად სუფთა ადგილას.',
      imageUrl:
        'https://btu.edu.ge/media/1001285/2019/02/11/a13528cfb5963a6e89f60fc6cb60bda1.jpg',
      videoUrl: '',
      youtubeUrl: '',
      date: 1625775315724,
    },
    {
      id: '47697fbe-e5b2-4609-80dd-357c6eb1dfa8',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      description:
        'ბიზნესისა და ტექნოლოგიების უნივერსიტეტი განლაგებულია სილიკონ ველი თბილისის ტერიტორიაზე, თბილისის ცენტრში, ეკოლოგიურად სუფთა ადგილას.',
      imageUrl:
        'https://btu.edu.ge/media/1001285/2017/09/26/312f1ba2a72318edaaa995a67835fad5.jpg',
      videoUrl: '',
      youtubeUrl: '',
      date: 1625775488267,
    },
    {
      id: '43c4477c-a871-4eb7-b131-742b210574f6',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      description:
        'Rick Astley - Never Gonna Give You Up (Official Music Video)',
      imageUrl: '',
      videoUrl: '',
      youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      date: 1625775594220,
    },
    {
      id: '212fbb5d-630c-48ed-a743-f26140c3960b',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      description:
        'ერთი ჩვეულებრივი ბიჭის მორტის და მისი ბაბუის რიკის თავგადასავალი, ბაბუა ლოთია, მაგრამ ამასთანავე გენიალური გამომგონებელიცაა.',
      imageUrl: '',
      videoUrl:
        'https://trailers.imovies.cc/movie_files2/5d9c5b8e53094.mp4?md5=cakqq4rrpbATxHj6sKn0MQ&expires=1625862205&data=YTozOntzOjc6InVzZXJfaXAiO3M6MTQ6IjIxMi41OC4xMTkuMjEyIjtzOjEwOiJ1c2VyX2FnZW50IjtzOjExNToiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzkxLjAuNDQ3Mi4xMjQgU2FmYXJpLzUzNy4zNiI7czo3OiJyZWZlcmVyIjtzOjIzOiJodHRwczovL3d3dy5pbW92aWVzLmNjLyI7fQ==',
      youtubeUrl: '',
      date: 1625775840939,
    },
    {
      id: 'c29f759d-9c80-4fb8-8638-05f517d361de',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      description:
        'The program, which does not have equivalent in Georgian educational field. The student studies not only Informational Technologies but also the most efficient ways of using it in managerial processes. The program aims to: Give you the knowledge of the principles of computer engineering, computer systems construction and management methods, working principles of network devices; Develop competencies for designing and creating network connections and computer systems; Develop relevant skills to take part in network, system, programming project of informational technology consumer organizations and companies and plan new projects.',
      imageUrl: '',
      videoUrl: '',
      youtubeUrl: '',
      date: 1625775948051,
    },
  ];
  const comments = [
    {
      id: '15ef6301-466c-45f8-a257-d7c1000584ff',
      userId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      postId: '2002c277-b7b9-4897-8805-3ecd9ae3192b',
      postUserId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      text: 'ბიზნესისა და ტექნოლოგიების უნივერსიტეტი განლაგებულია სილიკონ ველი თბილისის ტერიტორიაზე',
      date: 1625774761694,
    },
    {
      id: '0afab53f-b382-43d2-a177-18b2b7dd9d4e',
      userId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      postId: '2002c277-b7b9-4897-8805-3ecd9ae3192b',
      postUserId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      text: 'უნივერსიტეტის ინფრასტრუქტურა ადაპტირებულია შეზღუდული შესაძლებლობების მქონე პირთა საჭიროებებთან.',
      date: 1625775330360,
    },
    {
      id: '9def1b30-b3b3-4b5c-91ab-02a25c9ca66d',
      userId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      postId: '3a1050ed-9b3e-40b9-8c4b-7aba34906079',
      postUserId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      text: 'უნივერსიტეტის ინფრასტრუქტურა ადაპტირებულია შეზღუდული შესაძლებლობების მქონე პირთა საჭიროებებთან.',
      date: 1625775334621,
    },
    {
      id: 'd92d611a-dcac-4a34-a5f9-b0c9490d3b2e',
      userId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      postId: 'f919109c-e555-40ef-a947-8cd0c741ac03',
      postUserId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      text: 'უნივერსიტეტის ინფრასტრუქტურა ადაპტირებულია შეზღუდული შესაძლებლობების მქონე პირთა საჭიროებებთან.',
      date: 1625775340644,
    },
    {
      id: '483437c7-ff5b-4157-8333-dde21c95dc3d',
      userId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      postId: 'f919109c-e555-40ef-a947-8cd0c741ac03',
      postUserId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      text: 'უნივერსიტეტის ინფრასტრუქტურა ადაპტირებულია შეზღუდული შესაძლებლობების მქონე პირთა საჭიროებებთან. ',
      date: 1625775352292,
    },
    {
      id: '9119164f-73d9-4f52-9c6e-b29d18c0ad76',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      postId: 'f919109c-e555-40ef-a947-8cd0c741ac03',
      postUserId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      text: 'უნივერსიტეტის ინფრასტრუქტურა მზად არის მიიღოს 5000 სტუდენტი',
      date: 1625775427059,
    },
    {
      id: '022eca04-0311-44f0-ace8-d3578c249c92',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      postId: '2002c277-b7b9-4897-8805-3ecd9ae3192b',
      postUserId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      text: 'უნივერსიტეტის ინფრასტრუქტურა მზად არის მიიღოს 5000 სტუდენტი',
      date: 1625775431324,
    },
    {
      id: 'cc939658-fe15-4f36-acb4-0b821498f3d5',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      postId: '47697fbe-e5b2-4609-80dd-357c6eb1dfa8',
      postUserId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      text: 'ბიზნესისა და ტექნოლოგიების უნივერსიტეტი განლაგებულია სილიკონ ველი თბილისის ტერიტორიაზე, თბილისის ცენტრში, ეკოლოგიურად სუფთა ადგილას.',
      date: 1625775493276,
    },
    {
      id: '11bcf1d7-fb53-47d6-820b-67fe2361f143',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      postId: '43c4477c-a871-4eb7-b131-742b210574f6',
      postUserId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      text: "Rick Astley's official music video for “Never Gonna Give You Up” ",
      date: 1625775603860,
    },
    {
      id: 'e9c5a541-f5fd-47dd-882c-7f8073f6cde7',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      postId: 'c29f759d-9c80-4fb8-8638-05f517d361de',
      postUserId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      text: 'BTU • ბიზნესისა და ტექნოლოგიების უნივერსიტეტი',
      date: 1625775964080,
    },
    {
      id: 'f37dedb5-b69a-4522-a075-5b6c91bf0585',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      postId: 'c29f759d-9c80-4fb8-8638-05f517d361de',
      postUserId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      text: 'უნივერსიტეტის ტერიტორიაზე მდებარეობს ინოვაციური სტუდენტური სამუშაო სივრცე',
      date: 1625776067123,
    },
  ];
  const likes = [
    {
      id: 'ef3cca4d-107a-4400-9b0e-173d7ea2b021',
      isUp: true,
      postId: '2002c277-b7b9-4897-8805-3ecd9ae3192b',
      postUserId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      userId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
    },
    {
      id: '41a4d60f-eb26-4d60-b4cd-77c4ba91f183',
      isUp: true,
      postId: '3a1050ed-9b3e-40b9-8c4b-7aba34906079',
      postUserId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      userId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
    },
    {
      id: 'a069fe12-0cbf-48e9-aedf-1a0c87069433',
      isUp: true,
      postId: 'f919109c-e555-40ef-a947-8cd0c741ac03',
      postUserId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      userId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
    },
    {
      id: '9b66579b-e3df-4ab3-ada4-a8da2b9156eb',
      isUp: true,
      postId: 'f919109c-e555-40ef-a947-8cd0c741ac03',
      postUserId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
    },
    {
      id: '0e2507f4-a685-49d9-b420-9f7a088299df',
      isUp: true,
      postId: '3a1050ed-9b3e-40b9-8c4b-7aba34906079',
      postUserId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
    },
    {
      id: '7375a5c5-1be3-41c7-8f17-802d78825fdc',
      isUp: true,
      postId: '2002c277-b7b9-4897-8805-3ecd9ae3192b',
      postUserId: 'a1eccabb-50e3-417c-a257-5c2d56c01d1f',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
    },
    {
      id: '73907787-3996-4f71-be4f-5dea58ebcfb5',
      isUp: true,
      postId: '47697fbe-e5b2-4609-80dd-357c6eb1dfa8',
      postUserId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
    },
    {
      id: 'df7fcfe2-56d9-4b39-952c-64a16da77b25',
      isUp: true,
      postId: '43c4477c-a871-4eb7-b131-742b210574f6',
      postUserId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
    },
    {
      id: '124fde8a-1da1-4d58-8d13-c64a3b6403e6',
      isUp: true,
      postId: '212fbb5d-630c-48ed-a743-f26140c3960b',
      postUserId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
    },
    {
      id: 'd7b123b9-e17f-4902-9750-162c6cf0a324',
      isUp: true,
      postId: 'c29f759d-9c80-4fb8-8638-05f517d361de',
      postUserId: '47c724ec-b451-4abd-bdda-ed9911997b51',
      userId: '47c724ec-b451-4abd-bdda-ed9911997b51',
    },
  ];

  localStorage.setItem('currentUserId', currentUserId);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('posts', JSON.stringify(posts));
  localStorage.setItem('comments', JSON.stringify(comments));
  localStorage.setItem('likes', JSON.stringify(likes));
};
