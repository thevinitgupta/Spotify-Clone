 export const initialState = {
     user : null,
     playlists :[],
     playing : false,
     item : null,
     //Change to null after production
     token : "BQB3h3vE45e3isMTLZA2jq440MZRXKJBPRO2AKhhATqsiRNr314L3M3_TvLKEr23LVd_alL8KDKLHd0lAI3Six8GnaATEWTsLV7OYZbbWjwAlKyKDu-zDPpb876iDWdaaFb171OelsI1eS223uW9YaoMcjkypUPE7v85EAo"
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
         default : 
            return state;
     }
 }

 export default reducer;