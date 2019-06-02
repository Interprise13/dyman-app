import moment from 'moment';


export default (jobs, { text, sortBy, startDate, endDate}) => {
    return jobs.filter((job) => {
        const createdAtMoment = moment(job.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = job.company.toLowerCase().includes(text.toLowerCase())
        
        return textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    });
    
};