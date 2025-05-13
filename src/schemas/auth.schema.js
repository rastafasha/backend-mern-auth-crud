import {z} from 'zod';

export const registerSchema = z.object({
    username : z.string(
        {
            required : true,
            required_error: 'Username is required',
        }
    ).min(3, 'Username must be at least 3 characters long'),
    email : z.string({
        required : true,
        required_error: 'Email is required',
        }).email({
            message : 'Invalid email',
        }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, {
        message: 'Password must be at least 6 characters long',
    }),
        
    
})
export const loginSchema = z.object({
   
    email : z.string({
        required : true,
        required_error: 'Email is required',
        }).email({
            message : 'Invalid email',
        }),
    password: z.string({
        required_error: 'Password is required',
    }).min(6, {
        message: 'Password must be at least 6 characters long',
    }),
        
    
})