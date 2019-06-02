export default (ajobs, { text }) => {
    return ajobs.filter((job) => {
        
        const textMatch = job.allocate.toLowerCase().includes("ryan");
        
        return textMatch;
    });
    
};