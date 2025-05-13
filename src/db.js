import mogoose from 'mongoose';
export const connectDb = async () =>{
    try {
        await mogoose.connect(
            'mongodb+srv://mean_user:elaSqidX5XGon7XI@cluster0.9kln7.mongodb.net/merndb'
            // 'mongodb+srv://mean_user:elaSqidX5XGon7XI@cluster0.9kln7.mongodb.net/mern'
        );
        console.log('>> DB is connected');
    } catch (error) {
        console.log(error);
    }
};