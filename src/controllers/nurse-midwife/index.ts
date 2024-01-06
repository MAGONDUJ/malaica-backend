import { Response, Request } from "express";
import { INurseMidwife } from "../../interfaces/nurse-midwife";
import NurseMidwife from "../../models/nurse-midwife";

const addNurseMidwife = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      INurseMidwife,
      "first_name" | "last_name" | "phone" | "email" | "experience"
    >;
    console.log(`\nCreating a new nurse midwife: `);
    console.log(body);

    const nurseMidwife: INurseMidwife = new NurseMidwife({
      first_name: body.first_name,
      last_name: body.last_name,
      phone: body.phone,
      email: body.email,
      experience: body.experience,
    });

    const newNurseMidwife: INurseMidwife = await nurseMidwife.save();
    res.status(200).json({ message: "Nurse midwife added", newNurseMidwife });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "An error occured adding a nurse midwife" });
  }
};

const getNurseMidwives = async (req: Request, res: Response): Promise<void> => {
  try {
    const nurseMidwife: INurseMidwife[] = await NurseMidwife.find();
    res.status(200).json({ nurseMidwife });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "An error occured fetching nurse midwives" });
  }
};

export { addNurseMidwife, getNurseMidwives };
