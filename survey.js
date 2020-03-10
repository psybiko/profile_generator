const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// EXAMPLE DESCRIPTION:
// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.


rl.question('What\'s your name? Nicknames also accepted :) ', (name) => {
  console.log(`Hey, ${name}!`);

  rl.question('What\'s an activity you like doing? ', (activity) => {
    console.log(`Activity: ${activity}`);

    rl.question('What\'s your favorite meal? (eg: dinner, brunch, etc) ', (meal) => {
      console.log(`Favorite meal: ${meal}`);

      rl.question('Which sport is your absolute favorite? ', (sport) => {
        console.log(`Fav sport: ${sport}`);

        rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
          console.log(`Superpower: ${superpower}`);

          
          console.log(`${name} likes doing ${activity}, eating ${meal} and prefers ${sport} over any other sport. ${name}'s superpower is ${superpower}.`)
          
          rl.close();
        });
      });
    });
  });
});
    