export default function ({ store, redirect }) {
    
    console.log(store.state.isadmin)
    if (!store.state.isadmin) {
      return redirect('/Blockerpage')
    }
  }