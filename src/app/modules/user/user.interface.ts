export interface IUser {
    id: string;
    role: 'student';
    password: string;
    name: {
        firstName: string;
        lastName: string;
    };
    dateOfBirth: string;
    gender: 'male' | 'female';
    email: string;
    contact: number;
    emergencyContact?: number;
    presentAddress: string;
    permanentAddress?: string;


}