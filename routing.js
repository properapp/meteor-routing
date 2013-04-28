if (Meteor.isClient) {

  Meteor.Router.add({
    '/': 'home',
    '/about': 'about',
    '/contact': 'contact'
  });

}