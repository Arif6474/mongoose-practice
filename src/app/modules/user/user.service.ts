import User from "./user.model";

// database query
export const createUserToDB = async () => {

    const user = await new User({
        id: 'abc4',
        role: 'student',
        password: '12345',
        name: {
            firstName: 'Jobair',
            lastName: 'Islam',
        },
        dateOfBirth: '01/05/1996',
        gender: 'male',
        email: 'shahidul64743@gmail.com',
        contact: '01820082894',
        emergencyContact: '01828002493',
        presentAddress: 'hathazari',


    });
    await user.save();
    return user;

}
