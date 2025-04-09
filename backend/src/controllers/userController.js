const userService = require("../services/userService")

const fetchUserData = async (req, res) => {
    try {
        const {user_id} = req.user
        const userData = await userService.getUserById(user_id)
        return res.status(200).json({ status: "success", user: userData});
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {fetchUserData}