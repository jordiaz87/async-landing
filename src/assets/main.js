const API = 'https://youtube138.p.rapidapi.com/auto-complete/?q=ESPNFans&hl=en&gl=US'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19d47816e7msh4d394e6aae81aebp11d7a1jsn5aba0051f47f',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `

        ${videos.items.map(video => `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
            </div>
        `).slice(0, 4).join('')}
            
        `; 
    } catch {

    }
})();