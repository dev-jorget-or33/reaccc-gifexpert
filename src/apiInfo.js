const apiKey = 'y7WF4QlMGWIBlgy8yC5ruSkdmf1McK1G';
const url = "api.giphy.com/v1/gifs/random"
// const httpCalls = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
const httpCalls = fetch(`https://api.giphy.com/v1/gifs/search`);


export { apiKey, url, httpCalls }