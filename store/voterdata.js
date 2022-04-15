export const state =() =>({

    vId:"",
    name:"",
    address:"",
    email:""
})

export const mutations ={
    storeId:(state,data) =>{
        state.vId=data
        console.log(data);
    },
    storeName:(state,data) =>{
        state.name=data
        console.log(data);
    },
    storeAddress:(state,data) =>{
        state.address=data
        console.log(data);
    },
    storeEmail:(state,data) =>{
        state.email=data
        console.log(data);
    },
    
}