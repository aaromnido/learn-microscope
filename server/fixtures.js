if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope by Fer',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor Rocks!!',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Bible',
    url: 'http://themeteorbook.com'
  });
}