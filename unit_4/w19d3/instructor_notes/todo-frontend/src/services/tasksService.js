import apiUtil from '../utils/api';

const buildUrl = apiPath => {
    return process.env.REACT_APP_BACKEND_API + apiPath;
};

export default {
    async getAll () {
        try {
            const response = await apiUtil.get(buildUrl('/tasks'));
            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    async create (task) {
        const response = await apiUtil.post(buildUrl('/tasks'), task);
        return response.data;
    },
    async delete (id) {
        const response = await apiUtil.delete(buildUrl(`/tasks/${id}`));
        return response.data;
    },
    async updateCompletionStatus (id, isCompleted) {
        const response = await apiUtil.update(buildUrl(`/tasks/${id}`), {
            isCompleted,
        });
        return response.data;
    }
};