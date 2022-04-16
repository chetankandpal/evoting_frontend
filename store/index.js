export const state =() =>({

    isadmin:true,
})

export const mutations ={
    storeisadmin:(state,data) =>{
        state.isadmin=data
        console.log(data);
    }

}