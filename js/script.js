const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
    try {
        const response = awaite fetch(endpoint)
        if (!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json);
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote');
    }
}