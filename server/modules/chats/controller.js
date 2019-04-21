import Chat from './model';

export const createChat = async (req, res) => {
    const { title, description } = req.body;
    const newChat = new Chat({
        title,
        description,
    });

    try {
        return res.status(201).json({ chat: await newChat.save() });
    } catch (e) {
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