export const setLoacalStorage=(string,payload)=>{
    localStorage.setItem(string,JSON.stringify(payload))
}