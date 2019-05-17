import uuid from 'uuid';
import database from '../firebase/firebase';

export const addJob = (job) => ({
    type: 'ADD_JOB',
    job  
});

export const startAddJob = (jobData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            company ='',
            jobTitle = '',
            note = '',
            amount = 0,
            createdAt = 0 
        } = jobData;
        const job = { company, jobTitle, note, amount, createdAt };
        
        database.ref(`users/${uid}/jobs`).push(job).then((ref) => {
            dispatch(addJob({
                id: ref.key,
                ...job
            }));
        });
    };
};
//Remove Expense

//locally
export const removeJob = ({ id } = {}) => ({
    type: 'REMOVE_JOB',
    id
});

//firebase
export const startRemoveJob = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/jobs/${id}`).remove().then (() => {
            dispatch(removeJob({ id }));
        });
        
    };
};

//Edit expense

export const editJob = (id, updates) => ({
    type: 'EDIT_JOB',
    id,
    updates
});


export const startEditJob = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/jobs/${id}`).update(updates).then(() => {
            dispatch(editJob(id, updates));
        });
    };
};
// Set Expenses
export const setJobs = (jobs) => ({
    type: 'SET_JOBS',
    jobs
});

//set Start Jobs 

export const startSetJobs = () => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/jobs`)
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

