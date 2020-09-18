export const ContactReducer= (state, action) => {

    switch(action.type){
        case 'ADD_CONTACT':
         return[...state, action.newContact]

         case "REMOVE_CONTACT":
           const filtered =   state.filter((contact) => contact.id !== action.id);
           return filtered;

           default:
               return state
    }

    

    
}