var postsData = [
  {
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    number: 1
  },
  {
    title: 'Meteor Rocks!!',
    url: 'http://meteor.com',
    number: 2
  },
  {
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    number: 3
  }
];
Template.postsList.helpers({
  posts: postsData
});