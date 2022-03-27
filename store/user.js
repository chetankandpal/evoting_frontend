export const state =() =>({

    election_name:"",
    stime:"",
    etime:"",
    voters_count:0
})

export const mutations ={
    storeElection_Name:(state,data) =>{
        state.election_name=data
        console.log(data);
    },
    storeStart_Time:(state,data) =>{
        state.stime=data
        console.log(data);
    },
    storeEnd_Time:(state,data) =>{
        state.etime=data
        console.log(data);
    },
    storeVoters_Count:(state,data) =>{
        state.voters_count=data
        console.log(data);
    },
    
}