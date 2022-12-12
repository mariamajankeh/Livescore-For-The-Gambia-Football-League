const User = require('../models/user');
const Division = require('../models/division');



const createDivision = async (req, res) => {
const content = req.body;
const user = await User.findById(content.userId);

console.log('the user', user);

try {
const division = await Division.create({ user: content.userId, ...content
})
console.log('checking what is here', division);

user.divisions = user.divisions.concat(division._id)
await user.save();

return res.status(201).json({ data: division });
} catch (error) {
console.log(error);
return res.status(500).end();
}
};

const getAllDivision = async (req, res) => {
    const userId = req.body.userId;
    try {
    const divisions = await Division.find({ user: userId });

    return res.status(201).json({ data: divisions });
    } catch (error) {
    console.log(error);
    return res.status(500).end();
    }
    };

    const getOneDivision = async (req, res) => {
        const id = req.params.id
        const userId = req.body.userId;
        try {
        const division = await Division.findOne({ _id: id, user: userId });

        if (!division) {
        return res.status(400).json({ message: 'division not found' });
        }
        return res.status(201).json({ data: division });
        } catch (error) {
        console.log(error);
        return res.status(500).end();
        }
        };

        const updateOneDivision = async (req, res) => {
            const id = req.params.id
            const userId = req.body.userId;
            const content = req.body

            try {
            const division = await Division.findOneAndUpdate(
            { _id: id, user: userId },
            content,
            { new: true }
            );

            if (!division) {
            return res.status(400).json({ message: 'division not found' });
            }

            return res.status(201).json({ data: Division });
            } catch (error) {
            console.log(error);
            return res.status(500).end();
            }
            };

            const deleteOneDivision = async (req, res) => {
                const id = req.params.id
                const userId = req.body.userId;

                try {
                const division = await Division.findOneAndRemove({ _id: id, user: userId
                });

                if (!division) {
                    return res.status(400).json({ message: 'division not found' });
                    }

                    return res.status(201).json({ message: 'deleted successfully',
                    data: division });
                    } catch (error) {
                    console.log(error);
                    return res.status(500).end();
                    }
                    };
            
        


module.exports = {
createDivision,
getAllDivision,
getOneDivision,
updateOneDivision,
deleteOneDivision
};

 
