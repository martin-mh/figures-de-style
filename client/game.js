function findRandomElement()
{
	var array = FigureOfSpeech.find().fetch();
	var index = Math.floor(Math.random() * array.length);
	return array[index];
}

function newQuestion()
{
	Session.set('currentQuestion', findRandomElement());
}

function getPossibleAnswers()
{
	var rightAnswer = Session.get('currentQuestion');

	var elements = FigureOfSpeech.find({ _id: { $ne: rightAnswer._id }}).fetch();

	var firstWrongAnswerIndex = Math.floor(Math.random() * elements.length);
	var firstWrongAnswer = elements[firstWrongAnswerIndex];
	elements.splice(firstWrongAnswerIndex, 1);

	var secondWrongAnswerIndex = Math.floor(Math.random() * elements.length);
	var secondWrongAnswer = elements[secondWrongAnswerIndex];
	elements.splice(secondWrongAnswerIndex, 1);

	var place = Math.floor(Math.random() * 3);

	var answers = [];

	if(place === 0)
	{
		answers.push(rightAnswer);
		answers.push(firstWrongAnswer);
		answers.push(secondWrongAnswer);
	}
	else if(place === 1)
	{
		answers.push(firstWrongAnswer);
		answers.push(rightAnswer);
		answers.push(secondWrongAnswer);
	}
	else
	{
		answers.push(firstWrongAnswer);
		answers.push(secondWrongAnswer);
		answers.push(rightAnswer);
	}

	Session.set('currentAnswers', answers);
}

function nextQuestion()
{
	newQuestion();
	getPossibleAnswers();
}

Template.Game.helpers(
{
	name: function()
	{
		return Session.get('currentQuestion').name;
	},
	possibleAnswers: function()
	{
		return Session.get('currentAnswers');
	},
	score: function()
	{
		return Session.get('score');
	},
	numberOfAnswers: function()
	{
		return Session.get('numberOfAnswers');
	},
	status: function()
	{
		return Session.get('status');
	},
	statusClass: function()
	{
		return Session.get('statusClass');
	},
});

Template.Game.onRendered(function()
{
	if(typeof Session.get('score') == 'undefined') Session.set('score', 0);
	if(typeof Session.get('numberOfAnswers' == 'undefined')) Session.set('numberOfAnswers', 0);
	if(!Session.get('status')) Session.set('status', '');
	if(!Session.get('statusClass')) Session.set('statusClass', '');

	Session.set('currentQuestion', {});
	nextQuestion();
});

Template.Game.events(
{
	'click .i-dont-know': function()
	{
		Session.set('numberOfAnswers', Session.get('numberOfAnswers') + 1);

		nextQuestion();
	}
});

Template.AnswerItem.events(
{
	'click .answer': function(event)
	{
		Session.set('numberOfAnswers', Session.get('numberOfAnswers') + 1);

		var $node = $(event.currentTarget);
		var $choosenCard = $("#card-" + $node.attr('id'));
		var $choosenTitle = $('.answer-title-' + $node.attr('id'));

		var $rightCard = $('#card-' + Session.get('currentQuestion')._id);
		var $rightTitle = $('.answer-title-' + Session.get('currentQuestion')._id);

		if($node.hasClass(Session.get('currentQuestion')._id))
		{
			Session.set('score', Session.get('score') + 1);
			
			$choosenCard.addClass('green darken-2 white-text');
			$choosenTitle.removeClass('black-text').addClass('white-text');

			Session.set('status', 'Bonne réponse !');
			Session.set('statusClass', 'green-text');
		}
		else
		{
			var score = Session.get('score');
			--score;
			Session.set('score', score >= 0 ? score : 0);

			$choosenCard.addClass('deep-orange darken-3 white-text');
			$choosenTitle.removeClass('black-text').addClass('white-text');

			$rightCard.addClass('green darken-2 white-text');
			$rightTitle.removeClass('black-text').addClass('white-text');

			Session.set('status', 'Mauvaise réponse !');
			Session.set('statusClass', 'red-text');
		}

		Meteor.setTimeout(function()
		{
			Session.set('status', '');

			$choosenCard.removeClass('green darken-2 deep-orange darken-3 white-text').addClass('black-text');
			$choosenTitle.removeClass('white-text').addClass('black-text');

			$rightCard.removeClass('green darken-2 white-text');
			$rightTitle.addClass('black-text').removeClass('white-text');

			nextQuestion();
		}, 2500);
	}
});