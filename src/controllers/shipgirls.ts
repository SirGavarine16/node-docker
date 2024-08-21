import { Request, Response } from "express";
import { Database } from "../database";
import { Shipgirl } from "../database/models";

export const getShipgirls = async (req: Request, res: Response) => {
  try {
    await Database.connect();

    const shipgirls = await Shipgirl.find();

    await Database.disconnect();

    return res.status(200).json({
      message: "All Shipgirls were fetched successfully!",
      shipgirls,
    });
  } catch (error) {
    console.log('getShipgirls', error);
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
};
