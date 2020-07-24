const apiKey = 'XlM2-8OZGdvXB1xYT-e35O4mculOqZFIQfEa1RaqLSnBSbIFFELPl0f28rt-1-1aQZhBjwuKoO7Kwp82Oc9MfWBF2AqduV1B3c3i46YClNjr1Lktfd8j-YHAiTwaX3Yx';

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.zip_code,
                    category: business.categories[0].title, 
                    rating: business.rating,
                    reviewCount: business.review_count
                    }

                })
            }
        })
    }  
};

export default Yelp;