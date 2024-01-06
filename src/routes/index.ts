import { Router } from "express";

import { addClient, getClients } from "../controllers/client";
import {
  addNurseMidwife,
  getNurseMidwives,
} from "../controllers/nurse-midwife";

const router: Router = Router();

//Clients
router.post("/add-client", addClient);
router.get("/clients", getClients);

//Nurse Midwives
router.post("/add-nurse-midwife", addNurseMidwife);
router.get("/nurse-midwives", getNurseMidwives);

export default router;
