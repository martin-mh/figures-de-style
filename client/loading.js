Template.loading.onRendered(function()
{  
  if(!Session.get('loadingSplash'))
  {  
    this.loading = window.pleaseWait(
    {
      logo: 'http://www.onrembobine.fr/wp-content/uploads/2012/08/Chuck_Norris-Dodgeball1.jpg',
      backgroundColor: '#2980b9',
      loadingHtml: message + spinner
    });

    Session.set('loadingSplash', true); // just show loading splash once
  }
});

Template.loading.onDestroyed(function()
{
  if(this.loading)
  {
    this.loading.finish();
  }
});

var message = '<p class="loading-message">Chargement en cours...</p>';
var spinner = '<div class="sk-spinner sk-spinner-rotating-plane"></div>';