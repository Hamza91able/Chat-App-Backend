import NewUser from './model';

export const createNewUser = async (req, res) => {
    console.log("TEST");

    const { uid, phoneNo } = req.body;
    const newUser = new NewUser({
        uid,
        phoneNo
    });

    try {
        return res.status(201).json({ newUser: await newUser.save() });
    } catch (e) {
        console.log(e);
        return res.status(e.status).json({ error: true, message: "Error with create new user" });
    }
}