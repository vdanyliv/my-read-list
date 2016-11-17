export default function() {
  return [
    {
      id: 1,
      link: '/',
      name: 'Home',
      userGroup: ['member', 'guest']
    },
    {
      id: 2,
      link: '/mybooks',
      name: 'My books',
      userGroup: ['member']
    },
    {
      id: 3,
      link: '/signin',
      name: 'Signin',
      userGroup: ['guest']
    },
    {
      id: 4,
      link: '/version',
      name: 'Version',
      userGroup: ['member', 'guest']
    }
  ];
}
