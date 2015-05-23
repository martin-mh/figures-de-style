Meteor.publish('questions', function()
{
	return FigureOfSpeech.find();
});