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
            jobSubTitle = '',
            jobGrade = '',
            jobParts = '',
            note = '', 
        } = jobData;
        const job = { company, jobTitle, jobSubTitle, jobGrade,  jobParts, note};
        
        database.ref(`users/${uid}/jobs`).push(job).then((ref) => {
            dispatch(addJob({
                id: ref.key,
                ...job
            }));
        });
    };
};
//AllocateJob 
export const allocateJob = (job) => ({
    type: 'ALLOCATE_JOB',
    job  
});

export const startAllocateJob = (jobData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            company ='',
            jobTitle = '',
            jobSubTitle = '',
            jobGrade = '',
            jobParts = '',
            note = '',
            allocate = '',
            status = ''
        } = jobData;
        const job = { company, jobTitle, jobSubTitle, jobGrade,  jobParts, note, allocate, status};
        
        database.ref(`allocateJobs`).push(job).then((ref) => {
            dispatch(allocateJob({
                id: ref.key,
                ...job
            }));
        });
    };
};

//Update allocated job
export const updateAllocated = (id, updates) => ({
    type: 'UPDATE_JOB',
    id,
    updates
});


export const startUpdateAllocated = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`allocateJobs/${id}`).update(updates).then(() => {
            dispatch(updateAllocated(id, updates));
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
        return database.ref(`allocateJobs/${id}`).remove().then (() => {
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

// Grab all Jobs
export const getJobs = (jobs) => ({
    type: 'GET_JOBS',
    jobs
});

export const startGetJobs = () => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/jobs`)
        .once('value')
        .then((snapshot) => {
            const jobs =[];
            
            //Parse the data using snapshot
            snapshot.forEach((childSnapshot) => {
                jobs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(getJobs(jobs));
        });
    };
    
};

export const getAllocatedJobs = (ajobs) => ({
    type: 'GET_ALLOCATED_JOBS',
    ajobs
});

export const startGetAllocatedJobs = () => {
    return (dispatch, getState) => {
        return database.ref(`allocateJobs`)
        .once('value')
        .then((snapshot) => {
            const ajobs = [];
            console.log(ajobs);
            
            //Parse the data for allocatedJobs
            snapshot.forEach((childSnapshot) => {
                ajobs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            console.log(ajobs);
            dispatch(getAllocatedJobs(ajobs));
        });
    };
};

