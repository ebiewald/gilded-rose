# Gilded Rose Exercise

## How to setup and run this application.
- Install Node.js® and npm if they are not already on your machine.
- Install the Angular CLI globally. ```npm install -g @angular/cli```
- Clone or download this repo and navigate into it. Ex: ```cd gilded-rose-master```
- Run ```ng serve --open``` which should open up http://localhost:4200/ for you. The app will automatically reload if you change any of the source files.

## At a high level, how does your system work?
There is an array of products in the mock-products.ts file that is fetched by the product service (product.service.ts). Any component can use this service to access the products.

There is an app component (app.component.ts) that acts as the place where we will load any other components we need to create our app page, there is no actual app logic in this file. The logic is split up into separate components. For the current requirements I only created one product component (product.component.ts), although if there were more patterns in a larger list of products it might make sense to split them up more.

The product component uses the product service to get a list of products. The product template (product.component.html) loops through these products and displays them and their properties. The product component has a public method that is called on click of a button in the template, which utilizes a few private methods to properly update each product's values. This function currently carries a lot of the weight of checking for specific product types, which isn't ideal for the long term.

## How would we extend your system if we had to add additional (100+) inventory items,?
- Create an API for the products rather than keeping them in the mock-products file and update the service to pull from that endpoint instead.
- If mass changes needed to happen to the data before display (like the randomization) that
would be handled better, maybe using an observable? Or maybe even reconsider the base architecture of a "product" if the 100+ have many specific patterns.
- Replace the decreaseQuality and increaseQuality functions with something that works for all products, remove that unfortunate switch statement.

This could maybe be done with something that accepts an array of `day: interval` combos, where the interval can be positive or negative. Set that array as a property of the Product object, then pass it to an overall changeQuality() function that updates the quality appropriately for each different case. I ran out of time to implement something like this. It would also depend on what other patterns needed to be met for the other 100+ products of course.

## What documentation, websites, papers, etc. did you consult for this assignment?
https://angular.io/guide/quickstart
https://docs.angularjs.org/api/
https://www.typescriptlang.org/docs/handbook/classes.html
https://stackoverflow.com
http://eng.localytics.com/tips-and-tricks-for-debugging-unfamiliar-angularjs-code/
https://www.youtube.com/watch?v=-zW1zHqsdyc

## What third­party libraries or other tools does your application use? How did you choose each library or framework you used?
I chose to use Angular 2 / Typescript. Having not used it before this was a good opportunity both to test my abilities to use it and see how I like working with it.

## How long did you spend on this exercise? If you had unlimited time to spend on this, how would you spend it and how would you prioritize each item?
I spent closer to the 4 hour side of the 2-4 estimate. I spent most of my time getting used to Angular and Typescript, the actual writing of the functions was quick.

If I had unlimited time first and foremost I would absolutely get rid of the switch statement in ageOneDay() and replace with something that can work for all product types. Next I would continue to research best practices in Angular/Typescript and make sure my architecture aligns with them. Then I would move the randomization to a more appropriate place once I understood Angular and services/observables better.

## If you were going to implement a level of automated testing to prepare this for a production environment, how would you go about doing so?
I would write some tests in app.component.spec.ts which is luckily already set up to work. I would test each method in my product component and I would test my productService.

## If you were to critique your code what would you say about it?
I really don't like the switch statement solution to the different edge cases, I would have liked to implement something that worked for all object types but I ran out of time. It's not sustainable to have the product names hard coded in there.

Putting the randomization right into the mock data definitely isn't ideal if it is something that needs to be used for 100+ items. I originally had it in the ngInit, but once I switched to a service the 'Products' were no longer defined there. I did some research and it seemed like data manipulation should happen using observables, but I ran out of time to implement. I think that probably in a 100+ product "real" situation they would all have real quality and sell in numbers and so I sort of operated under that assumption while building this, not worrying so much about extending what is a temporary randomizer.

Also, Being new to Angular I'm just in general not confident that I architected it the best way. I'll be interested to discuss that and ask some questions, such as: 
- Should 'Product' be an interface instead of a class?
- I don't know a lot about observables yet, but that seemed like it could have been a good way to handle the data randomization? Where would you have put the randomization?
- How would you have architected differently?

## Questions for theoretical product manager:
- What unit is Quality in? Is there a maximum value?
- What would you like to happen for products that don't have a sell in date or quality?
- Should we be keeping track of and displaying the number of days passed the sell in date we've gone?
- Should Backstage Pass' and Aged Brie's qualities cut off at 50 as well?

These are all things I would fix once I had responses.
