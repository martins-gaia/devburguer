import * as Yup from "yup";
import User from "../models/User";

class SessionController {
  async store(request, response) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const isValid = await schema.isValid(request.body);

    if (!isValid) {
      return response.status(401).json({ error: "e-mail ou senha incorreto!" });
    }
    const { email, password } = request.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return response.status(401).json({ error: "e-mail ou senha incorreto!" });
    }

    const isSamePassword = await user.comparePassword(password);

    console.log(isSamePassword);

    return response.json({ message: "session" });
  }
}

export default new SessionController();
