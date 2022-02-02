import axios from "axios"

export const addMovie=(formData)=>{
    
    return (dispatch)=>{
        axios.get(`http://www.omdbapi.com/?t=${formData.name}&apikey=86de53d6`)
        .then((response)=>{
            const result = response.data
            formData.url = result.Poster
            const data={...formData}
            dispatch(setMovie(data))
        })
        .catch((err)=>{
            alert(err.message)
            const data={...formData}
            dispatch(setMovie(data))
        })
    }
}

export const removeMovie=(movie)=>{
    return {
        type:'REMOVE_MOVIE',
        payload:movie
    }
}

export const setMovie=data=>{
    return{
        type:'ADD_MOVIE',
        payload:data
    }
}