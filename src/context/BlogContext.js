import createContextData from "./createContextData";
const reducer = (state, action) =>{
    switch (action.type) {
        case 'add_blog':
            return [...state, 
            {
                id: Math.floor(Math.random()*99999),
                title: action.payload.title,
                content: action.payload.content
            }]
        case 'edit_blog': 
            return state.map((item)=> item.id === action.payload.id ? action.payload : item)
        case 'delete_blog':
            return state.filter((item)=> item.id !== action.payload)
        default:
            return state;
    }
}
const addBlog = (dispatch) => {
    return (title,content,callback) => {
        dispatch({type:'add_blog', payload:{title, content}})
        if(callback){
            callback()
        }
    }
}
const deleteBlog = (dispatch) => {
    return (id) => {
        dispatch({type:'delete_blog', payload: id})
    }
}
const editBlog = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type:'edit_blog', payload:{id, title, content}})
        if(callback) callback()
    }
}

export const { Context, Provider} = createContextData(
    reducer,
    {
        addBlog,
        deleteBlog,
        editBlog
    },
    [{id: 1, title: 'DATA DEMO', content: 'Hello Word'}]
); 