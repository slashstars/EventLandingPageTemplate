# EventLandingPageTemplate

This is a (relatively) simple event landing page. A Live Demo is available <a href="http://slashstars.com/eventLandingPageTemplate/Index.html">here</a>. The template is based on Bootstrap and uses AngularJS for databinding. Translations in different languages are integrated via the <a href="https://angular-translate.github.io/">angular-translate</a> module.

The placeholder event data is located in <b>js/EventInformation.js</b>. Specifically the <b>eventInfo</b> JS object has it:<br>
    <b> var eventInfo = { ... }.</b>

You can simply replace the data in <b>eventInfo</b> with your own data or assing a new object to that variable elsewhere in the code. We don't have documentation for the format and support properties of the object. You'll have to reverse engineer it from the placeholder. It shouldn't be too hard. 

You will also need to hookup the singup form to your WebAPI in <b>js/main.js</b>. You have find and replace this part:<br>
    <b> $http({
                url: '---- YOUR WEB API URL GOES HERE ----' 
                ... })</b>
                
And you'll also need to setup the reCAPTCHA for the form:<br>
    <b> $scope.recaptchaPublicKey = '---- YOUR PUBLIC KEY GOES HERE ----'; </b>
            

Finally head over to <b>style</b> and customize the colors, background img etc. 
