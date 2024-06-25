export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Contact Us',
      route: '/contact-us',
    },
    {
      label: 'My Profile',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }
  