import axios from 'axios';

const Url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


  

export const getPlacesData = async (sw, e) => {
    try{
        const {data: {data}} = await axios.get(Url, {
          params:{
            bl_latitude: sw?.lat,
            tr_latitude: e?.lat,
            bl_longitude: sw?.lng,
            tr_longitude: e?.lng,

          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '5b60b64c19msh5bcdc341e02b249p10d052jsn660a2cb589d8'
          }

        });

        return data;
    } catch(err){
        console.log(err)
    }
}
            