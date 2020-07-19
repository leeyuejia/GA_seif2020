import apiUtil from '../utils/api';

export default {
    async getAll () {
        try {
            const response = await apiUtil.get('http://localhost:3000/tasks');
            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    async create (task) {
        const response = await apiUtil.post('http://localhost:3000/tasks', task);
        return response.data;
    },
    async delete (id) {
        const response = await apiUtil.delete(`http://localhost:3000/tasks/${id}`);
        return response.data;
    },
    async updateCompletionStatus (id, isCompleted) {
        const response = await apiUtil.update(`http://localhost:3000/tasks/${id}`, {
            isCompleted,
        });
        return response.data;
    }
};