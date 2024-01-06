import { Response, Request } from "express";
import { IClient } from "../../interfaces/client";
import Client from "../../models/client";

const addClient = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IClient,
      | "first_name"
      | "last_name"
      | "phone"
      | "email"
      | "country"
      | "city"
      | "state"
      | "physical_address"
      | "pregnancy_stage"
      | "due_date"
    >;
    console.log(`\nCreating a new client: `);
    console.log(body);

    const client: IClient = new Client({
      first_name: body.first_name,
      last_name: body.last_name,
      phone: body.phone,
      email: body.email,
      country: body.country,
      city: body.city,
      state: body.state,
      physical_address: body.physical_address,
      pregnancy_stage: body.pregnancy_stage,
      due_date: body.due_date,
    });

    const newClient: IClient = await client.save();
    res.status(200).json({ message: "Client added", newClient });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "An error occured adding a client" });
  }
};

const getClients = async (req: Request, res: Response): Promise<void> => {
  try {
    const clients: IClient[] = await Client.find();
    res.status(200).json({ clients });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "An error occured fetching clients" });
  }
};

export { addClient, getClients };
