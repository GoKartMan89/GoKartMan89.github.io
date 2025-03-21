async function getJSONData(){
    for (let i = 0; i < 2; i++){
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
        
            const json = await response.json();
            console.log(json.songs[i].name);
        } catch (error) {
            console.error(error.message);
        }
    }
	
}