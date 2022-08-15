import dbConnect from '../../utils/dbConnect';

dbConnect();

export default async(req, res, next) => {
    res.json("DB connected and schema created!");
}