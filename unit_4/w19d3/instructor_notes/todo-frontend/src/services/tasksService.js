import apiUtil from '../utils/api';

const getDomain = () => process.env.REACT_APP_TASKS_ENDPOINT || 'https://localhost:3000'
const buildUrl = apiPath => {
    return getDomain() + apiPath;
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