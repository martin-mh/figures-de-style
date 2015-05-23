Router.configure(
{
	layoutTemplate: 'layout',
});

Router.route('/', function()
{
  this.render('Home');
}, 
{
	name: 'Home',
});

Router.route('/game', function()
{
	this.wait(Meteor.subscribe('questions'));

	if(this.ready()) this.render('Game');
	else this.render('loading');
});