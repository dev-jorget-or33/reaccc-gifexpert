export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=y7WF4QlMGWIBlgy8yC5ruSkdmf1McK1G&q=${ category }&limit=10`
    const resp = await fetch(url)
    const { data = [] } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return [...gifs];
}
