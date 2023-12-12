const quotes =[
   {
    'author' :'― Oscar Wilde',
    'quote' : '“Be yourself; everyone else is already taken.”'
   },
   {
    'author' :'― Marilyn Monroe',
    'quote' : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
   },
   {
    'author' :'― Mahatma Gandhi',
    'quote' : '“Be the change that you wish to see in the world.”'
   },
   {
    'author' :'― Robert Frost',
    'quote' : " “In three words I can sum up everything I've learned about life: it goes on.” "
   },
   {
    'author' :'― Elbert Hubbard',
    'quote' : '“A friend is someone who knows all about you and still loves you.”'
   },
   {
    'author' :'― Ralph Waldo Emerson',
    'quote' : '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”'
   },
   {
    'author' :'― Steve Jobs',
    'quote' : "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”"
   },
   {
    'author' :'― George Eliot',
    'quote' : '“It is never too late to be what you might have been.”'
   },
   {
    'author' :'__ Mahmoud Darwish',
    'quote' : '“I travel within myself, besieged by contradictions.”'
   },
   {
    'author' :'― C.S. Lewis',
    'quote' : '“You can never get a cup of tea large enough or a book long enough to suit me.”'
   },
   {
    'author' :'__ Mahmoud Darwish',
    'quote' : '“The universe is smaller than a butterflys wing in the courtyard of the heart.”'
   },
   {
    'author' :'― Victor hugo',
    'quote' : '“Music expresses that which cannot be put into words and that which cannot remain silent”'
   },
   {
    'author' :'― Harper Lee, To Kill a Mockingbird',
    'quote' : 'Until I feared I would lose it, I never loved to read. One does not love breathing.'
   },
   {
    'author' :'― Albert Camus',
    'quote' : 'You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.'
   },
   {
    'author' :'― Audrey Hepburn',
    'quote' : "“Nothing is impossible, the word itself says 'I'm possible'!”"
   },
   {
    'author' :'― Paulo Coelho, The Alchemist',
    'quote' : '“There is only one thing that makes a dream impossible to achieve: the fear of failure.”'
   },
   {
    'author' :'― Albert Einstein',
    'quote' : '“I speak to everyone in the same way, whether he is the garbage man or the president of the university.”'
   },
   {
    'author' :'― John Green, Looking for Alaska',
    'quote' : 'So I walked back to my room and collapsed on the bottom bunk, thinking that if people were rain, I was drizzle and she was a hurricane.'
   },
   {
    'author' :'― Paulo Coelho, The Alchemist',
    'quote' : '“When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.”'
   },
   {
    'author' :'― Stephen King',
    'quote' : "“If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.”"
   },
   {
    'author' :'― Albert Einstein',
    'quote' : '“Never memorize something that you can look up.”'
   },
]

function generateQuote(){
    const random = Number.parseInt(Math.random()*quotes.length + 1);
    document.querySelector('#quote').textContent = `\"${quotes[random].quote}\"`;
    document.querySelector('#author').textContent = `${quotes[random].author}`;
    
}
