export default (jobs) => {
        return jobs
            .map((job) => job.amount)
            .reduce((sum, value) => sum + value, 0);
    
};