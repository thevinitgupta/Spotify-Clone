 export const initialState = {
     user : null,
     playlists :[],
     playing : false,
     currentSongUrl : null,
     item : null,
     //Change to null after production
     token : null
     //"BQB3h3vE45e3isMTLZA2jq440MZRXKJBPRO2AKhhATqsiRNr314L3M3_TvLKEr23LVd_alL8KDKLHd0lAI3Six8GnaATEWTsLV7OYZbbWjwAlKyKDu-zDPpb876iDWdaaFb171OelsI1eS223uW9YaoMcjkypUPE7v85EAo"
 }

 const reducer = (state,action) => {
     console.log(action);

     switch(action.type) {
         case "SET_USER" : 
         return {
             ...state,
             user : action.user
         }
         case "SET_TOKEN": 
         return {
             ...state,
             token : action.token 
         }
         case "SET_PLAYLISTS" : 
         return {
             ...state,
             playlists : action.playlists
         } 
         case "SET_DISCOVER_WEEKLY" :
             return {
                 ...state,
                 discover_weekly : action.discover_weekly
             }
        case "SET_SONG" :
            return {
                ...state,
                currentSongUrl : action.currentSongUrl
            }
        case "SET_ITEM" : 
        return {
            ...state,
            item : action.item
        }
         default : 
            return state;
     }
 }

 export default reducer;