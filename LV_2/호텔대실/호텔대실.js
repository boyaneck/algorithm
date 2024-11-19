function solution(book_time) {
    const arr=book_time.map((booked)=>{
    const [starting_time,end_time]=booked
    const [s_hour,s_minute]=starting_time.split(":")
    const [e_hour,e_minute]=end_time.split(":")
    
    const into_minute=Number(e_hour)*60+Number(e_minute)
    return [starting_time,into_minute]
    
    }).sort((a,b)=>a[1]-b[1])
    
    const occupied_room
    
        
    
    
    
    console.log("sss",arr)
    return 0;
}