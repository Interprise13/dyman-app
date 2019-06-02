const jobReducerDefaultState = [];

export default (state= jobReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_JOB':
            return [
                ...state,
                action.job
            ];
        case 'ALLOCATE_JOB':
            return [
                ...state,
                action.job
            ];
        case 'REMOVE_JOB':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_JOB':
            return state.map((job) => {
                if(job.id === action.id) {
                    return {
                        ...job,
                        ...action.updates
                    };
                } else {
                    return job;
                }
            });
        case 'UPDATE_JOB':
            return state.map((job) => {
                if(job.id === action.id) {
                    return {
                        ...job,
                        ...action.updates
                    };
                } else {
                    return job;
                }
            });
        case 'GET_JOBS':
            return action.jobs;
        case 'GET_ALLOCATED_JOBS':
            return action.ajobs;
        default:
            return state;
    }
};

