// Javascript Console

const quotes = [
    {hero: "Steve Rogers, Captain America", quote: "Avengers, assemble!"},
    {hero: "Tony Stark, Iron man", quote: "I am Iron Man."},
    {hero: "Thanos", quote: "I am Inevitable."},
    {hero: "Yondu", quote: "He may have been your father, boy, but he wasn't your daddy."},
    {hero: "Morgan Stark", quote: "I love you 3000."},
    {hero: "Vision", quote: "But a thing isn't beautiful because it lasts. It's a privilege to be among them."},
    {hero: "Groot", quote: "We are groot."},
    {hero: "Wanda Maximoff, Scarlet Witch", quote: "You break the rules, you become a hero. I do it, I become the enemy."},
    {hero: "Bruce Banner, Hulk", quote: "That's my secret, Captain I'm always angry."},
    {hero: "Peter Quill, Star-Lord", quote: "You think life takes more than it gives, but not today. Today it's giving us something. It is giving us a chance."},
    {hero: "Carol Danvers, Captain Marvel", quote: "I have nothing to prove to you."},
    {hero: "Fury", quote: "Genius. Billionaire. Playboy. Philanthropist."},
    {hero: "Scott Lang, Ant-Man", quote: "I think you look great, Cap. As far as I'm concerned, that's America's ass."},
    {hero: "Oliver Queen, Green Arrow", quote: "You've failed this city."},
    {hero: "Uncle Ben", quote: "With Great Power Comes Great Responsibility."},
    {hero: "Bruce Wayne, Batman", quote: "I'm Batman."},
    {hero: "Henry Allen", quote: "Run Barry, Run!"},
    {hero: "Cisco Ramon, Vibe", quote: "How can you speak six languages and sound like a d*ck in every one of them?"},
    {hero: "Barry Allen, The Flash", quote: "Being The Flash, that's the best version of me. If I don't have my speed, I'll never be that person anymore."}
];

function quote(HeroName) {
    let found = 0;
    for (i = 0; i < quotes.length; ++i) {
        if(quotes[i].hero.indexOf(HeroName) !== -1) {
            console.log(quotes[i].quote)
            found++;
        }
    }
    if(found == 0) {
        console.log("Hero not found!")
    }

    return 0;
}

const x = prompt();

quote(x);

