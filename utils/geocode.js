export const geocodeAddress = async (address) => {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,{
            headers: {
                "User-Agent": "PropertyPulse/1.0(sheshunalla002@gmail.com)",
            },
        }
    );
    if(!response.ok){
        throw new Error("Failed to fetch coordinates");
    }

    const data = await response.json();

    if(data.length === 0){
        throw new Error("Address not Found");
    }

    return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
    };
}