import Chat from './model';

export const createChat = async (req, res) => {
    console.log("TEST");
    const { message, sentBy, sentTo, time } = req.body;
    const newChat = new Chat({
        message,
        sentBy,
        sentTo,
        time,
    });

    try {
        return res.status(201).json({ chat: await newChat.save() });
    } catch (e) {
        console.log(e);
        return res.status(e.status).json({ error: true, message: "Error with Chat" });
    }
}

export const getAllChats = async (req, res) => {
    try {
        return res.status(201).json({ chats: await Chat.find({}) })
    } catch (e) {
        return res.status(e.status).json({ error: true, message: "Error with Chat" });
    }
}