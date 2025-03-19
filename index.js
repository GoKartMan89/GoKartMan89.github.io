function getJSONData(){
	fetch('./data/stuff.json')
                .then(response => { // Parse JSON Data
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();  
                })
                .then(data => console.log(data[0].id)) // Work with JSON Data
                .catch(error => console.error('Failed to fetch data:', error)); 
}