import uuid from 'uuid';
import database from '../firebase/firebase';

export const addJob = (job) => ({
    type: 'ADD_JOB',
    job  
});

export const startAddJob = (jobData = {}) => {
    return (dispatch) => {
        const {
            company ='',
            jobTitle = '',
            note = '',
            amount = 0,
            createdAt = 0 
        } = jobData;
        const job = { company, jobTitle, note, amount, createdAt };
        
        database.ref('jobs').push(job).then((ref) => {
            dispatch(addJob({
                id: ref.key,
                ...job
            }));
        });
    };
};
//Remove Expense

export const removeJob = ({ id } = {}) => ({
    type: 'REMOVE_JOB',
    id
});

//Edit expense

export const editJob = (id, updates) => ({
    type: 'EDIT_JOB',
    id,
    updates
});

// Set Expenses
export const setJobs = (jobs) => ({
    type: 'SET_JOBS',
    jobs
});

//set Start Jobs 

export const startSetJobs = () => {
    return(dispatch) => {
        return database.ref('jobs')
        .once('value')
        .then((snapshot) => {
            const jobs =[];
            
            snapshot.forEach((childSnapshot) => {
                jobs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setJobs(jobs));
        });
    };
    
};